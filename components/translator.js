const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
    wrapHighlight(word) {
        return `<span class="highlight">${word}</span>`;
    }

    replacer(translation, regex, alt) {
        return translation.replace(regex, (match) => {
            return this.wrapHighlight(
                /^[A-Z]/.test(match) ? alt[0].toUpperCase() + alt.slice(1) : alt
            );
        });
    }

    replaceTime(timeStr, isToBritish) {
        const TIME_REGEX = isToBritish
            ? /([01]?[0-9]|2[0-3]):[0-5][0-9]/g
            : /([01]?[0-9]|2[0-3]).[0-5][0-9]/g;
        return timeStr.replace(TIME_REGEX, (match) => {
            return isToBritish
                ? this.wrapHighlight(match.replace(":", "."))
                : this.wrapHighlight(match.replace(".", ":"));
        });
    }

    translate(text, locale) {
        let translation = text;
        const isToBritish = locale === "american-to-british";
        translation = this.replaceTime(translation, isToBritish);

        for (const [american, british] of Object.entries({
            ...americanToBritishTitles,
            ...americanToBritishSpelling,
            ...americanOnly,
        })) {
            translation = this.replacer(
                translation,
                new RegExp(isToBritish ? american : british, "gi"),
                isToBritish ? british : american
            );
        }

        if (!isToBritish) {
            for (const [british, american] of Object.entries(britishOnly)) {
                translation = this.replacer(
                    translation,
                    new RegExp(british, "gi"),
                    american
                );
            }
        }

        return translation;
    }
}

module.exports = Translator;

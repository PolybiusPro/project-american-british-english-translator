"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
    const translator = new Translator();

    app.route("/api/translate").post((req, res) => {
        const { text, locale } = req.body;
        if (text === undefined || locale === undefined) {
            return res.json({ error: "Missing required field(s)" });
        }
        if (
            locale !== "american-to-british" &&
            locale !== "british-to-american"
        ) {
            return res.json({ error: "Invalid value for locale field" });
        }
        if (text === "") {
            return res.json({ error: "No text to translate" });
        }

        const translation = translator.translate(text, locale);
        if (text === translation) {
            return res.json({ translation: "Everything looks good to me!" });
        } else {
            return res.json({ translation });
        }
    });
};

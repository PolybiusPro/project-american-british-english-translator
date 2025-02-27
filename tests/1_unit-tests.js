const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");

const translate = new Translator();

suite("Unit Tests", () => {
    suite("American to British Tests", () => {
        test("Translate Mangoes are my favorite fruit. to British English", (done) => {
            assert.strictEqual(
                translate.translate(
                    "Mangoes are my favorite fruit.",
                    "american-to-british"
                ),
                "Mangoes are my favourite fruit."
            );
            done();
        });
        test("Translate I ate yogurt for breakfast. to British English", (done) => {
            assert.strictEqual(
                translate.translate(
                    "I ate yogurt for breakfast.",
                    "american-to-british"
                ),
                "I ate yoghurt for breakfast."
            );
            done();
        });
        test("Translate We had a party at my friend's condo. to British English", (done) => {
            assert.strictEqual(
                translate.translate(
                    "We had a party at my friend's condo.",
                    "american-to-british"
                ),
                "We had a party at my friend's flat."
            );
            done();
        });
        test("Translate Can you toss this in the trashcan for me? to British English", (done) => {
            assert.strictEqual(
                translate.translate(
                    "Can you toss this in the trashcan for me?",
                    "american-to-british"
                ),
                "Can you toss this in the bin for me?"
            );
            done();
        });
        test("Translate The parking lot was full. to British English", (done) => {
            assert.strictEqual(
                translate.translate(
                    "The parking lot was full.",
                    "american-to-british"
                ),
                "The car park was full."
            );
            done();
        });
        test("Translate Like a high tech Rube Goldberg machine. to British English", (done) => {
            assert.strictEqual(
                translate.translate(
                    "Like a high tech Rube Goldberg machine.",
                    "american-to-british"
                ),
                "Like a high tech Heath Robinson device."
            );
            done();
        });
        test("Translate To play hooky means to skip class or work. to British English", (done) => {
            assert.strictEqual(
                translate.translate(
                    "To play hooky means to skip class or work.",
                    "american-to-british"
                ),
                "To bunk off means to skip class or work."
            );
            done();
        });
        test("Translate No Mr. Bond, I expect you to die. to British English", (done) => {
            assert.strictEqual(
                translate.translate(
                    "No Mr. Bond, I expect you to die.",
                    "american-to-british"
                ),
                "No Mr Bond, I expect you to die."
            );
            done();
        });
        test("Translate Dr. Grosh will see you now. to British English", (done) => {
            assert.strictEqual(
                translate.translate(
                    "Dr. Grosh will see you now.",
                    "american-to-british"
                ),
                "Dr Grosh will see you now."
            );
            done();
        });
        test("Translate Lunch is at 12:15 today. to British English", (done) => {
            assert.strictEqual(
                translate.translate(
                    "Lunch is at 12:15 today.",
                    "american-to-british"
                ),
                "Lunch is at 12.15 today."
            );
            done();
        });
    });
});

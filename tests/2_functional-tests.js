const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
const server = require("../server.js");

chai.use(chaiHttp);

let Translator = require("../components/translator.js");

suite("Functional Tests", () => {
    test("Translation with text and locale fields: POST request to /api/translate", (done) => {
        chai.request(server)
            .keepOpen()
            .post("/api/translate")
            .send({
                text: "Can you toss this in the trashcan for me?",
                locale: "american-to-british",
            })
            .end((err, res) => {
                assert.strictEqual(
                    res.body.translation,
                    "Can you toss this in the <span class='highlight'>bin</span> for me?"
                );
                done();
            });
    });
    test("Translation with text and invalid locale field: POST request to /api/translate", (done) => {
        chai.request(server)
            .keepOpen()
            .post("/api/translate")
            .send({
                text: "Can you toss this in the trashcan for me?",
                locale: "english-to-japanese",
            })
            .end((err, res) => {
                assert.strictEqual(
                    res.body.error,
                    "Invalid value for locale field"
                );
                done();
            });
    });
    test("Translation with missing text field: POST request to /api/translate", (done) => {
        chai.request(server)
            .keepOpen()
            .post("/api/translate")
            .send({
                locale: "american-to-british",
            })
            .end((err, res) => {
                assert.strictEqual(res.body.error, "Missing required field(s)");
                done();
            });
    });
    test("Translation with missing locale field: POST request to /api/translate", (done) => {
        chai.request(server)
            .keepOpen()
            .post("/api/translate")
            .send({
                text: "Can you toss this in the trashcan for me?",
            })
            .end((err, res) => {
                assert.strictEqual(res.body.error, "Missing required field(s)");
                done();
            });
    });
    test("Translation with empty text: POST request to /api/translate", (done) => {
        chai.request(server)
            .keepOpen()
            .post("/api/translate")
            .send({
                text: "",
                locale: "american-to-british",
            })
            .end((err, res) => {
                assert.strictEqual(res.body.error, "No text to translate");
                done();
            });
    });
    test("Translation with text that needs no translation: POST request to /api/translate", (done) => {
        chai.request(server)
            .keepOpen()
            .post("/api/translate")
            .send({
                text: "Can you toss this in the trashcan for me?",
                locale: "british-to-american",
            })
            .end((err, res) => {
                assert.strictEqual(
                    res.body.translation,
                    "Everything looks good to me!"
                );
                done();
            });
    });
});

const chai = require("chai");
const assert = chai.assert;
const { JSDOM } = require("jsdom");

const Translator = require("../components/translator.js");

const translate = new Translator();

const dom = new JSDOM("<!DOCTYPE html><div></div>");
const document = dom.window.document;
let temp = document.createElement("div");

suite("Unit Tests", () => {
    suite("American to British Tests", () => {
        test("Translate Mangoes are my favorite fruit. to British English", (done) => {
            temp.innerHTML = translate.translate(
                "Mangoes are my favorite fruit.",
                "american-to-british"
            );
            assert.strictEqual(
                temp.textContent,
                "Mangoes are my favourite fruit."
            );
            done();
        });
        test("Translate I ate yogurt for breakfast. to British English", (done) => {
            temp.innerHTML = translate.translate(
                "I ate yogurt for breakfast.",
                "american-to-british"
            );
            assert.strictEqual(
                temp.textContent,
                "I ate yoghurt for breakfast."
            );
            done();
        });
        test("Translate We had a party at my friend's condo. to British English", (done) => {
            temp.innerHTML = translate.translate(
                "We had a party at my friend's condo.",
                "american-to-british"
            );
            assert.strictEqual(
                temp.textContent,
                "We had a party at my friend's flat."
            );
            done();
        });
        test("Translate Can you toss this in the trashcan for me? to British English", (done) => {
            temp.innerHTML = translate.translate(
                "Can you toss this in the trashcan for me?",
                "american-to-british"
            );
            assert.strictEqual(
                temp.textContent,
                "Can you toss this in the bin for me?"
            );
            done();
        });
        test("Translate The parking lot was full. to British English", (done) => {
            temp.innerHTML = translate.translate(
                "The parking lot was full.",
                "american-to-british"
            );
            assert.strictEqual(temp.textContent, "The car park was full.");
            done();
        });
        test("Translate Like a high tech Rube Goldberg machine. to British English", (done) => {
            temp.innerHTML = translate.translate(
                "Like a high tech Rube Goldberg machine.",
                "american-to-british"
            );
            assert.strictEqual(
                temp.textContent,
                "Like a high tech Heath Robinson device."
            );
            done();
        });
        test("Translate To play hooky means to skip class or work. to British English", (done) => {
            temp.innerHTML = translate.translate(
                "To play hooky means to skip class or work.",
                "american-to-british"
            );
            assert.strictEqual(
                temp.textContent,
                "To bunk off means to skip class or work."
            );
            done();
        });
        test("Translate No Mr. Bond, I expect you to die. to British English", (done) => {
            temp.innerHTML = translate.translate(
                "No Mr. Bond, I expect you to die.",
                "american-to-british"
            );
            assert.strictEqual(
                temp.textContent,
                "No Mr Bond, I expect you to die."
            );
            done();
        });
        test("Translate Dr. Grosh will see you now. to British English", (done) => {
            temp.innerHTML = translate.translate(
                "Dr. Grosh will see you now.",
                "american-to-british"
            );
            assert.strictEqual(temp.textContent, "Dr Grosh will see you now.");
            done();
        });
        test("Translate Lunch is at 12:15 today. to British English", (done) => {
            temp.innerHTML = translate.translate(
                "Lunch is at 12:15 today.",
                "american-to-british"
            );
            assert.strictEqual(temp.textContent, "Lunch is at 12.15 today.");
            done();
        });
    });

    suite("British to American Tests", () => {
        test("Translate We watched the footie match for a while. to American English", (done) => {
            temp.innerHTML = translate.translate(
                "We watched the footie match for a while.",
                "british-to-american"
            );
            assert.strictEqual(
                temp.textContent,
                "We watched the soccer match for a while."
            );
            done();
        });
        test("Translate Paracetamol takes up to an hour to work. to American English", (done) => {
            temp.innerHTML = translate.translate(
                "Paracetamol takes up to an hour to work.",
                "british-to-american"
            );
            assert.strictEqual(
                temp.textContent,
                "Tylenol takes up to an hour to work."
            );
            done();
        });
        test("Translate First, caramelise the onions. to American English", (done) => {
            temp.innerHTML = translate.translate(
                "First, caramelise the onions.",
                "british-to-american"
            );
            assert.strictEqual(
                temp.textContent,
                "First, caramelize the onions."
            );
            done();
        });
        test("Translate I spent the bank holiday at the funfair. to American English", (done) => {
            temp.innerHTML = translate.translate(
                "I spent the bank holiday at the funfair.",
                "british-to-american"
            );
            assert.strictEqual(
                temp.textContent,
                "I spent the public holiday at the carnival."
            );
            done();
        });
        test("Translate I had a bicky then went to the chippy. to American English", (done) => {
            temp.innerHTML = translate.translate(
                "I had a bicky then went to the chippy.",
                "british-to-american"
            );
            assert.strictEqual(
                temp.textContent,
                "I had a cookie then went to the fish-and-chip shop."
            );
            done();
        });
        test("Translate I've just got bits and bobs in my bum bag. to American English", (done) => {
            temp.innerHTML = translate.translate(
                "I've just got bits and bobs in my bum bag.",
                "british-to-american"
            );
            assert.strictEqual(
                temp.textContent,
                "I've just got odds and ends in my fanny pack."
            );
            done();
        });
        test("Translate The car boot sale at Boxted Airfield was called off. to American English", (done) => {
            temp.innerHTML = translate.translate(
                "The car boot sale at Boxted Airfield was called off.",
                "british-to-american"
            );
            assert.strictEqual(
                temp.textContent,
                "The swap meet at Boxted Airfield was called off."
            );
            done();
        });
        test("Translate Have you met Mrs Kalyani? to American English", (done) => {
            temp.innerHTML = translate.translate(
                "Have you met Mrs Kalyani?",
                "british-to-american"
            );
            assert.strictEqual(temp.textContent, "Have you met Mrs. Kalyani?");
            done();
        });
        test("Translate Prof Joyner of King's College, London. to American English", (done) => {
            temp.innerHTML = translate.translate(
                "Prof Joyner of King's College, London.",
                "british-to-american"
            );
            assert.strictEqual(
                temp.textContent,
                "Prof. Joyner of King's College, London."
            );
            done();
        });
        test("Translate Tea time is usually around 4 or 4.30. to American English", (done) => {
            temp.innerHTML = translate.translate(
                "Tea time is usually around 4 or 4.30.",
                "british-to-american"
            );
            assert.strictEqual(
                temp.textContent,
                "Tea time is usually around 4 or 4:30."
            );
            done();
        });
    });
});

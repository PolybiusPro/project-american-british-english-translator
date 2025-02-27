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
});

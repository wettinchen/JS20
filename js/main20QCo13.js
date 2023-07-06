// JavaScript Errors and Error Handling

"use strict";
const makeError = () => {
    try {
        throw new customError("This is a custom error!");
    } catch (err) {
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);
    }
};
makeError();

function customError(message) {
    this.name = "customError";
    this.message = message;
    this.stack = `${this.name}: ${this.message}`;
}
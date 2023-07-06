// JavaScript Errors and Error Handling

"use strict";
const makeError = () => {
    try {
        const name = "Dave";
        name = "Joe";
    } catch (err) {
        console.error(err.stack);
    }
};
makeError();

function customError(message) {
    this.name = "customError";
    this.message = message;
    this.stack = `${this.name}: ${this.message}`;
}
// JavaScript Errors and Error Handling

"use strict";
const makeError = () => {
    try {
        throw new Error("This is a error!");
    } catch (err) {
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);
    } finally {

    }
};
makeError();
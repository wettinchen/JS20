// JavaScript Errors and Error Handling

"use strict";
const makeError = () => {
    try {
        const name = "Dave";
        name = "Joe";
    } catch (err) {
        console.error(err.message);
    }
};
makeError();
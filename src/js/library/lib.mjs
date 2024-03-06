/**
 * Just part of the testing and learning process
 * for jsr.io
 * @param {String} util - Any string will suffice
 * @throws {TypeError}
 * @returns {Object}
 */
function lib(util) {
    if (typeof util === 'string') {
        return console.log({ util });
    }

    throw new TypeError(`The util must be a string and not a: ${util}.`);
}

export { lib };
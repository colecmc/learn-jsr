import { lib } from './src/js/library/lib.mjs';

/**
 * Y'all want this party started, right?
 * Y'all want this party started quickly, right?
 * @param {String} utilName
 * @returns {Object}
 */
function init(utilName) {
    const util = `${utilName}.util`;
    return lib(util);
}

init('special');

export { init };

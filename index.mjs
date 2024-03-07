import { lib } from './src/js/library/lib.mjs';

/**
 * Y'all want this party started, right?
 * Y'all want this party started quickly, right?
 * @param {String} util
 * @returns {Object}
 */
function init(util) {
    return lib(util);
}

init('special.util');

export { init };

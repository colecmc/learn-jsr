import { lib } from './src/js/library/lib.mjs';

/**
 * Y'all want this party started, right?
 * Y'all want this party started quickly, right?
 * @returns {Object}
 */
function init() {
    return lib('special.util');
}

init();

export { init };

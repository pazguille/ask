var ask = {};

function getType(value) {
    // I use 'ask' object instead of Object.prototype.
    return ask.toString.call(value);
}

// Types

ask.isArray = Array.isArray || function (arr) {
    return getType(arr) === '[object Array]';
};

ask.isObject = function (obj) {
    return typeof obj === 'object';
};

ask.isFunction = function (fn) {
    return typeof fn === 'function';
};

ask.isString = function (str) {
    return typeof str === 'string';
};

ask.isNumber = function (num) {
    return typeof num === 'number';
};

ask.isDate = function (date) {
    return getType(date) === '[object Date]';
};

ask.isRegexp = function (regexp) {
    return getType(regexp) === '[object RegExp]';
};

ask.isNull = function (obj) {
    return obj === null;
};

ask.isDefined = function (defined) {
    return defined !== undefined;
};

ask.isNodeElement = function (node) {
    return getType(node).match(/HTML/) !== null;
};

ask.hasFocus = function (node) {
    return document.activeElement === node;
};

/**
 * Expose ask
 */
exports = module.exports = ask;
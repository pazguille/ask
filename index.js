var is = {};

function getType(value) {
    // I use 'is' object instead of Object.prototype.
    return is.toString.call(value);
}

// Types

is.arr = Array.isArray || function (arr) {
    return getType(arr) === '[object Array]';
};

is.obj = function (obj) {
    return typeof obj === 'object';
};

is.fn = function (fn) {
    return typeof fn === 'function';
};

is.str = function (str) {
    return typeof str === 'string';
};

is.num = function (num) {
    return typeof num === 'number';
};

is.date = function (date) {
    return getType(date) === '[object Date]';
};

is.regexp = function (regexp) {
    return getType(regexp) === '[object RegExp]';
};

is.null = function (obj) {
    return obj === null;
};

is.defined = function (defined) {
    return defined !== undefined;
};

is.nodeElement = function (node) {
    return getType(node).match(/HTML/) !== null;
};

/**
 * Expose is
 */
exports = module.exports = is;
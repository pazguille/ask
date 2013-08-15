var is = {};

is.arr = (function () {
    if (typeof Array.isArray === 'function') {
        return Array.isArray;
    }

    return function (arr) {
        return (Object.prototype.toString.call(arr) === '[object Array]');
    };
}());

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

/**
 * Expose is
 */
exports = module.exports = is;
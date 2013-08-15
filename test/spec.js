(function (window) {
    var lib = require('bestander-jasmine');
    for (var key in lib) {
        if (lib.hasOwnProperty(key)) {
            window[key] = lib[key];
        }
    }
}(window));

var is = require('is');

describe('is', function () {

    it('should be defined', function () {
        expect(is).toBeDefined();
    });

    it('should be an object', function () {
        expect(typeof is).toBe('object');
    });

});

describe('is.arr(param)', function () {

    it('should be defined', function () {
        expect(is.arr).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof is.arr).toBe('function');
    });

    it('should return "true" if the parameter is an array.', function () {
        var arr = is.arr([]),
            obj = is.arr({});
        expect(typeof arr).toBe('boolean');
        expect(obj).toBeFalsy();
        expect(arr).toBeTruthy();
    });
});

describe('is.obj(param)', function () {

    it('should be defined', function () {
        expect(is.obj).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof is.obj).toBe('function');
    });

    it('should return "true" if the parameter is an object.', function () {
        var num = is.obj(2),
            obj = is.obj({});
        expect(typeof obj).toBe('boolean');
        expect(num).toBeFalsy();
        expect(obj).toBeTruthy();
    });
});

describe('is.fn(param)', function () {

    it('should be defined', function () {
        expect(is.fn).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof is.fn).toBe('function');
    });

    it('should return "true" if the parameter is a function.', function () {
        var num = is.fn(2),
            fn = is.fn(function(){});
        expect(typeof fn).toBe('boolean');
        expect(num).toBeFalsy();
        expect(fn).toBeTruthy();
    });
});

describe('is.str(param)', function () {

    it('should be defined', function () {
        expect(is.str).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof is.str).toBe('function');
    });

    it('should return "true" if the parameter is a string.', function () {
        var num = is.str(2),
            str = is.str('str');
        expect(typeof str).toBe('boolean');
        expect(num).toBeFalsy();
        expect(str).toBeTruthy();
    });
});

describe('is.num(param)', function () {

    it('should be defined', function () {
        expect(is.num).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof is.num).toBe('function');
    });

    it('should return "true" if the parameter is a number.', function () {
        var str = is.num('str'),
            num = is.num(2);
        expect(typeof num).toBe('boolean');
        expect(str).toBeFalsy();
        expect(num).toBeTruthy();
    });
});
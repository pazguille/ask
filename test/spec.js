(function (window) {
    var lib = require('bestander-jasmine');
    for (var key in lib) {
        if (lib.hasOwnProperty(key)) {
            window[key] = lib[key];
        }
    }
}(window));

var ask = require('ask');

describe('ask', function () {

    it('should be defined', function () {
        expect(ask).toBeDefined();
    });

    it('should be an object', function () {
        expect(typeof ask).toBe('object');
    });

});

describe('ask.isArray(param)', function () {

    it('should be defined', function () {
        expect(ask.isArray).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof ask.isArray).toBe('function');
    });

    it('should return "true" if the parameter ask an array.', function () {
        var arr = ask.isArray([]),
            obj = ask.isArray({});
        expect(typeof arr).toBe('boolean');
        expect(obj).toBeFalsy();
        expect(arr).toBeTruthy();
    });
});

describe('ask.isObject(param)', function () {

    it('should be defined', function () {
        expect(ask.isObject).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof ask.isObject).toBe('function');
    });

    it('should return "true" if the parameter ask an object.', function () {
        var num = ask.isObject(2),
            obj = ask.isObject({});
        expect(typeof obj).toBe('boolean');
        expect(num).toBeFalsy();
        expect(obj).toBeTruthy();
    });
});

describe('ask.isFunction(param)', function () {

    it('should be defined', function () {
        expect(ask.isFunction).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof ask.isFunction).toBe('function');
    });

    it('should return "true" if the parameter ask a function.', function () {
        var num = ask.isFunction(2),
            fn = ask.isFunction(function(){});
        expect(typeof fn).toBe('boolean');
        expect(num).toBeFalsy();
        expect(fn).toBeTruthy();
    });
});

describe('ask.isString(param)', function () {

    it('should be defined', function () {
        expect(ask.isString).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof ask.isString).toBe('function');
    });

    it('should return "true" if the parameter ask a string.', function () {
        var num = ask.isString(2),
            str = ask.isString('str');
        expect(typeof str).toBe('boolean');
        expect(num).toBeFalsy();
        expect(str).toBeTruthy();
    });
});

describe('ask.isNumber(param)', function () {

    it('should be defined', function () {
        expect(ask.isNumber).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof ask.isNumber).toBe('function');
    });

    it('should return "true" if the parameter askask a number.', function () {
        var str = ask.isNumber('str'),
            num = ask.isNumber(2);
        expect(typeof num).toBe('boolean');
        expect(str).toBeFalsy();
        expect(num).toBeTruthy();
    });
});

describe('ask.isDate(param)', function () {

    it('should be defined', function () {
        expect(ask.isDate).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof ask.isDate).toBe('function');
    });

    it('should return "true" if the parameter ask a number.', function () {
        var num = ask.isDate(2),
            date = ask.isDate(new Date());
        expect(typeof date).toBe('boolean');
        expect(num).toBeFalsy();
        expect(date).toBeTruthy();
    });
});

describe('ask.isRegexp(param)', function () {

    it('should be defined', function () {
        expect(ask.isRegexp).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof ask.isRegexp).toBe('function');
    });

    it('should return "true" if the parameter ask a number.', function () {
        var num = ask.isRegexp(2),
            regexp = ask.isRegexp(/a/);
        expect(typeof regexp).toBe('boolean');
        expect(num).toBeFalsy();
        expect(regexp).toBeTruthy();
    });
});

describe('ask.isNull(param)', function () {

    it('should be defined', function () {
        expect(ask.isNull).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof ask.isNull).toBe('function');
    });

    it('should return "true" if the parameter ask a number.', function () {
        var num = ask.isNull(2),
            nul = ask.isNull(null);
        expect(typeof nul).toBe('boolean');
        expect(num).toBeFalsy();
        expect(nul).toBeTruthy();
    });
});

describe('ask.isDefined(param)', function () {

    it('should be defined', function () {
        expect(ask.isDefined).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof ask.isDefined).toBe('function');
    });

    it('should return "true" if the parameter ask a number.', function () {
        var un = ask.isDefined(undefined),
            defined = ask.isDefined('foo');
        expect(typeof defined).toBe('boolean');
        expect(un).toBeFalsy();
        expect(defined).toBeTruthy();
    });
});

describe('ask.isNodeElement(param)', function () {

    it('should be defined', function () {
        expect(ask.isNodeElement).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof ask.isNodeElement).toBe('function');
    });

    it('should return "true" if the parameter ask a number.', function () {
        var obj = ask.isNodeElement([]),
            html = ask.isNodeElement(document);
        expect(typeof html).toBe('boolean');
        expect(obj).toBeFalsy();
        expect(html).toBeTruthy();
    });
});
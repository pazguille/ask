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

describe('is.date(param)', function () {

    it('should be defined', function () {
        expect(is.date).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof is.date).toBe('function');
    });

    it('should return "true" if the parameter is a number.', function () {
        var num = is.date(2),
            date = is.date(new Date());
        expect(typeof date).toBe('boolean');
        expect(num).toBeFalsy();
        expect(date).toBeTruthy();
    });
});

describe('is.regexp(param)', function () {

    it('should be defined', function () {
        expect(is.regexp).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof is.regexp).toBe('function');
    });

    it('should return "true" if the parameter is a number.', function () {
        var num = is.regexp(2),
            regexp = is.regexp(/a/);
        expect(typeof regexp).toBe('boolean');
        expect(num).toBeFalsy();
        expect(regexp).toBeTruthy();
    });
});

describe('is.null(param)', function () {

    it('should be defined', function () {
        expect(is.null).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof is.null).toBe('function');
    });

    it('should return "true" if the parameter is a number.', function () {
        var num = is.null(2),
            nul = is.null(null);
        expect(typeof nul).toBe('boolean');
        expect(num).toBeFalsy();
        expect(nul).toBeTruthy();
    });
});

describe('is.defined(param)', function () {

    it('should be defined', function () {
        expect(is.defined).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof is.defined).toBe('function');
    });

    it('should return "true" if the parameter is a number.', function () {
        var un = is.defined(undefined),
            defined = is.defined('foo');
        expect(typeof defined).toBe('boolean');
        expect(un).toBeFalsy();
        expect(defined).toBeTruthy();
    });
});

describe('is.nodeElement(param)', function () {

    it('should be defined', function () {
        expect(is.nodeElement).toBeDefined();
    });

    it('should be a function', function () {
        expect(typeof is.nodeElement).toBe('function');
    });

    it('should return "true" if the parameter is a number.', function () {
        var obj = is.nodeElement([]),
            html = is.nodeElement(document);
        expect(typeof html).toBe('boolean');
        expect(obj).toBeFalsy();
        expect(html).toBeTruthy();
    });
});
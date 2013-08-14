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

});
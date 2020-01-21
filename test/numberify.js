const assert = require('assert');
const numberify = require('lib/numberify');

describe('numberify()', () => {
    it('should return number: 1', () => {
        assert(numberify(1) === 1);
    });

    it('should return number: "1"', () => {
        assert(numberify('1') === 1);
    });

    it('should return number: ""', () => {
        assert(numberify('') === 0);
    });

    it('should return number: "a"', () => {
        assert(numberify('a') === 0);
    });

    it('should return number: {}', () => {
        assert(numberify({}) === 0);
    });

    it('should return number: null', () => {
        assert(numberify(null) === 0);
    });

    it('should return number: undefined', () => {
        assert(numberify() === 0);
        assert(numberify(undefined) === 0);
    });
});

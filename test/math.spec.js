const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;

let value = 0;

describe('Math class', function() {

    //hooks
    //after
    //afterEach
    //before
    beforeEach(function() {
        value = 0;
    });

    it('Sum two numbers', function(done) {
    //throw new Error('Oh no');
        const math = new Math();
        this.timeout(3000);

        value = 5;

        math.sum(value, 5, value => {
            expect(value).to.equal(10);
            done();
        });
    });

    //it.only apenas 1 test
    //it.skip pular o teste    
    it('Multiply two numbers', function() {
        const math = new Math();

        assert.equal(math.multiply(value, 5), 0);
    });
});

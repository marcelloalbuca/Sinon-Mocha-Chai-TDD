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
    it.only('Multiply two numbers', function() {
        const math = new Math();

        const obj = {
            name: 'Marcello Albuquerque'
        };

        const obj2 = {
            name: 'Marcello Albuquerque'
        };

        //const obj2 = obj;

        expect(obj)
        .to.have.property('name')
        .equal('Marcello Albuquerque');

        expect(math.multiply(value, 5))
        .to.equal(0);

        expect(obj).to.deep.equal(obj2);
    });
});

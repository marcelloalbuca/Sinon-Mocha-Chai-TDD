const assert = require('assert');
const Math = require('../src/math.js');
const expect = require('chai').expect;
const sinon = require('sinon');

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

    it.only('Calls req with sun and index values', function() {
        
        const req = {};
        const res = {
            load: function load() {
                console.log('Called!');
            }
        };

        //sinon.stub
        sinon.spy(res, 'load');

        const math = new Math();
        math.printSum(req, res, 5, 5);

       // res.restore();

        //primeiro argumento
        expect(res.load.args[0][0]).to.equal('index');

        //segundo argumento
        expect(res.load.args[0][1]).to.equal(10);

        expect(res.load.calledOnce).to.be.true;
    });
});

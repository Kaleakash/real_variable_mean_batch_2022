var obj = require("../src/operation")
var assert = require("chai").assert;            // assert style 
var expect = require("chai").expect;            // expect style 
describe("Operation testing ",()=> {
    it("Testing with assert style",()=> {
        let result = obj.add(10,20);
        assert.equal(result,30);
        assert.typeOf(obj.n,"number");
        assert.typeOf(obj.name,"string");
        assert.isFunction(obj.dis);
        assert.isArray(obj.num);
        assert.equal(obj.n,10);
        assert.equal(obj.name,"Raj Deep");
    })
    it("Testing with expect style",()=> {
        let result = obj.add(10,20);
        expect(result).to.equal(30);
        expect(obj.n).to.equal(10);
        expect(obj.name).to.have.be.equal("Raj Deep");
    })
})
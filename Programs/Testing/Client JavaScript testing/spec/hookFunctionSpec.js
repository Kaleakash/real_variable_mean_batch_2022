describe("Hook spec ",()=> {
    beforeAll(()=> {
        console.log("Before All Testing function")
    })
    beforeEach(()=> {
        console.log("Before each test function")
    })
    it("First Test ",()=> {
        console.log("While testing 1st test")
        expect(true).toBeTruthy();
    })
    it("Second Test ",()=> {
        console.log("While testing 2nd test")
        expect(false).toBeFalsy();
    })
    afterEach(()=> {
        console.log("After each test function")
    })
    afterAll(()=> {
        console.log("After all testing function")
    })
})
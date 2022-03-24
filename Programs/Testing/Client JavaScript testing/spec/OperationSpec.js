describe("Operation Testing",()=> {

    it("Addition testing ",()=> {
        var result = add(10,20);
        expect(30).toBe(result)
    })

    it("Sub testing ",()=> {
        var result = sub(10,20);
        expect(-10).toBe(result)
    })

    it("Mul testing ",()=> {
        var result = mul(10,20);
        expect(200).toBe(result)
    })

    it("Div testing ",()=> {
        var result = div(20,10);
        expect(2).toBe(result)
    })

    it("check login details ",()=> {
        var result = checkUser("Raj","123");
        expect(result).toBeTrue();      
    })
})
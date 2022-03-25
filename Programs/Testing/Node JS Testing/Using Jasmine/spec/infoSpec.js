var obj = require("../src/info");

describe("Testing ",()=> {
    it("Actual function testing",()=> {
       // let result = obj.sayHello("Ravi")
        //expect("Welcome to Testing using Jasmine Ravi").toEqual(result);
    })

    it("Fake Testing ",()=> {
        spyOn(obj,"sayHello").and.returnValue("Welcome to Testing Using Fake"); 

        let result = obj.sayHello("Ravi")       // it call actual sayHello function but intermediate is fake implementation 
        expect("Welcome to Testing Using Fake").toEqual(result);
    })
})
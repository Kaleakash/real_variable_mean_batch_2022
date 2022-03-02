let obj = require("readline");
let r = obj.createInterface({
            input:process.stdin,            // keyboard
            output:process.stdout           // console 
        });
r.question("Enter the name",(name)=> {
     
     r.question("Enter the age",(age)=> {

        console.log("your name is "+name);
        console.log("your age is "+age);

        r.close();
     })   
    
})
// r.question("Enter the age",(age)=> {
//     console.log("your age is "+age);

//     r.close();
// })
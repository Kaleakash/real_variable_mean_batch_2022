// // normal function 
// function info(){
//     console.log("Normal function")
// }
// info();
// // function with not return type. 
// function display1():void {
//     console.log("This function with no return type")
// }
// // function with return number type 
// function getNumber():number {
//     return 10;
// }
// // function with return type string 
// function sayHello() :string {
//     return "Welcome";
// }
// // function with any type return type 
// function getInfo():any {
//     //return 10;
//    // return "Welcome"
//    //return true;
// }
// // function with parameter 
// function add(a:number,b:number):void {
//         var sum = a+b;
//         console.log("Sum of two number is "+sum)
// }
// add(10,20);
// add(1,2);
// //add("raj","deep");
// // function with different type of value with array parameter 
// // function empInfo(id:number,name:string,age:number,tech:string[]):void {
// //     console.log("id is "+id)
// //     console.log("name is "+name)
// //     console.log("age "+age);    
// //     tech.forEach(t=>console.log(t));
// // }
// // let skillSet:Array<string>=["C","C++","Angular"]
// // empInfo(1,"Raj",21,skillSet);
// // function with rest parameter 
// function empInfo(id:number,name:string,age:number,...tech:string[]):void {  // rest operator 
//     console.log("id is "+id)
//     console.log("name is "+name)
//     console.log("age "+age);    
//     tech.forEach(t=>console.log(t));
// }
// let skillSet:Array<string>=["C","C++","Java"]
// empInfo(1,"Raj",21);
// empInfo(2,"Ravi",23,"C")
// empInfo(3,"Raju",34,"Java","Angular");
// empInfo(4,"Ramesh",34,"ReactJS","Angular","HTML5/CSS3");
// empInfo(5,"Ajay",21,skillSet[0],skillSet[1],skillSet[2])
// empInfo(6,"Raju",32,...skillSet);       // spread operator or parameter 

// // optional parameter 
// function empInfo(id?:number,fname?:string,lname?:string):void {
//         console.log("id is "+id);
//         console.log("name "+fname)
//         console.log("last name is "+lname);
// }
// empInfo();
// empInfo(102)
// empInfo(100,"Raj")
// empInfo(101,"Ravi","Kumar");
// empInfo(1);
// empInfo(2,"Raj","Deep");
// empInfo(3,"Deep","Kumar");

//default parameter initialization  
function empInfo(id:number=1,fname:string="Raj",lname:string="Deep"):void {
    console.log("id is "+id);
    console.log("name "+fname)
    console.log("last name is "+lname);
}
empInfo();
empInfo(102)
empInfo(100,"Raj")
empInfo(101,"Ravi","Kumar");
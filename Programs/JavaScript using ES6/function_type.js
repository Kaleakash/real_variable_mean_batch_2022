// // normal function 
// function display1() {
//     document.write("<br/> This is normal display1 function")
// }
// display1();
// //expression style function with name
// var display2 = function display(){
//     document.write("<br/> This is expression style function with name")
// }
// display2();
// // expression style funtion without name
// var display3 = function() {
//     document.write("<br/> This is epxression style without name");
// }
// display3();

// let display4 = ()=>{
//     document.write("<br/>This is arrow style funtion")
// }
// display4();
// //normal function with parameter 
// function add1(a,b){
//     return a+b;
// }
// document.write("<br/>Sum of two number using normal style "+add1(10,20));
// // expression function with parameter 
// let add2 = function(a,b){
//     return a+b;
// }
// document.write("<br/>Sum of two number using expression style "+add2(20,30));
// // arrow function with parameter 
// let add3 = (a,b)=>a+b;
// document.write("<br/> Sum of two number using arrow style is "+add3(30,40));
// // find largest number using expression style 
// let findLargest1 = function(a,b){
//     if(a>b){
//         return a;
//     }else {
//         return b;
//     }
// }
// // find largest number using arrow style 
// document.write("<br/> Find largest "+findLargest1(10,2))
// let findLargest2 = (a,b)=> {
//     if(a>b){
//         return a;
//     }else {
//         return b;
//     }
// }
// document.write("<br/> Find largest "+findLargest2(10,2))

function greeting(name,callback){
    return "Welcome "+callback(name);
}

let male= function(name){
    return "Mr "+name;
}
function female(name) {
    return "Miss"+name;
}
document.write(greeting("Raj",male))
document.write("<br/>")
document.write(greeting("Reeta",female))
document.write("<br/>")
document.write(greeting("Seeta",female))
document.write("<br/>")
document.write(greeting("Ravi",function(name){
    return "Mr "+name;
}))
document.write("<br/>")
document.write(greeting("Mahesh",(name)=>"Mr"+name));

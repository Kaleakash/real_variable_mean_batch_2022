// liberal style 
// var msg1 = "Welcome to JavaScript Training";

// // using new keyword 
// var msg2 = new String("Welcome to JavaScript Training");
// document.write(msg1+"<br/>")
// document.write(msg2+"<br/>")
// document.write(msg1.length+"<br/>")
// document.write(msg2.length+"<br/>")
// document.write(msg1.toUpperCase()+"<br/>")
// document.write(msg1.toLowerCase()+"<br/>")
// document.write(msg1.substring(2)+"<br/>")
// document.write(msg1.substring(2,15)+"<br/>");
// document.write(msg1.indexOf('e')+"<br/>")
// document.write(msg1.lastIndexOf('i')+"<br/>")
// document.write(msg1.replace("JavaScript","TypeScript")+"<br/>")
// document.write(msg1.startsWith("Welcome")+"<br/>")
// document.write(msg1.endsWith("ing")+"<br/>")

// var dd = new Date();
// document.write(dd+"<br/>")
// document.write(dd.getDate()+"<br/>")
// document.write(dd.getMonth()+"<br/>")
// dd.setMonth(dd.getMonth()+1);
// document.write(dd.getMonth()+"<br/>")
// document.write(dd.getFullYear()+"<br/>")
// document.write(dd.getHours()+"<br/>")
// document.write(dd.getMinutes()+"<br/>")
// document.write(dd.getSeconds()+"<br/>")
// dd.setTime(345667777778);
// var dd1 = new Date("Mar 2020, 24 10:20:30")
// document.write("<br/>")
// document.write(dd1)

// Array method of ES5
// literal style 
var obj1 = [10,20,30,40,50];

// creating memory using new keyword 
var obj2 = new Array(10,20,30,40,50);
document.write(obj1+"<br/>")                // it display as a string 
document.write(obj2+"<br/>")
obj1.push(100);                 // add the element at the last 
obj1.push(200);
obj1.push(300);
document.write(obj1+"<br/>")
document.write(obj1.length+"<br/>")
obj1.unshift(1);                    // add the element at the begining 
obj1.unshift(2);
document.write(obj1+"<br/>")
obj1.pop();                     // remove the element from last 
obj1.shift();                   // remove the element from begining
document.write(obj1+"<br/>")
var obj3 = [100,200,300,400];
// array start from 0 index position 
document.write(obj3+"<br/>");
// 
//obj3.splice(2,1);           // 1st parameter index position, 2nd parameter number of elements. 
//obj3.splice(1,2);       // from 1 index position remove 2 elements. 
//obj3.splice(2,0,1);     // 1st parameter index 2, don't delete, add 1 element 
//obj3.splice(2,0,1,2);      //1st parameter index 2, don't delete and add 1 and 2 element 
obj3.splice(2,1,1);         //1st parameer index positin 2,replace the by 1
document.write(obj3+"<br/>")


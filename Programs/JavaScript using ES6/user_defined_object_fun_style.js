// ES5 style creating object. 
// function Employee() {
    
//     this.name = "Raj Deep";      // property
//     this.disEmp = function() {      // behaviour 
//         document.write("<br/> User- defined object behaviour")
//     }

// }
// //var dd = new Date();
// var emp1 = new Employee();      //now memory created for 1 employee 
// //var emp2 = new Employee();
// document.write("<br/> Name is "+emp1.name)
// emp1.name="Raj Patil";
// document.write("<br/> Name is "+emp1.name)
// emp1.disEmp();

// ES5 style object creation with parameter 
// function Employee(id,name,age){
//     this.id = id;
//     this.name = name;
//     this.age = age;

//     this.disEmpInfo=function() {
//         document.write("<br/> Employee Details")
//         document.write("<br/>Id is "+this.id)
//         document.write("<br/> Name is "+this.name)
//         document.write("<br/> AGe is "+this.age);
//     }
// }
// var emp1 = new Employee(100,"Ravi",21);
// var emp2 = new Employee(101,"Mahesh",24);
// var emp3 = new Employee(102,"Lokesh",27);
// emp1.disEmpInfo();
// emp2.disEmpInfo();
// emp3.disEmpInfo();
// ES5 style object creationg with dynamic property as well as behaviour 

// function Employee(id,name) {
//         this.id = id;
//         this.name = name;
//         this.disEmpInfo = function() {
//                     document.write("<br/> Employee Details")
//                     document.write("<br/>Id is "+this.id)
//                     document.write("<br/> Name is "+this.name)
//         }
// }
// var emp1 = new Employee(100,"Ravi");
// var emp2 = new Employee(101,"Ramesh");
// emp1.disEmpInfo();
// emp2.disEmpInfo();
// Employee.prototype.age=21;      //  fix value 
// //Employee.prototype.age;        // we are adding dynamic property
// Employee.prototype.setAge= function(age){
//     this.age = age;
// }
// Employee.prototype.disEmpAge = function() {   // we are adding dynamic behaviour 
//     document.write("<br/> Employee age is "+this.age);
// }
// emp1.setAge(21);
// emp2.setAge(24);
// emp1.disEmpAge();
// emp2.disEmpAge();

// Inheritance : Inheritance is use to inherits properties and behaivour of old object to 
// new object 
// function A(){
//     this.dis1 = function() {
//         document.write("<br/> A object dis1 function")
//     }
// }
// function B() {
//     this.dis2 = function() {
//         document.write("<br/> B object dis2 function")
//     }
// }
// var obj1 = new A();
// obj1.dis1();
// B.prototype=obj1;   // obj1 A object using propotype we are allowing to class A object through 
//                     // B object. 
// var obj2 = new B();
// obj2.dis2();
// obj2.dis1();

//Inheritane using prototype
// function Employee(id,name,age) {
//         this.id = id;
//         this.name =name;
//         this.age = age;
//         this.disEmp = function(){
//             document.write("<br/> Employee Details")
//             document.write("<br/> Id is "+this.id)
//             document.write("<br/> Name is "+this.name)
//             document.write("<br/> Age is "+this.age)
//         }
// }
// function Manager(numberOfEmp) {
//     this.numberOfEmp = numberOfEmp;
//     this.disMgrInfo = function(){
//         document.write("<br/> Number of Employee "+this.numberOfEmp)
//     }
// }
// // let emp1 = new Employee(1,"Ravi",45)
// // Manager.prototype= emp1;   
// Manager.prototype=new Employee(1,"Ramesh",45);
// let mgr1 = new Manager(10);
// mgr1.disEmp();
// mgr1.disMgrInfo();

//Inheritance using apply or call 


function Employee(id,name,age) {
        this.id = id;
        this.name =name;
        this.age = age;
        this.disEmp = function(){
            document.write("<br/> Employee Details")
            document.write("<br/> Id is "+this.id)
            document.write("<br/> Name is "+this.name)
            document.write("<br/> Age is "+this.age)
        }
}
function Manager(id,name,age,numberOfEmp) {
    Employee.call(this,id,name,age);        // passing id,name,age to Employee object
    this.numberOfEmp = numberOfEmp;
    this.disMgrInfo = function(){
        document.write("<br/> Number of Employee "+this.numberOfEmp)
    }
}
let mgr1 = new Manager(1,"Ravi",45,10);
mgr1.disEmp();
mgr1.disMgrInfo();
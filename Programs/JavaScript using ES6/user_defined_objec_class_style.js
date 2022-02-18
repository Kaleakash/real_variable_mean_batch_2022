// //ES5 style 
// function Employee() {
//     this.id =100;
//     this.name = "Ravi";
//     this.disEmpInfo=function() {
//         document.write("Employee behaviour")
//         document.write("<br/> Id is "+this.id);
//         document.write("<br/> Name is "+this.name)
//     }
// }
// var emp1 = new Employee();
// emp1.disEmpInfo();

// //ES6 style 
// class Customer {
//     id=100;
//     name="Ravi";
//     disCustomerInfo() {
//         document.write("<br/>Customer behaviour")
//         document.write("<br/> Id is "+this.id);
//         document.write("<br/> Name is "+this.name);
//     }
// }
// let cust1 = new Customer();
// cust1.disCustomerInfo();


// Constructor : it is a type of special function which help to create the object. 
// In JavaScript to write a constructor we have to use the keyword as 
// constructor for a function. constructor get call automatically when we create the object. 
// of that class. 
// class Customer {
//     constructor(){
//         document.write("<br/> object created..")
//     }
//     disCustInfo() {
//         document.write("<br/> Customer class function")
//     }
// }
// let cust1 = new Customer();
//cust1.disCustInfo();

// parameterized constructor 
// class Customer {
//     constructor(cid,cname,age){
//         this.cid=cid;
//         this.cname=cname;
//         this.age=age;
//     }
//     disCustInfo() {
//         document.write("<br/> Customer Details")
//         document.write("<br/>Cust Id "+this.cid);
//         document.write("<br/>Cust Name "+this.cname);
//         document.write("<br/>Cust Age "+this.age);
//     }
// }
// let cust1 = new Customer(100,"Ravi",21);
// let cust2 =new Customer(101,"Ramesh",27);
// cust1.disCustInfo();
// cust2.disCustInfo();
// super class 
class Employee {
     disEmpInfo() {
        document.write("<br/> Employee class function")
    }
}
//sub class 
class Manager extends Employee{
    disMgrInfo() {
        document.write("<br/> Manager class function")
    }
}
let emp1 = new Employee();
emp1.disEmpInfo();

let mgr1 = new Manager();
mgr1.disMgrInfo();
mgr1.disEmpInfo();

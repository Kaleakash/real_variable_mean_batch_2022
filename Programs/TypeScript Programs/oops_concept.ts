// function style object creation 
// let globalAge:number;
// function Employee(){
//     this.id= 100;           // property 
//     this.name = "Ravi";     //property 
//     let age:number = 21;       // normal local varaible not a part of object. 
//     globalAge=age;
//     this.display = function():void {
//         console.log("Employee object")
//         console.log("id is "+this.id)
//         console.log("name is "+this.name);
//         console.log("age is "+this.age)
//         console.log("age is "+age);
//     }
// }
// var emp = new Employee();
// console.log("id is "+emp.id)
// console.log("name is "+emp.name)
// console.log("age is "+emp.age)
// emp.display();
// console.log("Global age "+globalAge)

// function style with parameter 
// function Employee(id:number,name:string,age:number=21){
//             this.id = id;
//             this.name = name;
//             this.age = age;
//             this.disEmpInfo = function():void {
//                 console.log("id is "+this.id)
//                 console.log("name is "+this.name);
//                 console.log("age is "+this.age)
//             }
// }

// var emp1 = new Employee(1,"Ravi",21);
// var emp2 = new Employee(2,"Ramesh",24);
// var emp3 = new Employee(3,"Ajay")
// emp1.disEmpInfo();
// emp2.disEmpInfo();
// emp3.disEmpInfo();

// Class stye object creation 
// class Customer {
//     id:number=100;
//     name:string="Ravi";
//     setCustomerInfo(id:number,name:string):void {
//         this.id = id;
//         this.name  = name;
//     }
//     disCustomerInfo():void {
//         console.log("Customer behaviour")
//         console.log(" Id is "+this.id);
//         console.log(" Name is "+this.name);
//     }
// }
// let cust1 = new Customer();
// cust1.disCustomerInfo();
// cust1.setCustomerInfo(101,"Ravi Kumar");
// cust1.disCustomerInfo();

// class style object creation with constructor (parameterizec constructor)
// class Customer {
//     private id:number;
//     private name:string;
//     private age:number;
//     constructor(id:number=0,name:string="Unknown",age:number=18){
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
//     public disCustInfo():void {
//         console.log("Cust id "+this.id)
//         console.log("Name is "+this.name)
//         console.log("age is "+this.age);
//     }
// }
// let cust1 = new Customer(1,"Ravi",21); cust1.disCustInfo();
// let cust2 = new Customer(2,"Ramesh",23);cust2.disCustInfo();
// let cust3 = new Customer(3,"Ajay");   cust3.disCustInfo();
// let cust4 = new Customer(4);         cust4.disCustInfo();
// let cust5 = new Customer();             cust5.disCustInfo();
// //cust1.age=-21;
// cust1.disCustInfo();

// let customers:Array<Customer>=[];
// customers.push(cust1);
// customers.push(cust2);
// customers.push(cust3);
// customers.push(cust4);
// customers.push(cust5);

// customers.forEach(c=>{
//     c.disCustInfo();
// })



// constructor short curt initialization 
// 

// Encapsulation 
// class Customer {
//         constructor(
//             private _id:number,
//             private _name:string,
//             private _age:number){}
//             public set age(age:number) {
//                 if(age<0){
//                       this._age=18;  
//                 }else {
//                     this._age = age;  
//                 }  
//             }
//             public get age(){
//                 return this._age;
//             }
//             public get id(){
//                 return this._id;
//             }
//             public get name() {
//                 return this._name;
//             }
// }
// let cust1 = new Customer(1,"Ravi",21);
// cust1.age=-19;
// //cust1.name="Raj Deep";
// console.log("Customer id is "+cust1.id)
// console.log("Customer name is "+cust1.name);
// console.log("Customer age is "+cust1.age)


// function overloading example 

// class Operation {
//         add(a:number,b:number): void {

//         }   
//         add(a:number,b:number,c:number): void {

//         }
        
// }

// class Bike {
//     speed(): void {
//         console.log("60km/hr")
//     }
// }
// class Honda extends Bike {
//     color(): void {
//         console.log("Red")
//     }
// }
// class Pulsar extends Bike{
//     speed(): void {
//         console.log("90km/hr")
//     }
//     color(): void {
//         console.log("Black")
//     }
// }

// let hh = new Honda();       hh.speed();     hh.color();
// let pu = new Pulsar();      pu.speed();     pu.color();

// abstract 

// abstract class Bike {
//     abstract speed(): void;     //incomplete function 
//     mailage(): void {           // function with body. 
//         console.log("55km/hr");
//     }
// }
// class Honda extends Bike {
//     speed(): void {
//         console.log("50km/hr")
//     }
//     color(): void {
//         console.log("Red")
//     }
// }
// class Pulsar extends Bike{
//     speed(): void {
//         console.log("90km/hr")
//     }
//     color(): void {
//         console.log("Black")
//     }
// }
// let hh = new Honda();       hh.speed();     hh.color();
// let pu = new Pulsar();      pu.speed();     pu.color();


// interface Bike {
//         speed(): void;     //incomplete function 
//         mailage(): void;
// }
//     class Honda implements Bike {
//         mailage() : void {
//             console.log("70km/lt")
//         }
//         speed(): void {
//             console.log("50km/hr")
//         }
//         color(): void {
//             console.log("Red")
//         }
//     }
//     class Pulsar implements Bike{
//         mailage() : void {
//             console.log("50km/lt")
//         }
//         speed(): void {
//             console.log("90km/hr")
//         }
//         color(): void {
//             console.log("Black")
//         }
//     }
//     let hh = new Honda();       hh.speed();     hh.color(); hh.mailage();
//     let pu = new Pulsar();      pu.speed();     pu.color(); pu.mailage();


// let emp1 = {id:100,name:"Ravi",age:21};
// let emp2 = {empId:101,fname:"Ramesh",salary:25000};
// let emp3 = {fullName:"Raju"};


// interface Emp {
//     id:number;
//     name:string;
//     age?:number;
// }

// let emp1:Emp = {id:100,name:"Ravi",age:21};
// let emp2 :Emp ={id:101,name:"Ramesh"}
let fname  = "Raj";
let msg1 = "Welcome to Typescript";
let msg2 = ' Welcoem to Typescript ${fname} ';
let msg3 ="Welcome to Typescript" 
            +' Welcome to Angular user '+fname+" With React Js";
console.log(msg3)
let msg4 = `Welcome to 
        Angular training 
        with Typescript with 
        node JS ${fname} 
        `
console.log(msg4);


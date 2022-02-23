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
var Customer = /** @class */ (function () {
    function Customer(id, name, age) {
        if (id === void 0) { id = 0; }
        if (name === void 0) { name = "Unknown"; }
        if (age === void 0) { age = 18; }
        this.id = id;
        this.name = name;
        this.age = age;
    }
    Customer.prototype.disCustInfo = function () {
        console.log("Cust id " + this.id);
        console.log("Name is " + this.name);
        console.log("age is " + this.age);
    };
    return Customer;
}());
var cust1 = new Customer(1, "Ravi", 21);
cust1.disCustInfo();
var cust2 = new Customer(2, "Ramesh", 23);
cust2.disCustInfo();
var cust3 = new Customer(3, "Ajay");
cust3.disCustInfo();
var cust4 = new Customer(4);
cust4.disCustInfo();
var cust5 = new Customer();
cust5.disCustInfo();
cust1.age = -21;
cust1.disCustInfo();

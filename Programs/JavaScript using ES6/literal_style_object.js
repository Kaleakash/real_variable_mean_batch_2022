// let emp = {id:100,name:"Ravi",age:21,
// tech:["Java","Python","Angular"],
// address:{city:"Bangalore",state:"Kar"},
// projects:[{pid:100,pname:"Angular"},{pid:101,pname:"ReacJS"}],
// dis1:function() {
//     document.write("<br/>Emp function dis1()")
// }
// };
// document.write("<br/>Employee Details<br/>")
// document.write("<br/> Id is "+emp.id);
// document.write("<br/> Name is "+emp.name.toUpperCase());
// document.write("<br/> Age is "+emp.age);
// emp.tech.forEach(t=>document.write("<br/>PName "+t));
// document.write("<br> City "+emp.address.city);
// document.write("<br> State "+emp.address.state);
// emp.projects.forEach(p=> {
//     document.write("<br/>PId is "+p.pid+"PName "+p.pname);
// })
// document.write("<br/>Retrieve Project details using in loop<br/>")
// for(let i in emp.projects){
// document.write("<br/> PId is "+emp.projects[i].pid+"PName is "+emp.projects[i].pname)
// }
// document.write("<br/>Retrieve Project details using of loop<br/>")
// for(let p of emp.projects){
// document.write("<br/> PId is "+p.pid+"PName is "+p.pname)
// }
// emp.dis1();

let product = {
    pid:100,pname:"Tv",price:55000,
    displayProduct:function() {
        document.write("<br/>Product Details<br/>")
        document.write("<br/>Pid is "+this.pid);
        document.write("<br/>PName "+this.pname);
        document.write("<br/>Price "+this.price);
    },
    changePrice:function(price) {
        this.price = price;
    }
}
document.write("<br/> Prouct id is "+product.pid)
product.displayProduct();
product.changePrice(62000);
product.displayProduct();

// let emp = {name:"Raj Deep",info:function(){
//             document.write("<br/>employee behaviour")
//             document.write("<br/> Name is "+this.name);
//     }
// }
// document.write("Name is "+emp.name)
// emp.name="Raj Patil";
// document.write("<br/>Name is after change "+emp.name)
// emp.info();         // calling functionality 

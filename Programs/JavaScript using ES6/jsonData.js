let emp = {id:100,name:"Ravi",age:21};
document.write("<br/> Employee details using object literal")
document.write("<br> Id is "+emp.id);
document.write("<br> Name is "+emp.name);
document.write("<br> Age is "+emp.age);
let empString = JSON.stringify(emp);    // converting object to string 
let empJson = JSON.parse(empString);          // converting string to json object. 

document.write("<br/> Employee details using JSON object ")
document.write("<br> Id is "+empJson.id);
document.write("<br> Name is "+empJson.name);
document.write("<br> Age is "+empJson.age);
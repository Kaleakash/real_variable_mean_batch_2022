class Employee {
    constructor(_id, _name, _age) {
        this._id = _id;
        this._name = _name;
        this._age = _age;
    }
    get id() {
        return this._id;
    }
}
let employees = [];
function addEmployee() {
    let id = parseInt(document.getElementById("id").value);
    let name = document.getElementById("name").value;
    let age = parseInt(document.getElementById("age").value);
    let emp = new Employee(id, name, age);
    let result = employees.find(e => e.id == id);
    let msg;
    if (result == undefined) {
        employees.push(emp);
        msg = "Record added successfully";
    }
    else {
        msg = "id is must be unique";
    }
    let pTag = document.createElement("p");
    let pTagValue = document.createTextNode(msg);
    pTag.appendChild(pTagValue);
    document.getElementsByTagName("body")[0].appendChild(pTag);
    //console.log("Number of object added "+employees.length);
}

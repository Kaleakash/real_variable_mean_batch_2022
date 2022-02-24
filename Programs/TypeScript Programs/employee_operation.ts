class Employee {
    constructor(private _id:number,
        private _name:string,
        private _age:number){}
        public get id(){
            return this._id;
        }
}

let employees:Array<Employee>=[];
function addEmployee() {
    let id = parseInt((<HTMLInputElement>document.getElementById ("id")).value)
    let name = (<HTMLInputElement>document.getElementById ("name")).value
    let age = parseInt((<HTMLInputElement>document.getElementById ("age")).value)
    let emp = new Employee(id,name,age);
    let result = employees.find(e=>e.id==id)
    let msg;
    if(result==undefined){
        employees.push(emp); 
        msg="Record added successfully"
    }else {
        msg="id is must be unique"
    }
    let pTag = document.createElement("p");
    let pTagValue = document.createTextNode(msg);
    pTag.appendChild(pTagValue);
    document.getElementsByTagName("body")[0].appendChild(pTag);
    //console.log("Number of object added "+employees.length);
}


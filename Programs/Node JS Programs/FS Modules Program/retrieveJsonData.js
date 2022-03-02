let fs = require("fs");
let data = JSON.parse(fs.readFileSync("emp.json"));
console.log("id is "+data.id);
console.log("name is "+data.name);
console.log("age is "+data.age)
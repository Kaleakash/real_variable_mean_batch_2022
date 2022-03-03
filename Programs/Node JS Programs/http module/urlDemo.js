let sampleUrl = "http://wwww.google.com:80/welcome?name=Ravi&age=21";
let url = require("url");
console.log(sampleUrl)
let urlRef = url.parse(sampleUrl,true);// if we pass boolean 
// value as true then query consider as reference else it is 
// consider as primitive property.
console.log(urlRef)
console.log(urlRef.protocol)
console.log(urlRef.port)
console.log(urlRef.hostname)
console.log(urlRef.pathname)
console.log(urlRef.query)
let login = urlRef.query;
console.log("name is "+login.name)
console.log("age is "+login.age)
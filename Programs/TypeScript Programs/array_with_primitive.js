let names = [];
console.log("Size of array " + names.length);
names.push("Ravi");
names.push("Ramesh");
names.push("Ajay");
names.push("Vijay");
names.unshift("Mahesh");
console.log("Size of array " + names.length);
names.pop();
names.shift();
names.forEach(n => console.log(n));
let res1 = names.find(v => v == "Ravi"); // if name present it return that name
let res2 = names.find(v => v == "Dinesh"); // if name not present it return undefined. 
console.log(res1);
console.log(res2);
let res3 = names.findIndex(v => v == "Ravi"); // if name present it return that name index position 
let res4 = names.findIndex(v => v == "Dinesh"); // if names not present it return -1
console.log(res3);
console.log(res4);

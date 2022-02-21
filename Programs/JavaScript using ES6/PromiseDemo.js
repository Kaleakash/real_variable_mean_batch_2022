// User defined promise ES5 style 
var obj1  = new Promise(function(resolve,reject){
    resolve("Task done successfully")
})

obj1.then(function(data){
    document.write(data)
}).catch(function(err){
    document.write(err)
})
// User defined promise ES6 style 

let obj2 = new Promise((resolve,reject)=> {
        reject("Failure ")
})

obj2.then(data=>document.write(data)).catch(err=>document.write(err))
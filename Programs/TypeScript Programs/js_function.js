function display() {
    console.log("Normal JS function")
}
display();
function add(a,b){
    var sum =a+b;
    console.log(a+" "+b)
    console.log("sum of two number "+sum);
}
add(10,20);
add(10.20,20.20);
add("Raj", "Deep")
add(20);
add();

function info() {
    //return 100;
    return true;
    //return "Welcome"
}
var msg = info();
console.log(msg)
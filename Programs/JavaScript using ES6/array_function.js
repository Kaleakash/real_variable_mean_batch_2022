let num = [10,20,30,40,50];
document.write("Using for loop<br/>")
for(let i=0;i<num.length;i++){
    document.write("<br/> Value of i is "+num[i]);
}
document.write("<br/>Display the value using callback")
num.forEach(dis1);
function dis1(n,i){
document.write("<br/>Value using normal function with callback "+n+"Index value "+i);
}
let dis2 = function(n,i){
    document.write("<br/>Value using expression style funtion with callback "+n+" Index value "+i);
}
document.write("<br/>Display the value using callback")
num.forEach(dis2);
// let dis2 = function(n,i){
// document.write("<br/>Value using expression style funtion with callback "+n+" Index value "+i);
// }
num.forEach(function(n) {
    document.write("<br> Value of n using anonymous funtion "+n)
})
num.forEach(n=>document.write("<br/> Value of n using arrow style "+n));


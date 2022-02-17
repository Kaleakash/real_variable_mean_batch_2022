let num = [10,20,30,40];
document.write("<br/> Using for loop<br/>")
for(let i=0;i<num.length;i++){
    document.write("<br/> Value of i is "+num[i]);
}
document.write("<br/>using for in loop<br/>")
for(let i in num){
    document.write("<br/>Index number "+i+" Value is "+num[i]);
}
document.write("<br/> usign for of loop")
for(let n of num){
    document.write("<br/> Value is "+n);
}
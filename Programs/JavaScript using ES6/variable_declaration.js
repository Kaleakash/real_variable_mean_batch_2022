var a=10;       // int a=10;
a=20;       // re-initialization 
var a=30;   // re-declaration withi initialization, int a=20;
document.write("Value of a "+a);
// float a;
// int a;
let b=20;
b=30;
//let b=40;
//document.write("Value of b "+b);  // re-declaration not possible. 

for(var i=0;i<100;i++){

}
document.write("<br/> Value of i is "+i);
let k=0;
for(let j=0;j<100;j++){
    k=j;
}
//document.write("<br/> VAlue of j is "+j);
document.write("<br/>Value of j using k variable "+k);
let c=200;
c=400;
const d=1000;
//d=2000;           Error in code can't change the value. 
var obj;
function fun1() {
    setTimeout("fun2()",3000);      // it execute task only once 
    //alert("Hi")
    obj = setInterval("fun3()",1000);       // it will execute this task again and again 
}
function stop() {
    clearInterval(obj);
}
function fun2() {
    //alert("Function called...")
    document.getElementById("obj1").innerHTML="Welcome to JS"
}

var i=0;
function fun3() {
    //document.getElementById("obj2").innerHTML="Welcome to JavaScript"
    // document.getElementById("obj2").innerHTML=i
    // i++;
    if(i%2==0){
        document.getElementById("obj3").style.color="RED";
        document.getElementById("obj3").style.fontSize="30px";
        //document.getElementsByTagName("body")[0].style.backgroundColor="Yellow";
        document.getElementsByTagName("body")[0].style.backgroundImage="https://media.gettyimages.com/photos/miniature-pineapples-on-white-picture-id86056557?k=20&m=86056557&s=612x612&w=0&h=SqSnC9Mt4W1RN_-l8ueomUOI8rc-yl1pX1G3ROv9I_k="
    }else {
        document.getElementById("obj3").style.color="GREEN";
        document.getElementById("obj3").style.fontSize="20px";
        //document.getElementsByTagName("body")[0].style.backgroundColor="Orange";
        document.getElementsByTagName("body")[0].style.backgroundImage="https://media.gettyimages.com/photos/honey-crisp-apples-picture-id1291501684?k=20&m=1291501684&s=612x612&w=0&h=xJcDwa8pL4uFLNaBSOE_tb_cwvTDqiiJOcJMw254XGY="
    }
    i++;
}
function addData() {
var name1 = "Raj Deep";
var name2 = "Ajay Kumar";
sessionStorage.setItem("obj1",name1);
localStorage.setItem("obj2",name2);
}

function retrieveData(){
    var name3 = sessionStorage.getItem("obj1");
    var name4 = localStorage.getItem("obj2");
    document.getElementById("a").innerHTML = "VAlue from session storage "+name3;
    document.getElementById("b").innerHTML = "VAlue from local storage "+name4;
}

function removeData() {
    sessionStorage.removeItem("obj1");
    localStorage.removeItem("obj2");
}
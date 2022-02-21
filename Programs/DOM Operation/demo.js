function addData() {
let name = document.getElementById("user").value;
let age = document.getElementById("age").value;
// creating new tag ie p
  var pTag= document.createElement("p");        // tag reference is ready 
  let pTagContent = document.createTextNode("Name "+name+" Age "+age)  // content is ready 
  
  //<a href="#" onClick="deleteData()">X</a>
  let aTag = document.createElement("a");
  let aTagContent = document.createTextNode(" X");
  aTag.setAttribute("href","#");
  aTag.setAttribute("onClick",'deleteData1('+pTag+')');
  aTag.appendChild(aTagContent);

  pTag.appendChild(pTagContent);                // content is child for p tag 
  pTag.appendChild(aTag);
  
  //let bodyTag = document.getElementsByTagName("body")[0]
  //bodyTag.appendChild(pTag);
  
  
  let divTag = document.getElementById("menu"); // got refence of div tag using id 

  divTag.appendChild(pTag);         // added p tag to div as child tag 

  document.getElementById("user").value=""
  document.getElementById("age").value=""
}

function deleteData1(pTag){
    console.log("Event fired...")
    //obj.remove();
   // pTag.remove();
}
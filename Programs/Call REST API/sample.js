function loadData() {
    fetch("https://fakestoreapi.com/products").
    then(res=>res.json()).
    then(data=>{
        //console.log("Number of records are "+data.length)
        data.forEach(p=> {
    let breakTag = document.createElement("br")
    let buttonTag = document.createElement("input");
    buttonTag.setAttribute("type","button");
    buttonTag.setAttribute("value","Add Product");
    //buttonTag.setAttribute("onClick","storeProduct()");
    buttonTag.setAttribute("onClick",'storeProduct(" '+p.title+' ","'+p.price+' ")')
    let imgTag = document.createElement("img");
    imgTag.setAttribute("src",p.image);
    imgTag.setAttribute("class","myClass");
//document.getElementsByTagName("body")[0].appendChild(imgTag);
document.getElementById("obj").appendChild(imgTag);
document.getElementById("obj").appendChild(breakTag)
document.getElementById("obj").appendChild(buttonTag);
        })
    }).
    catch(error=>console.log(error)); 
}

function storeProduct(title,price){
    //console.log("Event Fired")
    //console.log(title+", "+price);
    let cartDetails = document.createElement("p");
    let cartInfo = document.createTextNode(title+" "+price);
    cartDetails.appendChild(cartInfo);
    document.getElementById("cart").appendChild(cartDetails);
}
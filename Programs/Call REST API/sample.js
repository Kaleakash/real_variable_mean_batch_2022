function loadData() {
    fetch("https://fakestoreapi.com/products").
    then(res=>res.json()).
    then(data=>{
        //console.log("Number of records are "+data.length)
        data.forEach(p=> {
    let imgTag = document.createElement("img");
    imgTag.setAttribute("src",p.image);
    imgTag.setAttribute("class","myClass");
//document.getElementsByTagName("body")[0].appendChild(imgTag);
document.getElementById("obj").appendChild(imgTag);
        })
    }).
    catch(error=>console.log(error)); 
}
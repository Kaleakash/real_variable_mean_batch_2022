async function loadData(){
    // fetch("https://fakestoreapi.com/products").
    // then(res=>res.json()).then(data=>console.log(data)).
    // catch(err=>console.log(err));
    try{
    let obj = await fetch("https://fakestoreapi.com/products");
    let result = await obj.json();
    console.log(result)
    }catch(e){
        console.log("Error generated")
    }
}
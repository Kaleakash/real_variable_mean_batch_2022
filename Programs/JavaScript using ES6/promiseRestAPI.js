function loadData() {
    fetch('https://fakestoreapi.com/products').
    then(data=>data.json()).
    then(data=>{
        document.write(data.id)
    }).
    catch(err=>console.log(err));
}
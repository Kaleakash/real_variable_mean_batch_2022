interface Product {
    pid:number;
    pname:string;
    price:number;
}

let products:Array<Product>=[];
let msg;
function addProduct() {
    let pidValue = parseInt((<HTMLInputElement>document.getElementById("pid")).value)
    let pnameValue = (<HTMLInputElement>document.getElementById("pname")).value
    let priceValue = parseFloat((<HTMLInputElement>document.getElementById("price")).value)
    
    let product:Product={pid:pidValue,pname:pnameValue,price:priceValue};

    let res = products.find(p=>p.pid==pidValue);
    if(res==undefined){
        products.push(product);
        msg = "Record added successfully";
    }else {
        msg = "Record didn't add";
    }
    console.log(msg);

}
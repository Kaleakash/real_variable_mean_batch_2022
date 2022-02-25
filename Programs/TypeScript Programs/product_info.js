let products = [];
let msg;
function addProduct() {
    let pidValue = parseInt(document.getElementById("pid").value);
    let pnameValue = document.getElementById("pname").value;
    let priceValue = parseFloat(document.getElementById("price").value);
    let product = { pid: pidValue, pname: pnameValue, price: priceValue };
    let res = products.find(p => p.pid == pidValue);
    if (res == undefined) {
        products.push(product);
        msg = "Record added successfully";
    }
    else {
        msg = "Record didn't add";
    }
    console.log(msg);
}

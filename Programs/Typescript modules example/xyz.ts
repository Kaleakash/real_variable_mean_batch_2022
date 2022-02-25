export let name:string = "Raj Deep";
export function dis3() {
    console.log("This is dis3 function part of xyz module")
    dis4();
}
function dis4() {
    console.log("This is dis4 function part of xyz module")
}

export function display() {
    console.log("This is display function part of xyz module")
}
// function declaration
function sapa(nama : string) {
    console.log("Halo, aku" + nama);
}
sapa("tanwi")

// Anonymous function
const pickers = function (name : string, role : string){
    return name + role
}

let pick = pickers ("estes", " jungler")
console.log("saya ingi mengguakan " + pick);

// Arrow Function
let multiplication = (a :number, b: number)=>{
    return a * b
}
let result = multiplication(8, 7)
console.log(result);

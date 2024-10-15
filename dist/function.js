"use strict";
// function declaration
function sapa(nama) {
    console.log("Halo, aku" + nama);
}
sapa("tanwi");
// Anonymous function
const pickers = function (name, role) {
    return name + role;
};
let pick = pickers("estes", " jungler");
console.log("saya ingi mengguakan " + pick);
// Arrow Function
let multiplication = (a, b) => {
    return a * b;
};
let result = multiplication(8, 7);
console.log(result);

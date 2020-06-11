// let txt = process.argv[2];


const capitalize = process.argv[2]; 
let capitalized = "";

for (let i=0; i < capitalize.length; i++) {
    if (i % 2 !== 0) {
        capitalized += capitalize[i].toUpperCase()
    }
    else 
        capitalized += capitalize[i].toLowerCase();
    }

console.log(capitalized);
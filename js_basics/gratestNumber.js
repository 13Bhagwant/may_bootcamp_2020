let x =parseInt(process.argv[2]);
let y =parseInt(process.argv[3]);
let z =parseInt(process.argv[4]);
if (x > y && x > z){
    console.log(x);
}
else if(y > x && y > z){
    console.log(y);
    
}
else{console.log(z);
}
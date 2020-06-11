// function reverseString(str) {
//     let splitString = str.split("");
//      let reverseArray = splitString.reverse(); 
//     let joinArray = reverseArray.join(""); 
//     return joinArray;
// }

// console.log(reverseString("hello"));
// console.log(reverseString("ron"));
// console.log(reverseString("codeCore"))

/**************************************** */

// function reverseString(str) {
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("hello"));
// console.log(reverseString("ron"));
// console.log(reverseString("codeCore"))

/************************************** */
function reverse(str)
{ 
    let reverse_str = " ";
    for(let i=str.length-1;i>=0;i--)
    {reverse_str+=str[i];}
    return reverse_str;
}
console.log(reverse("hello"));


let numbers=[99, 77, 5588, 33, 343, 11]
function largestNumber(array){
    let largest = -Infinity;
    for(let i=0; i < array.length; i++){
        if(array[i]>largest){
            largest=array[i]
        }
    }
    return largest
  }
console.log(largestNumber(numbers));

//********************************************************** */
let array=[-1-2,0,-3,-4]

function largest_val(array){
   return Math.max(...array)  
}

console.log(largest_val(array));
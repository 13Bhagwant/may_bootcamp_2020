function areValuesArray(arr){
    for(let i=0;i<arr.length;i++){
      if (!Array.isArray(arr[i])) {
        return false
      };
    //Array.isArray(arr)
    }
    return true
  }
  
console.log(  areValuesArray([[1], [2], [4, 5]]));

console.log(  areValuesArray([1, [2], [6, 7, 8]]));
  
console.log(  areValuesArray([[1], 2, [6, 7, 8]]));
  
console.log(  areValuesArray(['true', 'false']));

const occurencesOf = function (char, str) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) count++
    }
    return count
  }
  
  let allOccurencesOf = function (char, array) {
    const output = []
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        for (let y = 0; y < array[i].length; y++) {
            if (array[i][y] === char) {
              count += 1;
            } 
        }
        output.push(count)
    }    
  return output;
  }
  
  // console.log (allOccurencesOf("l", ["hello", "world", ""]));
  
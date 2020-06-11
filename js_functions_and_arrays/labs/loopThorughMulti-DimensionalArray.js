const my_array = [[2,3,4], ["Hello CodeCore", 1, true]];
const numbers = [[1,2,3],[4,5,6],[7,8,9,10]]

function printMulti(array) {
for(let i = 0; i < array.length; i++) {
    for(let j = 0; j < array[i].length; j++) {
        console.log(array[i][j]);
        }
    }
}

console.log(printMulti(my_array));
console.log(printMulti(numbers));



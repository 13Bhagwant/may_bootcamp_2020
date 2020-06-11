function product(arr) {
    let count=1
    for( let total of arr){
        if (typeof total === 'number') {
                count *=  total    
            }
        }
        return count
}

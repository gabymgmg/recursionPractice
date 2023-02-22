function productOfArrays(arr){
    if(arr.length==1){
        return arr
    }
    else {
        return arr.shift()*productOfArrays(arr)
    }
}
console.log(productOfArrays([1,2,3]))
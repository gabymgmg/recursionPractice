function sumIntegers(arr){
    if(arr.length==0){
        return 0
    }
    return arr.shift()+sumIntegers(arr)
}
console.log(sumIntegers([1,1,2,3])) //7 
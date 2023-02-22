function sumAllNumbers(num){
    // base case
    if(num==1){
        return 1
    }
    return num+sumAllNumbers(num-1)
}
console.log(sumAllNumbers(4))
function findExponent(num,result){
    let exp = 0
    //base case
    if(num === result){
        return 0
    }
    
    return findExponent(num*num)
}
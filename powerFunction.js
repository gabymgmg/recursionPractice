function powerFunction(base,exp){
    if(exp==0){
        return 1
    }
    return base*powerFunction(base,exp-1)
}
console.log(powerFunction(2,3))
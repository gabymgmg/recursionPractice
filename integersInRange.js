//Write a JavaScript program to get the integers in range (x, y)

function integerInRange(x,y){
    //base case
    if(x==y-1){
        return []
    }
    return [x+1].concat(integerInRange(x+1,y))
}
console.log(integerInRange(25,30))
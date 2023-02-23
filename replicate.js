//The function should return an array containing repetitions of the number argument. 
//For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, 
//return an empty array.

function replicate(rep, num) {
    if (rep < 0) {
        return []
    }
    [num].concat(rep-1,num)
}
console.log(replicate(3, 5)) // [5, 5, 5]

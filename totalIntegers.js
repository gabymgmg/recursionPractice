function totalIntegers(arr) {
    let counter = 0
    function countingNum(arr) {
        arr.forEach(element => {
            if (typeof element === 'object') {
                return countingNum(element)
            }
            if (typeof element == 'number') {
                counter++
            }
        });
    }
    countingNum(arr)
    return counter
}
var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7
console.log(seven);


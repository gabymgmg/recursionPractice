//Write a function that sums squares of numbers 
//in list that may contain more lists

l = [10, [[10], 10], [10]]
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function SumSquares(arr) {
    if (arr.length == 0) return 0
    let result = 0
    let partOfArr = arr.shift()
    if (typeof partOfArr === 'object') {
        result += SumSquares(partOfArr)
    }
    if (typeof partOfArr === 'number') {
        result += partOfArr * partOfArr
    }
    return result + SumSquares(arr)
}

// different solution: 
function SumSquaresOption2(arr) {
    let result = []
    function square(arr) {
        arr.forEach(element => {
            if (typeof element === 'object') {
                return SumSquares(element)
            }
            if (typeof element === 'number') {
                result.push(element * element)
            }
        });
    }
    square(arr)
    return result.reduce((element, acc) => {
        return element + acc
    })
}
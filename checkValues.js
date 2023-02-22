// Write a function called all which accepts an array and a 
// callback and returns true if every value
// in the array returns true when passed as parameter to the callback function

function all(arr,callback){
    let numOfArr = arr.slice(arr.length-1)
    if(arr.length==0){
        return true
    }
    if (callback(numOfArr)==true){
        arr.length = arr.length-1
        return all(arr,callback)
    }
    else {
        return false
    }
}

var allAreLessThanSeven = all([1,2,5], function(num){
	return num < 7;
});
console.log(allAreLessThanSeven)

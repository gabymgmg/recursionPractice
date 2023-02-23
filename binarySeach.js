function binarySearch(arr,num,min,max){
    let middle = Math.floor((min+max)/2)
    if(num == arr[middle]){
        return middle
    }
    if(num < arr[middle]){
        return binarySearch(arr,num,min,middle-1)
    }
    if(num>arr[middle]){
        return binarySearch(arr,num,middle+1,max)
    }
}

function callBinaryS(arr,num){
    let sortedArr = arr.sort((a,b)=>a-b)
    return binarySearch(sortedArr,num,0,sortedArr.length-1)
}
console.log(callBinaryS([10, 20, 30, 50, 60, 80, 110, 130, 140, 170],60))//4
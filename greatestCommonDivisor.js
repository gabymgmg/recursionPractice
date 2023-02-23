// Write a JavaScript program to find the greatest common 
// divisor (gcd) of two positive numbers. 

function greatestCommonDivisor(num1,num2){  
    let reminder = num1%num2
    // base case
    if(reminder === 0){
        return num2
    }
    return greatestCommonDivisor(num2,reminder)
}
console.log(greatestCommonDivisor(50,42))

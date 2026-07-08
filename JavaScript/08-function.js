// function Countvowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//             count++
//         }
//     }
//     console.log(count)
// }
// Countvowels("Environment")

// Type-A function ->

// function myFunction(){
//     console.log("Today is a good day")
//     console.log("We learn JS function")
// }
// myFunction()    

// Type-B function (parameterized function) -> 

// function myFunction(a,b){   // a & b are the parameters
//     console.log(a + b)
// }
// myFunction(3,5) //  3 & 5 are the arguments
// myFunction(400,800)

// For each loop ->

// let arr = [1,2,3,4,5,6,7,8,9]
// arr.forEach(function printVal(val){ // Normal function
//     console.log(val)
// })

// arr.forEach((val) =>{   // Arrow function
    // console.log(val)
// })

// let arr1 = ['Goa', 'Pune', 'Thane', 'Mumbai']
// arr1.forEach((val) =>{
//     console.log(val)
// })

// Example of a map function

// let nums = [4,5,6,8,9,3,2]
// let newArr = nums.map((val) =>{
//     return val*val
// })
// console.log(nums)
// console.log(newArr)

// Example of a filter method ->
// Print only even nos. in the array

// let arr2 = [2,3,4,5,6,7,8,9,0]
// let evenArr = arr2.filter((val) => {
//     return val % 2 === 0
// })
// console.log(arr2)
// console.log(evenArr)

// Q. we are given array of marks of student. Filter 

let marks = [89,86,34,91,32,64,92,45]
let goodMarks = marks.filter((val1) => {
    return val1 >= 90
})
console.log(goodMarks)
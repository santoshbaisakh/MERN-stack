// Swapping of 2 numbers using 3rd variable

// let a = 4
// let b = 6
// let t;
// console.log("Before swapping: ",a,"and",b)
// t = a
// a = b
// b = t
// console.log("After swapping :", a ,"and", b)

// Without using 3rd variable

// let a = 10
// let b = 15
// console.log("Before swapping : ",a," and ",b)
// a = a + b
// b = a - b
// a = a - b
// console.log("After swapping : ",a," and ",b)

// const cars = ["BMW", "Volvo", "Audi"]

// for (let i of cars) {
//   console.log(i)
// }

// Factorial of a number using loops

// let fact = 1
// let n = 5
// for(let i = n; i > 0 ; i--){
//     fact = fact * i 
// }
// console.log("Factorial of the number is "+fact)

// Largest number in the array

// let arr = [10,20,42,30,56,11, 25 , 97 , 66 , 74] 
// let max = arr[0]
// for(let i = 1; i < arr.length ; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
// }
// console.log("the largest number is "+max)

// Remove first element from an array

// let arr = [2,8,6,5,4]
// console.log(arr)
// arr.shift()
// console.log(arr)

// let arr = [10,20,42,30,56,11, 25 , 97 , 66 , 74] 
// let max = arr[0]
// let min = arr[0]
// for(let i = 1; i < arr.length ; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }
// console.log("The largest number is "+max+" and the smallest number is "+min)

// Count vowels in a string

// const str = "Today class is awesomeU"
// let count = 0;
// for(let x of str){
//     if(x === "a" || x === "A" || x === "e" || x === "E" || x === "i" || x ==="I" || x === "o" || x === "O" || x === "u" || x === "U"){
//         count++
//     }
// }
// console.log("The numbers of vowels in the array is "+count)

// Remove duplicate elements from the array

let arr =  [10,20, 30 , 50 , 40 ,20 , 10] 

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            arr.splice(j, 1);
            j--; // Check the new element at index j
        }
    }
}

console.log(arr);
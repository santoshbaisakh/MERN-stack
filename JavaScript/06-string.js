// let str = "java script"
// console.log(str)    // java script
// console.log(str.length)   // 11
// console.log(str[0]) // j
// console.log(str[3]) // a
// console.log(str[4],"Space") // space

// String literals and interpolation ->

// let obj = {
//     item : "Laptop",
//     price : 50000,
//     brand : "ASUS"
// }

// let object = `the cost of the ${obj.item} is ${obj.price} and the brand is ${obj.brand}`
// console.log(object)

// let item = "Laptop"
// let price = 50000
// let brand = "ASUS" 

// let object = `the cost of the ${item} is ${price} and the brand is ${brand}`
// console.log(object)

// escape character ->

// let str = "Javascript"
// console.log(str)    // Javascript

// let str1 = "Java\nScript"
// console.log(str1)   // Java
//                     // Script

// let str2 = "Java\tScript"
// console.log(str2)   // Java   Script

// Uppercase and Lowercase ->

// let s = "Hello World"
// let nit = s.toUpperCase()
// console.log(s)    //Hello World

// console.log(nit)   // HELLO WORLD

// String can not change their original character so that we will take another variable to do this

// let str = "WEB DEVELOPMENT"
// let nit = str.toLowerCase()
// console.log(str)
// console.log(nit)

// Trim ->

// let str = "     Today is a good day"
// console.log(str.trim())
// console.log(str.replaceAll(" "," "))

// Concatenation ->

// let str1 = "java"
// let str2 = " script"
// let str3 = " is a good language"
// let res = str1.concat(str2)
// console.log(res)
// let res1 = str1 + str2 + str3
// console.log(res1)

// Slice ->

// let str = "web development"
// console.log(str.slice(2,4)) // b 
// console.log(str.slice(4,7)) // dev
// console.log(str.slice(0,5)) // web d
// console.log(str.slice(3,8)) // b dev
// console.log(str.slice(2,6)) // b de

// replace and replace all ->

// let str = "today is a good day and we read js in this day"
// console.log(str.replace("day","night")) // tonight is a good day and we read js in this day
// console.log(str.replaceAll("day","night")) // tonight is a good night and we read js in this night

// charAt  ->

let str = "web socket API"
console.log(str.charAt(0)) // w
console.log(str.charAt(6)) // c
console.log(str.charAt(8)) // e
console.log(str.charAt(12)) // p
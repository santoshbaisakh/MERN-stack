// Number ->

// let age = 35
// console.log(age) //35
// console.log(typeof(age)) //number

// BigInt

// var a = BigInt(678)
// console.log(a)  //678n - n is like a suffix of this big integer value
// console.log(typeof(a))  //bigInt

//String

// let b = "web bocket"
// console.log(b)  // "web bocket"
// console.log(typeof(b))  // string

// Null 

// const d = null
// console.log(d)  // null
// console.log(typeof(d))  // object

// Undefined

// let mySalary;
// console.log(mySalary)   // undefined
// console.log(typeof(mySalary))   // undefined

// Boolean

// let isSalaryCredited = false
// console.log(isSalaryCredited)   // false
// console.log(typeof(isSalaryCredited))   // boolean

// Symbol

// let y = Symbol("Hello") 
// console.log(y)  // Symbol(Hello)
// console.log(y.description)  // Hello
// console.log(typeof(y))  // symbol

// Symbols are unique 
// It is used to create hidden or private properties.
// It is useful in large size application

// const sym1 = Symbol("id")
// const sym2 = sym1
// console.log(sym1 === sym2)

// Reference Datatype ->
// array ->

// let arr = [34,67,98,32,70,65,64,30,20,21]
// console.log(arr)
// console.log(arr[3])     //32
// console.log(arr[6])     //64
// console.log(typeof(arr))    //object

// Object ->

// let hari = {
//     "name" : "Hari Babu",
//     "Phone-no" : 6765645345,
//     "Addresss" : "Bhubaneswar",
//     "Career" : "Good"
// }

// console.log(hari)   // Total details
// console.log(hari.name)
// console.log(hari["Phone-no"])
// console.log(hari.Career)
// console.log(hari.Addresss)
// console.log(typeof(hari))   // Object


function my_schedule(){
    console.log("I wake up at 5 am")
    console.log("Then take a good shower")
    console.log("Eat breakfast with a cup of tea")
}
my_schedule()
my_schedule()
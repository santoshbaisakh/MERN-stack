// for loop ->

// print "web development" 10 times using for loop
// for (let i = 0; i < 10; i++) {
//     console.log("web development");
// }

// calculate the sum of 1 to 10 (using for loop)
// let sum = 0;
// for (let i = 1; i <= 10; i++) {
//     sum += i;
// }
// console.log("Sum of 1 to 10:", sum);

// while loop ->
// print "Web bocket" 5 times (using while loop)
// let i = 1
// while(i <= 5){
//     console.log("Web bocket");
//     i++
// }

// do while loop ->
// print "Development" 5 times (using do-while loop)

// let j = 1
// do{
//     console.log("Development");
//     j++
// }while(j <= 5)

// note :- statement will print one time then it will check the condition and if it is true then it will print again otherwise it will stop

// i = 1, development
// i = 2, development
// i = 3, development
// i = 4, development
// i = 5, development  

//for-of loop ->

let str = "Hello World"
let arr = [1, 2, 3, 4, 5]
let size = 0 
for(let i of str){
    console.log(i);
}
for(let i of arr){
    console.log(i);
    size++
}
console.log("Size of array is:", size)
let student={
    name : "Babu Mishra",
    age : 21,
    CGPA : 8.5,
    isPass : true,
    career : "Web Developer"
}
for(let i in student){
    console.log("key = ", i , "Value = ",student[i])
}
console.log(typeof(null))
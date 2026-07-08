// Array ->

// let arr = [23,45,78,90,84,54,32,21,41]
// console.log(arr)    // [ 23, 45, 78, 90, 84, 54, 32, 21, 41 ]
// console.log(arr.length) // 9
// console.log(arr[0]) // 23
// console.log(arr[3]) // 90
// console.log(arr[4]) // 84

// loop over an array ->

// let heros = ["Ironman", "Spiderman", "Batman", "Superman", "Hulk", "Thor"]
// for(let i = 0; i < heros.length; i++){
//     console.log(heros[i]);
// }

// for( let i of heros){
//     console.log(i);
// }

// Array methods ->

// let food_Items = ["Pizza", "Burger", "Momos", "Noodles", "Sandwich", "French Fries"]
// console.log(food_Items)   // [ 'Pizza', 'Burger', 'Momos', 'Noodles', 'Sandwich', 'French Fries' ]
// food_Items.push("dahibara")
// console.log(food_Items)
// food_Items.pop()
// console.log(food_Items)
// food_Items.unshift("Chowmein")
// console.log(food_Items)
// food_Items.shift()
// console.log(food_Items)

// toString() method ->

// let marks = [34,56,78,90,45,67,89]
// console.log(marks)
// let mark = marks.toString()
// console.log(mark)
// // console.log(marks.toString())   // 34,56,78,90,45,67,89

// Concat ->

// let food = ["Pizza", "Burger", "Momos", "Noodles", "Sandwich", "French Fries"]
// let drink = ["Coke", "Pepsi", "Sprite", "Fanta", "Thums Up"]
// let vegetable = ["potato", "onion", "brinjal"]
// let res = food.concat(drink)
// console.log(res)
// let res1 =[food + drink + vegetable]
// console.log(res1)

// Slice ->

// let arr = [23,45,78,90,84,54,32,21,41]
// console.log(arr.slice(2,5)) // 78,90,84
// console.log(arr.slice(0,6)) // 23,45,78,90,84,54
// console.log(arr.slice(4,8)) // 84,54,32,21
// console.log(arr.slice(2))   // 78,90,84,54,32,21,41
// console.log(arr.slice(-3))  // 32,21,41
// console.log(arr.slice(4,-2))    // 84, 54, 32

// splice ->

// let months = ["Jan", "March", "April", "June"]
// console.log(months)
// months.splice(1,0,"feb")
// console.log(months)
// months.splice(4,0,"may")
// console.log(months)
// months.splice(2,3)
// console.log(months)

// Task ->

let marks = [78,90,54,32,98,25,70]
let sum = 0
for(let i = 0; i < marks.length; i++){
    sum = sum + marks[i]
}
console.log(sum)
let avg = sum / marks.length
console.log("Average of all these numbers is ",avg)

let items = [789,543,590,432,489]
let i = 0
for(let val of items){
    console.log(`value of index ${i} = ${val}`) // initial value
    let offer = val / 10
    items[i] = items[i] - offer 
    console.log(`value after offer = ${items[i]}`)  // discounted value
    i++
}

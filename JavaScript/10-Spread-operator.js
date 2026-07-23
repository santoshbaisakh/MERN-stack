// Example 1 ->>

const arr1 = [1,2,3]
const arr2 = [...arr1,4,5,6]

console.log(arr2)

// Note -> ...arr1 spreads elements -> 1, 2, 3 then 4, 5, 6 are added.

//  Example.2 ->>>

const original = [10, 20, 30]
const copy = [...original]

console.log(copy)
console.log(original)

//  Example.3 ->>> (spread in an object)

const user = {
    name : "ravi",
    age : 25
}

const updateUser = {
    ...user,
    city : "Bhubaneswar"
}

console.log(updateUser)

// Example.4 ->> (Override) 

const user1 = {
    name : "ravi",
    age : 25
}

const updateUser1 = {
    ...user,
    age : 28,
    city : "Bhubaneswar"
}

console.log(updateUser)

//  Example.5 ->>

function add(a, b, c){
    return a + b + c
}

const nums = [1, 2, 3]

console.log(add(...nums))
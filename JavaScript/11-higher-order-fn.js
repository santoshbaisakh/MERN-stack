//  Function takes another function as an argument ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function greet(name) {
    return "hello " + name
}
function processUserinput(callback) {
    const name = "ravi"
    console.log(callback(name))
}

processUserinput(greet)

//  Note ->>>>>
//  processUserinput takes greet as a parameter.
//  It calls greet

//  Function returning another function (closure + HOF) ->>>>>>>>>>>>>

function multiplier(factor){
    return function(num){
        return num * factor;
    }
}

const calculate = multiplier(2)
console.log(calculate(5))

//  Note -> Multiplier return a function, return function remember "factor"
//  this is bith a closure + HOF
//  Here multiplier is a HOF because it returns another function inside it. 

//  Real-world-example (built-in-function) ->

const number = [1,2,3,4]

const square = number.map(function (num){
    return num * num;
})

console.log(square) //[1,4,9,16]
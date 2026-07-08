// let division = document.querySelector("div")
// console.log(division)

// let demo = division.getAttribute("id")
// console.log(demo)

// let para = document.querySelector("p")
// console.log(para.setAttribute("newclass","pigeon"))
// You can set the attribute name and value both things.

// let div = document.querySelector("div")
// div.style.backgroundColor = "cyan"
// div.style.color = "yellow"
// div.style.fontSize = "20px"
// div.style.fontFamily = "cursive"
// div.innerText = "NIT"
// // div.style.visibility = "hidden"
// div.style.textAlign = "center"

let newBtn = document.createElement("button")
newBtn.innerText = "click me"
console.log(newBtn)

let div = document.querySelector("div")
// div.append(newBtn)
// div.prepend(newBtn)
// div.after(newBtn)
// div.before(newBtn)

div.remove(newBtn)

let para = document.querySelector("p")
para.remove()
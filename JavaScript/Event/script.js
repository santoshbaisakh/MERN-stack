let demo = document.querySelector("#btn")
demo.onclick = (e) => {
    // console.log("Click me 1 time")
    // console.log(e)
    console.log(e.type)
    console.log(e.target)
}
let demo2 = document.querySelector("#btn1")
demo2.ondblclick = (evt) => {
    // console.log("Btn was clicked 2 times")
    console.log(evt.type)
    console.log(evt.target)
}

let test = document.querySelector("#para")
test.onmouseover = (evn) => {
    // console.log("I am inside the box")
    console.log(evn.type)
    console.log(evn.target)
}
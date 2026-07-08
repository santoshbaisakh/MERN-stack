let newBtn = document.querySelector("#button")
let current = "light"   // initial state
// let modes = ["white","pink","red","yellow","cyan","aqua","orange"]
let i = 0
newBtn.addEventListener("click", () => {
    // if(curMode === "light"){
    //     curMode = "dark";
    //     document.querySelector("body").style.backgroundColor = "black"
    // }else{
    //     curMode = "light";
    //     document.querySelector("body").style.backgroundColor = "white"
    // }
    
        // document.querySelector("body").style.backgroundColor = modes[i]
        // console.log(modes)
        // i++
        // if(i === modes.length){
        //     i = 0
        // }
    if(current === "light"){
        current = "white"
        document.querySelector("body").style.backgroundColor = "white"
    }else if(current === "white"){
        current = "pink"
        document.querySelector("body").style.backgroundColor = "pink"
    }
    else if(current === "pink"){
        current = "red"
        document.querySelector("body").style.backgroundColor = "red"
    }
    else{
        current = "yellow"
        document.querySelector("body").style.backgroundColor = "yellow"
    }
    console.log(current)
})
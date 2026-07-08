// Write a javascript function to calculate the sum of two numbers and
//  display the results in an HTML paragraph using DOM.

// function calculate_sum(a,b){
//     return a + b
// }
// let para = document.querySelector("p")
// para.append(calculate_sum(2,3))
// console.log(para)
// console.log(para.setAttribute("paaraa","Pigeonhole"))

// Create a program where clicking a button changes the background 
// color of the webpage using DOM manipulation.

// const button = document.getElementById("colorBtn");
// button.addEventListener("click", function(){
//     const colors = [
//         "red",
//         "blue",
//         "green",
//         "yellow",
//         "orange",
//         "purple",
//         "pink",
//         "cyan",
//         "lime",
//         "brown"
//     ];
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     document.body.style.backgroundColor = colors[randomIndex]
// });

// Write a Javascript function to check whether a number is even or odd and
// display the result on the webpage.

// function CheckEvenOdd(a){
//     if(a % 2 === 0){
//         return "even";
//     }
//     else{
//         return "odd";
//     }
// }
// let head = document.querySelector("#heading")
// head.append(CheckEvenOdd(15))
// console.log(head)

// Create a simple form with name and email fields. 
// Validate that both fields are not empty when the submit button is clicked

let form = document.querySelector("#dj");

form.onsubmit = function(event) {
    event.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;

    if (name == "" || email == "") {
        alert("Both fields are required!");
    } else {
        alert("Form submitted successfully!");
    }
};
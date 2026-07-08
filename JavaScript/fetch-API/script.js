// let URL = "https://dog.ceo/api/breeds/image/random"
// let demo = document.querySelector("#fact")

// let getFact = async () => {
//     console.log("Getting data......")
//     let response = await fetch(URL)
//     console.log(response)
//     let data = await response.json();
//     demo.innerHTML = data[0].message
// }

 function getUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json)    // convert response data -> json
    .then(data => {
        let list = document.getElementById("userlist")
        list.innerHTML = "";

        data.forEach(user => {
            let li = document.createElement("li");
            li.textContent = user.name;
            list.appendChild(li)
        });
    })
    
 }
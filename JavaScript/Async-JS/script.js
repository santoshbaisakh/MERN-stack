// // Asynchronous program ->

// // console.log("one")
// // console.log("two")
// // setTimeout(() => {
// //     console.log("hello")
// // },10000) // 10000ms = 10s
// // console.log("three")
// // console.log("four")
// // -----------------------------------------------------------------------------------------------------------

// // Callback function 

// // function sum(a,b){  // normal function
// //     console.log(a+b)
// // }
// // //  a & b are the parameter 
// // // here sum is a normal function 
// // function calc(a,b,sumCallback){ // main/callback function 
// //     sumCallback(a,b)
// // }
// // //  sumCallback -> a function passed as an argument.
// // //  inside calc it call the callback function
// // calc(1,4,sum)   // function passed as an argument - {sum}

// // function username(name){
// //     console.log("hello "+name)
// // }
// // function user(name, callback){
// //     callback(name)
// // }
// // user("rakesh",username)

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId)
//         if(getNextData){
//             getNextData()
//         }
//     }, 4000);   // 400ms = 4s
// }

// // callback hell problem -> 
// console.log("getting data-1...........")
// getData(1,() => {
//     console.log("getting data-2.......")
//     getData(2, () => {
//         console.log("getting data-3........")
//         getData(3, () => {
//             console.log("getting data-4........")
//             getData(4, () => {
//                 console.log("getting data-5..........")
//                 getData(5)
//             })
//         })
//     })
// })

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId)
//         if(getNextData){
//             getNextData()
//         }
//     }, 4000);   // 400ms = 4s
// }

// // callback hell problem -> 
// console.log("getting data-1...........")
// getData(1,() => {
//     console.log("getting data-2.......")
//     getData(2, () => {
//         console.log("getting data-3........")
//         getData(3, () => {
//             console.log("getting data-4........")
//             getData(4, () => {
//                 console.log("getting data-5..........")
//                 getData(5)
//             })
//         })
//     })
// }) 
//   Example of .then and 
// const getPromise = () => {
//     return new Promise((resolve,reject) => {
//         console.log("I am a promise")
//         resolve("success")
//         reject("error")
//     })
// }

// let promise = getPromise();

// promise.then((res) => {
//     console.log("promise fulfilled",res)
// })

// promise.catch((err) => {
//     console.log("Promise rejected",err)
// })

// Async & await ->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function API(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Wheather APP")
//             resolve("success")
//             //reject("error")
//         },5000)
//     })
// }

// async function getWheatherData(){
//     await API
// }

function getData(dataID){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("success")
            // reject("error")
        },5000)
    })
}

async function getAllData(){
    await getData(1);
    await getData(2);
    await getData(3);
    await getData(4);
    await getData(5);
}

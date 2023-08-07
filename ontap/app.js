
// destructoring 
 
//object
// const user = {
//     name: "javascript",
//     age: 30,
//     job:"full stack"
// }
// const name = user.name
// const age = user.age
// const job = user.job
// const { name : userName , age, job } = user

// console.log(userName, age, job)


// const listArr = [
//     1,
//     function (a, b) {
//         return a + b
//     }
// ]

// const [value, totalSum] = listArr

// const total = totalSum(1, 3)
// console.log(total)

// spred syntax

// const user2 = {
//     name: "javascript",
//     age: 30,
//     job:"full stack"
// }

// const userClone = { ...user2 }


// resparametor

// const handel = (a,b,d,...c) => {
//     return c
// }
// const value = handel(1, 2, 3, 4, 5, 6, 7, 8)

// console.log(value)


let name = {
    age : 30,
}


// || dung de check cac kieu du lieu 
// ?? no dung de check null hoac undefine
// console.log(name?.name)


// es6 modules

// fetch(API_USER, {
//     method:"GET"
// })
//     .then(function (res) {
//     return res.json()
// })


//dom 

// const h2 = document.createElement("h2");
// h2.textContent = "Hello"

// document.body.appendChild(h2)

// local seccion 
//4 getItem ("key")
//3 setItem ("key",value)
//2 removeItem ("key")
//1 clear 

// cookie --> luwu co han 4kb 


const age = 10
age = "hello"
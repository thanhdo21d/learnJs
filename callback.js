// function hello(name,callback) {
//     let myName = name + "hello"
//     return callback(myName)
// }

// var result = hello("thanh do", function (abc){
//     return abc
// })
// alert(result)

// // callback la 1 ham duoc truyen vao lam tham so cua 1 ham khac


// function hi(name) {
//     let myName = name + "xin chao"
//     return myName
// }

// let showMyName = hi(" thanh do ")

// for in 


 
// i++ se lay gia tri truoc khi cong
// ++i se lay gia tri sau khi cong

// for (let i = 0; i < 5; ++i){
//     console.log(i)
// }

// const students = [
//     "hoc sinh A",
//     "hoc sinh B",
//     "hoc sinh C",
// ]
// for (let i = 0; i < students.length; ++i){
//     console.log(students[i])
// }

// key value
// let student = {
//      0 : "hoc sinh A",
//      1 : "hoc sinh B",
//      2 : "hoc sinh C",
//      3 : "hoc sinh D",
// }

// for (let students in student) {
//     console.log(students)
// }

// let students = [2, 3, 4, 5, 6, "javascript"]
// index  se tinh tu vi tri thu 0 trong mang 
// length  se tinh tu vi tri thu 1
// co the truy suat gia tri cua mang bang index 

// console.log(String(students))

//join() // chuyen qua String
// push them phan tu vao cuoi mang 
// unshift them phan tu vao dau mang 
// console.log(students.join(" - "))
// pop se xoa phan tu o cuoi mang 
// shift se xoa phan tu o dau mang 
// let user = students.unshift(" reactjs")

// students.shift()

//slice() khong truyen vao tham so thi se la sao chep mang 
// slice() 
// let students = [2, 3, 4, 5, 6, "javascript"]

 
// const arr = students.slice("1","4")
// console.log(arr)

// sort  
// a - b thi tang dan
// b - a thi giam dan

 
// const newArr = [1,2,7, 4,6,2000,1000, 89, 3, 23, 6, 8]
    
//  console.log(newArr.sort((a,b)=> a - b ))



// function first() {
//     setTimeout(function () {
//         console.log("1")
//     },0)
// }
// function second() { 
//     console.log("2")
// }

// first() 
// second()

// function demoCallBack(subject, callback) {
//     console.log(` hãy làm bài tập ${subject}`)
//     callback()
// }
// demoCallBack("javascript", function () {
//     console.log("đã làm xong ")
// })

// forEach su dung de lap qua mang 

// const arr = [
//      1 , 2 , 3 , 4 , 5 , 6 , 7
// ]
// console.log(arr.reduce((a,b) => a + b))
 

// let sum = 0
// for (let i = 0; i < arr.length; ++i){
//     sum += arr[i]
// }
// console.log(sum)
// // map 
// const newArr = [] //2 4  6 ... 14
// arr.forEach((item) => {
//     // 1
//     newArr.push(item * 2)
// })
// console.log(newArr)

// const arr = ["javascript", "php","reactjs"]
// arr.forEach((item,index) => {
//   arr[index] = item.toUpperCase()
// })
// console.log(arr)

//map 

//  const arr = [
//      { name: "product A", image: "https://product.hstatic.net/1000003969/product/xanh_jnaki003_22_20220817115538_3c33a74d52384eccbaa_7d29106fdabe4ed7bc7e8aa5810fcbc9_grande.jpeg" },
//      { name: "product A", image: "https://product.hstatic.net/1000003969/product/xanh_jnaki003_22_20220817115538_3c33a74d52384eccbaa_7d29106fdabe4ed7bc7e8aa5810fcbc9_grande.jpeg" },
//      { name: "product A", image: "https://product.hstatic.net/1000003969/product/xanh_jnaki003_22_20220817115538_3c33a74d52384eccbaa_7d29106fdabe4ed7bc7e8aa5810fcbc9_grande.jpeg" },
//         { name : "product A" , image:"https://product.hstatic.net/1000003969/product/xanh_jnaki003_22_20220817115538_3c33a74d52384eccbaa_7d29106fdabe4ed7bc7e8aa5810fcbc9_grande.jpeg" },
//  ]

//  arr.map((item) => {
//     const li = document.createElement("li");
//     li.innerHTML = `<img src=${item.image}/>`
//     document.body.appendChild(li)
// })
// console.log(arr)

const arr = [
     1 , 2 , 3 , 4 , 5 , 6 , 7
]

const newArr = arr.filter((item) => item > 3)
console.log(newArr.includes)
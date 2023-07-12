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
let students = [2, 3, 4, 5, 6, "javascript"]

 
const arr = students.slice("1","4")
console.log(arr)

// sort 
 
const newArr = [1,2,7, 4,6,2000,1000, 89, 3, 23, 6, 8]
    
    console.log(newArr.sort((a,b)=> a - b ))

console.log(newArr)




// tham tri va tham chieu 

// tham tri 

// let a = 10
// b = a
// console.log(a)
// console.log(b)
// a = 20

// console.log(a)
// console.log(b)


// tham chieu  gom array , function , object , ve sau ben trong cua func va array cung la object

// let user = {
//     name : "Join"
// }
// // moi khi object duoc tao no se tao ra vung nho moi 
// // neu so sanh thi 2 object chi bang nhau khi no cung 1 object 
// let userName = {...user} // spread syntax dung de copy 
// userName.name = "admin"
// console.log(userName.name)
// console.log(user.name)

// es6 module


// function  handel () {
//     console.log("handel")
// }

// export default handel;


// even loop va callstack 

// day la chay dong bo

// console.log("name")

// const longFunction = () => {
//   for (let i = 0; i < 1000000000; i++){
//     console.log(i)
//   }
// }
// longFunction() // blocking 
// console.log("hi")
// dong bo 
// console.log("name")
// console.log("helo")
// console.log("hi")

// bat dong bo 
console.log("name")
setTimeout(() => {
  console.log("helo")
  setTimeout(() => {
    console.log("hi")
    setTimeout(() =>{
      console.log("userName")
      setTimeout(() => {
       console.log("demo name")
        setTimeout(() => {
         console.log("duong")
        })
      })
    })
  })
}, 1000)

// 3 phuong thuc
//1 callback --> es5
//2 promise --> es6  -- loi hua 
// cho --> pending 
// resolve --> success thanh cong --> .then
// reject --> that bai  .catch
//3 async await --> es7



let traNo = true;

let doiNo = new Promise(function (resolve, reject) {

  setTimeout(() => {
    if (traNo) {
      resolve("doi no thanh cong")
      console.log("ok")
    } else {
      reject("doi no that bai")
      console.log("false")
    }
  }, 10000)

})
console.log(doiNo)




const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

delay(3000)
  .then(() => {
    console.log("helo")
   return delay(1000)
  })
  .then(() => {
    console.log("hi")
    return delay(2000)
  })
  .then(() => {
    console.log("run three")
})


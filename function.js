 

const num = false;
const sum = "9"
// == so sanh tuong doi thi chi so sanh gia tri , khong so sanh kieu du lieu
// === so sanh tuyet doi  sanh gia tri va so sanh kieu du lieu
//|| toan tu hoac se check 1 trong 2 ve 
//! 
// if (num > 19 || sum == 9) {
//     console.log("number")
// }
// if (!num) {
//     console.log("demo ")
// }
// const numA = 1;
// const sumB = "1";
// console.log(numA !== sumB) 

// toan tu 3 ngoi

// num > 4 ? console.log("ok") : console.log("ko ok")

// if (num3 > 10) {
//     console.log("ok")
// }
// const num3 = 0

// switch (num3) {
//     case 10: alert("ok")
//         break;
//     case 11: alert("khong ok")
//         break;
//     case 12: alert("12")
//         break; 
//     default: console.log("Invalid")
//         break;
// }
// function demo(num = 10 , sum = 0) {
//      const total = num + sum
//      return total 
// } 
// function demo2(num, sum, func) {
//     const total = func(num, sum)
//     return total
// }
// let totalSum2 = demo2(3, 3, demo)
//  console.log(totalSum2)
// func
// function demo() {
//     return 
// }

// // arrow function
// const demoFUnc = (a, b) => a * b 

// const demofunc3 = function () {
//     console.log(" demo ")
// }
// demofunc3()

// DOM  document object model

// .getElementByID
// document
// const color =  document.getElementsByClassName("demo")
// console.log(color)

// scope 
// golbal scope 
// function scope 
// block scope 

const scope = "pink";

function demoFunc5() {
    //  function scope 
}
demoFunc5()
// block scope 
// var es5 
// es6 const let hoisting 
if (scope === "pink") {
    var color = "red"
}
// clouse func con  có thể truy cập đến biến ở ngoài function nó
function demoClouse() {  // func cha
    const close = "true"
    function demoClouse2() {   // func con
        console.log(close)
        //
    }
    return demoClouse2
}
demoClouse()()
 
function messagse(messagse) {
    return function alertMessage(thongBao) {
        console.log(`${messagse} ${thongBao}`)
    }
}
 messagse("day la thong bao")("alert message")
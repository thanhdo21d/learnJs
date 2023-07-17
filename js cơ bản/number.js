// so nguyen la cac so tu 1,2,3....99....
const number = 1

// so thap phan la cac so
// cac so 1,2 --> 1.2 ...
const number2 = 1.2
// +"2" === 2
const num = "2.1" 
const num2 = "ababab"


// isNaN(Number(num2))
// de kiem tra 1 kieu du lieu typeof
// console.log(String(num2))
// .floor se lam tron xuong
// console.log(Math.floor(num2))
// .floor se lam tron len
// console.log(Math.ceil(num2))

// round lam tron den so gan nhat tu .5 thi se lam tron len duoi .5 se lam tron xuong


// console.log(Math.round(5.5))



// chuyen ve kieu string
// console.log(num2.toFixed(2))

// Math.max hien thi so lon nhat
console.log(Math.max(1,2,3,4,5,6,7,8,9))
// Math.min hien thi so be nhat
console.log(Math.min(1,2,3,4,5,6,7,8,9))


// NaN  --> not a number

// isNaN --> day co phai so khong 
console.log(isNaN(num2))

// console.log((isNaN(Number(num2))

const isNum = 1 + (2 + -2) * 3 - + "3"

console.log(isNum)

const num3 = Math.random()

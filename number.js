// số nguyên là 1  2 3 4 5 999 88 37 63 ......
// số thập phân là 3,4 5,8 9,9 ...... --> 3.4 5.8 9.9 ....


console.log(5+7);
console.log(typeof 7); // xac dinh kieu du lieu

const number1 = " 5 ";
const number2 = " 4.8 ";

// chuyen doi tu kieu string sang so 
console.log(parseInt(number1)); //5  in ra so nguyen

console.log(parseFloat(number2)); //4.8  in ra so thap phan 

const number3 = -10;
// Math.abs(value)   gia tri tuyet doi

console.log(Math.abs(number3))  // 10  gia tri tuyet doi

//Math.floor(value)  ---> lam tron xuong
const number4 = 8.2;
console.log(Math.floor(number4));  //8   Math.floor(value)  ---> lam tron xuong  8.2 --> 8
 

// Math.ceil(value) ---> lam tron len
console.log(Math.ceil(number4));  // 9    Math.ceil(value) ---> lam tron len     8.2 --> 9


// Math.round(value) ---> lam tron gan nhat  
console.log(Math.round(number4));     //Math.round(value) ---> lam tron gan nhat   8.2 --> 8  8.8 --> 9  

//toFixed(number)  vi du 3.3333 = 3.3
console.log(parseFloat(( 10/3 ).toFixed(3)));



//Math.random
console.log(Math.ceil(Math.random() * 100));


//Math.max  tra ra con so lon nhat
console.log(`max ${Math.max(1, 3 ,5,999)}`)

//Math.min  tra ra con so nho nhat

console.log(`min ${Math.min(1, 3 ,5,999)}`)


//Math.pow(number1 , number2) ; Math.pow(3 ,2 ) 3 mũ 2 --> 9

console.log(Math.pow(3, 2)); //9


// 
//  isNaN(value)  không phải số
console.log(isNaN("this is string ")); // true
console.log(isNaN("12345 ")); // false

//  Number.isNaN


console.log(Number.isNaN("this is string ")); // false
console.log(Number.isNaN("1234567 ")); // false


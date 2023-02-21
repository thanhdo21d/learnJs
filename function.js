// function con co the truy suat scrop cua function cha 


// function sayHi (){
//         let myName = 'thanh do';
//         function sayHello(){
//             console.log(myName);
//         }   
//         return sayHello();
// }

// let hello = sayHi();


// setInterval (function(){
//              console.log(5+10)

// },2000)




// mang , truy suat trong mang 

const students = [ "tuan " , "dat " , "le " , "hai " , "hoang "]

// index la vi tri cua phan tu // 0 1 2 3 4

// length la do dai cua mang dem tu 1 2 3 4


// cach truy suat phan tu

console.log(students[0]);
console.log(students[1]);

// lay phan tu cuoi cung trong mang la do dai length -1   -> array.length -1

console.log(students[students.length -1]);   //

// phuong thuc hay dung cua mang 

//length -> tra ve do dai cua mang 

// reverse -> dao nguoc cac phan tu trong mang

console.log(students.reverse());

// join -> noi cac phan tu trong mang

console.log(students.join(''));


// indexOf -> lay phan tu dau tien 
    console.log(students.indexOf());

//lastIndexOf -> lay phan tu cuoi cung
console.log(students.lastIndexOf());


//push -> them phan tu vao mang
console.log(students.push("javascript"));
console.log(students);


// unshift them phan tu vao dau mang 

console.log(students.unshift("tailwindcss"));
console.log(students);

// pop -> xoa phan tu cuoi cung trong mang 
console.log(students.pop())

// shift -> xoa phan tu dau trong mang
console.log(students.shift())



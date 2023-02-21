// Buy value or By referrences
// Buy value :gia tri thuc su duoc luu trong vung bo nho

const num1 = 1;
const num2 = 1;

console.log(num1 === num2) // true


// Buy referrences : noi toi vung bo nho 


const reNum1 = [1, 2];
const reNum2 = [1, 2];
console.log(reNum1 === reNum2)  // false

//JSON : javascript object notation

/*

*/
//JSON.stringifi (value) -> onvert gia tri sang duoi dang JSON string
//toString()
//[1,2,3].tostring "1,2,3"
////JSON.parse ("[1,2,3]") -> [1,2,3]
console.log(JSON.parse("[1,2,3]"))


// sao chep 1 mang
const student = ["a", "b", "c", "d", "e", "f", "g", "h"]
student.pop();
console.log(student)


// 1: splice()

const spliceStuden = student.splice();

//2 :spread()
//...[student]



// cach gop mang 
//[1,2 ] [3,4] [5,6] [7,8] -> [1,2,3,4,5,6,7,8]

// cach 1 : concat()  array1.concat(array2,array3,...arrayN) 

const array1 = [1, 2]
const array2 = [3, 4]

const array3 = [5, 6]
const array4 = [7, 8]
console.log(array1.concat(array2, array3, array4)) ///[1,2,3,4,5,6,7,8]


/// cach 2 : spread operator


const spreadArray = [...array1, ...array2] ///[1,2,3,4]
console.log(spreadArray)


// Destructuring array 

const toys = ["ball", "sword", "magic", "fire"]

const a = toys[0] // ball
const b = toys[1]// sword
const c = toys[2]//magic 

console.log(a, b, c)//ball sword magic
// const [] = toys
const [x, y, z] = toys;
console.log(x, y, z)//ball sword magic

// rest parameter...
const   [ball, sword,...rest] = toys ; // lay nhung gia tri  con lai 
console.log(rest) // magic fire 


function demo (a, ...rest) {
    console.log(a,rest)
}
demo (1,2,3,4,4,5,5,67)
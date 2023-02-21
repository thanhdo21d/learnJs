// sap xep cac phan tu trong mang

const ramdum = [
    1, 3, 4, 6, 2, 8, 7, 5
];
console.log(ramdum.sort())


// find 

//no se tra ve phan tu tim thay dau tien trong mang thoa dieu kien trong do

const number = [
    1, 3, 4, 6, 2, 8, 7
];
// tim phan tu dau tien trong mang lon hon 5
const findNumber = number.find((element) => element > 5)
console.log(findNumber)


// findIndex  tra ve vi tri 
const findYourIndex = [
    1, 3, 4, 6, 2, 8, 7
];
const findIndexx = number.findIndex((element) => element > 2) // vi tri 
console.log(findIndexx)



/// filter  dung de sang loc cac phan tu trong mang thoa 1 dieu kien nao do
// filter(callback(value,index,array))
const listNumber = [
    1, 3, 4, 6, 2, 8, 7
];

const listFilter = listNumber.filter((item, i, a) => {
    return item > 3  // 4 6 8 7 
})
console.log(listFilter)


/// some  

// tra ve true khi thoa man 1 dieu kien va tra ve false khi khong thoa man dieu khien nao
//// every

// true or false


const lisNumber = listNumber.some(value => value > 3);
console.log(lisNumber) //true


//// every chi tra ve true khi tat ca dieu kien dung (moi dieu kien phai dung)

const liNumber = listNumber.every(value => value > 3);
console.log(liNumber)  /// false



/// reduce  gom cac phan tu trong mang lai thanh 1

///.reduce((a,b)=>{}, initialize value)
const totalNumber = listNumber.reduce(function (a, b) {
    return a + b;

}, 0)
console.log(totalNumber)


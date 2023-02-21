// string : chuoi
"hello world";
`i am fontend dev`

const name = "dinver";
const Job = " scamer ";
// console.log(name);
// console.log(typeof name);
const newTr = "i am tdi and i am deverloper ";
const newTr2 = "i am " + name + " and i am " + Job;

// console.log(newTr2);


//${ten bien}
const Newtr3 = `I am ${name} and i am ${Job}`;
console.log(Newtr3);



// . length (do dai)

console.log(Newtr3.length);


//index là vị trí của từng kĩ tự trong chuỗi bao gồm cả khoảng trắng  
// 0- 36 >>> length = 37


// split( tachs mangr )
const MyStr = "FrontEnd Development d"
console.log(MyStr.split(""));
console.log(MyStr.split(" "));
console.log(MyStr.split("/"));

//toLowerCase( viet in thuong)
console.log(MyStr.toLowerCase());

// toUpperCase( viet in hoa)

console.log(Newtr3.toUpperCase());

//StartsWitch kiem tra true false chu dau

//endWitch     kiem tra true false chu cuoi 

console.log(MyStr.startsWith("FrontEnd Development"));


// inCludes xem co chua phan tu khong

console.log(MyStr.includes("E"));



// indexOf lay ra vi tri ma no index


console.log(MyStr.indexOf("d"))

//lastIndexOf vi tri tiep theo cua phan tu

console.log(MyStr.lastIndexOf("d"))

// replace    thay the 

console.log(MyStr.replace("Development", "scamemr"))

// repeat   lap lai nhieu lan

console.log(newTr.repeat(10));


// slice  lay phan tu  

console.log(newTr.slice(0, 8));  // i am tdi ( tu 0 den 8 )
console.log(newTr.slice(0));  //i am tdi and i am deverloper
console.log(newTr.slice(-5));    // oper



// trim  loai bo khoang trong 2 ben  trai phai 
console.log(MyStr);
console.log(MyStr.trim());
console.log(MyStr.trimStart());//trim  loai bo khoang trong  ben  trai
console.log(MyStr.trimEnd());//trim  loai bo khoang trong  ben  Phai



// charAt  lay ra ki tu theo vi tri index
const MyStr5 = "tradecoin undefined"
console.log(MyStr5.charAt(0));



// substr   lấy ra 1 phần của chuỗi (string)
// substr ( index , length) -> index là vị trí  , length -> là số lượng kí tự muốn lấy 


console.log(MyStr5.substr(1, 5))  // radec    1 la vi tri index 


// substring   lấy ra cac ki tu  của chuỗi (string)
// substring (start index và end index))

console.log(MyStr5.substring(1, 5))  // rade





//

const MyStr6 = " developer scammer "

// loai bo khoang trong 2 ben , dua tat ca ve in hoa , thay chu `scammer` thanh chu `FrontEnd` , sau do repeat 2 lan 
// toUpperCase

console.log(MyStr6.trim().toUpperCase().replace("SCAMMER", "FrontEnd").repeat(2));


/// number

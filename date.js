const now = new Date();

// build in object 
console.log(now);
//Sat Feb 18 2023 14:29:22 GMT+0700 (Giờ Đông Dương)


// timezone GMT+0700 (Giờ Đông Dương)
//second : 22
// minute : 29
// hour : 14
// year : 2023
// month : 18
console.log(now.getTime());



// 4 cach su dung new date 

//- new Date() -> in ra ngay gio hien tai
// - new Date(timestamp) -> dua vao timestamp de in ra ngay gio]
// - new Date(date string) -> 
// - new Date( year , month , day , hours , minutes , seconds , milliseconds)

console.log(new Date(1676706090913))

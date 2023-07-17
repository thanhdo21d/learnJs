
// const newName = " duong "
// const newString = "shopee khuyen mai"  // back kit
// ham split cat chuoi
// console.log(newString.split(" "))

//toUpperCase chuyen doan string ve in hoa

// console.log(newString.toUpperCase())

//toLowerCase chuyen doan string ve in thuong

// console.log(newString.toLowerCase())

/// kiem tra ca in hoa va in thuong , startsWith se kiem tra chu cai dau xem dung khong
// se tra ve true neu dung va fasle neu sai
//  console.log(newString.toLowerCase().startsWith("thanh"))


//endWith se kiem tra chu cai cuoi cung neu dung se tra ve true va nguoc lai sai se tra ve false
//  console.log(newString.toLowerCase().endsWith("do"))

 const newStringShopee = "shopee khuyen mai" 
// console.log(newStringShopee.includes("s")) // tim kiem tung ki tu cua chuoi tra ve true neu dung se tra ve false


// khai niem index va length
// .length se kiem tra do dai cua chuoi bat dau tu vi tri index
// index se bat dau tu so 0

// console.log(newStringShopee.length)

// indexOf la phuong thuc tim kiem vi tri thu index cua chuoi bat dau tu ben trai qua
// console.log(newStringShopee.indexOf("e"))
// lastIndexOf la phuong thuc tim kiem vi tri thu index cua chuoi bat dau tu ben phai qua
 
//  console.log(newStringShopee.lastIndexOf("e"))

// replace se giup thay doi string  nhan vao 2 tham so , tham so dau tien la chu ban dau
// tham so thu 2 la chu moi 
console.log(newStringShopee.replace("shopee","lazada"))
 const newStringShop = "shopee khuyen mai" 


// repeat nhan chuoi len nhieu lan
// console.log(newStringShopee.repeat(300))


// slice cat chuoi va tao ra chuoi moi theo vi tri ma minh mong muon + 1

//  console.log(newStringShop.slice(0,6))

// xoa toan bo khoang cach 2 ben
// console.log(newStringShop.trimEnd())

// lay ra phan tu thu index
console.log(newStringShop.charAt(0))
 
// tao 1 bien ten la baiTap1 co gia tri la : "lazada" loai bo tat ca khoang trang
// va chuyen no ve chu hoa sau do nhan len 5 lan

// tao 1 bien ten la baiTap2 co gia tri la : "shope" viet chu s viet hoa con lai viet thuong

 

// thoi gian den 9h30
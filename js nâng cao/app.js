
//some --> kiểm tra nếu chỉ 1 giá trị đúng với yêu cầu thì nó sẽ trả ra true
//every  --> kiểm tra tất cả giá trị đúng với yêu cầu thì nó sẽ trả ra true
// console.log(sum.some((sum) => sum > 4)) // -->  true
// console.log(sum.every((sum) => sum > 4))  // -->  false
// const newArr = [arr, sum]
// console.log(newArr) // -->

// const arr = ["javascript", "reactjs", "aunglar", "php"]
// const sum = [1, 2, 3, 4, 5, 6, 7]

// //rest parameter sao cheps 1 mang
// const newArr = [...arr , ...sum]
// // concat nối mảng
// console.log("... rest",newArr)
// const concatArr = arr.concat(sum)
// console.log("concat",concatArr)


// const click = document.getElementById("onClick")

// function onClick() {
//     console.log("da click")
// }

// function onClick2() {
//     console.log("da click lan 2")
// }
// // click.onclick = onClick
// // click.onclick = onClick2

// click.addEventListener("click", onClick)
// click.addEventListener("click", onClick2)


// localStorage 5 - 10 mb 

// setItem -> lưu 1 gía trị vào localStorage 
// getItem --> lấy ra 1 item được lưu trong localStorage
// removeItem --> xoá 1 item được lưu trong localStorage
// clear --> xoá hết tất cả
const name = "duong"
console.log(localStorage.getItem("ListUser"))
console.log(localStorage.clear())
 
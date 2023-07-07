//getAttribute
// const demoDom = document.querySelectorAll(".shope")
const demoDom = document.querySelector(".shope")
// const demoDom = document.querySelectorAll(".shope")

// demoDom.forEach(item => item.removeAttribute("class"))

// demoDom.forEach((item) => {
//     console.log(item.getAttribute("href"))
// })

// setAttribute("ten attr","ten muon tao")

// demoDom.forEach(item => item.setAttribute("href", "tiki.vn"))

// demoDom.removeAttribute("class")


 // kiem tra xem co class o html chua  contains
 
 
const showConatins = demoDom.classList.contains("shope")// kiem tra xem co ton tai khong

if (showConatins) {
    demoDom.classList.add("toogeShowMenu")
    demoDom.classList.remove("toogeShowMenu")
}
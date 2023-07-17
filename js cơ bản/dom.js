//getAttribute
// const demoDom = document.querySelectorAll(".shope")
// const demoDom = document.querySelector(".shope")
// const demoDom = document.querySelectorAll(".shope")

// demoDom.forEach(item => item.removeAttribute("class"))

// demoDom.forEach((item) => {
//     console.log(item.getAttribute("href"))
// })

// setAttribute("ten attr","ten muon tao")

// demoDom.forEach(item => item.setAttribute("href", "tiki.vn"))

// demoDom.removeAttribute("class")


 // kiem tra xem co class o html chua  contains
 
 
// const showConatins = demoDom.classList.contains("shope")// kiem tra xem co ton tai khong

// if (showConatins) {
//     demoDom.classList.add("toogeShowMenu")
//     demoDom.classList.remove("toogeShowMenu")
// }
// function toggleMenu() {
//     demoDom.classList.toggle("toogeShowMenu")
// }
// demoDom.addEventListener("click",toggleMenu)

 

// innerHtml

const queryId =(id)=> document.getElementById(id)
// const demoH1 = "helo javascript"
const innerH1 = queryId("h1")
innerH1.innerText= " demo the p"

// innerText
// textContent
// createTextNode

function createElementDemo() {
    //createElement  tạo ra 1 element mà mình muốn 
    const btn = document.createElement("p")
    const queryH1 = queryId("h1")  // dom đến phần tử muốn thêm 
    btn.innerHTML = "create demo button"  // in ra text 
    //appendChild
    queryH1.appendChild(btn)  // append vào phần tử đó 

    const meta = document.createElement("meta")
    meta.setAttribute("name", "viewport")
    meta.setAttribute("content","width=device-width, initial-scale=1.0")
    document.head.appendChild(meta)
}
createElementDemo()
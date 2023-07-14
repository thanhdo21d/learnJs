
const products = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwoqu5_qB1E6MkebJLVOvqnp9pUmV_o9p3Q&usqp=CAU",
        price: 100
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwoqu5_qB1E6MkebJLVOvqnp9pUmV_o9p3Q&usqp=CAU",
        price: 200
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwoqu5_qB1E6MkebJLVOvqnp9pUmV_o9p3Q&usqp=CAU",
        price: 300
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwoqu5_qB1E6MkebJLVOvqnp9pUmV_o9p3Q&usqp=CAU",
        price: 400
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwoqu5_qB1E6MkebJLVOvqnp9pUmV_o9p3Q&usqp=CAU",
        price: 500
    } ,
]
function displayProducts() {
    const productItem = document.getElementById("productItems")
    productItem.innerHTML = ""
    products.map(function (product) { 
        const li = document.createElement("li")
        li.innerHTML = `

        <span > ${product.price}</span>
        `
        productItem.appendChild(li)
    })
    console.log(products)
}

function sortData() {
    var sortOder = document.getElementById("sortOder").value;
    products.sort(function (a, b) {
    return sortOder === "asc" ? a.price - b.price : b.price - a.price
        
    })
  displayProducts() 
 
 }

displayProducts() 

const demoDom = document.querySelectorAll(".demoDom")
console.log(demoDom)
demoDom.forEach(item => item.setAttribute("href", "tiki.vn"))

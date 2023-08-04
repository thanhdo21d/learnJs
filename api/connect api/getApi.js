function formatNumber(number) {
    const numberStr = number.toString();
    const parts = numberStr.split(".")
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",") // bieu thuc chinh quy  
    return parts.join("");
} 

const URL = "http://localhost:8888/product"
fetch(URL)
.then(res => {
    return res.json()
})
.then(data => {
    const productList = document.getElementById("productList");
    const mapData = data.map(product => {
        console.log(product)
        return `
        <div>
        <li> san pham : ${product.name}  </li> 
        <li> gia  san pham : ${formatNumber(product.price)}  </li>
        <img style="width:80px"    src='${product.image}'
        onmouseover="changeImage(this,'${ product.image}')"
        onmouseout="changeImage(this,'${ product.image2}')"
        />
        <button onclick="deleteItem('${product.id}')"> delete </button>
        </div>
         `
        
    }).join("")
   
    productList.innerHTML = mapData
})
function changeImage(imgElement, imageURL) {
    console.log(1)
    imgElement.src = imageURL
}


function deleteItem(id) {
    console.log(id)
      fetch(`http://localhost:8888/product/${id}`, {
        method: "DELETE",
    })
        .then(res => res.json())
        .then(data => console.log(data))
}
 

window.addEventListener("scroll", function () {
    const header = document.getElementById("demo")

    const scrollY = window.scrollY;

    if (scrollY > 170) {
        header.classList.add("menu")
    } else {
        header.classList.remove("menu")
    }
})


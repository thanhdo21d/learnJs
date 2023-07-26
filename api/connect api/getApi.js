
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
        <li> gia  san pham : ${product.price}  </li>
        <img  src='${product.image}'/>
        </div>
         `
        
    }).join("")
    productList.innerHTML = mapData
})
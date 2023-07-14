
const products = [
    {
        name : "Product A",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwoqu5_qB1E6MkebJLVOvqnp9pUmV_o9p3Q&usqp=CAU",
        price: 100
    },
    {
        name : "Product B",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwoqu5_qB1E6MkebJLVOvqnp9pUmV_o9p3Q&usqp=CAU",
        price: 200
    },
    {
        name : "Product C",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwoqu5_qB1E6MkebJLVOvqnp9pUmV_o9p3Q&usqp=CAU",
        price: 300
    },
    {

        name : "Product D",

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwoqu5_qB1E6MkebJLVOvqnp9pUmV_o9p3Q&usqp=CAU",
        price: 400
    },
    {
        name : "Product E",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWwoqu5_qB1E6MkebJLVOvqnp9pUmV_o9p3Q&usqp=CAU",
        price: 500
    } ,
]

function search() {
    const keyword = document.getElementById("keyword").value;

    if (keyword) {
        
    }
    const resultsContainer = document.getElementById("results")
    resultsContainer.innerHTML = ""
   
    const results = products.filter((item) => {
        const nameMatch = item.name.toLowerCase().includes(keyword.toLowerCase())
        return nameMatch
    })
      if (keyword.trim()) {
        resultsContainer.innerHTML = ""
    }
    results.forEach((item) => {
        const resultsDiv = document.createElement("div")
        resultsDiv.className = "results"
        const img = document.createElement("img")
        img.src = item.image
        resultsDiv.appendChild(img)
        const name = document.createElement("p")
        name.textContent = "ten san pham" +  item.name
        resultsDiv.appendChild(name)
        const price = document.createElement("p")
        price.textContent = "gia san pham" + item.price
        resultsDiv.appendChild(price)
        resultsContainer.appendChild(resultsDiv)
    }) 
}
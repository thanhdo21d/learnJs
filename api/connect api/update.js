

function displayProductInfo(data) {
    document.getElementById("name").value = data.name
    document.getElementById("price").value = data.price
    document.getElementById("image").value = data.image
}
const productId = "6"
const apiUrl = "http://localhost:8888/product/" + productId
fetch(apiUrl)
    .then(response => {
        return response.json()
    })
    .then(apiData => displayProductInfo(apiData))
document.getElementById("update").addEventListener("click", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value
    const price = document.getElementById("price").value
    const image = document.getElementById("image").value
    const dataUpdate = {
        name : name,
        price : parseFloat(price),  
        image : image
    }
    fetch(apiUrl, {
        method: "PUT",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(dataUpdate),
    })
        .then(response => {
            if (!response) {
                console.log("error")
            }
            return response.json()
        })
        .then(response => { 
            console.log("success",response)
        })
})

const form = document.getElementById("formSubmit")
form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = event.target.name.value
    const price = event.target.price.value
    const image = event.target.image.value

    const postData = {
        name,
        price,
        image,
    }
    fetch("http://localhost:8888/product", {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
    })
        .then(res => res.json())
        .then(data => console.log(data))
})
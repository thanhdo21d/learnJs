document.getElementById("signinForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dataSubmit = {
        email,
        password
    }
    try {
        const response = await fetch("http://localhost:3000/signin", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataSubmit)
        })
        
        const responseData = await response.json()
        console.log(responseData)
        
        const userRole = responseData.user.role
        // if (userRole === "admin") {
        //     window.location.href = "http://localhost:3000/users"
        //      alert(" xin chào bạn là admin ")
        // }
        alert(" đăng nhập thành công ")
    } catch (error) {
        console.log(error)
    }
})

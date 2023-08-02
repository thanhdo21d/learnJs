const http = axios.create({
  baseURL: 'http://localhost:3000',
});

http.interceptors.response.use(function (config) {
    return config.data;
  }, function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
});
  
http.get("/users/2")
    .then(res => console.log(res))
    .catch(error =>{
         console.error(error)
});

document.getElementById("signupForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dataSubmit = {
        email,
        password,
        role : "admin"
    }
    try {
      const {data} = await http.get("users")  
        console.log(data)
    } catch (error) {
        console.log(error)
    }
    
})



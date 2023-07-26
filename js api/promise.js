function connectServer() {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            resolve("connect to server")
        },2000)
    })
}
function connectServer2() {
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            reject("connect to server two")
        },2000)
    })
}
//allSettled


Promise.all([connectServer(), connectServer2()])
    .then((res) => { 
        console.log("Connected to server" , res)
    })
     .catch((error) => { 
        console.log("error" , error)
    })
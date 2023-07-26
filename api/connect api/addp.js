



// fetch("url","method")
// get -- > lay du lieu tu api ve
// post --> them du lieu vao api
// put --> sua du lieu  -->  
// patch --> sua du lieu  --> 

const url = "https://jsonplaceholder.typicode.com/todos/1"

const data = fetch(url)

data.then((data) => {
    return data.json()
}).then((data) => { 
    console.log(data)
}).catch((err) => { 
    console
})
//json-server --watch db.json --port 8888  

// npm init -y --> tao ra 1 packet de quan ly duoc cac thu vien 
/// npm i --> npm install  thu vien ma minh muon cai vao project
// yarn add --> thu vien ma minh muon cai vao project

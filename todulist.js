const toduInput = document.getElementById("todu-input");
const todoList = document.getElementById("todo-list")

function addTodu() {
    const task = toduInput.value

    if (task !== "") {
        const li = document.createElement("li");
        li.className = "liList"
        li.innerHTML = `${task} <button onclick="removeTodu(this)"> DELETE </button>
         <button onclick="editTodu(this)"> EDIT </button>
        `
        todoList.appendChild(li)
        toduInput.value = "";
        saveToduList()
    }
}
function removeTodu(element) { 
            const li = element.parentElement
            todoList.removeChild(li)
            saveToduList()
}

function editTodu(element) {
    const li = element.parentElement
    const taskText = li.firstChild.textContent
    console.log(taskText)

    const newTask = prompt("",taskText)
    if (newTask !== null && newTask.trim() !== "") {
        li.firstChild.textContent = newTask
        saveToduList()
    }

}

function saveToduList() {
    const tasks = []
    const liElement = todoList.getElementsByTagName("li");
    console.log(liElement)

//    Array.from(liElement).forEach((item) => {
//         tasks.push(item.innerHTML)
//     })
    for (let i = 0; i < liElement.length; i++) { 
        tasks.push(liElement[i].innerText.replace("DELETE","").replace("EDIT","").trim())
    }
    
    localStorage.setItem("toduList", JSON.stringify(tasks) )
}

function loadTodulist() {
    const savedTasks = JSON.parse(localStorage.getItem("toduList"))
        console.log(savedTasks)
    if (savedTasks) {
        savedTasks.forEach(task => {
            const li = document.createElement("li");
            li.innerHTML = `${task} <button onclick="removeTodu(this)"> DELETE </button>
        <button onclick="editTodu(this)"> EDIT </button>
            `
        todoList.appendChild(li)
        })
    }
}

loadTodulist()
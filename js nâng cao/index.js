
// setInterval(() => {
//     console.log("duong")
// },100)
// // 1000 tuong ung 1s



// for (let i = 0; i < 5; i++) { 
//     setTimeout(() => {
//     console.log(i)
// },1000)
// }


const imageElement = document.getElementById("image")
const prevBtn = document.querySelector("#prevBtn")
const nextBtn = document.querySelector("#nextBtn")


const imageList = [
    "https://i.pinimg.com/originals/6b/5d/5d/6b5d5d8f600fb22a342d0a8d39ad6b2a.jpg",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/053b52c1-e89f-469b-aacb-972f74758f24/ddluws0-67fa36cc-0007-4e27-8bdf-46aefed76605.jpg/v1/fill/w_618,h_618,q_75,strp/loli_pfp_anime__by_crystalwolfink_ddluws0-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjE4IiwicGF0aCI6IlwvZlwvMDUzYjUyYzEtZTg5Zi00NjliLWFhY2ItOTcyZjc0NzU4ZjI0XC9kZGx1d3MwLTY3ZmEzNmNjLTAwMDctNGUyNy04YmRmLTQ2YWVmZWQ3NjYwNS5qcGciLCJ3aWR0aCI6Ijw9NjE4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.2VpMOB7BMOFWqZ22hHJV7tVCHVl8TTLz7Cvcjry8no8",
    "https://ae01.alicdn.com/kf/H5fb176c891c14b6d9f8d88bc74a6f5f59/Ratels-fanime-Anime-k-z-meme-tutun-b-l-nme-Emilia-Re-zero-okul-hediye.jpg"
];


let currenIndex = 1; // lay ra index cua mang
function displayImage() {
    imageElement.src = imageList[currenIndex]  // set thuoc tinh src = index
}
nextBtn.addEventListener("click", function () {
    currenIndex++; // + 1
    console.log(currenIndex)
    if (currenIndex >= imageList.length) {  
        // kiem tra index > do dai cua mang thi gan ve index thu 0
        currenIndex = 0;
    }
    displayImage() // goi ham 
})
prevBtn.addEventListener("click", function () { 
    currenIndex --;  // tru index di 1
    if (currenIndex < 0) {
        // kiem tra neu index < 0 thi hien thi ve anh 1
        currenIndex = imageList.length - 1;
    }
    displayImage()  // goi ham de gan lai src = index 
})
function autochangle() {
    setInterval(() => {
        // sau 2s thi goi ham  displayImage()  va + index len 1
        currenIndex++;
        if (currenIndex >= imageList.length) { 
            currenIndex = 0
        }
        displayImage() 
    }, 2000)
    
    setInterval(function () {
        
    },1000)
}
displayImage() 
autochangle()

let darkButton = document.querySelector(".darkMode")


darkButton.addEventListener("click", ()=>{
    let body= document.querySelector("body")
    if(body.classList.contains("dark")){
        body.classList.remove("dark")
        console.log("dark")
    } else {
        body.classList.add("dark")
        console.log("dark")
    }
})
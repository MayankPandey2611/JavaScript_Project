//------------------------------------------LOCAL STORAGE METHODS-------------------------------------------------------------------//

// 1. localStorage.setItem("key","value")

let send = ()=>{

    let show1 = document.querySelector("#inputname").value
    let show2 = document.querySelector("#inputnum").value
    let show3 = document.querySelector("#inputemail").value
    let show4 = document.querySelector("#inputage").value

    localStorage.setItem("name",show1)
    localStorage.setItem("age",show4)
    localStorage.setItem("number",show2)
    localStorage.setItem("email",show3)

    location.reload()
}

let SHOW = document.querySelector("#show")
// SHOW.innerHTML = localStorage.getItem("name")

let username = localStorage.getItem("name")
let number = localStorage.getItem("number")
let age = localStorage.getItem("age")
let email = localStorage.getItem("email")
SHOW.innerHTML = `welcome ${username} you have signup with a number ${number} to our website your email ${email} will be used for your verification and your age is ${age} `




let remove = ()=>{
    localStorage.removeItem("name")
    localStorage.removeItem("age")
    localStorage.removeItem("number")
    localStorage.removeItem("email")
    location.reload()
}
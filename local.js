

let signup = () => {

    let signfname = document.querySelector("#sname").value
    // let signlname = document.querySelector("#lname").value
    let signnum = document.querySelector("#number1").value
    let signemail = document.querySelector("#email").value
    let signpass = document.querySelector("#password").value
    let signcpass = document.querySelector("#cpassword").value



    if (signfname == "" || signfname == " ") {
        document.querySelector("#errfname").innerHTML = "Please enter your name"
        return false
    }

    else if (isNaN(signnum)) {
        document.querySelector("#errnum").innerHTML = " please enter valid number"
        return false
    }

    else if (signnum.length != 10) {
        document.querySelector("#errnum").innerHTML = "please enter 10 digit number"
        return false
    }

    else if (!(signemail.includes("@") && signemail.includes(".com"))) {
        document.querySelector("#erremail").innerHTML = " please enter valid email"
        return false

    }

    else if (signpass == "") {
        document.querySelector("#errpass").innerHTML = "please enter password"
        return false
    }

    else if (signcpass != signpass) {
        document.querySelector("#errcpass").innerHTML = " please enter correct password"
        return false

    }


    localStorage.setItem("name", signfname)
    // localStorage.setItem("lastname",signlname)
    localStorage.setItem("number", signnum)
    localStorage.setItem("email", signemail)
    localStorage.setItem("password", signpass)
    localStorage.setItem("cpassword", signcpass)

    location.href = "login.html"
    return false

}

let login = () => {

    let loginname = document.querySelector("#username").value
    let loginpass = document.querySelector("#userpass").value

    let localname = localStorage.getItem("name")
    let localpass = localStorage.getItem("password")

    if (loginname == localname && loginpass == localpass) {
        location.href = "verify.html"
        return false
    }

    else {
        // document.querySelector("#err").innerHTML = "please enter valid id and password"
        alert("please enter valid id and password")
    }

    return false
}


let localnum = localStorage.getItem("number")
let ans = Math.floor(1000 + Math.random() * 9000)

let OTP = () => {

    let hnum = document.querySelector("#num").value

    if (hnum != "" && hnum.length == 10 && hnum == localnum) {
        alert(ans)
        return false
    }
    else {
        document.querySelector("#error").innerHTML = "please enter valid number"
        return false
    }
return false
}


let display = localStorage.getItem("name")
// let show = document.querySelector("#Show")

let Submit = () => {

    let hotp = document.querySelector("#otp").value

    if (hotp == ans) {
        // alert(`Welcome ${display} to Our Website`)
        // let box = document.querySelector("#home")
        // box.style.display="none"
        // show.innerHTML = `Welcome ${display} to our website`
        location.href = "home.html"
        alert(`Welcome ${display} To Our Website`)
        return false
    }
    else {
        alert("Wrong OTP")
        return false
    }
return false
}


// let welcome = ()=>{
//     let SHOW = document.querySelector("#show")
//     SHOW.innerHTML = `Welcome ${display} To Our Website`
// }


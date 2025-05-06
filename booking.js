
// let booking = ()=>{

//     let book = document.querySelector("#people").value
//     let number = document.querySelector("#number").value
//     let city = document.querySelector("#city").value
//     let checkin = document.querySelector("#checkIn").value
//     let checkout = document.querySelector("#checkOut").value
//     let display = document.querySelector("#name").value
//     let age = document.querySelector("#age").value

     
//     if (!display || !age || !checkin || !checkout || !city || !book) {
//         alert("Please fill all the fields.");
//         return false;
//     }

//     let url = "http://localhost:3000/Hotel";
//      fetch(url,{method: "POST",
//         headers:{
//             "content-type": "application/json"
//         },
//         body:JSON.stringify({
//             name:display,
//             age:age,
//             checkin:checkin,
//             checkout:checkout,
//             city:city,
//             people:book,
//             price:1000
//         })
//     })


// location.href="crud.html"
//    return false;
// }
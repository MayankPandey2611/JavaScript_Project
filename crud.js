
let fetchdata = async () => {

    let url = "http://localhost:3000/Hotel";

    
        let res = await fetch(url, { method: "GET" });
        let data = await res.json();
        console.log(res);

        let DATA = document.querySelector("#datashow");
        DATA.innerHTML = ""; 
    

        data.map((e) => {
            DATA.innerHTML += `
                <tr>
                    <td>${e.name}</td>
                    <td>${e.age}</td>
                    <td>${e.city}</td>
                    <td>${e.people}</td>
                    <td>${e.price * e.people}</td>
                    <td>${e.checkin} </td>
                    <td>${e.checkout} </td>
                    <td onclick="Del('${e.id}')">Cancel Booking</td>
                </tr>
            `
        });
    } 




let Del = async (id) => {
    let url = `http://localhost:3000/Hotel/${id}`;
    await fetch(url, { method: "DELETE" });
    fetchdata(); // Refresh after delete
};

//     if (!display || isNaN(book) || book <= 0) {
//         alert("Please enter a valid name and number of people.");
//         return false;
//     }
//    confirm(`Dear ${display} Your Booking Amount is ${book*1000}`) ;



let booking = ()=>{

    let book = document.querySelector("#people").value
    // let number = document.querySelector("#number").value
    let city = document.querySelector("#city").value
    let checkin = document.querySelector("#checkIn").value
    let checkout = document.querySelector("#checkOut").value
    let display = document.querySelector("#name").value
    let age = document.querySelector("#age").value

     
    if (!display || !age || !checkin || !checkout || !city || !book) {
        alert("Please fill all the fields.");
        return false;
    }

    let url = "http://localhost:3000/Hotel";
     fetch(url,{method: "POST",
        headers:{
            "content-type": "application/json"
        },
        body:JSON.stringify({
            name:display,
            age:age,
            checkin:checkin,
            checkout:checkout,
            city:city,
            people:book,
            price:1000
        })
    })


location.href="crud.html"
   return false;
}
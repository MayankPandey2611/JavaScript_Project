
let fetchdata = async () => {

    
    let url = "http://localhost:3000/Hotel";

    
        let res = await fetch(url, { method: "GET" });
        let data = await res.json();
        console.log(res);
        datashow(data);
}


let Search =async()=>{
    let searchinput = document.querySelector("#search").value.toLowerCase()

    let url = "http://localhost:3000/Hotel";

        let res = await fetch(url, { method: "GET" });
        let data = await res.json();
   
        let Filter = data.filter( (e)=>{
            return e.name.toLowerCase().includes(searchinput)  || e.city.toLowerCase().includes(searchinput)
        })

        datashow(Filter); 

}


let datashow = (data)=>{
        let DATA = document.querySelector("#datashow");
        DATA.innerHTML = ""; 
    

        data.map((e) => {
            DATA.innerHTML += `
                <tr>
                    <td>${e.name}</td>
                    <td>${e.age}</td>
                    <td>${e.city}</td>
                    <td>&emsp;&emsp;&emsp;${e.people}</td>
                    <td>${e.price * e.people}</td>
                    <td>${e.checkin} </td>
                    <td>${e.checkout} </td>
                    <td onclick="Del('${e.id}')">&emsp;&emsp;&emsp;<i class="fa-solid fa-trash" style="color:red";></i></td>
                    <td onclick="form('${e.id}')">&emsp;Edit</td>
                </tr>
            `
        });

    } 




let Del = async (id) => {
    let url = `http://localhost:3000/Hotel/${id}`;
    await fetch(url, { method: "DELETE" });
    fetchdata(); // Refresh after delete
};



let booking = ()=>{

    let book = document.querySelector("#people").value
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

let form =async (id)=>{
    let url = `http://localhost:3000/Hotel/${id}`;

        
    let res = await fetch(url, { method: "GET" });
    let data = await res.json();
    console.log(data);

    let Update = document.querySelector("#updated")

    let formdata = `
     <input type="text"  id="name1" value="${data.name}"><br><br>
            <input type="number"  id="age1" value="${data.age}"><br><br>
            <!-- <input type="number"  id="number1"><br><br> -->
            <!-- <input type="email"  id="email1"><br><br> -->
            <input type="number"   id="people1" value="${data.people}"><br><br>
            <input type="date"   id="checkIn1" value="${data.checkin}" ><br><br>
            <input type="date"   id="checkOut1" value="${data.checkout}" ><br><br>
            Select City <select  name="" id="city"  >
                <option value="Bhopal">Bhopal</option>
                <option value="Indore">Indore</option>
                <option value="Goa">Goa</option>
                <option value="Kashmir">Kashmir</option>
                <option value="Delhi">Delhi</option>
                <option value="Rewa">Rewa</option>
            </select><br><br>
            <input type="submit" name="" id="" value="Update Details" onclick="return update('${data.id}')">`


            Update.innerHTML = formdata
}

let update  = (id)=>{
    let url = `http://localhost:3000/Hotel/${id}`;
 
    let book = document.querySelector("#people1").value
    let city = document.querySelector("#city").value
    let checkin = document.querySelector("#checkIn1").value
    let checkout = document.querySelector("#checkOut1").value
    let display = document.querySelector("#name1").value
    let age = document.querySelector("#age1").value



   
    fetch(url,{method: "PUT",
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


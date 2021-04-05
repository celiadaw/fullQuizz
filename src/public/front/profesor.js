function redireccionar(){
    location.href="http://localhost:3000/admin.html";
  } 
  

document
.getElementById("enviar")
.addEventListener("click", ()=>{
    let email=document.getElementById('email').value;
    let password=document.getElementById('password').value;
    //localhost:3000/admin/signin
      fetch("http://localhost:3000/singin", {
method: "POST",
body: JSON.stringify({
    email: email,
    password: password
}),
headers: {
    "Content-Type": "application/json"
}
})
.then(response => {response.json()
                        .then(data =>{
                                 console.log(data)
                                 
  })
  

})
.then(setTimeout (redireccionar(), 5000))
.catch(e => ({error:e}));

})


let dataFromlocalStorage = JSON.parse(localStorage.getItem("idPregunta"));


let title;


function init(dataFromlocalStorage){
   

    fetch(`http://localhost:3000/read/${dataFromlocalStorage}`)
    .then(response => response.json())
    .then(data => { 
            inputsModificar(data.questions)
          
       
    });
    }
 function inputsModificar(item){
console.log(item)
let container=document.getElementById('container')
    let pregunta=document.createElement("div")
    pregunta.setAttribute('id',item._id)
   container.appendChild(pregunta)
   let parrafoTitulo= document.createElement('input')

    parrafoTitulo.setAttribute('value', item.title)
    parrafoTitulo.setAttribute('oninput', ()=>{
            title=parrafoTitulo.value
    })
 }

init(dataFromlocalStorage)
console.log(title)
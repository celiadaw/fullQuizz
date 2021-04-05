//zona admin


function redireccionar(){
    location.href="http://localhost:3000/modificar.html";
  } 
  
 

function init(){
fetch("http://localhost:3000/read")
.then(response => response.json())
.then(data => { console.log(data)
   let questions=data.questions
 questions.map(item =>imprimirQuizz(item))
});
}
 
function imprimirQuizz(item) {
    
    let idPregunta= item._id;
    let container= document.getElementById('container')
    let pregunta=document.createElement("div")
     pregunta.setAttribute('id',idPregunta)
     pregunta.setAttribute('class',"pregunta")
    container.appendChild(pregunta)
    let parrafoTitulo= document.createElement('p')
    parrafoTitulo.setAttribute('class','title')
    //añadiendo titulo
    let titulo=document.createTextNode(item.title)
    pregunta.appendChild(parrafoTitulo)
    parrafoTitulo.appendChild(titulo)

    //añadiendo answres
    let answersArray= item.answers
    answersArray.map((answer)=>{
        
            let pAnswer=document.createElement('p')
            let texto=document.createTextNode(answer)
           pAnswer.appendChild(texto)
           pregunta.appendChild(pAnswer)
       
     
    })


    //creando boton modificar
     let modificarDiv=document
            .createElement('div')
        modificarDiv.setAttribute("id", `modificar${idPregunta}`)
        modificarDiv.setAttribute("class", "modificar")
        let pmodificar=document.createElement('p')
       let modificar=document.createTextNode("MODIFICAR")
       pregunta.appendChild(modificarDiv)
       modificarDiv.appendChild(pmodificar)
       pmodificar.appendChild(modificar)
       btnModificar(idPregunta)


//        //creando boton eliminar
    let eliminarDiv=document
            .createElement('div')
         eliminarDiv.setAttribute("id", `eliminar${idPregunta}`) 
         eliminarDiv.setAttribute("class", "eliminar")          
   let peliminar=document.createElement('p')
       let eliminar=document.createTextNode("ELIMINAR")
       pregunta.appendChild(eliminarDiv)
       eliminarDiv.appendChild(peliminar)
       peliminar.appendChild(eliminar)

       btnEliminar(idPregunta)
      


return pregunta;
    
}
//boton crear
let crearDiv=document.createElement('div')
    crearDiv.setAttribute('id', 'crear')
let crear=document.createTextNode("AÑADIR PREGUNTA")
container.appendChild(crearDiv)
crearDiv.appendChild(crear)

function btnCrear(){
    document
    .getElementById('crear')
    .addEventListener("click", ()=>{
        location.href="http://localhost:3000/create.html";
       
    })
}

function btnEliminar(idPregunta) {
   document
    .getElementById( `eliminar${idPregunta}`)
   .addEventListener("click", ()=>{
        fetch(`http://localhost:3000/delete/${idPregunta}`
        , {
            method: "DELETE",
            body: JSON.stringify({
                _id:idPregunta

            })})
            .then(response => response.json())
            .then(data => { console.log(data)
                window.alert("Borrado");
            });
    
})
}
function btnModificar(idPregunta) {
    document
     .getElementById(`modificar${idPregunta}`)
    .addEventListener("click", ()=>{
        localStorage.setItem("idPregunta", JSON.stringify(idPregunta));
        redireccionar();
        
    })
 }

//----------------------------------
init();
btnCrear()


//
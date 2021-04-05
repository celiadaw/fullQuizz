function btnCrear(){
    document
    .getElementById('crear')
    .addEventListener("click", ()=>{
        fetch(`http://localhost:3000/create`),{
            method: "POST",
            body: JSON.stringify({
                title: title,
                answers:answer1,
                answers: answer2,
                answers: answer3,
                correct: correct
            })
        }
    })
}


function crearInputs(){
    
    let pregunta=document.createElement("div")
    let label=document.createElement('label')
     labelTitulo=document.createTextNode('escribe la pregunta')
     label.appendChild(labelTitulo)
     pregunta.appendChild(label)
    pregunta.setAttribute('id', "id")
   container.appendChild(pregunta)
   let parrafoTitulo= document.createElement('input')
    

  pregunta.appendChild(parrafoTitulo)

   
  for(let i=0;i>=3;i++){
    let pAnswer=document.createElement('input')
    pAnsweri=document.createElement('input')
   pAnsweri.setAttribute('id', i)
console.log(answer)
pregunta.appendChild(pAnswer)




  }

          

 }

 crearInputs();
 btnCrear();
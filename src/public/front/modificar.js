
let dataFromlocalStorage = JSON.parse(localStorage.getItem("idPregunta"));

let answer1,answer2,answer3,correct,title;
let arrayInputs=[];
let flag=0;
function init(dataFromlocalStorage){
   

    fetch(`http://localhost:3000/read/${dataFromlocalStorage}`)
    .then(response => response.json())
    .then(data => { 
            inputsModificar(data.questions)
          
       
    });
    }
function inputsModificar(item){
    
    let pregunta=document.createElement("div")
    pregunta.setAttribute('id',item._id)
   container.appendChild(pregunta)
   let parrafoTitulo= document.createElement('input')
    parrafoTitulo.setAttribute('value', item.title)
   
  pregunta.appendChild(parrafoTitulo)
   let answersArray= item.answers
   
   answersArray.map((answer)=>{

          let pAnswer=document.createElement('input')
                        pAnswer.setAttribute('value', answer)
                       pAnswer.setAttribute('id', flag)
      
          pregunta.appendChild(pAnswer)
        flag++
      

 })
 
let correct= document.createElement('input')
correct.setAttribute('id',"correct")
            correct.setAttribute('value',item.correct)
          pregunta.appendChild(correct)

          let input = document.querySelectorAll("input");
             let lenght=input.length;

  for(let i=0;i<lenght;i++){
  let nuevoInput=input[i].value;
  
  arrayInputs.push(nuevoInput) 
      input[i].addEventListener("change", function (e) {
        nuevoInput=e.target.value
        console.log(nuevoInput+" "+i)
        arrayInputs.splice(i,1,nuevoInput) 
      });
      
        }
      
      }
  
function btnActualizar(arrayInputs) {
  console.log(arrayInputs)
  let titulo=arrayInputs[0]
  console.log("titulo"+titulo)
document.getElementById('btnActualizar')
    .addEventListener('click',()=>{
     
        fetch(`http://localhost:3000/update/${dataFromlocalStorage}`, {
    method: "PUT", headers: {
      "Content-Type": "application/json",
  },
    body: JSON.stringify({
     
      "title": arrayInputs[0],
         "answers":  
         [arrayInputs[1],arrayInputs[2],arrayInputs[3]],
         "correct": arrayInputs[4],

  })})
 .then(response => response.json()
    )
 .then(data => console.log(data))
 .catch(e => ({error:e}));
})
}


init(dataFromlocalStorage)
btnActualizar(arrayInputs)



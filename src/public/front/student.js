//zona de estudiante

//pintar las preguntas y elegir si esta bien o mal





//--------------------------VARIABLES/CONSTANTS---------------
// 'use strict';

// const divQuestion =document.querySelector(".question");
// const divAnswers =document.querySelector(".answers");
// let flag= 0;


// function imprimir (questions){
//  //crear pregunta
//  let arrayDelete= [];
//     let parrafo= document.createElement("p");
//     let textoParrafo = document.createTextNode(questions.title);
//     parrafo.appendChild(textoParrafo);
//      divQuestion.appendChild(parrafo);
//     arrayDelete.push(parrafo);
//    //crear Input
//    fetch(`localhost:${process.env.PORT}/read`)
//    .then(response => response.json())
//    .then(data => {
//    data.map(item => crearCajaCharacter (item))
//       let input = document.createElement("input");
//       input.setAttribute("id",);
//       input.setAttribute("value", i);
     
//       input.setAttribute("name", "answer");
//       input.setAttribute("type", "radio");

//     divAnswers.appendChild(input);
//     arrayDelete.push(input);
//   //Crear label
//     let label =document.createElement("label");
    
 
//     let textoLabel=document.createTextNode(arrayAllAnswers[i]);
//     label.setAttribute("for", i );
//     label.appendChild(textoLabel);
   
//     //añadimos un evento!
//     label.addEventListener("click",
//     () => {
//         comprueba (questions.true, i, arrayDelete, label );

//   });
 
//   divAnswers.appendChild(label);
//   arrayDelete.push(label);
//    }
// }
//    imprimir(quizDogs[flag]);

// //función para comprobar
// function  comprueba (answerTrue, answer, arrayDelete, label) {
//     if(answerTrue === answer){
//         label.classList.add("success");
//         flag++;
        
//         setTimeout(() => deleteQuestion  (arrayDelete), 3000) ;
//         if (flag < quizDogs.length){
//             setTimeout(() => imprimir(quizDogs[flag]),3500);
//           } else{
//                 console.log("FIN " );
//             }
//     }else
//     {

//                 label.classList.add("fail");
//             }




//     }


// function deleteQuestion (arrayDelete){

//     for(let i=0; i<arrayDelete.lenght; i++){

//         arrayDelete[i].remove();
//     }


// }
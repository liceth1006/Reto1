'use strict'
//import {multiplicar} from './validate.js';
import {paintCard,addResult,addResult2,addResult3,addResult4} from './paint.js';
//crear evento 

const btnCalcular = document.getElementById('btnCalcular');


  btnCalcular.onclick= function(){
    const cant = document.getElementById('cantidad').value;
    const cant2 = document.getElementById('cantidad').value;
    const cant3 = document.getElementById('cantidad').value;
    const cant4 = document.getElementById('cantidad').value;
    const op = document.getElementById('opcion').value;
    if (op === 'azul'){
      if ( op !=0){
        if (!isNaN(cant)){
          addResult(cant);
          document.getElementById('cantidad').value="";
        }else {
          Alert("Promedio Invalido");
        } 
      }else {
         Alert("Datos invalidos, revisar campos");
      }
    } else if (op === 'verde') {
      if ( op !=0){
        if (!isNaN(cant2)){
          addResult2(cant2);
          document.getElementById('cantidad').value="";
        } else {
          modalAlert("Datos invalidos, revisar campos");
        }
      }
    } else if (op === 'rosado') {
      if ( op !=0){
        if (!isNaN(cant3)){
          addResult3(cant3);
          document.getElementById('cantidad').value="";
        } else {
          modalAlert("Datos invalidos, revisar campos");
        }
      }
    } else if (op === 'rojo') {
      if ( op !=0){
        if (!isNaN(cant4)){
          addResult4(cant4);
          document.getElementById('cantidad').value="";
        } else {
          modalAlert("Datos invalidos, revisar campos");
        }
      }
    }
    if (op === 'azul'){
      paintCard("AZUL");
    }else if (op === 'verde') {
      paintCard("VERDE");
    } else if (op === 'rosado') {
      paintCard("ROSADO");
    } else if (op === 'rojo') {
      paintCard("ROJO");
    } 

  }

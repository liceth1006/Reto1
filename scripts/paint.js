'use strict'
//pintar tarjeta addicionar 
const cardAzul =document.getElementById('cardAzul');
const cardVerde =document.getElementById('cardVerde');
const cardRosado =document.getElementById('cardRosado');
const cardRojo =document.getElementById('cardRojo');
const resultados=[];
const resultados2=[];
const resultados3=[];
const resultados4=[];

const precio=400000;
const paintCard = (resultado) => {
    resultado = resultado.toUpperCase();
    const fragment = document.createDocumentFragment();
    const templateResultado = document.querySelector('#cardResultado').content;
    const templateResultado2 = document.querySelector('#cardResultado2').content;
    const templateResultado3 = document.querySelector('#cardResultado3').content;
    const templateResultado4 = document.querySelector('#cardResultado4').content;

    if (resultado === 'AZUL') {
      for (let i of resultados){
        const cloneTemp = templateResultado.cloneNode(true);
        cloneTemp.querySelector('.total').innerHTML = `Total:$ ${(i.cant*precio)}`;
        cloneTemp.querySelector('.cantidadResultado').innerHTML = `Cantidad: ${i.cant}`;
        cloneTemp.querySelector('.color').innerHTML = `Color: ${'<img src="../assets/img/azul.png">'}`;
        fragment.appendChild(cloneTemp);
      }
    } else if (resultado === 'VERDE') {
      for (let i of resultados2){
        const cloneTemp = templateResultado2.cloneNode(true);
        cloneTemp.querySelector('.total').innerHTML = `Total: ${(i.cant2*precio)}`;
        cloneTemp.querySelector('.cantidadResultado').innerHTML = `Cantidad: ${i.cant2}`;
        cloneTemp.querySelector('.color').innerHTML = `Color: ${'<img src="../assets/img/verde.png">'}`;
        fragment.appendChild(cloneTemp);
      }

    } else if (resultado === 'ROSADO') {
      for (let i of resultados3){
        const cloneTemp = templateResultado3.cloneNode(true);
        cloneTemp.querySelector('.total').innerHTML = `Total: ${(i.cant3*precio)}`;
        cloneTemp.querySelector('.cantidadResultado').innerHTML = `Cantidad: ${i.cant3}`;
        cloneTemp.querySelector('.color').innerHTML = `Color: ${'<img src="../assets/img/fucsia.png">'}`;
        fragment.appendChild(cloneTemp);
      }

    }else if (resultado === 'ROJO') {
      for (let i of resultados4){
        const cloneTemp = templateResultado4.cloneNode(true);
        cloneTemp.querySelector('.total').innerHTML = `Total: ${(i.cant4*precio)}`;
        cloneTemp.querySelector('.cantidadResultado').innerHTML = `Cantidad: ${i.cant4}`;
        cloneTemp.querySelector('.color').innerHTML = `Color: ${'<img src="../assets/img/rojo.png">'}`;
        fragment.appendChild(cloneTemp);
      }
    }
  cardAzul.appendChild(fragment);
  cardVerde.appendChild(fragment);
  cardRosado.appendChild(fragment);
  cardRojo.appendChild(fragment);
}
const addResult = (cantidad) => {
  //Objeto literal de JS
  let result = {
      cant: cantidad,
  }
  resultados.push(result);

}
const addResult2 = (cantidad2) => {
  //Objeto literal de JS
  let result2 = {
      cant2: cantidad2,
  }
  resultados2.push(result2);

}
const addResult3 = (cantidad2) => {
  //Objeto literal de JS
  let result3 = {
      cant3: cantidad2,
  }
  resultados3.push(result3);

}
const addResult4 = (cantidad2) => {
  //Objeto literal de JS
  let result4 = {
      cant4: cantidad2,
  }
  resultados4.push(result4);

}
export {paintCard,addResult2,addResult,addResult3,addResult4}

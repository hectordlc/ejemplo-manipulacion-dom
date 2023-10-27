







//const h1 = document.querySelector('h1');
//const p = document.querySelector('p');
//const parrafito = document.querySelector('.parrafito');
///const pid = document.querySelector('#pid');
//const input = document.querySelector('input');

//console.log({
   // h1,
   // p,
   // parrafito,
   // pid,
   // input
//});


//console.log(h1);

//h1.innerHTML = "pato <br> fep";
//h1.innerText = "pato esta comiendo";
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');
//h1.classList.add('rojo');
//h1.classList.remove('rojo');

//input.value = "hola";
//console.log(document.createElement('img'));

//const img = document.createElement('img');
//img.setAttribute('src','https://comparte-entity-photos.s3.us-east-2.amazonaws.com/65f69dc3-b491-4ffd-aa35-01e68e32f5fb.png');

//pid.innerHTML = "";
//pid.append(img);


const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#result')

form.addEventListener('submit', sumarInputValues );

function sumarInputValues(event) {
    event.preventDefault();
   const sumaInputs = input1.value + input2.value ;
   pResult.innerText = "Resultado" + sumaInputs;
}
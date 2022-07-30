//* =====================================================
//*                     DOM SELECTORS
//* ======================================================

console.log('***** SELECTORS *****');

//* =====================================================
//*                   GETELEMENTBYID()
//* ======================================================

//* EXAMPLE-1 (Paragraph Style)
//*-------------------------------------------------------

const header = document.getElementById('header');
console.log(header);

header.style.color = 'red';

//* EXAMPLE-2 (Button Style)
//*---------------------------------------------------
const button = document.getElementById('btn');
btn.style.backgroundColor = 'black';
btn.style.color = 'yellow';
btn.style.fontSize = '2rem';

//* ======================================================
//*                   GETELEMENTSBYTAGNAME()
//* ======================================================

//*EXAMPLE-3 (img styling)
//*-------------------------------------------------------

const img = document.getElementsByTagName('img');
console.log(img);

img[0].style.border = 'solid';
img[0].style.borderColor = 'red';
img[0].style.transform = 'rotate(-5deg)';

//*======================================================
//*                   GETELEMENTSBYCLASSNAME()
//* ======================================================

//* EXAMPLE-4
//* ---------------

const par = document.getElementsByClassName('par');
// par[0].textContent = 'DOM Manipülasyonu';
// par[0].innerText = 'DOM Manipülasyonu';
par[0].innerHTML += '  <a href="https://clarusway.com">Clarusway</a>';


// **************** QUERYSELECTOR() *********************


/*const title = */ document.querySelector('title').textContent = 'JS09-DOM ❤';

const myPars = document.querySelector('p')

console.log(myPars);

// myPars.forEach((p) => console.log(p.innerText));

const myPars1 = document.getElementsByClassName('par');
console.log(myPars);
const myParsArray = Array.from(myPars1);

console.log((myParsArray));
myParsArray.forEach((p) => console.log(p.innerText));


[...myPars1].forEach((p) => console.log(p.innerText));

console.log(document.querySelector('section p a'));


































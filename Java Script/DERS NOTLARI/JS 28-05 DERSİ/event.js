//* ======================================================
//*                        EVENTS
//* ======================================================

console.log('****** EVENTS *******');

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

// ****************** METHOD-3 **************

// document.getElementById('header').onmouseover = function () {
//     document.getElementById('header').style.color = 'red';
// };

const header = document.getElementById('header');

header.onmouseover = function () {
    header.style.color = 'aqua';
}

header.onmouseout = function () {
    header.style.color = 'black';
}

// ****************** METHOD-4 **************

const myImg = document.querySelector('img');

// myImg.addEventListener('mouseover', () => {
//     myImg.style.transform = 'translateY(5px)';

// });

// myImg.addEventListener('mouseoute', () => {
//     myImg.style.transform = 'translateY(-5px)';

// });


// myImg.addEventListener('mouseover', () => {
//     myImg.style.transform = 'scale(1.2, 1.2)';

// });

// myImg.addEventListener('mouseoute', () => {
//     myImg.style.transform = 'scale(1)';

// });

//************** */ EXAMPLE-2 (Button on click) ****************

const button = document.querySelector('#btn');

button.addEventListener('click', function(event) {
    console.log(event)
    document.querySelector('body').style.backgroundImage = 'linear-gradient(to right, purple, yellow)';
    button.textContent = 'Search';

});
































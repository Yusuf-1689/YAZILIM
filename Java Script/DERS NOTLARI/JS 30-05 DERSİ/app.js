console.log('**** app.js *******');

const dilInput = document.querySelector('.diller');
const silBtn = document.getElementById('sil');
const ekleBtn = document.getElementById('ekle');

const dilSection = document.querySelector('#dil-section');

const ul = document.createElement('ul');
dilSection.appendChild(ul);

console.log(dilSection.children[0]);
// console.log(dilSection.parentNode.);
// console.log(dilSection.parentNode.parentNode);
console.log(dilSection.parentNode.parentNode.parentNode);

// const h1 = ul.closest('.container').firstChild;
const h1 = ul.closest('.container').firstElementChild;

console.log(h1);

h1.style.color = 'red';


buttons= ul.closest('.container').querySelectorAll('.btn');

console.log(buttons);

// *************************************************************/

ekleBtn.onclick = function() {
    if (!dilInput.value){
        alert('Lütfen bir dil giriniz');
    } else {
        ul.innerHTML += ` <li>${dilInput.value}</li>`;
        dilInput.value = '';
        javascriptKontrol();
    }
};

 const javascriptKontrol = () => {
            document.querySelectorAll('ul li').forEach((dil) => {
                const kucukHarf = dil.textContent.toLowerCase();
                if(kucukHarf === 'javascript' ) {
                    // dil.className = 'red';
                     //? alternatif yöntem
                    dil.setAttribute('class', 'red');
                   
                }
               
            });
        };

        silBtn.onclick = function() {
            ul.childElementCount > 0
            ? ul.removeChild(ul.lastElementChild)
            : alert('Silinecek dil kalmadı');
        };

dilInput.addEventListener('keydown', (e) =>{
    console.log(e);
    if(e.code === 'Enter'){
        ekleBtn.click();
        // ekleBtn.onclick();
        // onclick le yapıncada oluyor
    }
    if (e.code === 'Delete') {
        silBtn.onclick();
    }
} );

window.onload = () => {
    javascriptKontrol();
    dilInput.focus();
}











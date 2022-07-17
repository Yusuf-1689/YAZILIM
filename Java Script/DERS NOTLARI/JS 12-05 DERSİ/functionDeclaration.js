// console.log( ** ** ** ** ** ** FUNCTION ** ** ** ** ** * ');

// !------------ 1. YÖNTEM : FUNC DECLARATİON------------- 
//!------------------------------------------------------------

console.log('** ** ** ** ** FUNC DECLARATİON ** ** ** ** **');

// Örnek1:
// **************************************
// yazdır(); //!invoke

//! Declaration
//! Paremetre olmamış , bir şey döndürmek (void function)
function yazdir() {
    console.log('Merhaba');
}

yazdir(); //!invoke
yazdir(); //!invoke

console.log(typeof yazdir); //* function


//* Örnek2: Paremetreli Fonksiyon
//*------------------------------------------


function selamla(name, lastName = '') {
    console.log(`Merhaba ${name} ${lastName}`);
}

selamla('Erhan', 'Yılmaz');
selamla('Erol');
selamla('Yusuf');

//* Örnek3. Paremetreli, Dönüş değerli
//********************************************* */

function yasHesapla(year, name) {
    // const mesaj = `${name} in yaşı ${2022-year} dir`
    const mesaj = `${name} in yaşı ${new Date().getFullYear()  - year} dir`
    return mesaj;
}

const mesaj1 = yasHesapla(2001, 'Elif')
console.log(mesaj1);

//* Örnek4: Parametreli,Dönüş değerleri
//*********************************************** */
console.log(tekCift(5));
console.log(tekCift(2));

function tekCift(number) {
    return number % 2 === 0 ? `${number} çifttir` : `${number} tektir`;
}
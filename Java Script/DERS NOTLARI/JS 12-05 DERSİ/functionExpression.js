console.log('********* FUNCTİON EXPRESSİON **********');

//* Örnek1: Parametreli,Dönüş değerleri
//*********************************************** */

// console.log(tekCift(5));
// !function EXPRESSİON yöntemiyle bir function tanımlandığında önce tanımlamanın yapılması gerekir yoksa Uncaught ReferenceError: cannot access 'tekCift' before initialization hatası alınır

const tekCift = function(number) {
    return number % 2 === 0 ? `${number} çifttir` : `${number} tektir`;
}


console.log(tekCift(2));

// örnek2: 3 sayinin en büyüğünü bulan fonks.bulan
// *************************************************
const buyukBul = function(x, y, z = -Number.MAX_VALUE) {
    let enBuyuk;
    if (x >= y && x >= z) {
        enBuyuk = x;
    } else if (y >= x && y >= z) {
        enBuyuk = y;
    } else if (z >= x && z >= y) {
        enBuyuk = z;
    } else {
        enBuyuk = x;
    }
    return enBuyuk;
};
console.log('En Büyük Sayi:', buyukBul(1, 3, 2));
console.log('En Büyük Sayi:', buyukBul(5, 2, 1));
console.log('En Büyük Sayi:', buyukBul(4, 6, 7));
console.log('En Büyük Sayi:', buyukBul(6, 6, 7));
console.log('En Büyük Sayi:', buyukBul(9, 8, 9));
console.log('En Büyük Sayi:', buyukBul(8, 9, 9));
console.log('En Büyük Sayi:', buyukBul(8, 9));
console.log('En Büyük Sayi:', buyukBul(-8, -9));

//* ORNEK3: Bir fonksiyon içerisinde başka fonksiyonlar çağrılabilir
//*****************************************************/

const hesapla = function(islem, s1, s2) {
    let sonuc;

    if (islem == '+') {
        sonuc = topla(s1, s2);
    } else if (islem == '-') {
        sonuc = cikar(s1, s2);
    } else if (islem == '*') {
        sonuc = carp(s1, s2);
    } else if (islem == '/') {
        sonuc = bol(s1, s2);
    }
    return sonuc;
};

const topla = function(s1, s2) {
    return s1 + s2;
};
const cikar = function(s1, s2) {
    return s1 - s2;
};
const carp = function(s1, s2) {
    return s1 * s2;
};
const bol = function(s1, s2) {
    return s1 / s2;
};

console.log(hesapla('+', 3, 5));
console.log(hesapla('-', 3, 5));
// ?======================================================
// ?                     STRING METOTLARI
// ! KAYNAK: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// ?======================================================

//! Klasik yöntem ile string tanımlanırsa bu string bir primitive değişkendir.
const str1 = 'Clarusway';
const str2 = ' Hello';
const str3 = ' World';

console.log(typeof str1);
const str4 = str1 + str2; //* String concat
console.log(str4);

console.log(str4.concat(str3));

//! Non-primitive String tanımlama
const str5 = new String('Non-primitive String');
console.log(str5, typeof str5);





//* Normalde primitive veri tiplerinin property veya metodu olmaz.
//* Ancak,Javascript otomatik olarak primitive String'ler için object wrapper oluşturur.
//* Bu sayede, String nesnelerine ait olan fonksiyonlar veya özellikleri
//* primitive string ile kullanılabilir hale gelir.
//* Sonrasında oluşan bu object bellekten otomatik olarak kaldırılır.



//* ----------------------------------------------------------
//*  concat() - immutable
//* ----------------------------------------------------------

const s1 = ' hello';
const s2 = ' word';
const s3 =  s1.concat(s2);
console.log(s3);

console.log(s3.concat(' clarusway ',  str2, " Merhaba"))
console.log(s2,s3);

//* ----------------------------------------------------------
//* charAt()
//* ----------------------------------------------------------

console.log(s3.charAt());
console.log(s3.charAt(4));
console.log(s3.charAt(s3.length-1));


//* ----------------------------------------------------------
//* includes()
//* ----------------------------------------------------------

const word = 'To be or not to be, that is the question';

console.log(word.includes('to be'));
console.log(word.includes('That'));
console.log(word.includes(''));
console.log(word.includes('to be', 13));
console.log(word.includes('to be', 14));


//* ----------------------------------------------------------
//* indexOf() , lastIndexOf()
//* ----------------------------------------------------------
const tobeIndex = word.indexOf('or');
console.log(tobeIndex);
console.log(word.indexOf('be'));
console.log(word.lastIndexOf('be'));
console.log(word.lastIndexOf('BE'));
//* ----------------------------------------------------------
//* startsWidth() , endsWith()
//* ----------------------------------------------------------
const word2 = 'Salına salına sinsice !';
console.log(word2.startsWith("sa"));
console.log(word2.startsWith("sa", 7));
console.log(word2.endsWith('!'));
//* ----------------------------------------------------------
//*  replace(searchFor, replaceWith)
//* ----------------------------------------------------------

// const oku = 'Oku Baban gibi, saf olma';
// console.log(oku.replace('saf olma', 'akıllı ol'));
// console.log(oku);
let oku = 'Oku Baban gibi, saf olma';
console.log(oku.replace('saf olma', 'akıllı ol'));
oku = oku.replace('saf olma', 'akıllı ol');
console.log(oku);

//* Detaylı değiştirme alternatifleri için regex kullanılabilir.
console.log(oku.replace(/AKILLI/i, 'Zeki'));
//* ----------------------------------------------------------
//*  slice(beginIndex[, endIndex])
//*  substring(beginIndex[, endIndex])
//*  substr (depreceated)
//* ----------------------------------------------------------
const veysel = 'Uzun ince bir yoldayım yürüyorum gündüz gece..';
const sliced = veysel.slice(33);
console.log(sliced, veysel);
console.log(sliced, typeof sliced);

console.log(veysel.slice(17,30));
console.log(veysel.slice(-10));
console.log(veysel.slice(-23,-19));
console.log(veysel.substring(17,30));

//* ----------------------------------------------------------
//* split([sep [, limit] ])
//* ----------------------------------------------------------

const tarkan = 'Gel gündüzle gece olalım';
const splited = tarkan.split(' ');
console.log(splited);
console.log(splited, typeof splited);
const gece = splited[2];
console.log(gece);

const chars = tarkan.split('');
console.log(chars);

const copyTarkan = tarkan.split();
console.log(copyTarkan);

//* ÖDEV
//* ----------------------------------------------------------
// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE

//* ----------------------------------------------------------
//* trim();
//* ----------------------------------------------------------
const ramazan = '       Hoş geldin ya şehri Ramazan        ';
console.log(ramazan);
console.log(ramazan.length);
console.log(ramazan.trim());
console.log(ramazan.trim().length);
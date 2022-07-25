// ?=========================================================
// ?                DİZİLER (ARRAYS)
// ?=========================================================

console.log('***** ARRAYS ******');

//* Dizi Tanımlama
//* ---------------------------------------------------------
// ! 1. Yöntem (Array Literal) - Tercih edilen yöntem

const isimler = ['ahmet', 'mehmet', 'ismet', 'saffet'];
console.log(isimler);
console.log(isimler.length);

// ! 2. Yöntem (Object Constructor)
const diller = new Array('Python', 'C++', 'JS', 'Go');
console.log(diller);

const numbers = new Array(3, 2, 1);
console.log(numbers);

const sayilar = new Array(10);
// ! 10 elemanlık boş bir array oluşturuldu
console.log(sayilar);

//* Diziden Veri Okuma-Yazma
//* ---------------------------------------------------------
// ! Okuma
const java = diller[1];
console.log(java);

// ! Diziye yazma

isimler[2] = 'Canan';
console.log(isimler);

// isimler = ['Can', 'Canan', 'Cavidan'];
// ! Uncaught TypeError: Assignment to constant variable.
// console.log(isimler);

const yaslar = [22, 18, 15];
const kisiler = ['Ahmet', 'Yilmaz', 2022, 2022 - 1970, true, 5.6, yaslar];
console.log(kisiler);

console.log(kisiler[6][1]);
console.log(kisiler[kisiler.length-1][1]);

kisiler[6][2]++;
console.log(kisiler);

// const sonYaş = kisiler[6][2]++;
// console.log(sonYaş, kisiler);

const sonYaş = ++kisiler[6][2];
console.log(sonYaş, kisiler);

//? ===========================================================
//?  DİZİYİ DEĞİŞTİREN (MUTATOR) METOTLAR
//? ===========================================================

const cars = ['BMW', 'Prosche', 'Mercedes', 'Fiat'];

const deleted = cars.pop();
console.log(cars, 'Silinen:', deleted);

const n = cars.push('Volvo');
console.log(cars, n);

const boyut = cars.unshift('Audi');
console.log(boyut, cars);

const silinen = cars.shift();
console.log(silinen, cars);

console.log(cars.reverse());
console.log(cars);

console.log(cars.sort());

const rakamlar = [3, 5, 1, 10, 55];
console.log(rakamlar.sort());



rakamlar.sort((a, b) => a - b);
console.log(rakamlar);

cars.splice(1,0,"Vosvos");
console.log(cars);

cars.splice(2,1,"Anadol");
console.log(cars);
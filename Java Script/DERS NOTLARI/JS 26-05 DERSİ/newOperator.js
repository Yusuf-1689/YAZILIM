//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (OBJECT)
//* ======================================================
console.log('****** NEW OPERATORS *******');
// const car = {
//   name: 'BMW',
//   model: 1990,
//   engine: 1.6,
// };

// //* 1.YONTEM (Classical)
// console.log(car.model);
// console.log(car['name']);

// //* 2.YONTEM: DESTRUCTURING
// const { name, model, engine } = car;
// console.log(name, model, engine);

// //* EXAMPLE: NESTED
const cars = {
  car1: {
    name: 'BMW',
    model: 1990,
    engine: 1.6,
  },
  car2: {
    name: 'Mercedes',
    model: 2022,
    engine: 2.0,
  },
};

const { car1, car2 } = cars;
console.log(car1, car2);

const { name: c1Name, model: c1Model } = car1;
console.log(c1Name, c1Model);

const { name: c2Name, model: c2Model } = car2;
console.log(c2Name, c2Model);

const kisiler = [
  {
    name: 'Ahmet',
    surname: 'Can',
    job: 'developer',
    age: 30,
  },
  {
    name: 'Mehmet',
    surname: 'Baki',
    job: 'tester',
    age: 35,
  },

  {
    name: 'Ruzgar',
    surname: 'Kuzey',
    job: 'tester',
    age: 24,
  },
];

kisiler.forEach((kisi) => {
  console.log('*********************');
  console.log('NAME:', kisi.name);
  console.log('SURNAME:', kisi.surname);
  console.log('JOB:', kisi.job);
  console.log('AGE:', kisi['age']);
});

kisiler.forEach((kisi) => {
  console.log('*********************');
  const { name, job, surname, age } = kisi; //?DESTRUCTURING
  console.log('NAME:', name);
  console.log('SURNAME:', surname);
  console.log('JOB:', job);
  console.log('AGE:', age);
});

//* function
function getInfo() {
  return {
    id: 101,
    name: 'Apple',
    price: 20000,
  };
}
const { id, name, price } = getInfo(); //? DESTRUCTURING
console.log(id, price);

//* ======================================================
//*    NEW GENERATION OPERATORS: DESTRUCTURING (ARRAY)
//* ======================================================

const names = ['Ahmet', 'Mehmet', 'İsmet', 'Saffet'];

/* Classical method*/
const name1 = names[0]; //Ahmet
const name2 = names[1]; //Mehmet

const [person1, person2, , person4] = names;
console.log(person1, person2, person4);

//*======================================================
//*   NEW GENERATION OPERATORS: SPREAD OR REST (...)
//* ======================================================

//* REST: (Arrays) */
const vehicles = ['bmw', 'reno', 'mercedes', 'ferrari', 'anadol'];

const [vec1, vec2, ...restVehicles] = vehicles;

console.log(vec1, vec2);
console.log(restVehicles);

//* REST (Objects)
const personel = {
  pName: 'john',
  surname: 'smith',
  job: 'developer',
  age: 30,
};

const { pName, job, ...surnameAge } = personel;
console.log(pName, job, surnameAge);

//* REST (Function Arguments)
const topla = (x, y) => {
  return x + y;
};

//? hata vermez fakat sadece 2 argümanı toplar
console.log(topla(1, 2, 3, 4, 5, 6));

const hespiniTopla = (...sayilar) => {
  let toplam = 0;
  console.log(sayilar); //?[1, 2, 3, 4, 5, 6]
  sayilar.forEach((sayi) => (toplam += sayi));
  return toplam;
};

console.log(hespiniTopla(1, 2, 3, 4, 5, 6));

//? ------------------------------------------------------
//?  SPREAD
//? ------------------------------------------------------

const araclar = ['Ucak', 'Helikopter', 'Bisiklet'];
const otomobiller = ['Tır', 'Otobus', 'Araba', 'SUV'];

const tumAraclar = [...araclar, ...otomobiller];
console.log(tumAraclar);

//* Example
const meyveler = ['cherry', 'pear', 'apricot', 'raisin'];
const turunclar = ['mandarin', ...meyveler, 'lime', 'orange'];
console.log(turunclar);

//* Ornek (String spread)
let str = 'Hello FS';
console.log([...str]);
console.log(Array.from(str));

//* Ornek (max)
console.log(Math.max(1, 3, 9, 5));
const rakamlar = [1, 3, 9, 5];
console.log('MAX:', Math.max(...rakamlar));








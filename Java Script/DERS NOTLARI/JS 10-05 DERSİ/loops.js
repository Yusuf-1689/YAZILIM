console.log('****** LOOPS ******');


// for (let i = 1; i <= 10; i++) {
//     const randomSayi = Math.floor(Math.random() * 100 + 1);
//     console.log(randomSayi);

// }

// console.log('Program bitti');

//---------------------------------------------------------------------------------------------

// sürekli uyarı çıkmasın diye örneğe kadar kapatıyoruz

// ornek: 1 denn kadar sayılarıtoplayankodu yazınız.

// const n = prompt('n saayısını giriniz:');
// let toplam = 0;
// for (let i = 1; i <= n; i++) {
//     toplam += i;

// }

// console.log('Toplam:', toplam);

// Örnek: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

//*************************************WHİLE**************************************** */

// let i = 1;
// while (i <= 5) {
//     // console.log('Merhaba');
//     // 5 merhaba yazar
//     console.log('Merhaba-', i);
//     // merhaba 1/2/3/4/5 beş tane yazar
//     i++;
// }

// console.log('Bitti')

//-----------------------------------------------------------------------------------------

// let not = prompt('Lütfen notunuzu giriniz (0-100):');

// while (not < 0 || not > 100) {
//     console.log('Girdiğiniz not 0-100 arasında olmalıdır');
//     not = prompt('Lütfen notunuzu giriniz (0-100):')
// }
// console.log('Girdiğiniz not', not);

//*************************************DO-WHİLE**************************************** */

// let i = 1;

// do {
//     console.log('Merhaba-', i);
//     i++;
// } while (i <= 5);

//---------------------------------------------------------------------------------------

// let not;

// do {
//     not = prompt('Lütfen notunuzu giriniz (0-100):');

// } while (not < 0 || not > 100);

// console.log('Girdiğiniz not', not);

//-------------------------------------------------------------
// bu yöntemde oluyor göstermek için yaptık

// let not;

// do {
//     not = prompt('Lütfen notunuzu giriniz (0-100):');
//     if (not < 0 || not > 100); {
//         alert('Girdiğiniz not 0-100 arasında olmalıdır');
//     }

// } while (not < 0 || not > 100);

// console.log('Girdiğiniz not', not);

//? ÖDEV: Klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.
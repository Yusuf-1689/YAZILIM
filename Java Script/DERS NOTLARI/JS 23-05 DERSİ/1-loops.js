//* =====================================================
//*                     FOR LOOP
//* ======================================================

console.log('******* LOOPS IN ARRAYS ******');

const islemler = [-3000, 4500, -2200, -6000, 9000];

const islemlerToplami = () => {
  let yatirma = 0,
    cekme = 0;
  for (let i = 0; i < islemler.length; i++) {
    if (islemler[i] >= 0) {
      yatirma += islemler[i];
    } else {
      cekme += islemler[i];
    }
  }
  return `Toplam yatirma: ${yatirma}, Toplam Cekme:${-cekme}`;
};

console.log(islemlerToplami());

//* ======================================================
//*                   FOR-IN LOOP
//* ======================================================

//*-------------------------------------------------------
//* SORU: Ogrenciler dizisinde ogrenci isimleri saklanmaktadir.
//* ogrncileri aramamızı sağlayacak ve aranılan ogrenciden
//* ne kadar sayida bulunuldugunu  ana programa döndürecek bir
//*  fonksiyonu yazınız. Eğer aranılan isimde bir ogrenci yok ise
//* fonksiyon aranılan ogrenci bulunamdı dondurulmelidir.
//*--------------------------------------------------------

const ogrenciler = [
  'ahmet',
  'mehmet',
  'ismet',
  'saffet',
  'ahmet',
  'nur',
  'can',
  'nur',
  'mehmet',
  'cem',
];

const ogrenciBul = function (isim) {
  let sayac = 0;
  for (let i in ogrenciler) {
    if (ogrenciler[i] === isim) {
      sayac++;
    }
  }

  if (sayac === 0) {
    return `${isim} bulunamadi`;
  } else {
    return `${isim}, ${sayac} adet bulundu`;
  }
};

let ogrIsim = prompt('Ogrenci adini giriniz:').toLocaleLowerCase();
console.log(ogrenciBul(ogrIsim));

//* ======================================================
//*                   FOR-OF LOOP
//* ======================================================

//* for of dongusu, for in dongusunun bir cok veri yapisini
//* kapsayacak sekilde guncellenmis halidir. Bu dongude dizi
//* icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

const ogrenciBulForOf = function (isim) {
  let sayac = 0;
  for (let ogrenci of ogrenciler) {
    ogrenci === isim ? sayac++ : null; //! Ternary
    //! Short-circuit yöntemi: && => koşul doğru ise ifadeyi çalıştır.
    // ogrenci === isim && sayac++;

    //! Short-circuit yöntemi: || => koşul yanlış ise ifadeyi çalıştır.
    // ogrenci === isim || sayac--; //! Short-circuit yöntemi
  }

  return !sayac ? `${isim} bulunamadi` : `${isim}, ${sayac} adet bulundu`;
  // return sayac ? `${isim}, ${sayac} adet bulundu` : `${isim} bulunamadi`;
};

let ogrName = prompt('Ogrenci adini giriniz:').toLocaleLowerCase();
console.log(ogrenciBulForOf(ogrName));
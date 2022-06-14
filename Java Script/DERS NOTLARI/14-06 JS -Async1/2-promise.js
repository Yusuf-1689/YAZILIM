//* ======================================================================
//*                          2- Promises
//* =======================================================================

//? Promise, asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil bir nesne yapisidir.

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyion verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginda, reject ise
//*    basarisizlikla bittiginde isletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan
//* fulfilled:islem basariyla tamamlandini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise bir degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme olarak kullanilabilirler.

const myPromise = new Promise((resolve, reject) => {
    let success = Math.floor(Math.random() * 5);
    const data = { a: 1, b: 2 };
    if (success) {
        resolve(data);
        console.log('Task performed successfly');
    } else {
        reject(new error('Task Failed'));
    }
});

console.log(myPromise);

myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

//* Example-2: TEA TIME
//* -----------------------------------------------------------------------
//* 1. wait until water boiled -> kettle -> work or failed
//* 2. add tea --> tea is avalaible or not
//* 3. wait for brewing
const wait = (ms) => {
    const start = new Date().getTime();
    while (new Date().getTime() < start + ms);
};
const brewTea = () => {
    boil()
        .then((status1) => {
            console.log(status1);
            return addTea();
        })
        .then((status2) => {
            console.log(status2);
            wait(1000);
            return "Tea is ready. Bon Appetite";
        })
        .then((status3) => {
            console.log(status3);
        })
        .catch((err) => console.log(err));
};
const boil = () => {
    return new Promise((resolve, reject) => {
        const boiled = Math.floor(Math.random() * 5);
        if (boiled) {
            wait(1000);
            resolve("Water Boiled");
        } else {
            reject(new Error("Kettle Failed"));
        }
    });
};

const addTea = () => {
    return new Promise((resolve, reject) => {
        const teaAvalaible = Math.floor(Math.random() * 3);
        if (teaAvalaible) {
            wait(1000);
            resolve("Tea was added");
        } else {
            reject(new Error("Tea unavailable"));
        }
    });
};

brewTea();









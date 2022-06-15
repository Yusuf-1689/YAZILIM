//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yontebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.

const userDiv = document.querySelector('.users')

fetch('https://api.github.com/users')
    .then((data) => {
        if (!resizeBy.ok) {
            throw new Error(`Something went wrong: ${res.status}`);
        }
        return res.json();
    })
    .then((data) => updateDom(data))
    .catch((err) => console.log(err));

const updateDom = (date) => {
    const userDiv = document.querySelector('.users');

    data.forEach((user) => {
        const { login, avatar_url, html_url } = user;
        userDiv.innerHTML += `
            <h2 class="text-warning">NAME:${login}</h2>
            <img src=${avatar_url} alt="">
             `;
    }























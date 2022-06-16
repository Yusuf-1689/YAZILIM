

const form = document.querySelector("section.top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector("span.msg");
const list = document.querySelector(".ajax-section .cities");

form.addEventListener("submit", () => {
    e.preventdefault();
    getWeatherDataFromApi();
});

// function getWeatherDataFromApi(){}
const getWeatherDataFromApi = async () => {
    // alert("http request gone");
    // input.value = "";    //aynısı form.reset ile
    let tokenKey = DecryptStringAES(localStorage.getItem("apiKey"));
    // console.log(apikey);
    let inputVal = input.value;
    let unitType = "metric";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${tokenKey}&units=${unitType}&lang=${lang}
    `;


    try {
        // const response = await fetch(url).then(response => response.json());
        // axios.get(url) == axios(url)
        const response = await axios(url);
        console.log(response.data);
    } catch (error) {

    }
    form.reset();

}















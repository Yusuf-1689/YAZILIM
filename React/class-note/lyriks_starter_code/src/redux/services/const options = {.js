const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '364165cef0msh1f876093391cdebp1a0796jsna9ef79f7e66d',
    'X-RapidAPI-Host': ''
  }
};

fetch('https://shazam.p.rapidapi.com/charts/track', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
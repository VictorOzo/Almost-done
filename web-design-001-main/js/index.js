
const url = 'http://data.fixer.io/api/latest?access_key=2f0122b7a0ea478a90811c399aa2d117&symbols=USD,AUD,CAD,PLN,MXN&format=1';

function fetchCurrency () {
    fetch(url).then(response => response.json()).then(data => console.log(data))
}

window.addEventListener('load', fetchCurrency)
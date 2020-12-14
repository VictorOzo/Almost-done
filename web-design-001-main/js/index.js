
const dropdown = document.querySelector('.dropdown')


const url = 'http://data.fixer.io/api/latest?access_key=2f0122b7a0ea478a90811c399aa2d117&symbols=USD,AUD,CAD,GBP,JPY&format=1';

const currencySlider = document.querySelector('.currency')
const container = document.querySelector('.currency-slider')
let rates;


async function fetchCurrency () {
    const data = await fetch(url)
    return data.json()
}


fetchCurrency().then((data) => {
    rates = Object.keys(data.rates)
    rates.forEach((quoteC) =>{
        createCurrencyElement(data, quoteC)
    })

}).catch(e => {throw new Error})

function createCurrencyElement (obj, arrayvalue) {
    const pQuote = document.createElement('p')
    const pValue = document.createElement('p')
    pQuote.append(`${obj.base}/${arrayvalue}`)
    pValue.append(`${obj.rates[arrayvalue]}`)

    currencySlider.className = "currency"
    currencySlider.append(pQuote, pValue)

    container.appendChild(currencySlider)

}


function checkLogin () {
    const userInfo = JSON.parse(localStorage.getItem('Credentials'))

    if (!userInfo){
        dropdown.classList.add('show-dropdown')
    }
    dropdown.classList.remove('show-dropdown')

}

window.addEventListener('load', checkLogin)
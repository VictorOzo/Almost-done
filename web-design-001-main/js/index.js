
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
    // const pQouteNode = document.createTextNode(`${obj.base}/${arrayvalue}`)
    // const pValueNode = document.createTextNode(`${obj.rates[arrayvalue]}`)
    pQuote.append(`${obj.base}/${arrayvalue}`)
    pValue.append(`${obj.rates[arrayvalue]}`)

    currencySlider.className = "currency"
    currencySlider.append(pQuote, pValue)

    container.appendChild(currencySlider)

}



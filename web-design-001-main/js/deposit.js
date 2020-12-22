const username = document.querySelector('#userName')
const useremail = document.querySelector('#userEmail')
const logoutBtn = document.querySelector('#btn_logout')
const btcAddress = document.querySelector('#btcAddress')
const ethAddress = document.querySelector('#ethAddress')
const tronAddress = document.querySelector('#tronAddress')
const loginBtn = document.querySelector('.login')
const signInBtn = document.querySelector('.sign-in')
const btnInvest = document.querySelector('#btn-invest')
const selectValue = document.querySelector('select')
const investAmount = document.querySelector('#invest-amount')

let userCredentials = {}

function retreiveInfo (){
    const userInfo = JSON.parse(localStorage.getItem('Credentials'))

    if (!userInfo){
        return window.location.assign('../loginpage.html')
    }


    userCredentials = userInfo.user
    userCredentials.token = userInfo.token
    username.innerText = userCredentials.name;
    useremail.innerText = userCredentials.email;
    btcAddress.innerText = `Bitcoin: ${userCredentials.bitcoinWalletAddress}`
    ethAddress.innerText = `Ethereum: ${userCredentials.ethereumWalletAddress}`
    tronAddress.innerText = `Tron: ${userCredentials.tronWalletAddress}`


}


function checkLogin () {

    const userInfo = JSON.parse(localStorage.getItem('Credentials'))

    if (!userInfo){
        dropdown.classList.toggle('show-dropdown')
    }
    else{
        loginBtn.classList.toggle('show-dropdown')
        signInBtn.classList.toggle('show-dropdown')
    }


}

function collectInvestInfo () {

    const amount = investAmount.value
    if (!amount){
        investAmount.value = 0;
        throw new Error();
    }
    let selectvalue = selectValue.value
    let interest = 0;

    if(selectvalue == 'gold')
        interest = 40
    else if (selectvalue == 'silver')
        interest = 35
    else{
        interest = 30
    }

    localStorage.setItem('value', interest)



    const amountObj = { amount }

    fetch('https://nameless-bayou-95782.herokuapp.com/deposit', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userCredentials.token}`
        },
        cache: 'no-cache',
        body: JSON.stringify(amountObj)

    }).then(response => response.text())
    .then((data) => {
        const dataObj = JSON.parse(data)
        const investValue = dataObj.data.user
        localStorage.setItem('Credentials', JSON.stringify(investValue))
        console.log(dataObj)

    }).catch(error => console.log(error))



}


function logoutUser(){
    localStorage.removeItem('Credentials')
    window.location.replace('../index.html')
}

function actionDeposit(e){
    e.preventDefault()
    window.location.assign('../dashboard/dashboard.html')
    // window.location.assign('https://localbitcoins.com/')
    collectInvestInfo()

}

window.addEventListener('load', checkLogin)
logoutBtn.addEventListener('click', logoutUser)
window.addEventListener('load', retreiveInfo)
btnInvest.addEventListener('click', actionDeposit)
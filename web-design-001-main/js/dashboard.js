const username = document.querySelector('#userName')
const useremail = document.querySelector('#userEmail')
const logoutBtn = document.querySelector('#btn_logout')
const btcAddress = document.querySelector('#btcAddress')
const ethAddress = document.querySelector('#ethAddress')
const tronAddress = document.querySelector('#tronAddress')
const loginBtn = document.querySelector('.login')
const signInBtn = document.querySelector('.sign-in')
const depositValue = document.querySelector('.deposit-value')
const profitValue = document.querySelector('.profit-value')
const withdrawValue = document.querySelector('.withdraw-value')


let userCredentials = {}

function retreiveInfo (){
    const userInfo = JSON.parse(localStorage.getItem('Credentials'))

    if (!userInfo){
        return window.location.assign('../loginpage.html')
    }

    userCredentials = userInfo.user
    username.innerText = userCredentials.name;
    useremail.innerText = userCredentials.email;
    btcAddress.innerText = `Bitcoin: ${userCredentials.bitcoinWalletAddress}`
    ethAddress.innerText = `Ethereum: ${userCredentials.ethereumWalletAddress}`
    tronAddress.innerText = `Tron: ${userCredentials.tronWalletAddress}`
}

function logoutUser(){
    localStorage.removeItem('Credentials')
    window.location.replace('../index.html')
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

function checkValue(){

    let depositV = userCredentials.balance
    let profitV = 0
    // let withdrawV;
    let depositPercentage = localStorage.getItem('value')


    depositValue.innerText =  depositV
    withdrawValue.innerText = 0

    setInterval(calculateInterest, 900000)

    function calculateInterest(){
        profitV += (depositV*(depositPercentage/1000))/100
        profitValue.innerText = profitV
        
    }
}


window.addEventListener('load', checkLogin)
logoutBtn.addEventListener('click', logoutUser)
window.addEventListener('load', retreiveInfo)
window.addEventListener('load', checkValue)

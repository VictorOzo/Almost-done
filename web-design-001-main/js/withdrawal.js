const username = document.querySelector('#userName')
const useremail = document.querySelector('#userEmail')
const logoutBtn = document.querySelector('#btn_logout')
const btcAddress = document.querySelector('#btcAddress')
const ethAddress = document.querySelector('#ethAddress')
const tronAddress = document.querySelector('#tronAddress')
const loginBtn = document.querySelector('.login')
const signInBtn = document.querySelector('.sign-in')

let userCredentials = {}

function retreiveInfo (){
    const userInfo = JSON.parse(localStorage.getItem('Credentials'))

    userCredentials = userInfo
    username.innerText = userCredentials.name;
    useremail.innerText = userCredentials.email;
    btcAddress.innerText = `Bitcoin: ${userCredentials.bitcoinWalletAddress}`
    ethAddress.innerText = `Ethereum: ${userCredentials.ethereumWalletAddress}`
    tronAddress.innerText = `Tron: ${userCredentials.tronWalletAddress}`
}


function checkLogin () {

    const userInfo = JSON.parse(localStorage.getItem('Credentials'))

    if (!userInfo){
        return window.location.assign('../loginpage.html')
    }

    if (!userInfo){
        dropdown.classList.toggle('show-dropdown')
    }
    else{
        loginBtn.classList.toggle('show-dropdown')
        signInBtn.classList.toggle('show-dropdown')
    }


}

function logoutUser(){
    localStorage.removeItem('Credentials')
    window.location.replace('../index.html')
}

window.addEventListener('load', checkLogin)
logoutBtn.addEventListener('click', logoutUser)
window.addEventListener('load', retreiveInfo)
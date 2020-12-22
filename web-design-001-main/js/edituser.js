const username = document.querySelector('#userName')
const useremail = document.querySelector('#userEmail')
const logoutBtn = document.querySelector('#btn_logout')
const commitBtn = document.querySelector('.btn-commit')

const btcAddress = document.querySelector('#btcAddress')
const ethAddress = document.querySelector('#ethAddress')
const tronAddress = document.querySelector('#tronAddress')

const editUsername = document.querySelector('.username')
const editUseremail = document.querySelector('.useremail')
const editUserpass = document.querySelector('.userpass')
const editUserphone = document.querySelector('.userphone')
const editUserimage = document.querySelector('.userimg')

const loginBtn = document.querySelector('.login')
const signInBtn = document.querySelector('.sign-in')

let userCredentials = {}
let userUpdateCredentials = {}

function retreiveInfo (){
    const userInfo = JSON.parse(localStorage.getItem('Credentials'))

    userCredentials = userInfo
    username.innerText = userCredentials.name;
    useremail.innerText = userCredentials.email;
    btcAddress.innerText = `Bitcoin: ${userCredentials.bitcoinWalletAddress}`
    ethAddress.innerText = `Ethereum: ${userCredentials.ethereumWalletAddress}`
    tronAddress.innerText = `Tron: ${userCredentials.tronWalletAddress}`
///////////////////////////////////////////////////////
    editUsername.value = userCredentials.name;
    editUseremail.value = userCredentials.email
}

function logoutUser(){
    localStorage.removeItem('Credentials')
    window.location.replace('../index.html')
}

function editUserFields(e){
    e.preventDefault()

    let newUserName = editUsername.value
    let newUserEmail = editUseremail.value
    let newUserPassword = editUserpass.value
    let newUserphone = editUserphone.value
    let newUserImg = editUserimage.value

    userUpdateCredentials = {
        newUserName,
        newUserEmail,
        newUserPassword,
        newUserphone,
        newUserImg
    }

    console.log(userUpdateCredentials)
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

window.addEventListener('load', checkLogin)


logoutBtn.addEventListener('click', logoutUser)
window.addEventListener('load', retreiveInfo)
commitBtn.addEventListener('click', editUserFields)
const username = document.querySelector('#userName')
const useremail = document.querySelector('#userEmail')
const logoutBtn = document.querySelector('#btn_logout')

let userCredentials = {}

function retreiveInfo (){
    const userInfo = JSON.parse(localStorage.getItem('Credentials'))

    userCredentials = userInfo
    username.innerText = userCredentials.name;
    useremail.innerText = userCredentials.email;
}

function logoutUser(){
    localStorage.removeItem('Credentials')
    window.location.replace('../index.html')
}

logoutBtn.addEventListener('click', logoutUser)
window.addEventListener('load', retreiveInfo)
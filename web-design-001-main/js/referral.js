const username = document.querySelector('#userName')
const useremail = document.querySelector('#userEmail')

let userCredentials = {}

function retreiveInfo (){
    const userInfo = JSON.parse(localStorage.getItem('Credentials'))

    userCredentials = userInfo
    username.innerText = userCredentials.name;
    useremail.innerText = userCredentials.email;
}


window.addEventListener('load', retreiveInfo)
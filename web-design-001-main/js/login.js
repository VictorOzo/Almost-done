const userEmail   = document.querySelector('#email')
const userPassword = document.querySelector('#pass')
const Btn_login = document.querySelector('#loginBtn');

function collectInfo (){

    let loginObj = {}

    const email = userEmail.value;
    const password = userPassword.value;

    loginObj = {
        email,
        password,
    }

    return loginObj

}


const loginUser =  (e) => {
    e.preventDefault()

    const loginData = collectInfo()

    fetch('https://nameless-bayou-95782.herokuapp.com/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache',
        body: JSON.stringify(loginData)

    }).then(response => response.text())
    .then((data) => {
        const dataObj = JSON.parse(data)
        const loginCredentials = dataObj.data.user
        window.location.replace("./dashboard/dashboard.html")
        localStorage.setItem('Credentials', JSON.stringify(loginCredentials))

    }).catch(error => console.log(error))
}

window.addEventListener('submit', loginUser)
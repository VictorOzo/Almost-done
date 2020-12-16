const fullname = document.querySelector('#user-name')
const useremail = document.querySelector('#user-email')
const userPassword = document.querySelector('#user-password')
const btcAddress = document.querySelector('#btc')
const ethAdress = document.querySelector('#eth')
const trxAddress = document.querySelector('#trx')
const btn_signup = document.querySelector('#signup');
const dropdown = document.querySelector('.dropdown')


function collectInfo (){ 

    let newUserObj = {}

    const name = fullname.value;
    const email = useremail.value;   
    const password = userPassword.value;
    const bitcoinWalletAddress = btcAddress.value;
    const ethereumWalletAddress = ethAdress.value;
    const tronWalletAddress = trxAddress.value;

    if (bitcoinWalletAddress.length < 27 || bitcoinWalletAddress.length > 37 ){
        btcAddress.value = "ADDRESS TOO SHORT"
        throw new Error()
    }

    if (ethereumWalletAddress.length < 27){
        btcAddress.value = "ADDRESS TOO SHORT"
        throw new Error()

    }

    if (tronWalletAddress.length < 27){
        btcAddress.value = "ADDRESS TOO SHORT"
        throw new Error()

    }

    newUserObj = {
        name,
        email,
        password,
        bitcoinWalletAddress,
        ethereumWalletAddress,
        tronWalletAddress
    }

    return newUserObj

}

const registerUser =  (e) => {
    e.preventDefault()
    const newUserData = collectInfo()
    fetch('https://nameless-bayou-95782.herokuapp.com/register', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache',
        redirect: 'follow',
        body: JSON.stringify(newUserData)
    }).then(response => response.text())
    .then((data) => {

        const dataObj = JSON.parse(data)
        const signupCredentials = dataObj.data
        window.location.replace('./dashboard/deposit.html')
        localStorage.setItem('Credentials', JSON.stringify(signupCredentials))
        
    }).catch(error => console.log(error))
}

function checkLogin () {
    const userInfo = JSON.parse(localStorage.getItem('Credentials'))

    if (!userInfo){
        dropdown.classList.add('show-dropdown')
    }

}



window.addEventListener('load', checkLogin)
window.addEventListener('submit', registerUser)
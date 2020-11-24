const fullname = document.querySelector('#user-name')
const useremail = document.querySelector('#user-email')
const userPassword = document.querySelector('#user-password')
const btcAddress = document.querySelector('#btc')
const ethAdress = document.querySelector('#eth')
const trxAddress = document.querySelector('#trx')
const btn_signup = document.querySelector('#signup');

function collectInfo (){

    let newUserObj = {}

    const name = fullname.value;
    const email = useremail.value;   
    const password = userPassword.value;
    const bitcoinWalletAddress = btcAddress.value;
    const ethereumWalletAddress = ethAdress.value;
    const tronWalletAddress = trxAddress.value;

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
        body: JSON.stringify(newUserData)


    }).then(response => response.text())
    .then(() => console.log('success')).catch(error => console.log(error))
}

window.addEventListener('submit', registerUser)
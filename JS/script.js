// Email Error (section : get-started)
const emailInput = document.querySelector('.email-input');
const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
let emailError = document.querySelector('#email__error');
const emailContainer = document.querySelector('.email__container')

emailInput.addEventListener('submit',(e)=>{
    e.preventDefault()
    var emailValue = document.querySelector("#email").value
    if (emailValue.match(emailPattern)) {
        console.log("Good");
        emailContainer.classList.remove('error')
    } else {
        console.log("NOOO");
        emailContainer.classList.add('error')
    }
    
})


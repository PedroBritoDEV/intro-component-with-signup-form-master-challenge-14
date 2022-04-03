var form = document.querySelector('form');
var firstName = document.querySelector('#name');
var lastName = document.querySelector('#last-name');
var email = document.querySelector('#email');
var password = document.querySelector('#password');

//errors content
var firstNameChilds = document.querySelectorAll('.input-name > img , .input-name > p')
var lastNameChilds = document.querySelectorAll('.input-last-name > img , .input-last-name > p')
var emailChilds = document.querySelectorAll('.input-email > img , .input-email > p')
var passwordChilds = document.querySelectorAll('.password > img , .password > p')


form.addEventListener('submit', (e) => {
    
    if ((firstName.value).length < 1) {  //validity Name
        e.preventDefault();
        firstNameChilds.forEach((i) => {
            i.classList.toggle('hidden');
        })
        firstName.style.border = 'solid 1px #ff7a7a';
        firstName.removeAttribute('placeholder')     
    }


    if((lastName.value).length < 1) {   //validity Last Name
        e.preventDefault();
        lastNameChilds.forEach((i) => {
            i.classList.toggle('hidden');
        })
        lastName.style.border = 'solid 1px #ff7a7a';
        lastName.removeAttribute('placeholder')
    }
    
    
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!(email.value).match(pattern)){ //validity email
        e.preventDefault();
        emailChilds.forEach((i) => {
            i.classList.toggle('hidden');
        })
        email.style.border = 'solid 1px #ff7a7a';
        email.style.color = '#ff7a7a';
        email.removeAttribute('placeholder')
    }


    if((password.value).length < 1) {   //validity password
        e.preventDefault();
        passwordChilds.forEach((i) => {
            i.classList.toggle('hidden');
        })
        password.style.border = 'solid 1px #ff7a7a';
        password.removeAttribute('placeholder')
    }

     
});

firstName.addEventListener('focus', () => {
    firstNameChilds.forEach((i) => {
        i.classList.toggle('hidden');
    });
    firstName.style.border = 'solid 1px #3e3c49';
    firstName.setAttribute('placeholder', 'Name');
});

lastName.addEventListener('focus', () => {
    lastNameChilds.forEach((i) => {
        i.classList.toggle('hidden');
    })
    lastName.style.border = 'solid 1px #3e3c49';
    lastName.setAttribute('placeholder', 'Last Name');
});

email.addEventListener('focus', () => {
    emailChilds.forEach((i) => {
        i.classList.toggle('hidden');
    })
    email.style.border = 'solid 1px #3e3c49';
    email.style.color = '#3e3c49';
    email.setAttribute('placeholder', 'Email Adress');
});

password.addEventListener('focus', () => {
    passwordChilds.forEach((i) => {
        i.classList.toggle('hidden');
    });
    password.style.border = 'solid 1px #3e3c49';
    password.setAttribute('placeholder', 'Password');
})


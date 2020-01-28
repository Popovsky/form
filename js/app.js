console.log('App wass loaded...');

const email = document.getElementById('exampleInputEmail1');
const password = document.getElementById('exampleInputPassword1');
const eye = document.getElementById('eye');
let freePassword = false;
const loginForm = document.getElementById('loginForm');
const underEmail = document.getElementById('under-email');
const underPassword = document.getElementById('under-password');
const arrUsers = [
    {email: 'olevchenko@gmail.com', password: '666666'},
    {email: 'pad19051999@gmail.com', password: 'qwerty'},
    {email: 'ivan@gmail.com', password: 'ivanov'},
    {email: 'nata1789@gmail.com', password: 'bulkat56'},
]

const isEmailValid = em => !em.split('').filter(el => el === '@').length;
const isPasswordValid = pass => pass.length < 6;
const passwordValue = passVal => passVal.split('').filter(el => el !== ' ').join('');

email.addEventListener('input', e => {
    if(isEmailValid(e.target.value)){
        // Error
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    }else{
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
})
password.addEventListener('input', e => {
    e.target.value = passwordValue(e.target.value);
    if(isPasswordValid(e.target.value)){
        // Error
        e.target.classList.add('is-invalid')
        e.target.classList.remove('is-valid')
    }else{
        e.target.classList.remove('is-invalid')
        e.target.classList.add('is-valid')
    }
})

eye.addEventListener('click', () => {
    if(freePassword){
        exampleInputPassword1.setAttribute('type', 'password');
    } else {
        exampleInputPassword1.setAttribute('type', 'text');
    }
    eye.classList.toggle('open');
    freePassword = !freePassword;
})

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    for(let i = 0; i < arrUsers.length; i++){
        if(arrUsers[i].email === e.target[0].value){
            underEmail.innerHTML = 'Success!';
            underEmail.style.color = '#28a745';
            if(arrUsers[i].password === e.target[1].value){
                underPassword.innerHTML = 'Success!';
                underPassword.style.color = '#28a745';
                console.log('Form was submit');
                console.log('email', e.target[0].value);
                console.log('password', e.target[1].value);
            } else {
                underPassword.innerHTML = 'Invalid password. Try again!';
                underPassword.style.color = '#dc3545';
            }
        } else {
            underEmail.innerHTML = 'Could not find account!';
            underEmail.style.color = '#dc3545';
        }
    }
})

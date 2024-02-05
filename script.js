const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnLogin = document.querySelector('.loginButton');
const closeIcon = document.querySelector('.icon-close');
const header = document.querySelector('header');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

btnLogin.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    wrapper.classList.remove('active');
    header.style.visibility = 'hidden';
});

closeIcon.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
    header.style.visibility = 'visible'; // Show the header when closing the wrapper
});

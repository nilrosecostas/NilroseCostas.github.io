let userBox = document.querySelector('.header .flex .account-box');

let navbar = document.querySelector('.header .flex .navbar');

window.onscroll = () =>{
    userBox.classList.remove('active');
    navbar.classList.remove('active');
}
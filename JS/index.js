"use strict";
const navToggle = document.getElementById('nav-toggle');
const sideNav = document.getElementById('nav-links');
const navLinkButtons = document.querySelectorAll('#nav-links a');
const toggleNavMobile = () => {
    sideNav.classList.toggle('show');
};
navToggle.addEventListener('click', toggleNavMobile);
navLinkButtons.forEach((button) => {
    console.log('yes');
    button.addEventListener('click', toggleNavMobile);
});

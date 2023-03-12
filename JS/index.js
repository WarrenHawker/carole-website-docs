"use strict";
// navbar functions
const navToggle = document.getElementById('nav-toggle');
const sideNav = document.getElementById('nav-links');
const navLinkButtons = document.querySelectorAll('#nav-links a');
const toggleNavMobile = () => {
    sideNav.classList.toggle('show');
};
navToggle.addEventListener('click', toggleNavMobile);
navLinkButtons.forEach((button) => {
    button.addEventListener('click', toggleNavMobile);
});
// image focus functions
const images = document.querySelectorAll('img');
const focusedImageOverlay = (document.getElementById('image-focus-overlay'));
const focusedImage = document.getElementById('focused-image');
const focusOnImage = (e) => {
    console.log('no');
    const clickedImage = e.target;
    focusedImageOverlay.classList.add('active');
    focusedImage.src = clickedImage.src;
    focusedImage.alt = clickedImage.alt;
};
images.forEach((image) => {
    image.addEventListener('click', focusOnImage);
});
//close image focus overlay
const closeButton = document.getElementById('overlay-close');
closeButton.addEventListener('click', () => {
    console.log('yes');
    focusedImageOverlay.classList.remove('active');
    focusedImage.src = '';
    focusedImage.alt = '';
});

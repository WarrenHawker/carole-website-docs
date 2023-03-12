// navbar functions
const navToggle = <HTMLElement>document.getElementById('nav-toggle');
const sideNav = <HTMLElement>document.getElementById('nav-links');
const navLinkButtons: NodeListOf<Element> =
  document.querySelectorAll('#nav-links a');

const toggleNavMobile = (): void => {
  sideNav.classList.toggle('show');
};

navToggle.addEventListener('click', toggleNavMobile);

navLinkButtons.forEach((button) => {
  button.addEventListener('click', toggleNavMobile);
});

// image focus functions
const images: NodeListOf<Element> = document.querySelectorAll('img');
const focusedImageOverlay = <HTMLElement>(
  document.getElementById('image-focus-overlay')
);
const focusedImage = <HTMLImageElement>document.getElementById('focused-image');

const focusOnImage = (e: any) => {
  console.log('no');
  const clickedImage = <HTMLImageElement>e.target;
  focusedImageOverlay.classList.add('active');
  focusedImage.src = clickedImage.src;
  focusedImage.alt = clickedImage.alt;
};

images.forEach((image) => {
  image.addEventListener('click', focusOnImage);
});

//close image focus overlay
const closeButton = <HTMLElement>document.getElementById('overlay-close');

closeButton.addEventListener('click', () => {
  console.log('yes');
  focusedImageOverlay.classList.remove('active');
  focusedImage.src = '';
  focusedImage.alt = '';
});

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

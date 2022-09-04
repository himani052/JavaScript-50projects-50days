//Elements
const buttonOpenNavBar = document.getElementById('open');
const buttonCloseNavBar = document.getElementById('close');
const container = document.getElementsByClassName('container');

console.log(container[0]);

buttonOpenNavBar.addEventListener('click', () => {
    console.log("ok");
    container[0].classList.add('show-nav');
})

buttonCloseNavBar.addEventListener('click', () => {
    container[0].classList.remove('show-nav');
})
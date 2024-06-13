var menuHamburguer = document.getElementById('menu-hamburguer');
var hiddenMenu = document.getElementById('hidden-menu');
var line1 = document.querySelector('.line1');
var line2 = document.querySelector('.line2');
var line3 = document.querySelector('.line3');


menuHamburguer.addEventListener('click', function (){
    hiddenMenu.classList.toggle('show-menu');
    menuHamburguer.classList.toggle('align-menu');
    line1.classList.toggle('rotate-line1');
    line2.classList.toggle('hide-line2');
    line3.classList.toggle('rotate-line3');
})
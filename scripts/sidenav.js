const hamburger = document.querySelector('.hamburger');
const activeMenu = document.querySelector('.hamburger__menu');

//mobile menu
hamburger.addEventListener('click', function (e) {
    e.preventDefault();

    if (activeMenu.classList.contains('hamburger__menu')) {
        activeMenu.classList.toggle('activeMenu');
    }

    if (hamburger.classList.contains('hamburger')) {
        hamburger.classList.toggle('activeMenu');
    }
});


//header scroll
const header = document.querySelector('.intro__header');

window.onscroll = function () {
    if (document.documentElement.clientWidth <= 768) {
        header.style.backgroundColor = "rgba(0, 0, 0, .7)";
    }

    else {
        header.style.backgroundColor = 'transparent';
    }

    if (window.pageYOffset == 0) {
        header.style.backgroundColor = 'transparent';
    }
};
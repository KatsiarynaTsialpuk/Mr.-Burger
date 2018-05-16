const hamburger = document.querySelector('.hamburger');
const activeMenu = document.querySelector('.hamburger__menu');

//mobile menu
hamburger.addEventListener('click', function (e) {
    e.preventDefault();

    if (activeMenu.className === 'hamburger__menu') {
        activeMenu.className += ' activeMenu';
    }

    else {
        activeMenu.className = 'hamburger__menu';
    }

    if (hamburger.className === 'hamburger') {
        hamburger.className += ' activeMenu';
    }

    else {
        hamburger.className = 'hamburger';
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

//horizontal accordeon


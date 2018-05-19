//horizontal accordeon
(function () {
    const teamAccordeon = document.querySelector('.accordeon');

    teamAccordeon.addEventListener('click', function (event) {
        if (event.target.classList.contains('accordeon__name')) {
            event.preventDefault();

            const eventThis = event.target;
            const teamItem = eventThis.parentNode;
            const teamList = teamItem.parentNode;
            const items = teamList.children;
            const content = eventThis.nextElementSibling;
            const contentHeight = content.firstElementChild.clientHeight;

            if (!teamItem.classList.contains('accordeon__content_active')) {
                for (let i = 0; i < items.length; i++) {
                    items[i].classList.remove('accordeon__content_active');
                    items[i].lastElementChild.style.height = 0;
                }

                teamItem.classList.add('accordeon__content_active');
                content.style.height = contentHeight + 'px';

            } else {
                teamItem.classList.remove('accordeon__content_active');
                content.style.height = 0;
            }
        }
    });
})();


// const teamAccordeon = document.querySelector('.accordeon');
// const accordeonName = document.querySelector('.accordeon__name');
//
// for (i = 0; i < accordeonName.length; i++) {
//     accordeonName.addEventListener('click', function() {
//         if (!(teamAccordeon.classList.contains('accordeon__content_active')) {
//
//         }
//     )
//     })
// }

//vertical accordeon

(function () {
    const menuAccordeon = document.querySelector('.menu__accordeon');

    menuAccordeon.addEventListener('click', function (event) {
        if (event.target.classList.contains('menu__title')) {
            event.preventDefault();

            const eventThis = event.target;
            const menuItem = eventThis.parentNode;
            const menuList = menuItem.parentNode;
            const items = menuList.children;
            const content = eventThis.nextElementSibling;

            if (!menuItem.classList.contains('menu__content_active')) {
                for (let i = 0; i < items.length; i++) {
                    items[i].classList.remove('menu__content_active');
                }

                menuItem.classList.add('menu__content_active');
            } else {
                menuItem.classList.remove('menu__content_active');
            }
        }
    });
})();
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

//vertical accordeon

(function () {
    const menuAccordeon = document.querySelector('.menu__accordeon');

    menuAccordeon.addEventListener('click', function (event) {
        if (event.target.classList.contains('menu__title') || event.target.classList.contains('menu__title_text')) {
            event.preventDefault();

            const eventThis = event.target.closest('.menu__title_text') || event.target;
            console.log(eventThis);
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
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
}) ();

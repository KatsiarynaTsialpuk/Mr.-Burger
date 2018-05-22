(function () {
    const content = document.querySelector('.review__content');
    content.addEventListener('click', function (event) {
        if (event.target.classList.contains('order-btn')) {
            event.preventDefault();

            const eventThis = event.target;
            const popup = eventThis.nextElementSibling;

            if (!popup.classList.contains('popup__active')) {
                popup.classList.add('popup__active');
                popup.style.display = 'flex';
            }
        }
    });

    content.addEventListener('click', function (event) {
        if (event.target.classList.contains('popup__close')) {
            event.preventDefault();

            const eventThis = event.target;
            const popup = eventThis.nextElementSibling;

            if (popup.classList.contains('popup__active')) {
                popup.classList.remove('popup__active');
                popup.style.display = 'none';
            }
        }
    })
})();
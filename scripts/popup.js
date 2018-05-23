(function () {
    const reviewList = document.querySelector('.reviews__list');
    reviewList.addEventListener('click', function (event) {
        if (event.target.classList.contains('order-btn')) {
            event.preventDefault();

            const eventThis = event.target;
            const popupText = eventThis.previousElementSibling;
            const text = popupText.textContent;
            const itemTitle = popupText.previousElementSibling;
            const title = itemTitle.textContent;
            const popupTitle = document.querySelector('.popup__title');
            const popupParagraph = document.querySelector('.popup__text');
            popupParagraph.innerHTML = text;
            popupTitle.innerHTML = title;
            const popup = document.querySelector('.popup');
            popup.classList.add('popup__active');
        }

        const closePopup = document.querySelector('.popup__close');
        const popup = document.querySelector('.popup');
        closePopup.addEventListener('click', function (e) {
            e.preventDefault();
            if (popup.classList.contains('popup__active')) {
                popup.classList.remove('popup__active');
            }
        })
    });
})();
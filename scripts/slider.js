(function () {
    const sliderWrapper = document.querySelector('.slider__wrapper');
    const slider = document.querySelector('.slider__inner');
    const list = document.querySelector('.slider__list');
    const sliderWidth = slider.clientWidth;
    const itemsCount = list.children.length;
    const listWidth = sliderWidth * itemsCount;
    const step = sliderWidth;
    let activeSlide = null;
    let slidePos = 0;

    list.style.width = listWidth + 'px';

    sliderWrapper.addEventListener('click', function (e) {
        activeSlide = list.querySelector('.slider__content_active');

        if (e.target.classList.contains('arrow__link_right')) {
            e.preventDefault();

            if (activeSlide.nextElementSibling) {
                slideTo('next');
            }
        } else if (e.target.classList.contains('arrow__link_left')) {
            e.preventDefault();

            if (activeSlide.previousElementSibling) slideTo('prev');
        }
    });

    function slideTo(vector) {
        if (vector === 'next') {
            slidePos += step;
            activeSlide.nextElementSibling.classList.add('slider__content_active');
        } else {
            slidePos -= step;
            activeSlide.previousElementSibling.classList.add('slider__content_active');
        }

        list.style.transform = `translateX(${-slidePos}px)`;
        activeSlide.classList.remove('slider__content_active');
    }
})();
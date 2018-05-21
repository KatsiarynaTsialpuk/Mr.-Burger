// const left = document.querySelector('#left-arrow');
// const right = document.querySelector('#right-arrow');
// const items = document.querySelector('.slider__list');
// // const listItem = document.querySelector('.slider__content');
// const computed = getComputedStyle(items);
//
// right.addEventListener('click', function (e) {
//     e.preventDefault();
//     let currentRight = parseInt(computed.right);
//
//     if (!currentRight) {
//         currentRight = 0;
//     }
//
//     if (currentRight < 3520) {
//         // items.style.transform = 'translateX(800px)';
//         items.style.right = currentRight + 880 + 'px';
//     }
//
// });
//
// left.addEventListener('click', function(e) {
//     e.preventDefault();
//
//     let currentRight = parseInt(computed.right);
//
//     if (!currentRight) {
//         currentRight = 0;
//     }
//
//     if (currentRight > 0) {
//         // items.style.transform = 'translateX(-800px)';
//         items.style.right = currentRight - 880 + 'px';
//     }
// });


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

    sliderWrapper.addEventListener('click', function (event) {
        activeSlide = list.querySelector('.slider__content_active');

        if (event.target.classList.contains('right-arrow')) {
            event.preventDefault();

            if (activeSlide.nextElementSibling) {
                slideTo('next');
            }
        } else if (event.target.classList.contains('left-arrow')) {
            event.preventDefault();

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

        list.style.transform = 'translateX(${-slidePos}px)';
        activeSlide.classList.remove('slider__content_active');
    }
})();
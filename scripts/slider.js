const left = document.querySelector('#left-arrow');
const right = document.querySelector('#right-arrow');
const items = document.querySelector('.slider__list');
const listItem = document.querySelector('.slider__content');
const computed = getComputedStyle(items);

right.addEventListener('click', function (e) {
    e.preventDefault();
    let curentRight = parseInt(computed.right);

    if (!curentRight) {
        curentRight = 0;
    }

    if (curentRight < 3520) {
        items.style.right = curentRight + 880 + 'px';
    }

    if (!listItem.classList.contains('slider__content_active')) {
        listItem.classList.add('slider__content_active');
    }
});

left.addEventListener('click', function(e) {
    e.preventDefault();

    let curentRight = parseInt(computed.right);
    if (!curentRight) {
        curentRight = 0;
    }

    if (curentRight > 0) {
        items.style.right = curentRight - 880 + 'px';
    }
})
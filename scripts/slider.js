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

// (function() {
//     const list = document.querySelector('.slider__list');
//     const sliderWidth = document.querySelector('.slider__inner').clientWidth;
//     const itemsCount = list.children.length;
//     const listWidth = sliderWidth * itemsCount;
    
//     list.style.width = listWidth + 'px';
//     })();
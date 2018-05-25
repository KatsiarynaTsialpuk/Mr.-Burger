const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;
// const mobileDetect = new MobileDetect(window.navigator.userAgent);
// const isMobile = mobileDetect.mobile();
const setActiveMenuItem = itemEq => {
    $('.pagination__item')
        .eq(itemEq)
        .addClass('pagination__item_active')
        .siblings()
        .removeClass('pagination__item_active');
};

const performTransition = sectionEq => {
    const position = `${-sectionEq * 100}%`;

    if (inScroll) return;

    inScroll = true;
    sections
        .eq(sectionEq)
        .addClass('active')
        .siblings()
        .removeClass('active');


    display.css({
        transform: `translateY(${position})`,
        '-webkit-transform': `translateY(${position})`
    });

    const transitionDuration = parseInt(display.css('transition-duration')) * 1000;

    setTimeout(() => {
        inScroll = false;
        setActiveMenuItem(sectionEq);
    }, transitionDuration + 100); //за 300мс проходит инерция мышки
};

const scrollToSection = direction => {
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (direction === 'up' && prevSection.length) {
        performTransition(prevSection.index())
    }

    if (direction === 'down' && nextSection.length) {
        performTransition(nextSection.index())
    }
};


$(document).on({
    wheel: e => {
        const deltaY = e.originalEvent.deltaY;
        if (deltaY > 0) {
            scrollToSection('down');
        }

        if (deltaY < 0) {
            scrollToSection('up');
        }
    },
    keydown: e => {
        switch (e.keyCode) {
            case 40:
                scrollToSection('down');
                break;
            case 38:
                scrollToSection('up');
                break;
        }
    }
    // touchmove: e => {
    //     e.preventDefault();
    // }
});

//arrow-down
$('.arrow__link').on('click', e => {
    e.preventDefault;
    scrollToSection('down');
});

//keudown
$('[data-scroll-to]').on('click', e => {
    e.preventDefault();

    const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
    performTransition(target);
});

//mobile
if(document.innerWidth <= 768) {
    scrollToSection(null);
}

// if (isMobile) {
//     scrollToSection(null);
// }


// if (isMobile) {
//     $(document).swipe({
//         swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
//             const swipeDirection = direction === 'down' ? 'up' : 'down';
//             scrollToSection(swipeDirection);
//         }
//     });
// }

const sections = $('.section');
const display = $('.maincontent');
let inScroll = false;
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
    }, transitionDuration + 100); //за 100мс проходит инерция мышки
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
});

//arrow-down
$('.arrow__link').on('click', e => {
    e.preventDefault;
    scrollToSection('down');
});


//keydown
    $('[data-scroll-to]').on('click', e => {
        e.preventDefault();

        const target = parseInt($(e.currentTarget).attr('data-scroll-to'));
        performTransition(target);
    });

//mobile
if(document.innerWidth <= 768) {
    scrollToSection.bind();

    $('a[data-scroll-to]').click(function(e) {
        e.preventDefault();
        let offset = 10;
        let target = ( '#' + $(this).data('scroll-to') );
        let $target = $(target);
        $(document).stop().animate({
            'scrollTop': $target.offset().top - offset
        }, 800, 'swing');
    });
}
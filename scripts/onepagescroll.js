(function () {
    const pageScroll = document.querySelector('.maincontent');
    let topCurrent = 0;
    const sectionCount = pageScroll.querySelectorAll('section').length;
    const maxTop = 0;
    const minTop = (-1) * (sectionCount - 1) * 100;
    const step = 100;

    pageScroll.addEventListener('wheel', function (e) {

        e.preventDefault();

        let delta = e.wheelDeltaY;

        if (delta > 0) {
            if (topCurrent < maxTop) {
                topCurrent += step;

                pageScroll.style.top = topCurrent + '%';
            }
        }
        else if (topCurrent > minTop) {
            topCurrent -= step;

            pageScroll.style.top = topCurrent + '%';
        }

    });

})();
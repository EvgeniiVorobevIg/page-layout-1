$(document).ready(function () {
    const locationOne = document.querySelector('.block__item-1');
    const locationTwo = document.querySelector('.block-2__item-2');
    const item = document.querySelector('.block__item-1-2');

    window.addEventListener('resize', function (event) {
        const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (viewportWidth <= 900) {
            if (!item.classList.contains('done')) {
                locationTwo.insertBefore(item, locationTwo.children[2]);
                item.classList.add('done');
            }
        } else {
            if (item.classList.contains('done')) {
                locationOne.insertBefore(item, locationOne.children[2]);
                item.classList.remove('done');
            }
        }
    })
})
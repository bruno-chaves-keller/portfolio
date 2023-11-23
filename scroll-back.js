window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    var btnContainer = document.querySelector('.back-to-top-container');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btnContainer.style.display = 'block';
    } else {
        btnContainer.style.display = 'none';
    }
}

function scrollToTop() {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, currentScroll - (currentScroll / 65));
    }
}


document.querySelector('.back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    scrollToTop();
});


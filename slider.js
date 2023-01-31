var interval = setInterval(()=>{
    if (window.dataOnLoad) {
        const swiper = new Swiper('.swiper', {
            loop: true,
            navigation: {
                nextEl: '.card__prev',
                prevEl: '.card__next',
            },
        
        });
        clearInterval(interval)
    }
}, 500)
/*---modal---*/
const slides = document.querySelectorAll('.card__img');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const closeBtn = document.querySelectorAll('.modal__btn');

slides.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
        modalOverlay.classList.add('modal-overlay--visible');
    });
});

modalOverlay.addEventListener('click', (e) => {
    console.log(e.target);

    if (e.target == modalOverlay) {
        modalOverlay.classList.remove('modal-overlay--visible');
        modals.forEach((el) => {
            el.classList.remove('modal--visible');
        });
    }
});

closeBtn.forEach((el) => {
    el.addEventListener('click', (e) => {
        modals.forEach((el) => {
            modalOverlay.classList.remove('modal-overlay--visible');
            el.classList.remove('modal--visible');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    initSlide();
    initSlideBlog()
})
let activePage = 1;
let maxPagesCount;
let buttonNext = document.getElementsByClassName('slider-button__next')[0];
let buttonPrev = document.getElementsByClassName('slider-button__prev')[0];
let amountElements = 2;

function initSlide() {
    const sliderItems = document.getElementById('slider').getElementsByClassName('slider-item');
    maxPagesCount = Math.ceil(sliderItems.length / 1)
    for (let i = 0, page = 0; i < sliderItems.length; i++) {
        if ((i % 1) === 0) {
            page++;
        }
        let sliderItem = sliderItems[i];
        sliderItem.setAttribute('data-page', page.toString());
        if (page === activePage) {
            sliderItem.style.display = 'flex'
            sliderItem.style.opacity = '1'
        }
        if (page !== activePage) {
            sliderItem.style.display = 'none'
        }

    }
}

function next() {
    if (activePage + 1 > maxPagesCount) {
        activePage = 1
    } else {
        activePage++;
    }

    initSlide()
}

function prev() {
    if (activePage - 1 < 1) {
        activePage = maxPagesCount;
    } else {
        activePage--;
    }

    initSlide()
}

buttonNext.addEventListener('click', next);
buttonPrev.addEventListener('click', prev);


let activePageBlog = 1;
let maxPagesCountBlog;
let buttonNextBlog = document.getElementsByClassName('slider-blog__buttons-next')[0];
let buttonPrevBlog = document.getElementsByClassName('slider-blog__buttons__prev')[0];

function initSlideBlog() {
    const sliderItems = document.getElementById('slider-blog').getElementsByClassName('slider-blog__item');
    maxPagesCountBlog = Math.ceil(sliderItems.length / amountElements)
    for (let i = 0, page = 0; i < sliderItems.length; i++) {
        if ((i % amountElements) === 0) {
            page++;
        }
        let sliderItem = sliderItems[i];
        sliderItem.setAttribute('data-page', page.toString());
        if (page === activePageBlog) {
            sliderItem.style.display = 'initial'
        }
        if (page !== activePageBlog) {
            sliderItem.style.display = 'none'
        }

    }
}
window.addEventListener('resize', (event) => {
    let locAmountElements = amountElements;
    if(event.target.innerWidth <= 1024) {
        locAmountElements = 1;
    }else {
        locAmountElements = 2;
    }

    if (locAmountElements !== amountElements) {
        activePageBlog = 1;
        amountElements = locAmountElements;
        initSlideBlog();
    }
    amountElements = locAmountElements;
})
function nextBlog() {
    if (activePageBlog + 1 > maxPagesCountBlog) {
        activePageBlog = 1
    } else {
        activePageBlog++;
    }

    initSlideBlog()
}

function prevBlog() {
    if (activePageBlog - 1 < 1) {
        activePageBlog = maxPagesCountBlog;
    } else {
        activePageBlog--;
    }

    initSlideBlog()
}

buttonNextBlog.addEventListener('click', nextBlog);
buttonPrevBlog.addEventListener('click', prevBlog);


document.getElementById('scroll').addEventListener('click', onScroll);

function onScroll() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}


document.getElementById('form-email').oninput = function () {
    if (validEmail(this.value) || this.value.length === 0) {
        document.getElementById('form-email-error').style.display = 'none';
        this.classList.remove('invalid');
    } else if (!validEmail(this.value)) {
        document.getElementById('form-email-error').style.display = 'initial';
        this.classList.add('invalid');
    }
}

function validEmail(email) {
    let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return re.test(String(email).toLowerCase());
}
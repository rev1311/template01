const sixtBlox = Array.from(document.querySelectorAll('.sixt-blox'))
const sixtBlox0 = document.querySelector('#sixt-blox-0')
const sixtBlox1 = document.querySelector('#sixt-blox-1')
const sixtBlox2 = document.querySelector('#sixt-blox-2')
const largeHeaderWrapper = document.querySelector('#largeheaderwrapper')
const smallHeaderWrapper = document.querySelector('#smallheaderwrapper')
const slides = document.querySelectorAll('.sixt-blox-slide')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
let headerHeight = Math.floor(smallHeaderWrapper.getBoundingClientRect().height)
let currentSlide = 0

window.addEventListener('scroll', () => {
    console.log('scrolled')
    handleHeaderSwitch()
})

function handleHeaderSwitch() {
    if(sixtBlox1.getBoundingClientRect().top == 0) {
        console.log(headerHeight)
        largeHeaderWrapper.style.opacity = 0
        largeHeaderWrapper.style.height = headerHeight
        console.log(headerHeight)
        smallHeaderWrapper.style.opacity = 1
        smallHeaderWrapper.setAttribute('position', 'relative')
    } else {
        smallHeaderWrapper.style.opacity = 0
        largeHeaderWrapper.style.opacity = 1
    }
}

slides[currentSlide].classList.add('active');

prevBtn.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('prev');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    slides[currentSlide].classList.remove('next');

    if (currentSlide === 0) {
        prevBtn.disabled = true;
    }

    nextBtn.disabled = false;
});

nextBtn.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('next');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    slides[currentSlide].classList.remove('prev');

    if (currentSlide === slides.length - 1) {
        nextBtn.disabled = true;
    }

    prevBtn.disabled = false;
});
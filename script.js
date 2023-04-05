const sixtBlox = Array.from(document.querySelectorAll('.sixt-blox'))
const sixtBlox1 = document.querySelector('#sixt-blox-1')
const largeHeader = document.querySelector('#largeheader')
const largeHeaderLogo = document.querySelector('#largeheaderlogo')
const smallHeader = document.querySelector('#smallheader')
const smallHeaderLogo = document.querySelector('#smallheaderlogo')
const slides = document.querySelectorAll('.sixt-blox-slide')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
let headerHeight = Math.floor(sixtBlox1.getBoundingClientRect().height)
let currentSlide = 0

window.addEventListener('scroll', () => {
    console.log('scrolled')
    handleHeaderSwitchSmall()
    handleHeaderSwitchLarge()
})

function handleHeaderSwitchSmall() {
    if(sixtBlox1.getBoundingClientRect().top == 0) {
        requestAnimationFrame(()=> {
            smallHeader.classList.remove('sixt-blox-hidden')
            largeHeader.style.height = headerHeight
            largeHeader.style.opacity = 0
            largeHeaderLogo.style.opacity = 0
            requestAnimationFrame(()=> {
                largeHeader.classList.add('sixt-blox-hidden')
                smallHeaderLogo.style.opacity = 1
                smallHeader.style.opacity = 1
                setTimeout(function () {
                    smallHeader.scrollIntoView(true);
                  }, 150);
            })
        })
    } 
}

function handleHeaderSwitchLarge() {
    if(sixtBlox1.getBoundingClientRect().top > 30 && largeHeader.getAttribute('class', 'sixt-blox-hidden')) {
        requestAnimationFrame(()=>{
            largeHeader.classList.remove('sixt-blox-hidden')
            largeHeaderLogo.classList.remove('sixt-blox-hidden')
            smallHeader.style.opacity = '0'
            smallHeaderLogo.style.opacity = '0'
            requestAnimationFrame(()=> {
                largeHeader.style.opacity = '1'
                largeHeaderLogo.style.opacity = '1'
                smallHeader.classList.add('sixt-blox-hidden')
                smallHeaderLogo.classList.add('sixt-blox-hidden')
            })
        })
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
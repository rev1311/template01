const sixtBlox = Array.from(document.querySelectorAll('.sixt-blox'))
const sixtBlox1 = document.querySelector('#sixt-blox-1')
const largeHeader = document.querySelector('#largeheader')
const smallHeader = document.querySelector('#smallheader')
const slides = document.querySelectorAll('.sixt-blox-slide')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
let headerHeight = Math.floor(sixtBlox1.getBoundingClientRect().height)
let currentSlide = 0

window.addEventListener('scroll', () => {
    console.log('scrolled')
    if(sixtBlox1.getBoundingClientRect().top == 0) handleHeaderSwitch()
})

function handleHeaderSwitch(linkId) {
    if(sixtBlox1.getBoundingClientRect().top == 0) {
        requestAnimationFrame(()=> {
            // console.log('reqAni1',sixtBlox, linkId)
            largeHeader.style.height = headerHeight
            smallHeader.classList.remove('sixt-blox-hidden')
            largeHeader.style.opacity = 0
            requestAnimationFrame(()=> {
                // console.log('reqAni2',sixtBlox[4])
                largeHeader.classList.add('sixt-blox-hidden')
                smallHeader.style.opacity = 1
                setTimeout(function () {
                    smallHeader.scrollIntoView(true);
                  }, 150);
            })
        })
    } else {
        requestAnimationFrame(()=>{
            largeHeader.classList.remove('sixt-blox-hidden')
            smallHeader.style.opacity = '0'
            // console.log('animate 2')
            requestAnimationFrame(()=> {
                    largeHeader.style.opacity = '1'
                    smallHeader.classList.add('sixt-blox-hidden')
                // console.log('animate 3')
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
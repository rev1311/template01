const sixtBlox = document.querySelector('.sixt-blox')
const sixtBlox1 = document.querySelector('#sixt-blox-1')
const scrollLink1 = document.querySelector('#scroll-link1')
const scrollLink2 = document.querySelector('#scroll-link2')
const largeHeader = document.querySelector('#largeheader')
const smallHeader = document.querySelector('#smallheader')
const slides = document.querySelectorAll('.sixt-blox-slide')
const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
let headerHeight = Math.floor(sixtBlox1.getBoundingClientRect().height)
let currentSlide = 0

// scrollLink1.addEventListener('click', (e) => {
//     let linkId = e.currentTarget.href.substr(-1)
//     switchBoard(linkId)
// })

// scrollLink2.addEventListener('click', (e) => {
//     let linkId = e.currentTarget.href.substr(-1)
//     switchBoard(linkId)
// })

function switchBoard(linkId) {
    if(linkId == '0' || linkId == '#'){
        scrollLink1.setAttribute('href', '#sixt-blox-2')
        scrollLink2.setAttribute('href', '#sixt-blox-2')
    } else if(linkId == '8'){
        scrollLink1.setAttribute('href', '#sixt-blox-0')
        scrollLink2.setAttribute('href', '#sixt-blox-0')
    } else {
        scrollLink1.setAttribute('href', `#sixt-blox-${linkId++}`)
        scrollLink2.setAttribute('href', `#sixt-blox-${linkId++}`)
    }
}

console.log(sixtBlox.style)
// console.log(sixtBlox.style.scrollMargin = `${headerHeight} 0 0 0`)

function handleHeaderSwitch() {
    if(sixtBlox1.getBoundingClientRect().top == '0') {
        smallHeader.classList.remove('sixt-blox-hidden')
        smallHeader.style.opacity = '1'
        largeHeader.classList.add('sixt-blox-hidden')
    } else {
        largeHeader.classList.remove('sixt-blox-hidden')
        smallHeader.style.opacity = '0'
        smallHeader.classList.add('sixt-blox-hidden')
    }
    //     requestAnimationFrame(()=>{
    //         smallHeader.classList.remove('sixt-blox-hidden')
    //         largeHeader.style.height = headerHeight
    //         console.log(largeHeader)
    //         requestAnimationFrame(()=> {
    //             smallHeader.style.opacity = '1'
    //             largeHeader.style.opacity = '0'
    //             largeHeader.classList.add('sixt-blox-hidden')
    //             sixtBlox.style.scrollMargin = `${headerHeight} 0 0 0`
    //             document.querySelector('#sixt-blox-1').scrollTop = 0
    //         })
    //     })
    // } else {
    //     requestAnimationFrame(()=>{
    //         largeHeader.classList.remove('sixt-blox-hidden')
    //         smallHeader.style.opacity = '0'
    //         console.log('animate 2')
    //         requestAnimationFrame(()=> {
    //             largeHeader.style.opacity = '1'
    //             smallHeader.classList.add('sixt-blox-hidden')
    //         })
    //     })
    // }
}

// window.onscroll = function() {
//     console.log('scrolling')
//     handleHeaderSwitch()
// }

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
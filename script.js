const scrollLink1 = document.querySelector('#scroll-link1')
const scrollLink2 = document.querySelector('#scroll-link2')
const largeHeader = document.querySelector('#largeheader')
const smallHeader = document.querySelector('#smallheader')
const slides = document.querySelectorAll('.sixt-blox-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

scrollLink1.addEventListener('click', (e) => {
    let linkId = e.currentTarget.href.substr(-1)
    switchBoard(linkId)
})

scrollLink2.addEventListener('click', (e) => {
    let linkId = e.currentTarget.href.substr(-1)
    switchBoard(linkId)
})

function switchBoard(linkId) {
    switch(linkId) {
        case '0':
            scrollLink1.setAttribute('href', '#sixt-blox-2')
            scrollLink2.setAttribute('href', '#sixt-blox-2')
            break;
        case '#':
            scrollLink1.setAttribute('href', '#sixt-blox-2')
            scrollLink2.setAttribute('href', '#sixt-blox-2')
            break;
        case '2':
            scrollLink1.setAttribute('href', '#sixt-blox-3')
            scrollLink2.setAttribute('href', '#sixt-blox-3')
            break;
        case '3':
            scrollLink1.setAttribute('href', '#sixt-blox-4')
            scrollLink2.setAttribute('href', '#sixt-blox-4')
            break;
        case '4':
            scrollLink1.setAttribute('href', '#sixt-blox-5')
            scrollLink2.setAttribute('href', '#sixt-blox-5')
            break;
        case '5':
            scrollLink1.setAttribute('href', '#sixt-blox-6')
            scrollLink2.setAttribute('href', '#sixt-blox-6')
            break;
        case '6':
            scrollLink1.setAttribute('href', '#sixt-blox-7')
            scrollLink2.setAttribute('href', '#sixt-blox-7')
            break;
        case '7':
            scrollLink1.setAttribute('href', '#sixt-blox-8')
            scrollLink2.setAttribute('href', '#sixt-blox-8')
            break;
        case '8':
            scrollLink1.setAttribute('href', '#sixt-blox-0')
            scrollLink2.setAttribute('href', '#sixt-blox-0')
            break;

        default:
            scrollLink1.setAttribute('href', '#sixt-blox-0')
            scrollLink2.setAttribute('href', '#sixt-blox-0')
    }
}

function handleHeaderSwitch() {    
    if(document.querySelector('#sixt-blox-1').getBoundingClientRect().top == '0') {
        requestAnimationFrame(()=>{
            smallHeader.classList.remove('sixt-blox-hidden')
            smallHeader.scrollTop = 0
            largeHeader.style.height = '225px'
            largeHeader.style.opacity = '0'
            console.log('animate 1')
            requestAnimationFrame(()=> {
                smallHeader.style.opacity = '1'
                largeHeader.classList.add('sixt-blox-hidden')
            })
        })          
    } else {
        requestAnimationFrame(()=>{
            largeHeader.classList.remove('sixt-blox-hidden')
            smallHeader.style.opacity = '0'
            console.log('animate 2')
            requestAnimationFrame(()=> {
                largeHeader.style.opacity = '1'
                smallHeader.classList.add('sixt-blox-hidden')
            })
        })
    }
}

window.onscroll = function() {
    handleHeaderSwitch()
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
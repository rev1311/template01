const scrollLink1 = document.querySelector('#scroll-link1')
const scrollLink2 = document.querySelector('#scroll-link2')

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
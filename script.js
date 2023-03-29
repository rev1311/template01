const scrollLink = document.querySelector('#scroll-link')

scrollLink.addEventListener('click', (e) => {
    let linkId = e.target.href.substr(-1)

    switch(linkId) {
        case '0':
            scrollLink.setAttribute('href', '#sixt-blox-2')
            break;
        case '#':
            scrollLink.setAttribute('href', '#sixt-blox-2')
            break;
        case '2':
            scrollLink.setAttribute('href', '#sixt-blox-3')
            break;
        case '3':
            scrollLink.setAttribute('href', '#sixt-blox-4')
            break;
        case '4':
            scrollLink.setAttribute('href', '#sixt-blox-5')
            break;
        case '5':
            scrollLink.setAttribute('href', '#sixt-blox-6')
            break;
        case '6':
            scrollLink.setAttribute('href', '#sixt-blox-7')
            break;
        case '7':
            scrollLink.setAttribute('href', '#sixt-blox-8')
            break;
        case '8':
            scrollLink.setAttribute('href', '#sixt-blox-0')
            break;

        default:
            scrollLink.setAttribute('href', '#sixt-blox-0')
        }

})
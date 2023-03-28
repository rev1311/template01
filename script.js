const scrollLink = document.querySelector('#scroll-link')
const bloxList = Array.from(document.querySelectorAll('.sixt-blox'))

console.log('template scripts')

scrollLink.addEventListener('click', (e) => {
    e.preventDefault()

    let blockIndex = null

    for( let block in bloxList ) {

    }

    console.log(bloxList)
    console.log(e.target)
})
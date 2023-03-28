const scrollLink = document.querySelector('#scroll-link')
const bloxList = Array.from(document.querySelectorAll('.sixt-blox'))

console.log('template scripts')

scrollLink.addEventListener('click', (e) => {
    e.preventDefault()

    for(let blockIndex in bloxList){
        switch(indexOf(blockIndex)) {
            case x:
              // code block
              break;
            case y:
              // code block
              break;
            default:
              // code block
            }
        console.log(blockIndex)
    }

    console.log(bloxList)
    console.log(e.target.href)
})
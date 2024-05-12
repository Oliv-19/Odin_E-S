let divsWrapper = document.querySelector('.divsWrapper')

for (let i = 0; i < 256; i++){
    let squareDiv = document.createElement('div')
    squareDiv.className = 'squareDiv'
    divsWrapper.append(squareDiv)

    squareDiv.addEventListener('mouseover', ()=>{
    squareDiv.style.backgroundColor = 'aqua'
})
}


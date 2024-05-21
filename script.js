let divsWrapper = document.querySelector('.divsWrapper')
let dark = document.querySelector('.dark')
let rainbow = document.querySelector('.rainbow')

let btn = document.querySelectorAll('.btn')
let colorInput = document.getElementById('color');
let color = document.getElementById('colorVal').innerHTML

let r 
let g
let b

colorInput.addEventListener('input', () =>{
    color = colorInput.value;

    r = parseInt(color.substr(1, 2), 16)
    g = parseInt(color.substr(3, 2), 16)
    b = parseInt(color.substr(5, 2), 16)
    
    color = `rgb(${r},${g},${b})`
   
});

function randomInt(min = 0, max = 255) {
    return Math.floor(Math.random() * (max - min) ) + min;
}
rainbow.addEventListener('click', () =>{
    const squareDiv = document.querySelectorAll('.squareDiv');
    squareDiv.forEach(square => square.addEventListener('mouseover', ()=>{
        color = `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`;
    }));
    
    
})

btn.forEach(element => {
    let cSize = (element.id * element.id)
    
    element.addEventListener('click', ()=> {
        removeDivs()
        darkening = false
        for (let i = 0; i < cSize;i++) {

            let squareDiv = document.createElement('div')
            squareDiv.className = 'squareDiv'
            squareDiv.dataset.squareDiv = i;
            let flexbasis = 100/(element.id);
            divsWrapper.style.flexBasis = flexbasis;
            squareDiv.style.height = `${100/element.id}%`;
            squareDiv.style.width = `${100/element.id}%`;
            divsWrapper.appendChild(squareDiv);
            
            
            squareDiv.addEventListener('mouseover', ()=>{
                
                squareDiv.style.backgroundColor = color

            
            })
        }
       
    }
    )
})

function removeDivs() {
    while (divsWrapper.firstChild) {
        divsWrapper.removeChild(divsWrapper.firstChild);
    };
};


function darkenPencilColor() {
    let darkR = r ;
    let darkG = g;
    let darkB = b;
    return function(e) {
        darkR -= 25;
        darkG -= 25;
        darkB -= 25;
        e.target.style.backgroundColor = `rgb(${darkR}, ${darkG}, ${darkB})`;
    }
}

dark.addEventListener('click', function() {
    const squareDiv = document.querySelectorAll('.squareDiv');
    squareDiv.forEach(square => square.addEventListener('mouseover', darkenPencilColor()));
    
});


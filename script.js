let divsWrapper = document.querySelector('.divsWrapper')

let btn = document.querySelectorAll('.btn')
let colorInput = document.getElementById('color');
let color = document.getElementById('colorVal').innerHTML

colorInput.addEventListener('input', () =>{
   color = colorInput.value;
    
});

btn.forEach(element => {
    let cSize = (element.id * element.id)
    

    element.addEventListener('click', ()=> {
        removeDivs()
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



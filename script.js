let divsWrapper = document.querySelector('.divsWrapper')
let dark = document.querySelector('.dark')

let btn = document.querySelectorAll('.btn')
let colorInput = document.getElementById('color');
let color = document.getElementById('colorVal').innerHTML

colorInput.addEventListener('input', () =>{
   color = colorInput.value;
    
});
let darkening = false
dark.addEventListener('click', function(){
    darkening = true
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

                if (darkening == true){
                    let opacity = Number(squareDiv.style.opacity);
                    squareDiv.style.opacity = opacity >= 1 ? "1" : opacity + 0.1 + "";
                }
                
                
            
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



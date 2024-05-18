let divsWrapper = document.querySelector('.divsWrapper')

let btn = document.querySelectorAll('.btn')

    //console.log(cWidth , cHeight)



btn.forEach(element => {
    let cSize = (element.id * element.id)
    console.log(element.id)

    element.addEventListener('click', ()=> {
        
        for (let i = 0; i < cSize; i++){
            let squareDiv = document.createElement('div')
            squareDiv.className = 'squareDiv'
            divsWrapper.append(squareDiv)
            
            if (element.id == 32){
               // divsWrapper.style.cssText = 'width : 559px; height :550px;';
                squareDiv.style.cssText = 'width : 17px; height :17px;'
                
            }else if (element.id == 64){
                divsWrapper.style.cssText = 'width : 659px; ';
                squareDiv.className = 'squareDiv2'
                //squareDiv.style.cssText = 'width : 17px; height :17px;'
                
            }


            squareDiv.addEventListener('mouseover', ()=>{
                squareDiv.style.backgroundColor = 'aqua'
                
            
            })
        }


        
    })
})



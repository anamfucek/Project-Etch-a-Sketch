const sqare = document.querySelector(".container");
const whiteBtn = document.querySelector('.white')
const colorBtn = document.querySelector(".color");
const randomBtn = document.querySelector(".rgb")
const gridBtn = document.querySelector(".blue")
let gridS = 16

function row (){
    for (let i = 0; i <gridS; i ++){
    let sma = document.createElement("div")
    sma.classList.add("one");
    sqare.appendChild(sma);



    for (let i = 0; i <gridS; i ++){
    let newlupi = document.createElement("div")
    newlupi.classList.add("two");
    sma.appendChild(newlupi);
    
    newlupi.addEventListener ("mouseover" , event => {
        event.target.style.backgroundColor = "pink"
    })

    }
  
    }
}
 row ();

 const two = document.querySelectorAll('.two')
 whiteBtn.addEventListener("click", () => {
    two.forEach((box) => {
        box.addEventListener(`mouseover`, () => {
            box.style.backgroundColor=`white`
        })
    })
 } ) 

 colorBtn.addEventListener("click", () => {
    two.forEach((box) => {
        box.addEventListener(`mouseover`, () => {
            box.style.backgroundColor=`pink`
        })
    })
 } ) 


 randomBtn.addEventListener("click", () => {
    two.forEach((box) => {
        box.addEventListener ("mouseover", function(){
            randomBgColor(box);
        })
        
    }

    )
 }
 )
       

function randomBgColor(box) {
    
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
   
    box.style.backgroundColor = bgColor;



} 
gridBtn.addEventListener("click", () => 
{ gridS = prompt('Please enter number of squares per side: Pick between 1 and 100')
const idk = document.querySelector(".one")
sqare.textContent = ""


row()
}
)





   

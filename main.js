const container = document.querySelector('#container');
const body = document.querySelector('body')
const content = document.createElement('div');
content.classList.add('content');
let colorarray = ['red', 'orange', 'yellow','green','blue','violet'];

body.appendChild(content);

let height = window.innerWidth;

function makebox(column){
//create an empty div or column

for ( let i = 0; i < column; i++) {
    const emptydiv  = document.createElement('div');
    emptydiv.classList.add('container' + i);
    
    content.appendChild(emptydiv);
 
}
    
pxsize = 480 / column ;

// create 1 row of boxes

for ( let i = 0; i < column; i++) {
    
    const cont1 = document.querySelector('.container' + i);
    const gridbox = document.createElement('divv');
    gridbox.classList.add('gridbox');
    
    gridbox.style.height = pxsize + 'px';
    gridbox.style.width = pxsize + 'px';
    
    
    gridbox.addEventListener('mouseover', changecolor)
    gridbox.addEventListener('mousedown', changecolor) 
    cont1.appendChild(gridbox);   
    }
}
function changecolor(e){
    
   e.target.style.backgroundColor = "rgb(" + getrgb() + ", "+ getrgb()+", " +getrgb()+ ")"; 
   

}
function makerow(column){
makebox(column)
for (let i = 1; i < column; i++) {
  makebox(column)
  
}
}
makerow(16)
//button to set gridbox size
const buttons = document.querySelector('#btn1');

buttons.addEventListener('click', () => {
   removeAllChildNodes(content);
    promptme();
  });



function promptme(){

let boxamount = prompt('size of grid');
if ( boxamount > 100){
    alert('enter a number less than 100')
    return 
}
makerow(boxamount);


}



function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function getrgb() {

    let rnum = Math.random() * (255- 0) + 0;
    return Math.round(rnum)
  }
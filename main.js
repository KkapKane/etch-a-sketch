const container = document.querySelector('#container');
const body = document.querySelector('body')
const content = document.createElement('div');
content.classList.add('content');
const button3 = document.querySelector('#btn3');
let click = false;
let color = 'black'

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
   
    gridbox.addEventListener('mouseover', colorSquare)
    
   
    cont1.appendChild(gridbox);   
    }
}

//function that makes all the rows
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



var curbox;
console.log(curbox)
function promptme(){
    

var boxamount = prompt('size of grid');

if ( boxamount > 100){
    alert('enter a number less than 100')
    makerow(16);
    return;
    
    
}
curbox = boxamount;
makerow(boxamount);
console.log(curbox)
return curbox;
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

const button2 = document.querySelector('#btn2');

button2.addEventListener('click', () => {
    if (curbox === undefined){
        removeAllChildNodes(content);
        makerow(16)
    }
    else
    removeAllChildNodes(content);
    makerow(curbox)
    
  });
function colorSquare (){
    if(click) {
    if((color == "random")){
        this.style.backgroundColor = "rgb(" + getrgb() + ", "+ getrgb()+", " +getrgb()+ ")";
    }
    else
    this.style.backgroundColor = color;
}
}
function changecolor (choice){
    color = choice;
} 

document.querySelector('body').addEventListener('mouseup', (e) =>{
    click = false;
    document.querySelector('.mode').textContent = "mode: not coloring"
});
document.querySelector('body').addEventListener('mousedown', (e) =>{
  if (e.target.tagname != "BUTTON"){
    click = true;
    if(click){
        document.querySelector('.mode').textContent = color
    }else {
            document.querySelector('.mode').textContent = color
        
    }
  }
  


});


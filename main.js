const container = document.querySelector('#container');
const body = document.querySelector('body')
const content = document.createElement('div');
content.classList.add('content');


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
    gridbox.textContent = i + 1
    gridbox.style.height = pxsize + 'px';
    gridbox.style.width = pxsize + 'px';
    cont1.appendChild(gridbox);
    
    gridbox.addEventListener('mouseover',(event) => {
        gridbox.style.backgroundColor = 'red'
    });
    }
}
function makerow(column){
makebox(column)
for (let i = 1; i < column; i++) {
  makebox(column)
  
}
}
makerow(16)


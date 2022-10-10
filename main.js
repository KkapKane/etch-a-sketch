const container = document.querySelector('#container');
const body = document.querySelector('body')
const content = document.createElement('div');
content.classList.add('content');


body.appendChild(content);

let height = window.innerWidth;

function makebox(column,row){
//create an empty div or column

for ( let i = 0; i < row; i++) {
    const emptydiv  = document.createElement('div');
    emptydiv.classList.add('container' + i);
    emptydiv.textContent = i + 1
    body.appendChild(emptydiv);
 
}
    


// create 1 row of boxes

for ( let i = 0; i < column; i++) {
    
    const cont1 = document.querySelector('.container' + i);
    const gridbox = document.createElement('divv');
    gridbox.classList.add('gridbox');
    gridbox.textContent = i + 1
    
    cont1.appendChild(gridbox);
    
    }
}
function makerow(row,column){
makebox(column,column)
for (let i = 1; i < row; i++) {
  makebox(column)
  
}
}
makerow(4,4)

let header = document.getElementById('header-title');
header.style.borderBottom = 'solid 2px black';

document.querySelector('h2').style.backgroundColor='green';
document.querySelector('h2').style.fontWeight = 'bold';
let x = document.getElementsByClassName('list-group-item');
for(let i=0  ;i<x.length ;i++){
    x[i].style.backgroundColor='skyblue';
    x[i].style.fontWeight='bold';
    x[i].style.fontStyle ='italic';
    
}
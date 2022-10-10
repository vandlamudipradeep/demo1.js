// let header = document.getElementById('header-title');
// header.style.borderBottom = 'solid 2px black';

// document.querySelector('h2').style.backgroundColor='green';
// document.querySelector('h2').style.fontWeight = 'bold';
// let x = document.getElementsByClassName('list-group-item');
// for(let i=0  ;i<x.length ;i++){
//     x[i].style.backgroundColor='skyblue';
//     x[i].style.fontWeight='bold';
//     x[i].style.fontStyle ='italic';
    
// }












let x = document.getElementsByClassName('list-group-item');
for(let i=0;i<x.length;i++){
    x[2].style.backgroundColor='green';
    x[i].style.fontWeight  = 'bold';
}

let y = document.getElementsByClassName('list-group-item');
for(let j = 0 ;j<y.length ;j++){
    y[j].style.backgroundColor='red';
}

let z = document.getElementsByTagName('li');
for(let a = 0 ; a<z.length ;a++){
    z[a].style.backgroundColor='yellow ';
    z[a].style.fontStyle = 'italic';
    z[a].style.borderBottom = 'solid  black';
    z[a].style.borderTop = 'solid red';
    z[a].style.borderLeft = 'solid blue';
    z[a].style.alignSelf='left'
    z[a].style.borderRight = 'solid grey';
    // z[a].style.borderRadius ='60%';
    z[a].style.borderBlockEndColor='violet';
}
let input = document.querySelector('input');
input.value = "Hello";
let submit = document.querySelector('input[type="submit"]');
submit.value="SEND";

let item = document.querySelector('.list-group-item');
item.style.color = 'red';
let lastitem1 = document.querySelector('.list-group-item:last-child');
lastitem1.style.color = 'blue';
let seconditem = document.querySelectorAll('.list-group-item');
seconditem[1].style.backgroundColor ='green';

let invisible = document.querySelectorAll('.list-group-item');
invisible[2].style.display = 'none';



let odd = document.querySelectorAll('li:nth-child(odd)');
 let even = document.querySelectorAll('li:nth-child(even)');
 for(let i= 0 ;i<even.length ;i++){
  odd[i].style.backgroundColor='green';
    
}




// let  a = document.querySelectorAll('.list-group-item');
// for(let i=0 ; i<a.length ;i++){
 
//   if(i%2==0){
//       x[i].style.backgroundColor='green';
//     }
//  }

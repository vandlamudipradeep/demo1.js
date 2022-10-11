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












// let x = document.getElementsByClassName('list-group-item');
// for(let i=0;i<x.length;i++){
//     x[2].style.backgroundColor='green';
//     x[i].style.fontWeight  = 'bold';
// }

// let y = document.getElementsByClassName('list-group-item');
// for(let j = 0 ;j<y.length ;j++){
//     y[j].style.backgroundColor='red';
// }

// let z = document.getElementsByTagName('li');
// for(let a = 0 ; a<z.length ;a++){
//     z[a].style.backgroundColor='yellow ';
//     z[a].style.fontStyle = 'italic';
//     z[a].style.borderBottom = 'solid  black';
//     z[a].style.borderTop = 'solid red';
//     z[a].style.borderLeft = 'solid blue';
//     z[a].style.alignSelf='left'
//     z[a].style.borderRight = 'solid grey';
//     // z[a].style.borderRadius ='60%';
//     z[a].style.borderBlockEndColor='violet';
// }
// let input = document.querySelector('input');
// input.value = "Hello";
// let submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// let lastitem1 = document.querySelector('.list-group-item:last-child');
// lastitem1.style.color = 'blue';
// let seconditem = document.querySelectorAll('.list-group-item');
// seconditem[1].style.backgroundColor ='green';

// let invisible = document.querySelectorAll('.list-group-item');
// invisible[2].style.display = 'none';

// let odd = document.querySelectorAll('li:nth-child(odd)');
//  let even = document.querySelectorAll('li:nth-child(even)');
//  for(let i= 0 ;i<even.length ;i++){
//   odd[i].style.backgroundColor='green';
    
// }




// let  a = document.querySelectorAll('.list-group-item');
// for(let i=0 ; i<a.length ;i++){
 
//   if(i%2==0){
//       x[i].style.backgroundColor='green';
//     }
//  }


// parentElement
// lastelementchild
// lastchild
// createchild
// firstelementchild
// firstchild
// nextsibling
// nextelementsibling
// previoussibling
// previouselementsibling
// createelement
// setAttribute
// createtesxtnode
// appendchild


// Now go head and add HEllo word before Item Lister
// Now go head and add HEllo word before Item 1
// If stuck for long check the hints


//Traversing The  DOM//

//let itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='grey';
// console.log(itemList.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.parentElement.parentElement.style.backgroundColor = 'red';
// itemList.parentElement.parentElement.style.fontStyle = 'italic';
// itemList.parentElement.style.fontWeigth = 'bold';

//childNodes 
// console.log(itemList.childNodes);
// itemList.childNodes.style.Color = 'blue';

//childern

// console.log(itemList.children);
// console.log(itemList.children[3]);
// itemList.children[2].style.backgroundColor='yellow';

//firstchild 
// console.log(itemList.firstChild);

//firstElementchild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'HELLO';

//lastChild
// console.log(itemList.lastChild);
// itemList.lastChild.textContent = 'reddy';
// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'pardeep';


//nextSibling
// console.log(itemList.nextSibling);

// //nextElementSibling
// console.log(itemList.nextElementSibling);

//previousibling
// console.log(itemList.previousSibling);
//previousElementsibiling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'red';

// createElement
//create div 

//let newDiv = document.createElement('div');
//Add Class
//newDiv.className='hello';
//Add id 
//newDiv.id = 'hello1';
//Add attr
//newDiv.setAttribute('title', 'Hello Div');
//create text node
//let newDivText = document.createTextNode('HEllo');
//Add text to div 
// newDiv.appendChild(newDivText);
// let container = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');
// console.log(newDiv);
// container.insertBefore(newDiv , h1);

// let newLi = document.createElement('li');
// newLi.className = 'list-group-item 0';
// let newLitext = document.createTextNode('HEllo');
// newLi.appendChild(newLitext);
// let list = document.querySelector('ul');
// let li = document.querySelector('ul li');
// list.insertBefore(newLi,li);

let form = document.getElementById('addForm');
let itemList = document.getElementById('item');


// Form submit event
form.addEventListener('submit' ,addItem);

//add item 
function addItem(e){
    e.preventDefault();

// Get input value
let newItem = document.getElementById('item').value;


// create  new li Element
let li = document.createElement('li');
//Add Class name 
li.className = 'list-group-item';

//Append text 
li.appendChild(document.createTextNode(newItem));

// create delete  button elemnet 
let deleteBtn = document.createElement('button');

deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

deleteBtn.appendChild(document.createTextNode('x'));

itemList.appendChild(li);

}













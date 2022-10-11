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
let ubmit = document.getElementById('Submit');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
ubmit.addEventListener('onSubmit', ubmit);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);
//

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  let newItem = document.getElementById('item').value;

  // Create new li element
  let li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  // Create del button element
let editBtn = document.createElement('button');

  // Add classes to del button
  editBtn.className = 'btn btn-danger btn-sm float-right edit';

  // Append text node
  editBtn.appendChild(document.createTextNode('EDIT'));

  // Append button to li
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

function onSubmit(e){
    e.preventDefault();
  
let inputValue = document.getElementById('item').value;
let description = document.getElementById('description').value;
  
    // Create new li element
    let li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
  let newText = document.createTextNode(inputValue);
  let descriptionNode = document.createTextNode(description);
  li.appendChild(newText);
  li.appendChild(descriptionNode);
    // Create del button element
  let deleteBtn = document.createElement('button');
  
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
  
    // Append button to li
    li.appendChild(deleteBtn);
  
    // Append li to list
    itemList.appendChild(li);
  }
// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      let li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  let  text = e.target.value.toLowerCase();
  // Get lis
  let items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    let itemName = item.firstChild.textContent;
    let description = item.childNodes[1].textContent;
    if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexof(text)!=-1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}











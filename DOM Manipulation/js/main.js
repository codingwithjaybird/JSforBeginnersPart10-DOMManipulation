/*

DOM MANIPULATION:

  1. Document node
  2. Element nodes
  3. Text nodes
  4. Attribute nodes

*/


document.title = 'JayBird Tutorial 10';

let header = document.getElementById('myheader');
header.innerHTML = 'DOM Manipulation';

document.getElementById('item1').innerHTML = 'Item 1';

let lead = document.getElementsByClassName('muted');
console.log(lead);
lead[0].className = 'loud';

let listItems = document.querySelectorAll('li.light');
console.log(listItems);
listItems[1].className = 'dark';

let myListItems = document.getElementsByTagName('li');
console.log(myListItems);
myListItems[0].className = 'dark';

// Adding an element to the DOM
let newItem = document.createElement('li');
let textNode = document.createTextNode('New List Item');
newItem.appendChild(textNode);
console.log(newItem);
let position = document.getElementsByTagName('ol')[0];
position.appendChild(newItem);

newItem.className = 'light';
//add element to the page
const body = document.body;
body.append('Hello World'); //you can appen
body.appendChild();
body.prepend("child") //append a child in the first position
const div = document.createElement('div');
div.innerText = 'Hello World';
div.textContent = 'Hello World 2';
div.innerHTML = '<strong>Hello World 2</strong>';
div.remove();
div.removeChild();
div.getAttribute('title');
div.setAttribute('title', 'Hello World');
div.removeAttribute('title');
div.dataset; //lista de los data-atributos
div.className; //nombre de la clase
div.classList; //lista de las clases
div.classList.toggle('clase-del-div'); //si tiene la clase la saca y si no la tiene la pone
div.classList.add('nueva-clase');
div.classList.remove('clase');
div.classList.contains('clase'); //returns true or false
div.style.color = 'red';

document.createElement('div');
document.body.insertBefore('element', 'location');

//selectors
const element = document.getElementById('id');
const element2 = document.getElementsByTagName('h1'); //return a node-list is an array like object. Have indices but you cant use methods. You have to spred the items in an array
const otherElement = document.getElementsByClassName('class');
const elementsArray = Array.from(document.getElementsByClassName('class'));
const elementSelected = document.querySelector('#id'); //only one element, the first one
const elementsSelectedAll = document.querySelectorAll('.class'); //every element selected
const elementsChildren = element.children;
const elementParent = element.parentElement;
const elementGrandParent = element.closest('.grandparent'); //select the closes upward element
const elementSibling = element.nextElementSibling; //could be previousElementSibling

//other methods
// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
//offsetTop - A Number, representing the top position of the element, in pixels

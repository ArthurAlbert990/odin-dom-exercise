console.log("JS Working.");

// get element container by its id as selector
const container = document.querySelector('#container');


// create elements
const paragraph = document.createElement('p');
// style it
paragraph.style.cssText= 'color: red';
// set its text
paragraph.textContent="Hey I'm red!";
//add to container and render it on DOM.
container.appendChild(paragraph);

//repeat process:
let content = document.createElement('h3');
content.style.cssText= 'color: blue';
content.textContent="I'm a blue h3!";
container.appendChild(content);

// Create div style it and add elements
content = document.createElement('div');
content.style.backgroundColor = 'pink';
content.style.border = '3px solid black';
//element H1:
let divH1 = document.createElement('h1');
divH1.textContent="I'm in a div";
content.appendChild(divH1);
//element P:
let divP = document.createElement('p');
divP.textContent="ME TOO!";


//append content (new div above) to container
container.appendChild(content);


// EVENT FUNCTIONS EXAMPLE:
//select button with id "btn"
const btn = document.querySelector('#btn');

//using arrow functions:
btn.addEventListener('click', () => {
    alert ("Hello World");
});

//using named functions and reading event properties through "e":
function alertFunction(e){
    console.log(e)
    console.log(e.target)
    alert("Hello again !!");
    //modify css property of target after alert:
    e.target.style.background= 'crimson';
    e.target.style.color= 'white';
};

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', alertFunction);

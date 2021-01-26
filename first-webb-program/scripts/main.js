//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world!';
// use let, var is older and my break "ruls"
// use ===, == converts typs and it can break som "ruls" (so use true insted of 1 when using ===)
/*let myV = "bob";
myV = 10;
myV = true;
if(myV)
{
    myHeading.textContent = 'Hello world!-2';
}
if(myV != 1)
{
    myHeading.textContent = 'Hello world!-1';
}
let iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}*/
/*multiply(4, 7);
function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }*/
/*  document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cats.jfif') {
      myImage.setAttribute('src','images/a-cat.jpeg');
    } else {
      myImage.setAttribute('src','images/cats.jfif');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Cats for ${myName}`;
    }
  }

  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Cats for ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }


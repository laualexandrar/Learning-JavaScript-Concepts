//first container
const mainContainer = document.querySelector('div.main-container');
const citiesContainer = document.createElement('div');
mainContainer.appendChild(citiesContainer);
citiesContainer.setAttribute("class", 'first-container') 
//title
const titleInsideCitiesContainer = document.createElement('h2');
citiesContainer.appendChild(titleInsideCitiesContainer);
const titleInsideH2 = document.createTextNode("Cities");
titleInsideCitiesContainer.appendChild(titleInsideH2);
//text
const paragraphAfterH2 = document.createElement('p');
citiesContainer.appendChild(paragraphAfterH2);
const textAfterH2 = document.createTextNode('These are some cities in the US:')
paragraphAfterH2.appendChild(textAfterH2);

//unordered list
const listAfterTxtH2 = document.createElement('ul');
citiesContainer.appendChild(listAfterTxtH2);
listAfterTxtH2.setAttribute("class", "unordered-list");
const firstElementLi = document.createElement('li');
listAfterTxtH2.appendChild(firstElementLi);
const textInsideFirstElementLi = document.createTextNode('Seattle');
firstElementLi.appendChild(textInsideFirstElementLi);
const secondElementLi = document.createElement('li');
listAfterTxtH2.appendChild(secondElementLi);
const secondCity = document.createTextNode("Portland");
secondElementLi.appendChild(secondCity);
const thirdLi = document.createElement('li');
listAfterTxtH2.appendChild(thirdLi);
const thirdCity = document.createTextNode('Austin');
thirdLi.appendChild(thirdCity);
const fourthLi = document.createElement('li');
listAfterTxtH2.appendChild(fourthLi);
const fourthCity = document.createTextNode('Los Angeles');
fourthLi.appendChild(fourthCity);

//inserting second container before firstContainer
const secondContainer = document.createElement("div");
mainContainer.appendChild(secondContainer);
mainContainer.insertBefore(secondContainer, citiesContainer);
secondContainer.setAttribute('class', "second-container");
//input-label
const inputLabel = document.createElement('label');
secondContainer.appendChild(inputLabel);
inputLabel.setAttribute('id', 'first-input');
inputLabel.setAttribute('class', 'input-label');
const labelText = document.createTextNode('Name: ');
inputLabel.appendChild(labelText);
const userInput = document.createElement('input');
userInput.setAttribute('id', 'first-input')
userInput.setAttribute('class', 'input-class')
secondContainer.appendChild(userInput);
userInput.setAttribute('placeholder', "write your name...")
//button
const button = document.createElement('button');
secondContainer.appendChild(button)
const textButton = document.createTextNode('SEND');
button.appendChild(textButton);
button.setAttribute('class', 'send-button')

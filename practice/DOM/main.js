const title = document.getElementsByClassName("title");
const mainContainer = document.querySelector("div.main-container")
const h2 = document.createElement('h2');
mainContainer.appendChild(h2);
const textNumberTwo = document.createTextNode("Hello is me again")
h2.appendChild(textNumberTwo)

const secondDiv = document.createElement('div');
mainContainer.appendChild(secondDiv);
const divText = document.createTextNode("This is the text inside a div");
secondDiv.appendChild(divText)
// mainContainer.insertBefore(secondDiv, 'title')
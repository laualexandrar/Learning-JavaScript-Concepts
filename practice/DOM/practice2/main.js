//creating main container
const documentBody = document.querySelector('body');
const mainContainer = document.createElement('main');
documentBody.appendChild(mainContainer);
mainContainer.setAttribute('class', 'main-container')
// creating div
const firstContainer = document.createElement('div')
mainContainer.appendChild(firstContainer);
// creating title
const paragraph1 = document.createElement('p');
firstContainer.appendChild(paragraph1);
paragraph1.setAttribute('class', 'full-name')
const textInsideParagraph1 = document.createTextNode('Full Name')
paragraph1.appendChild(textInsideParagraph1);


// creating second container
const introContainer = document.createElement('div');
mainContainer.appendChild(introContainer);
introContainer.setAttribute('class', 'intro-container');
//creating paragraph inside second container
const pContainer = document.createElement('div');
introContainer.appendChild(pContainer);
pContainer.setAttribute('class', 'introduction');
const introInstructions = document.createElement('p');
pContainer.appendChild(introInstructions);
introInstructions.setAttribute('class', 'text-introduction');
const textInsideIntro = document.createTextNode('Write a small introduction');
introInstructions.appendChild(textInsideIntro);

//adding image
const profileImage = document.createElement('img')
introContainer.appendChild(profileImage)
profileImage.src = './cupcakes.jpg'
profileImage.setAttribute('class', 'profile-img')

//adding skills container
const skillsContainer = document.createElement('div')
mainContainer.appendChild(skillsContainer)
skillsContainer.setAttribute('class', 'container');
const oListOfSkills = document.createElement('ol');
skillsContainer.appendChild(oListOfSkills);
oListOfSkills.setAttribute('class', 'ordered-list')
// adding skills to oListSkills
const firstLi = document.createElement('li');
oListOfSkills.appendChild(firstLi)
const textFirstSkill = document.createTextNode('skill #1')
firstLi.appendChild(textFirstSkill)

const secondLi = document.createElement('li');
oListOfSkills.appendChild(secondLi)
const textSecondSkill = document.createTextNode('skill #2')
secondLi.appendChild(textSecondSkill)

const thirdLi = document.createElement('li');
oListOfSkills.appendChild(thirdLi)
const textThirdSkill = document.createTextNode('skill #3')
thirdLi.appendChild(textThirdSkill)

const skillsTitle = document.createElement('h2');
skillsContainer.insertBefore( skillsTitle, oListOfSkills);
skillsTitle.setAttribute('class', 'subtitle')
const textSkill = document.createTextNode('Skills:');
skillsTitle.appendChild(textSkill);

//adding third container
const jobContainer = document.createElement('div');
mainContainer.appendChild(jobContainer);
jobContainer.setAttribute('class','container');
const jobContainerTitle = document.createElement('h2');
jobContainer.appendChild(jobContainerTitle);
jobContainerTitle.setAttribute('class', 'subtitle');
const textSubtitle = document.createTextNode('Job Description:');
jobContainerTitle.appendChild(textSubtitle);
const instructionsJobDesc = document.createElement('p');
jobContainer.appendChild(instructionsJobDesc);
instructionsJobDesc.setAttribute('class', 'paragraph')
const textInsideJobDesc = document.createTextNode('A brief description of your current and past job.');
instructionsJobDesc.appendChild(textInsideJobDesc);

//adding fourth container
const studentBackgroundContainer = document.createElement('div');
mainContainer.appendChild(studentBackgroundContainer);
studentBackgroundContainer.setAttribute('class', 'container');
const studentBackgroundTitle = document.createElement('p');
studentBackgroundContainer.appendChild(studentBackgroundTitle);
studentBackgroundTitle.setAttribute('class', 'subtitle');
const textInsideStudentSubtitle = document.createTextNode('Student Background');
studentBackgroundTitle.appendChild(textInsideStudentSubtitle);
const studentParagraph = document.createElement('p');
studentBackgroundContainer.appendChild(studentParagraph);
const studentBackgroundInstructions = document.createTextNode('List all your certifications and diplomas.');
studentParagraph.appendChild(studentBackgroundInstructions);
studentParagraph.setAttribute('class', 'paragraph')

(()=>{const e=document.getElementById("links"),t=document.querySelector("h1"),a=document.getElementById("description"),o=document.getElementById("img2"),n=document.getElementById("text"),l={name:"Laura Roa 🇨🇴",nickname:"Lau",technologies:"#JavaScript",description:"Hi! I am Laura. You can call me Lau! I was born in Colombia but I am currently living in Seattle. I am a self-taught JavaScript developer. I love photography and I have a great blog about restaurants in Seattle!",avatar:"/",social:[{name:"twitter",url:"https://twitter.com/laualexandrarp",username:"laualexandrarp"},{name:"instagram",url:"https://instagram.com/foodielexa",username:"foodielexa"}],links:[{name:"blog",url:"https://laulexa.github.io/foodies-and-goodies--blog/src/index.html",color:"red",emoji:"💬"},{name:"Courses",url:"https://platzi.com/p/laualexandrar/",color:"yellow",emoji:"📖"},{name:"YouTube",url:"https://www.youtube.com/channel/UC0DV4t3YyoDP9d6YJ5ktAGg",color:"purple",emoji:"💬"}],footer:"Made with Love"};(()=>{let e=document.createTextNode(l?.name),a=document.createTextNode(l?.technologies);t.appendChild(e),n.append(a)})(),(()=>{let e=document.createElement("img");e.className="rounded-lg w-48",e.src="https://media-exp1.licdn.com/dms/image/C5603AQF9fxkSRNoaEw/profile-displayphoto-shrink_200_200/0/1654112360567?e=1666828800&v=beta&t=Z7IeTEVlartaPVOYyQNCtTfvcxVCfSKHJzsuwWRf69w",o.appendChild(e)})(),(()=>{let e=document.createTextNode(l?.description);a.appendChild(e)})(),(()=>{document.createTextNode(l?.name);let t=l?.links?.map((e=>`<div class="bg-${e.color}-200 px-4 py-5 w-full flex justify-between">\n        <a class="text-sm font-bold text-${e.color}-600 text-center hover:text-${e.color}-800 cursor-pointer"\n          href="${e.url}" target="_blank">\n          ${e.name}\n        </a>\n        <span>${e.emoji}</span>\n      </div>`)).join(""),a=document.createElement("section");a.innerHTML=t,e.appendChild(a)})()})();
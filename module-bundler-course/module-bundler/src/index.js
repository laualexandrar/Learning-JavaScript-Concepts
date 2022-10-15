const $links = document.getElementById('links');
const $name = document.querySelector('h1');
const $description = document.getElementById('description');
const $img2 = document.getElementById('img2');
const $text = document.getElementById('text')

const data = {
    name: "Laura Roa 🇨🇴",
    nickname: "Lau",
    technologies: "#JavaScript",
    description: "Hi! I am Laura. You can call me Lau! I was born in Colombia but I am currently living in Seattle. I am a self-taught JavaScript developer. I love photography and I have a great blog about restaurants in Seattle!",
    avatar: "/",
    social: [
      {
        name: "twitter",
        url: "https://twitter.com/laualexandrarp",
        username: "laualexandrarp",
      },
      {
        name: "instagram",
        url: "https://instagram.com/foodielexa",
        username: "foodielexa",
      },
    ],
    links: [
      {
        name: "blog",
        url: "https://laulexa.github.io/foodies-and-goodies--blog/src/index.html",
        color: "red",
        emoji: "💬",
      },
      {
        name: "Courses",
        url: "https://platzi.com/p/laualexandrar/",
        color: "yellow",
        emoji: "📖",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/channel/UC0DV4t3YyoDP9d6YJ5ktAGg",
        color: "purple",
        emoji: "💬",
      },
    ],
    footer: "Made with Love",
  };

  const profileInfo = () => {
    let name = document.createTextNode(data?.name);
    let text = document.createTextNode(data?.technologies);
    $name.appendChild(name);
    $text.append(text);
  }

  const profileDescription = () => {
    let description = document.createTextNode(data?.description);
    $description.appendChild(description);
}

  const imagen = () =>{
    let img = document.createElement('img')
    img.className = 'rounded-lg w-48'
    img.src = 'https://media-exp1.licdn.com/dms/image/C5603AQF9fxkSRNoaEw/profile-displayphoto-shrink_200_200/0/1654112360567?e=1666828800&v=beta&t=Z7IeTEVlartaPVOYyQNCtTfvcxVCfSKHJzsuwWRf69w'
  
    $img2.appendChild(img)
  }

  const main = () => {
    let name = document.createTextNode(data?.name);
    let links = data?.links?.map((link) => {
        return `<div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
        <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
          href="${link.url}" target="_blank">
          ${link.name}
        </a>
        <span>${link.emoji}</span>
      </div>`;
    }).join('');
    let newItem = document.createElement("section");
    newItem.innerHTML = links;
    $links.appendChild(newItem);
    // $name.appendChild(name);
  }


  profileInfo();
  imagen();
  profileDescription();
  main();
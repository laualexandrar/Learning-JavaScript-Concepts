import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import buttonStyle from './button.module.css'
import imageStyles from './image.module.css'
import img from './vite-logo.png'
import data from './data.json'
const modules = import.meta.glob('./modules/*.js')
import suma from './suma.ts'
console.log(`suma 2 + 3 = ${suma(2,3)}`);

console.log(modules)

for(const path in modules) {
  modules[path]().then((module) => {
    module.load()
  })
}

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
    <button id="btn">Click!</button>
    <img id="img" />
    <pre>${JSON.stringify(data)}</pre>
  </div>
`
document.getElementById('btn').className = buttonStyle.btn
setupCounter(document.querySelector('#counter'))

const imagen = document.getElementById('img')
imagen.src = img
imagen.className = imageStyles.img
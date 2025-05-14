import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <section>
  ola mundo
  </section>
`

setupCounter(document.querySelector('#counter'))

// Este es el punto de entrada de tu aplicacion

// import { myFunction } from './lib/index.js';

// myFunction();

import{changeView} from './controler/index.js'

const init = ()=>{
    changeView(window.location.hash)
    window.addEventListener('hashchange',
    ()=> changeView(window.location.hash))
}

window.addEventListener('load',init)
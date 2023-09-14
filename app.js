import {displaylogin, displaypopup, displayregister} from "./functions.js"

const login = document.querySelector('.header button')
const close = document.querySelector('.close')

displaypopup(login,'flex')
displaypopup(close,'none')
displaylogin()
displayregister()
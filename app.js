import {displaylogin, displayornotpassword, displaypopup, displayregister} from "./functions.js"

const login = document.querySelector('.header button')
const close = document.querySelector('.close')
const password = document.querySelector('#mdp')
const newpassword = document.querySelector('#mdp-register')

displaypopup(login,'flex')
displaypopup(close,'none')
displaylogin()
displayregister()
displayornotpassword(password)
displayornotpassword(newpassword)
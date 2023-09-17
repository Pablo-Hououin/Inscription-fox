import {displaylogin, displayornotpassword, displaypopup, displayregister,getcookies,improvepassword,newpassword, sendregister} from "./functions.js"

const login = document.querySelector('.header button')
const close = document.querySelector('.close')
const password = document.querySelector('#mdp')
const mailconnexion = document.querySelector('#mail')

await getcookies('mail').then((cookievalue)=>{
mailconnexion.value = cookievalue
})
await getcookies('password').then((cookievalue)=>{
password.value = cookievalue
})
displaypopup(login,'flex')
displaypopup(close,'none')
displaylogin()
displayregister()
displayornotpassword(password)
displayornotpassword(newpassword)
improvepassword()
sendregister()
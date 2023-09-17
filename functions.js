export const newpassword = document.querySelector('#mdp-register')
const popups = document.querySelectorAll('.wrapper-form,.bloc-setting-fox')
const fox = document.querySelector('.bloc-setting-fox img:first-child')
const formregister = document.querySelector('.template-form:nth-child(2)')
const formconnexion = document.querySelector('.template-form:first-child')
const linkregister = document.querySelector('#go-register')
const linkconnexion = document.querySelector('#go-login')
const visibilities = document.querySelectorAll('.cadenas')
const cadenasopen = document.querySelectorAll('.cadenas img:first-child')
const cadenasclose = document.querySelectorAll('.cadenas img:nth-child(2)')
const newmail = document.querySelector('#mail-register')
const champspassword = document.querySelector('.template-form:nth-child(2) .champs:nth-child(4)')
const register = document.querySelector('#Register')
const template = document.querySelector('.gestionerreur')

/**
 * animation pour déplacer les formulaires
 */
function movingregister(e){
        formconnexion.style.opacity = '0'
        formregister.style.opacity ='1'
        formregister.classList.remove('movingrightforms')
        formregister.classList.add('movingleftforms')
        e.stopPropagation()
}
/**
 * Animation faisant sauter l'image du renard
 */
function jumpfox(){
    fox.classList.add('movingtopfox')
}
/**
 * Fonctionnement du bouton login en un seul click
 * @param {HTMLElement} elementclick 
 * @param {CSSVariableReferenceValue} affichage 
 * @returns {event}
 */

export function displaypopup(elementclick,affichage) {
    elementclick.addEventListener('click', () =>{
        if (formconnexion.style.opacity = '0'){
            formconnexion.style.opacity = '1'
            formregister.style.opacity ='0'
            formregister.classList.remove('movingleftforms')
            formregister.classList.add('movingrightforms')
        }
        popups.forEach(popup =>{
            popup.style.display = affichage;
            popup.style.opacity ='1' /** pour gérer la version mobile*/
        })
        jumpfox()
    })
}


export function displayornotpassword(mdp){
    let click = 0
    visibilities.forEach(visibility =>{
        visibility.addEventListener('click', ()=>{
            if (click%2 === 0){
                cadenasopen.forEach(cadenaso =>{
                    cadenaso.style.opacity = '1'
                })
                cadenasclose.forEach(cadenasc =>{
                    cadenasc.style.opacity = '0'
                })
                mdp.setAttribute('type','password')
            }
            else{
                cadenasopen.forEach(cadenaso =>{
                    cadenaso.style.opacity = '0'
                })
                cadenasclose.forEach(cadenasc =>{
                    cadenasc.style.opacity = '1'
                })
                mdp.setAttribute('type','text')
            }
            click++
        })
    })
}

export function affichageblock(elementclick,elementafficher,affichage){
    elementclick.addEventListener('click', () =>{
            elementafficher.style.display = affichage;
        })
    }

export function displayregister(){
    linkregister.addEventListener('click', (e)=>{
        movingregister(e)
    })
}
export function displaylogin(){
    linkconnexion.addEventListener('click', ()=>{
        formregister.classList.remove('movingleftforms')
        formregister.classList.add('movingrightforms')
        setTimeout(()=>{
            formconnexion.style.opacity = '1'
            formregister.style.opacity='0'
        },'250')
    })
}
/**
 * ajout du template et des paragraphes à modifier en cas d'erreur
 */
const clonetemplate = template.content.cloneNode(true);
const paragraphes = clonetemplate.querySelectorAll('p')
paragraphes.forEach(paragraphe =>{
    paragraphe.classList.add('erreur-password')
})
const wrapperp = clonetemplate.querySelector('div')
champspassword.insertAdjacentElement('afterend',wrapperp)

/**
 * définition des regex à accomplir pour compléter le formulaire
 */
const regexnumber = new RegExp("\\d")
const regexmaj = new RegExp("[A-Z]")
const regexspecial = new RegExp("\\W")

export function improvepassword(){
newpassword.addEventListener('keyup', ()=>{
        const minletter = 12
        Findcharacter(newpassword.value,regexnumber,'un chiffre',0)
        Findcharacter(newpassword.value,regexmaj,'une lettre en majuscule',1)
        Findcharacter(newpassword.value,regexspecial,'un caractère spécial',2)
        numberletter(newpassword.value,minletter,3)
})
}
/**
 * Fonction qui recherche si un caractère est présent ou non
 * @param {string} text - le texte ou on souhaite savoir s'il y a le caractère ou pas 
 * @param {regex} regex - C'est une constante ou on a défini la règle regex 
 * @param {string} message - message a indiqué dans les erreurs
 * @param {number} position - indiquez quelle paragraphe, la fonction doit modifier le texte en cas d'erreur (on commence par 0)
 */

function Findcharacter(text,regex,message,position){
    const promesse = new Promise((resolve, reject) => {
        if(regex.test(text)){
            resolve('le mot de passe contient ' + message.toLowerCase())
        }
        else{
            reject('le mot de passe ne contient pas ' + message.toLowerCase());
    }
    })
    promesse.then((resultat)=>{
        paragraphes[position].innerText = ''
        register.removeAttribute('disabled')
    }
    )
    .catch((erreur)=>{
        register.setAttribute('disabled','disabled')
        paragraphes[position].innerText = erreur
    })
}
/**
 * Fonction qui recherche si un texte comprend un certain nombre de caractères
 * @param {string} text 
 * @param {number} maxnumber 
 * @param {number} position - indique quelle paragraphe, la fonction doit modifier le texte (on commence par 0)
 */
function numberletter(text,maxnumber,position){
    const promesse = new Promise((resolve, reject) => {
        const numbercharacter = text.length
        if (numbercharacter >= maxnumber) {
            resolve(`le mot de passe contient plus de ${maxnumber} caractères`)
        }
        else{
            reject (`le mot de passe ne contient pas plus de ${maxnumber} caractères`)
        }
    })
    promesse.then((resultat)=>{
        paragraphes[position].innerText = ''
        register.removeAttribute('disabled')
    }
    )
    .catch((erreur)=>{
        register.setAttribute('disabled','disabled')
        paragraphes[position].innerText = erreur
    })
}
/**
 * Envoyer les cookies 
 */
export function sendregister(){
    register.addEventListener('click',(e) =>{
        e.preventDefault();
        setcookies('mail',newmail.value)
        formregister.reset()
    })
}

/**
 * 
 * @param {string} name - donner un nom à ce cookie
 * @param {string} value - assigner une valeur à ce cookie
 */
function setcookies(name,value){
    document.cookie = `${name} =${encodeURIComponent(value)}`
}

/**
 * 
 * @param {string} name - Assigner le nom du cookie que vous souhaitez récupérer
 * @returns {decodeURIComponent}
 */
export async function getcookies(name){
    const cookies = document.cookie.split('; ')
    const value = cookies
        .find(c => c.startsWith(name + "="))
        ?.split('=')[1]
        if (value === undefined) {
            return ''
        } 
        return decodeURIComponent(value)
    }
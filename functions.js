const popups = document.querySelectorAll('.wrapper-form,.bloc-setting-fox')
const fox = document.querySelector('.bloc-setting-fox img:first-child')
const formregister = document.querySelector('.template-form:nth-child(2)')
const formconnexion = document.querySelector('.template-form:first-child')
const linkregister = document.querySelector('#go-register')
const linkconnexion = document.querySelector('#go-login')
const visibilities = document.querySelectorAll('.cadenas')
const cadenasopen = document.querySelectorAll('.cadenas img:first-child')
const cadenasclose = document.querySelectorAll('.cadenas img:nth-child(2)')


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
const popups = document.querySelectorAll('.wrapper-form,.bloc-setting-fox')
const fox = document.querySelector('.bloc-setting-fox img:first-child')
const formregister = document.querySelector('.template-form:nth-child(2)')
const formconnexion = document.querySelector('.template-form:first-child')
const linkregister = document.querySelector('#go-register')
const linkconnexion = document.querySelector('#go-login')


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
        popups.forEach(popup =>{
            popup.style.display = affichage;
            popup.style.opacity ='1' /** pour gérer la version mobile*/
        })
        jumpfox()
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
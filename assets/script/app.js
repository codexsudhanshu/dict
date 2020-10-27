import { selector } from './sharedModule.js';
import { component } from './sharedModule.js';

// setTimeout(fun)
// window.addEventListener('load', function(){
//     this.setTimeout(function(){
//         alert("This site is under development, so judge na kre...")
//     }, 2000)
//     console.log("window is loaded")
// })

// MOBILE VIEW NAVIGATION TOGGLER
let mobileNavToggler = document.querySelector(".toggler")  //  NAV  TOGGLE BUTTON  SELECTOR
mobileNavToggler.addEventListener('click', function () {
    let mobileLinks = selector('.nav__links-container') //  NAV LINK CONTAINER 
    let navBGmodifier = mobileLinks.parentElement // NAVIGATION  ELEMENT
    let hero = selector('.hero')  // HERO ELEMENT
    let docHead = document.getElementsByTagName('meta')[2]  // META TAG FOR CHANGING THEME COLOR

    // console.log(hero)
    mobileLinks.classList.toggle('new-nav__links-container') //  TOGGLING LINKS
    if (mobileLinks.className === 'nav__links-container new-nav__links-container') {
        hero.style.borderBottom = '5px solid grey'  // CHANGING HERO  BOTTOM-BORDER COLOR
        navBGmodifier.style.backgroundColor = '#424242'  // CHANGING NAV BG COLOR
        docHead.content = '#616161'  // CHANGIN URL  BG COLOR IN MOBILE VIEW
    } else {
        navBGmodifier.style.backgroundColor = '#0288d1'  //  RESETTING DEFAULT  NAV BG  COLOR
        hero.style.borderBottom = '5px solid #0288d1'  // RESETTING DEFAULT HERO BOTTOM BOREDER COLOR
        docHead.content = '#0288d1'  //  RESETTING TO NORMAL MODE
    }
})

//  RENDRING NOTIFICATION LIST
function notificationRender(nList) {
    let newList = new component(selector('.update__lists'), notification)
    if (nList.length === 0) {
        newList.textCard(selector('.update__lists'))
    } else {
        newList.renderList()
    }
}

let notification = [
    'classs timing changes ',
    'admission open',
    'something else',
    'again something else',
]

// let notification = []

notificationRender(notification)


let courses = ['dca', 'cca', 'ddtp', 'jdca', 'adca', 'dtp', 'photoshop', 'coral-draw', 'excel', 'tally']

let color = ['#d81b60', '#ff7043', '#0277bd', '#8e24aa', '#4527a0', '#3f51b5', '#651fff', '#7cb342', '#880e4f', '#5c6bc0', '#304ffe', '#ffab00']

function dynamicList(element, cardTitle) {
    let dl = document.createElement('div')
    dl.className = 'dynamic-list flex'
    dl.innerHTML = `<h2 >${cardTitle}</h2>`
    element.append(dl)
}

for (let course of courses) {
    dynamicList(selector('.course__content'), course)

}

let y = document.querySelectorAll('.dynamic-list')

for (let i = 0; i < y.length; i++) {
    let el = y[i]
    el.style.backgroundColor = color[i]
}

//  QUERY BOX ANIMATION   

let mainCard = selector(".query");  //GETTING QUARY ELEMENT

mainCard.addEventListener("mouseover", function () {
	let cardHeader = selector(".query__header");
	let cardContent = selector('.query__main')
	if (cardHeader && cardContent) {
		cardHeader.classList = "new__query-header";
		cardContent.classList = "new__query-main";
	}
});

// PAEG ANIMATION

document.addEventListener('scroll', function(){
    console.log("page is scrolling")
})
// FUNCTIONAL QUERY SELECTOR
export function selector(className) {
    return document.querySelector(className)
}

let postedTime = new Date().toLocaleTimeString()
// let timeObj 
// DYNAMIC CLASS BASED COMPONENT GENERATOR .. 
// THIS CLASS ACCEPTS TWO ARGS,  1 - ELEMENT POSITION WHERE YOU WANT TO APPEND THIS COMPONENT,  2- LIST CONTENT 
export class component {
    constructor(domNode, listContnet) {
        this.domNode = domNode
        this.listContnet = listContnet;
    }

    listGenerator(element, listContnet) {
        let listElement = document.createElement('div')
        listElement.className = 'update__list'
        listElement.innerHTML = `
        <h4  class="update-time">20 / 05 / 2020</h4>
        <h3class="update__list">
            <span class="update__list-bullet  fa fa-dot-circle-o"></span>
                ${listContnet}
            <span class="update__list-arrow ">${postedTime}</span>
        </h3>
        `
        element.append(listElement)
    }

    textCard() {
        let textCard = document.createElement('div')
        textCard.className = 'text-card  flex'
        textCard.innerHTML = `
            <h2 class="text__card-title " >No new updates</h2>
        `
        this.domNode.append(textCard)
    }

    renderList() {
        for (let i = 0; i < this.listContnet.length; i++) {
            this.listGenerator(this.domNode, this.listContnet[i])
        }
    }
}
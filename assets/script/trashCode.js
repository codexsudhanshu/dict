//   DYNAMIC LIST COMPONENT 
function listGenerator(element, listContnet) {
    let listElement = document.createElement('div')
    listElement.className = 'update__list'
    listElement.innerHTML = `
     <span class="update__list-bullet  fa fa-dot-circle-o"></span>
          ${listContnet}
    <span class="update__list-arrow  fa fa-arrow-circle-o-right"></span>`
    element.append(listElement)
}

function renderList(list, component, position) {
    for (let i = 0; i < list.length; i++) {
        component(position, list[i])
    }
}

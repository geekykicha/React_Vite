function customReder(reactElement, container){
    // create dom Element
    // not good way

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}
// creating html tag in custom react
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "click me to visit google"
}
// seleting html tag 
const mainContainer = document.querySelector('#root')

customReder(reactElement, mainContainer)
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import First from './First.jsx'
function MyApp(){
    return (<div>
        <h2>visit google</h2>
    </div>)
}
// not right way to create html Element in react

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: "click me to visit google"
// }

// First tree structure is created than variable injected
const anotherUser = "kicha"

// correct way to write tags bable(transpilar) inject automatically
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Click me to visit google',
    anotherUser
)
// direct way to create tags 
const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google !</a>
)
createRoot(document.getElementById('root')).render(
  
    // <App />
    // <MyApp/>
    reactElement
    // anotherElement
  
)

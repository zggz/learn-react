import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

//
// function Comp() {
//     return React.createElement("span", null, "hello");
// }
//
// function App() {
//     return React.createElement(
//         "div",
//         {
//             id: "test"
//         },
//         React.createElement(Comp, null),
//         React.createElement(
//             "ul",
//             null,
//             React.createElement("li", null, "1"),
//             React.createElement("li", null, "2")
//         )
//     );
// }

const container = document.getElementById('root')

const root = createRoot(container) // createRoot(container!) if you use TypeScript
debugger
root.render(<App/>)
// ReactDOM.render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );

import React from 'react'

//export const Greet = () => <h1>Hello, Raphael.</h1>

// const Greet = (props) => {
//     return (
//         <div>
//             <h1>Hello, {props.name}, aka. {props.heroName}.</h1>
//             {props.children}
//         </div>
//     )
// }

// const Greet = ({name, heroName, children}) => {
//     return (
//         <div>
//             <h1>Hello, {name}, aka. {heroName}.</h1>
//             {children}
//         </div>
//     )
// }

const Greet = (props) => {
    const {name, heroName, children} = props
    return (
        <div>
            <h1>Hello, {name}, aka. {heroName}.</h1>
            {children}
        </div>
    )
}

export default Greet
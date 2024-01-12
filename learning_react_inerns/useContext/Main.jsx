// import { createContext, useContext } from 'react';

import { createContext, useContext } from "react"


// const ThemeContext = createContext(null);

// export default function MyApp() {
//   return (
//     <ThemeContext.Provider value="dark">
//       <Form />
//     </ThemeContext.Provider>
//   )
// }

// function Form() {
//   return (
//     <Panel title="Welcome">
//       {/* <Button>Sign up</Button>
//       <Button>Log in</Button> */}
//     </Panel>
//   );
// }

// function Panel({ title, children }) {
//   const theme = useContext(ThemeContext);
//   const className = 'panel-' + theme;
//   return (
//     <section className={className}>
//       <h1>{title} hello</h1>
//       {children} hello
//     </section>
//   )
// }

// function Button({ children }) {
//   const theme = useContext(ThemeContext);
//   const className = 'button-' + theme;
//   return (
//     <button className={className}>
//       {children}
//     </button>
//   );
// }

// the above will be deep study at home

// useContext

//parent
let candyContext = createContext()

export default function Parent() {
    var candy = 'parle';
    let candies = {
        one:'Parle',
        two:'Dhoodh-Malai',
        three:'Pulse',
        four:'Jelly',
        five:'Eclairs'
    }
    return (
        <>
            <candyContext.Provider value={candies}>
                hello I am Parent
                <br />
                <Child />
            </candyContext.Provider>
        </>
    )
}




// child

const Child = () => {
    return (
        <>
            hello I am child
            <br />
            <GrandChild />
        </>
    )
}




// grand child
const GrandChild = ({ candy }) => {
    let useCandyContext = useContext(candyContext)
    return (
        <>
            hello I am Grand child
            <br />
            {useCandyContext.one}
            <br />
            {useCandyContext.two}
            <br />
            {useCandyContext.three}
            <br />
            {useCandyContext.four}
            <br />
            {useCandyContext.five}
        </>
    )
}
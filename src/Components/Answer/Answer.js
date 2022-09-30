import React from 'react';
import './Answer.css'

const Answer = () => {
    return (
        <div className='Answers'>
           <div>
           <h1>Answer 1</h1>
            <h3>How Does React Works</h3>
            <p>You may have noticed that the syntax of the HTML code above is similar to XML. That said, instead of using the traditional DOM class, React uses className. <br />
            JSX tags have a name, children, and attributes. Numeric values and expressions must be written inside curly brackets. The quotation marks in JSX attributes represent strings, similarly to JavaScript. <br />
            In most cases, React is written using JSX instead of standard JavaScript to simplify components and keep code clean.</p>
           </div>
           <div>
            <h1>Answer 2</h1>
            <h3>Different Between Props And State</h3>
            <h5>Props</h5>
            <p>1. Props are read-only <br />
           2.  Props are immutable. <br /> 3. Props can be accessed by the child component <br />4. Props make components reusable. <br />5. Stateless component can have Props.</p> <br />
            <h5>State</h5>
            <p>1. State changes can be asynchronous.
            <br />2. State is mutable. <br /> 3. State holds information about the components. <br />
            4. State cannot be accessed by child components. <br /> 5. State cannot make components reusable.
            </p>
           </div>
           <div>
            <h1>Answer 3</h1>
            <h3>Use Of UseEffect without load data</h3>
            <p>Better code composition: <p>
            Hooks allow lifecycle methods to be written in a linear, render flowing order rather than splitting them among relevant Class Components.</p> <br />

            <p>Reuse states and components:</p> <p>
            Hooks make it easier to share stateful logic between different components. You use the same Hook to call states throughout a program rather than just within the same Class.</p> <br />

           <p> Better testing:</p> <p>
            Performance: When optimized, React Hooks are the fastest form of functional component.
           Hooks consolidate stateful logic so it’s all defined in a relevant Hook and is, therefore, easier to test.
           </p>


</p>
           </div>
        </div>
    );
};

export default Answer;
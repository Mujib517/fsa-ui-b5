import React, { useContext } from 'react';

const ValContext = React.createContext(0);

// function expr
// functiond declaration
// context 
const Child4 = () => {
    const value = useContext(ValContext);
    return <div>Child 4 {value}</div>
}

const Child3 = () => <div>
    Child 3
    <Child4 />
</div>
const Child2 = () => <div>
    Child 2
    <Child3 />
</div>
const Child1 = () => <div>
    Child 1
    <Child2 />
</div>

const Parent = () => {
    return <div>
        Parent
        <ValContext.Provider value={20000}>
            <Child1 />
        </ValContext.Provider>
    </div>
}

const Contact = () => <div className="container">
    <h1>Contact Page</h1>
    <Parent />
</div>;

export default Contact;

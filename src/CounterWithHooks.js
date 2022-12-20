import React, { useState } from 'react';

// class CounterWithHooks extends React.Component {

//     state = {
//         count: 10,
//         loading: true,
//         hasError: false
//     };

//     render() {
//         return <div>
//             <h1>Counter with hooks</h1>
//             <h3>Count : {this.state.count}</h3>
//         </div>
//     }
// }

const CounterWithHooks = () => {
    const [count, setCount] = useState(100);

    function inc() {
        setCount(count + 1);
    }

    function dec() {
        setCount(count - 1);
    }

    return <div>
        <h1>Counter with hooks</h1>
        <h3>Count : {count}</h3>
        <button onClick={inc} className="btn btn-sm btn-danger m-3">++</button>
        <button onClick={dec} className="btn btn-sm btn-danger">--</button>
    </div>
};

export default CounterWithHooks;

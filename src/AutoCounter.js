import React, { useEffect, useState } from 'react';

const AutoCounter = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('updating count', count);
            setCount(count + 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    }, [count]);

    return <>
        <h3>Auto Counter</h3>
        <h4>{count}</h4>
    </>
}

export default AutoCounter;


// function with state
// migrated class - func
// hooks, useState, useEffect, useParams 
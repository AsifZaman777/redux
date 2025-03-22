import React, { useContext } from 'react';
import { CounterContext } from '../context/counterContext';

const componentA = () => {
    const { counter } = useContext(CounterContext);
    console.log("ComponentA re-rendered");

    return (
        <div className="p-4 border rounded shadow-md bg-blue-100">
            <h1 className="text-lg font-bold text-blue-700">Component A</h1>
            <p className="text-blue-600">Counter: <span className="font-mono text-xl">{counter}</span></p>
        </div>
    );
};

export default componentA;
import React from 'react';
import { useSelector } from 'react-redux';

const componentA = () => {
const counter = useSelector((state) => state.counter.value); //state.counter.value is the path to the counter value in the store
console.log('Component A rendered');
    return (
        <div className="bg-blue-100 border p-4 rounded shadow-md">
            <h1 className="text-blue-700 text-lg font-bold">Component A</h1>
            <p className="text-blue-600">Counter: <span className="text-xl font-mono">{counter}</span></p>
        </div>
    );
};

export default componentA;
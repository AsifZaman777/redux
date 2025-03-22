import React, { useContext } from 'react';
import { CounterContext } from '../context/counterContext';

const componentC = () => {
    console.log("ComponentC re-rendered");

    return (
        <div className="p-4 border rounded shadow-md bg-blue-100">
            <h1 className="text-lg font-bold text-blue-700">Component C</h1>
            
        </div>
    );
};

export default componentC;
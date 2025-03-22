import React, { useContext } from 'react';
import { CounterContext } from '../context/counterContext';

const componentB = () => {
    const { increment } = useContext(CounterContext);
    console.log("ComponentB re-rendered");

    return (
        <div className="p-4 border rounded shadow-md bg-green-100">
            <h1 className="text-lg font-bold text-green-700">Component B</h1>
            <button
                onClick={increment}
                className="mt-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
                Increment Counter
            </button>
        </div>
    );
};

export default componentB;
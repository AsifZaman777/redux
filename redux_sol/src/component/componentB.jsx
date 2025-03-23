import React from 'react';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/slices/counterSlice';

const componentB = () => {

    const dispatch = useDispatch();
    console.log('Component B rendered');

    return (
        <div className="bg-green-100 border p-4 rounded shadow-md">
            <h1 className="text-green-700 text-lg font-bold">Component B</h1>
            <button
                onClick={()=>dispatch(increment())}
                className="bg-green-500 rounded text-white hover:bg-green-600 mt-2 px-4 py-2 transition"
            >
                Increment Counter
            </button>
            <button
                onClick={()=>dispatch(decrement())}
                className="bg-red-500 rounded text-white hover:bg-green-600 mt-2 px-4 py-2 transition ml-2"
            >
                Decrement Counter
            </button>
        </div>
    );
};

export default componentB;
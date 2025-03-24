import React from 'react';

const componentB = () => {

    return (
        <div className="bg-green-100 border p-4 rounded shadow-md">
            <h1 className="text-green-700 text-lg font-bold">Component B</h1>
            <button
           
                className="bg-green-500 rounded text-white hover:bg-green-600 mt-2 px-4 py-2 transition"
            >
                Increment Counter
            </button>
            <button
          
                className="bg-red-500 rounded text-white hover:bg-green-600 mt-2 px-4 py-2 transition ml-2"
            >
                Decrement Counter
            </button>
        </div>
    );
};

export default componentB;
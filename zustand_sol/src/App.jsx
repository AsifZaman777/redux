import React from 'react';
import ComponentA from './component/componentA';
import ComponentB from './component/componentB';


const App = () => {
    return (
            <div className="bg-gray-100 p-5 text-center min-h-screen">
                <h1 className="bg-slate-300 m-5 p-2 rounded shadow text-2xl font-semibold">
                    Solution of Redux issue using Zustand
                </h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <ComponentA />
                    <ComponentB />
                </div>
            </div>
     

    );
};

export default App;
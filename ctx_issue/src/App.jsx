import React from 'react';
import CounterProvider from './context/counterContext';
import ComponentA from './component/componentA';
import ComponentB from './component/componentB';

const App = () => {
    return (
        <CounterProvider>
            <div className="text-center p-5 bg-gray-100 min-h-screen">
                <h1 className="text-2xl font-semibold m-5 bg-slate-300 p-2 rounded shadow">
                    CTX Menu Re-render Issue
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ComponentA />
                    <ComponentB />
                </div>
            </div>
        </CounterProvider>
    );
};

export default App;
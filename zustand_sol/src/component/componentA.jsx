import React, { use } from "react";
import useCounterStore from "../store/useCounterStore";

const componentA = () => {
  const count = useCounterStore((state) => state.count);
  console.log("Component A rendered");
  return (
    <div className="bg-blue-100 border p-4 rounded shadow-md">
      <h1 className="text-blue-700 text-lg font-bold">Component A</h1>
      <p className="text-blue-600">
        Counter: <span className="text-xl font-mono">{count}</span>
      </p>
    </div>
  );
};

export default componentA;

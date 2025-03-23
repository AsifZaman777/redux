import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

//create the store
const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export default store;
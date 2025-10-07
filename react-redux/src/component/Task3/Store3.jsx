import { applyMiddleware, compose, createStore } from "redux";
import CounterReducer3, { decrement, increment } from "./CounterReducer3";




const loggerMiddleware = (store3) => (next) => (action) =>{
    console.log("Dispatching :", action);
    const result = next(action);
    console.log("Next state :", store3.getState());
    return result;
}



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store3 = createStore(CounterReducer3,composeEnhancers(applyMiddleware(loggerMiddleware)));


export default store3;



store3.subscribe(()=> console.log("state changed :", store3.getState()));


store3.dispatch(increment());
store3.dispatch(increment());
store3.dispatch(decrement());
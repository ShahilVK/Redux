import { createStore } from "redux";
import RootReducer from "./RootReducer";

const store = createStore(RootReducer);


store.subscribe(()=> console.log("state:", store.getState()));

store.dispatch({type: "INCREMENT"});


store.dispatch({type: "SET_NAME", payload: "Shahil"});


store.dispatch({type: "DECREMENT"})


export default store;
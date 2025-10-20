
import { thunk } from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { reducer } from "./Thunkreducer";
import Fetchpost from "./Thunkfetch";






export const Thunkstore = createStore(reducer, applyMiddleware(thunk))

Thunkstore.subscribe(()=> console.log("updated state:", Thunkstore.getState()))
Thunkstore.dispatch(Fetchpost())



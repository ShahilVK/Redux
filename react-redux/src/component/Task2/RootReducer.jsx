import { combineReducers } from "redux";
import CounterReducer from "./CounterReducer";
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
    counter: CounterReducer,
    user: UserReducer
})

export default RootReducer;
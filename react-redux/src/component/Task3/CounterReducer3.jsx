



const CounterReducer3 = (state = {count : 0}, action)=>{
    switch(action.type){
        case "INCREMENT" :
            return {count: state.count+1};
        case "DECREMENT":
            return {count: state.count-1};
        default:
            return state;        
    }

}

export default CounterReducer3;



export const increment = ()=>{
    return {type: "INCREMENT"};
}

export const decrement = ()=>{
    return {type: "DECREMENT"};
}
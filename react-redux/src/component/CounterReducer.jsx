
const CounterReducer = (state = {count:0}, action)=>{
    switch(action.type){
        case "INCREMENT" :
            return{count : state.count+1};
        case "DECREMENT" :
            return{count : state.count-1};
        default :
            return state;        
    }

}

export const increment = ()=>({type:"INCREMENT"});
export const decrement = ()=> ({type:"DECREMENT"});

export default CounterReducer;
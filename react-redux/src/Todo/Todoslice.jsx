import {createSlice} from "@reduxjs/toolkit"




const initialState = {
    todos:[],
};

const todoslice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtoTodo: (state, action)=>{
            state.todos.push({id:Date.now(), text:action.payload});
        },
        deleteTodo: (state,action)=>{
            state.todos = state.todos.filter((todo)=> todo.id!== action.payload);
        },
        clearTodo: (state)=>{
            state.todos=[];
        }
    }


})






export const {addtoTodo, deleteTodo, clearTodo} = todoslice.actions;
export default todoslice.reducer;
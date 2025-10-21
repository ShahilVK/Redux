





// import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { addtoTodo, clearTodo, deleteTodo } from './Todo/Todoslice';

// const App = () => {

//   const [text, settext] = useState("");
//   const todos = useSelector((state)=> state.todos.todos);
//   const dispatch = useDispatch();


//   const handleadd = ()=>{
//     if(text.trim()!==""){
//       dispatch(addtoTodo(text));
//       settext("");
//     }
//   }

//   return (
//     <div>

//       <h1>todo list</h1>
//       <div>
//         <input type="text" value={text} onChange={(e)=>settext(e.target.value)} placeholder='enetr a todo' />
//         <button onClick={handleadd}>Add</button>
//       </div>
//       <ul>
//         {todos.map((todo)=>(
//           <li key={todo.id}>
//             {todo.text},
//             <button onClick={()=>dispatch(deleteTodo(todo.id))}>delete</button>
//           </li>
//         ))}
//       </ul>
//       {todos.length >0 &&(
//         <button onClick={()=> dispatch(clearTodo())}>clearall</button>
//       )}
//     </div>
//   )
// }

// export default App









// src/App.jsx

import React from "react";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const count = useSelector((state) => state.count); 
  const dispatch = useDispatch(); 

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter Example</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
}

export default App;











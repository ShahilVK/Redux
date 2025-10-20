





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








import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Fetchpost from "./Thunk/Thunkfetch";

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(Fetchpost());
  }, [dispatch]);

  return (
    <div>
      <h1>Redux Thunk Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {data.map((title, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;





















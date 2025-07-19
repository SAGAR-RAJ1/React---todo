import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



const todo =()=>{

    const [todos, settodos] = useState([{task : "sample task", id : uuidv4()}])
    const [newTodo, setnewTodo] = useState("")
    
    function AddTodo () {
        settodos([...todos,{task:newTodo,id:uuidv4()}])
        console.log("your word is ",newTodo);
        console.log(todos)
    }
    function updateTodovalue (event){
        setnewTodo(event.target.value)
    }
    return (
      <div>
        <input type="text" placeholder="Add a task" value={newTodo} onChange={updateTodovalue}/>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={AddTodo}>Add</button>
        <br /><br /><br />
        <hr />
      <h2>Tasks to do</h2>
      <ul>
         {todos.map((todo) => {
         return <li>{todo.task}</li>
         })}
      </ul>
      </div>
    )
}

export default todo;
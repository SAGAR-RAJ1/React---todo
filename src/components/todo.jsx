import { useState } from "react";


const todo =()=>{

    const [todos, settodos] = useState(["sample task"])
    const [newTodo, setnewTodo] = useState("")
    
    function AddTodo () {
        settodos([...todos,newTodo])
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
         return <li>{todo}</li>
         })}
      </ul>
      </div>
    )
}

export default todo;
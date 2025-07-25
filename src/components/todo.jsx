import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



const todo =()=>{

    const [todos, settodos] = useState([{task : "sample task", id : uuidv4()}])
    const [newTodo, setnewTodo] = useState("")
    
    function AddTodo () {
       settodos((prevTodo)=>{
        return [...prevTodo,{task:newTodo,id:uuidv4()}]
       })
    }
    function updateTodovalue (event){
        setnewTodo(event.target.value)
    }
    function deleteTodo(id){
    //    console.log(id)
    let copyArray = todos.filter((todo)=>todo.id != id)
    settodos(copyArray)
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
         return <li key={todo.id}>
            <span>{todo.task}</span>&nbsp;&nbsp;&nbsp;
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
            <br /><br />
            </li>
         })}
      </ul>
      </div>
    )
}

export default todo;
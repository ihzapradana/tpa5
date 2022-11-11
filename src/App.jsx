import { useState } from 'react'
import ToDoList from './components/ToDoList'

function App() {
  const [todo, setTodo] = useState("")


  const todos = [
    {item: "Belajar"},
    {item: "MNDI"}
  ]

const change = event => {
  setTodo(event.target.value)
}

function addTodo() {
  return(
    todos.push({item : todo})
  )
}

  return (
    <div>
        <h1>What's plan for today?</h1>
        <div>
          <input type="text" placeholder='what to do' onChange={change} value={todo}/>
          <button style={{backgroundColor:"#6558F5"}} onClick={addTodo}>Add</button> <br />
        </div>
        <div style={{display:"flex", gap:"5px"}}>
          <button style={{backgroundColor:"#1AAE9F", color:"white"}} >ALL</button>
          <button style={{backgroundColor:"#7C8B99", color:"white"}}>ACTIVE</button>
          <button style={{backgroundColor:"#7C8B99", color:"white"}}>COMPLETED</button>
        </div>
        <div style={{width:"250px"}}>
          {todos.map((todo) => <ToDoList key={todo.id} name={todo.item}/>)}
        </div>
    </div>
  )
}

export default App

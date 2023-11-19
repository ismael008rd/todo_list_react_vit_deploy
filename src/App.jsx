import { useState } from 'react'
import Todo from '../componentes/todo'
import TodoForm from '../componentes/TodoForm'
import Filter from '../componentes/filter'
import Search from '../componentes/Search'
import './App.css'



function App() {
  const [todos, setTodos] = useState(
   [{ id:1,
    text: 'criar funcionalidade x no sistema',
    category:'trabalho',
    iscompleted: false},

   { id:2,
    text: 'criar funcionalidade x no sistema',
    category:'pessoal',
    iscompleted: false},

   { id:3,
    text: 'criar funcionalidade x no sistema',
    category:'estudos',
    iscompleted: false},]
  )

  const [search, setSearch]= useState('')

  const addTodo=(text,category)=>{
       const newTodos=[...todos,{
        id: Math.floor(Math.random()*1000),
        text,
        category,
        iscompleted:false,
       }]

       setTodos(newTodos)
  }

  const removeTodo= (id)=>{
    const newTodos = [...todos]
    const filteredTodos=newTodos.filter(todo=>todo.id !== id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo= (id)=>{
    const newTodos=[...todos]
    newTodos.map((todo)=> todo.id ===id ? todo.iscompleted = !todo.iscompleted: todo)
    setTodos(newTodos)
  }

  return <div className='app'>
    <h1>Lista de Tarefas</h1>

    <Search search={search} setSearch={setSearch}/>
    <Filter/>
    <div className="todo-list">
      {todos.filter((todo)=>todo.text.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map((todo)=>(
       <Todo  key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
   </div>
  
}

export default App

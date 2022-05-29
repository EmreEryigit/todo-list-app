import React, {useState} from 'react'

function Todos(props) {
    const [newTodo, setNewTodo]  = useState("")
    const submitHandler = (e) => {
        e.preventDefault()
        props.addTodo([...props.todos, newTodo])
    }
   return (
    <div>
    
    <header className='header'>
    <h1>todos</h1>
    <form onSubmit={submitHandler} >
          
          <input className='new-todo' placeholder='What needs to be done?' value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      </form>
    </header>
    
     
    </div>
  )
}

export default Todos

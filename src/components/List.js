import React, { useState} from 'react'
import TodoList from './TodoList'
import Todos from './Todos'

function List() {
    
    const [todos, setTodos ] = useState([])
    const [filter, setFilter] = useState(0)
	
	

    
  return (
    <React.Fragment>
      <Todos addTodo={setTodos} todos={todos} />
      <TodoList  filter={filter} todos={todos} setTodos={setTodos} />
      
     
      <footer className="footer">
		<span className="todo-count">
			<strong>{todos.length}</strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a onClick={() => setFilter(0)} className="selected">All</a>
			</li>
			<li>
				<a onClick={() => setFilter(1)} >Active</a>
			</li>
			<li>
				<a onClick={() => setFilter(2)} > Completed</a>
			</li>
		</ul>

		<button  className="clear-completed">
			Clear completed
		</button>
	</footer>
     </React.Fragment>
  )
}

export default List

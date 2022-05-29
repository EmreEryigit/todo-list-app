import React, {useState} from 'react'
import TodoList from './TodoList'
import Todos from './Todos'

function List() {
    const [todos, setTodos ] = useState([])
  return (
    <React.Fragment>
      <Todos addTodo={setTodos} todos={todos} />
      <TodoList todos={todos} />
      
     
      <footer class="footer">
		<span class="todo-count">
			<strong>{todos.length}</strong>
			items left
		</span>

		<ul class="filters">
			<li>
				
			</li>
			<li>
				
			</li>
			<li>
				
			</li>
		</ul>

		<button class="clear-completed">
			Clear completed
		</button>
	</footer>
     </React.Fragment>
  )
}

export default List

import React from 'react'

function TodoList(props) {
  return (
    <div>
    <section className="main">
        <ul className='todo-list'>
      {props.todos.map(todo => <li>
        <div class="view">
					<input class="toggle" type="checkbox" />
					<label>{todo}</label>
					<button class="destroy"></button>
				</div>
      </li>)}
        </ul>
    </section>
       
    </div>
  )
}

export default TodoList
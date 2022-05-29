
import React from "react";
import Items from "./Items";
function TodoList(props) {
    
   
    
  return (
    <div>
      <section className="main">
        <ul className="todo-list">
          {props.todos.map((todo, i) => (
            <Items
                filter={props.filter} 
              setTodos={props.setTodos}
              key={i}
              todo={todo}
              todos={props.todos}
              
              
            >
           
            </Items>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default TodoList;

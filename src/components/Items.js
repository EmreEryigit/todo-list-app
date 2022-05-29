import React, {useState} from "react";

function Items(props) {
    const [isVisible , setIsVisible] = useState(false)
    
    const destroy = () => {
        props.setTodos(props.todos.filter(item => item !== props.todo))
    }

    
    if(isVisible  && props.filter === 1){
        return
    }
    if(!isVisible && props.filter === 2) {
        return
    }
    
      
   
    
    
  


    return (<div key={props.id}>
      <li className={isVisible ? "completed" : undefined}>
        <div className="view">
          <input className="toggle"  type="checkbox" onChange={() => setIsVisible(!isVisible)} id={props.i}  />
          
          <label >{props.todo}</label>
          <button className="destroy" property="text" id={props.id} onClick={destroy}></button>
        </div>
      </li>
    </div>)
  
    }

export default Items;

import React from 'react'

function Mytodo({ toda, todo , setTodo}){
  
  function deletTodo(){
    setTodo(todo.filter((el)=>
      el.id !== toda.id
    ))
    
    
  }

  return(
    <div className="todo">
      
          
            <li>
              <h2>{toda.text}</h2>
              <h3>{toda.priority}</h3>
              <div className="todoClose">
                <button onClick = {deletTodo} type="submit">Delete</button>
              </div>
            </li>        
      
    </div>
  );

}

export default Mytodo;
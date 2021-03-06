import React from 'react'
import Myform from './Myform';
import Mytodo from './Mytodo';

function Main({inputText,setInputText,setTodo,todo}){
  return(
    <div className='fold1'>
      <div className="afold1">
        <div className='Title'>
          <h1>TO-DO LIST</h1>
        </div>        
        
        <Myform setInputText={setInputText} inputText = {inputText} setTodo = {setTodo} todo = {todo}/>
        
        <div className="bfold1">
        <div className="atodo">
          <ul className="TodoList">
          {todo.map((toda) => (
            <Mytodo setTodo = {setTodo} toda= {toda} todo={todo}/>
          ))}
          </ul>
          </div>
        </div>
      </div>      
    </div>
  );
}

export default Main;
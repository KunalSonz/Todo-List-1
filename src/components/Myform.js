import React from 'react'

function Myform({inputText,setInputText,setTodo,todo}){

  function inputFormText(){
    const txt = document.querySelector('.finput').value;
    
    console.log(txt);
    setInputText(txt);
  } 

  

  const submitTodo = (e) =>{    
    e.preventDefault();
    const prior = document.getElementById('prior').value;
    console.log(prior)
    setTodo([
      ...todo,{text:inputText,id:todo.length,priority:prior}
    ]); 
    setInputText("");
  }


  return(
    <div className="Form1">
      <form className = "aform">
      <input value ={inputText} onChange={inputFormText} type="text" className="finput" name="fname" />      
      

      <select name="Priorities" id="prior" title="Priorities">
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button type = "submit" className="todoAdd" onClick={submitTodo}>ADD</button>
      </form>
    </div>
  );
}

export default Myform;
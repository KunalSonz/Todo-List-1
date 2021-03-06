import React, { useState } from 'react'

import './App.css';
//components
import Nav from './components/Nav';
import Fut from './components/Fut';
import Main from './components/Main';
import Myform from './components/Myform';

function App() {
  const [inputText,setInputText] = useState("")
  const [todo,setTodo] = useState([])
  
  return (
    <div className="App">
      <Nav/>
      <Main setInputText = {setInputText} inputText = {inputText} todo = {todo} setTodo = {setTodo}/>
      <Fut/>
    </div>
  );
}

export default App;

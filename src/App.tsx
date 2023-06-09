import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './Component/InputField';
import { Todo } from './Data/data';
import Cards from './Component/Cards';

const App:React.FC=()=> {
  const [todo,setTodo]=useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([]);

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);
      setTodo("")
    }
  }

  console.log(3455,todos)
  return (
    <div className="App">
     <span className='heading' >Taskify</span>
     <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
     <Cards todos={todos} setTodos={setTodos}/>

     

    </div>
  );
}

export default App;

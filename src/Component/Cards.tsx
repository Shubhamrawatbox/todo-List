import React from 'react'
import { Todo } from '../Data/data';
import SingleCard from './SingleCard';

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const Cards:React.FC<Props> =({todos,setTodos}) => {
  // console.log(todos)
  return (
    <div className='todos'>
      {
        todos.map((todoItem)=>(
          <SingleCard todoItem={todoItem} key={todoItem.id} todos={todos} setTodos={setTodos} />
        ))
      }
    </div>
  )
}

export default Cards
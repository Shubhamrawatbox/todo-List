import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../Data/data";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

interface Props {
  todoItem: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleCard: React.FC<Props> = ({ todoItem, todos, setTodos }) => {
  const [edit, setEdit] = useState<Boolean>(false);
  const [editValue, setEditValue] = useState<string>(todoItem.todo);
  const inputRef=useRef<HTMLInputElement>(null);

  const handleDone = (id: Number) => {
    setTodos(
      todos.map((singleTodo) =>
        singleTodo.id === id
          ? { ...singleTodo, isDone: !singleTodo.isDone }
          : singleTodo
      )
    );
  };
  const handleDelete = (id: Number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit=(e:React.FormEvent,id:Number)=>{
    e.preventDefault();
    setTodos(todos.map((todo)=>todo.id == id ? {...todo,todo:editValue}: todo))
    setEdit(false)
  }

  useEffect(()=>{
    inputRef.current?.focus();
  },[edit])
  return (
    <form className="singleCard" onSubmit={(e)=>handleEdit(e,todoItem.id)}>
      {edit ? (
        <input className="edit_input" ref={inputRef} value={editValue} onChange={(e)=>setEditValue(e.target.value)} />
      ) : todoItem.isDone ? (
        <s>{todoItem.todo}</s>
      ) : (
        <span className="todo-text">{todoItem.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todoItem.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todoItem.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todoItem.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleCard;

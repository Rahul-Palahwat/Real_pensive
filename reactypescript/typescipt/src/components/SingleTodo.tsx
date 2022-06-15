import React, { useEffect, useRef, useState } from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import { Todo } from '../model';
import './styles.css'
import TodoList from './TodoList';

type Props={
    todo:Todo;
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo= (props:Props) => {
    const {todo,todos,setTodos}=props;


    // this is to check if edit mode is on or not 
    const [edit,setEdit]=useState<boolean>(false);
    // this is to edit the text 
    const [editTodo,setEditTodo]=useState<string>(todo.todo);



    const handleDone=(id:number)=>{
        setTodos(todos.map((todo)=>todo.id===id?{...todo,isDone:!todo.isDone}:todo))
    }

    const handleEdit=(e:React.FormEvent, id: number)=>{
        e.preventDefault();
        setTodos(todos.map((todo)=>(
            todo.id===id?{...todo,todo:editTodo}:todo)
        ));
        setEdit(false)
    };

    const inputRef=useRef<HTMLInputElement>(null);

    useEffect(()=>{
        inputRef.current?.focus();
    },[edit]);

    const handleDelete=(id:number)=>{
        setTodos(todos.filter((todo)=>todo.id!==id));
    }
  return (
    <form action="" className='todos__single' onSubmit={(e)=>handleEdit(e,todo.id)}>
            {edit ?(
                <input ref={inputRef} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} className="todos__single--text"/>
                
            ):todo.isDone ? (
                <s className="todos__single--text">{todo.todo}</s>

            ):(
                <span className="todos__single--text">{todo.todo}</span>

            )
        }
        <div>
            <span className="icons" onClick={()=>{
                if(!edit && !todo.isDone){
                    setEdit(!edit);
                }
            }}>
                <AiFillEdit/>
            </span>
            <span className="icons" onClick={()=>handleDelete(todo.id)}>
                <AiFillDelete/>
            </span>
            <span className="icons" onClick={()=>handleDone(todo.id)}>
                <MdDone/>
            </span>
        </div>
    </form>
  )
}

export default SingleTodo

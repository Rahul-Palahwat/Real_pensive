// rafce 
import React, { useRef } from 'react'
import './styles.css';

interface Props{
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent)=> void;
}

const InputField:React.FC<Props>=(props)=> {
    const {todo,setTodo,handleAdd}=props;
    const inputRef=useRef<HTMLInputElement>(null)
  return (
    <form action="" className="input" onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur();
        }}>
        <input ref={inputRef} type="text" className="input__box" placeholder='Enter a task' value={todo}
        onChange={
            (e)=>setTodo(e.target.value)
        }/>
        <button className="input_submit" type='submit'>
            Go
        </button>
    </form>
  )
}

export default InputField

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

    // this input ref is used for changing the background color 
    const inputRef=useRef<HTMLInputElement>(null)


    // let onChange=(e:React.FormEvent)=>{
    //     e.preventDefault();
    //     console.log(e.target);
    //     // setTodo({
    //     //     e.target.value
    //     //     // ...todo,[e.target.name]: e.target.value
    //     //   })
    // }


  return (
    <form action="" className="input" onSubmit={(e)=>{
        handleAdd(e);
        inputRef.current?.blur();
        }}>
        <input ref={inputRef} type="text" className="input__box" placeholder='Enter a task' value={todo}
        onChange={
            (e)=>setTodo(e.target.value)
        }
        // onChange={onChange}
        // name="input"
        />
        <button className="input_submit" type='submit'>
            Go
        </button>
    </form>
  )
}

export default InputField

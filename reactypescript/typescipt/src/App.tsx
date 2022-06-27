import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';


// let name: string;
// // number cant be assignned as it is declared as string 
// // name=5;
// name="Piyush";

// // let age: number;

// // to have multiple type values we will add or operator
// let age:number|string;
// age=21;

// // to have any value inside it give it any type 
// let sum:any;
// sum=true;
// // or this is recomonded always sowe have to use this and we can also use any also
// let min: unknown;


// let isStudent: boolean;


// // array of strings 
// let hobbies: string[];

// // this is tuple 
// // here we can use indexing also 
// let role:[number,string];
// // as number and string we are supposed to give 
// // role=[5,5];
// role=[5,"Rahul"];


// // now objects 

// // this is also valid but we dont use this 
// // let person: Object;

// // this is type or interface keyword

// // type Person={
// //   name:string;
// //   age:number;
// // }


// // to make age optional we will add qn mark just before :

// // type and interface are same thing 

// // type Person={
// //   name:string;
// //   age?:number;
// // }
// interface Person{
//   name:string;
//   age?:number;
// }

// interface Guy extends Person{
//   profession:string;
// }

// type x={
//   a:string;
//   b:number;
// }
// type y=x&{
//   c:string;
//   d:number;
// }

// // this is also correct way 
// // let person:Person={
// //   name:"Ram",
// //   age:25
// // };
// let person:Person;
// person={name:"Tarun",age:50};

// // to create the object array 
// let lotsofpeople:Person[];



// // Now function part 
// function printName(name: string){
//   console.log(name);
// }
// printName("Jaddu");

// // function types 
// // let printValue:Function;

// // function name--- parameters it take--- return type 
// // let printValue:(name:string)=>void;
// // let printValue:(name:string)=>number;
// // if we dont know the return type then we use never 
// let printValue:(name:string)=>never;



const App:React.FC =() => {

  // const [todo,setTodo]=useState<string|number>("");
  // const [todo,setTodo]=useState<string[]>("");
  const [todo,setTodo]=useState<string>("");

  const [todos, setTodos]=useState<Todo[]>([]);

  const [completedTodos ,setCompletedTodos]=useState<Todo[]>([])

  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      // if something is filled into to do than this will add data to todo 
      setTodos([...todos,{id:Date.now(), todo, isDone:false}])
    }
    setTodo("");
    
  }
  console.log(todos);

  return (
    <DragDropContext onDragEnd={()=>{}}>

    
    <div className="App">
    {/* <div className="container">
    <div className="App">Hello world! {name}</div>
    <div className="App">Hello world! {role}</div>
    <div className="App">Hello world! {role[1]}</div>
    <div className="App">Hello world! {person.name}</div>
    </div> */}

    <span className="heading">Taskify</span>
    <InputField  todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos}/>
    {/* {todos.map(t=><li>{t.todo}</li>)} */}
    </div>
    </DragDropContext>
   
  );
}

export default App;

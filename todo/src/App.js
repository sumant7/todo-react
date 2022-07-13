
import Header from './Components/Header'
import {Footer}  from './Components/Footer';
import {Todos} from './Components/Todos';
import { AddTodo } from './Components/AddTodo';
import { About } from './Components/About';
import React,{useState, useEffect} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodo
  if(localStorage.getItem("todos")===null)
  {
    initTodo =[]
  }
  else
  {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  } 


  const onDelete= (todo)=>{
    //simply deleteing won't work, use Useset

    setTodos(todos.filter((e)=>{ //e represents elemets of an array
        return e!==todo //return elements which are not todo
    }))

    localStorage.setItem("todos",JSON.stringify(todos))
  }

  const addTodo=(title,desc)=>{
    let sno
    if(todos.length===0) sno=0;
    else sno=todos[todos.length -1].sno + 1
    const myTodo= {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
  }

  //the setTodos function is used for changing the state of todos array
  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])
  return (
    <>
    <BrowserRouter>
      <Header title="Todo List" search ={false}/>
      <Routes>
      <Route path="/" element={<>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      </>
      }/>     
      <Route path="/about" element={<About/>}/>         
      </Routes>

      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

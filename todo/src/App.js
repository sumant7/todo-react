import './App.css';
import Header from './Components/Header'
import {Footer}  from './Components/Footer';
import {Todos} from './Components/Todos';
import React,{useState} from 'react';

function App() {
  const onDelete= (todo)=>{
    console.log("Delete", todo)
    //simply deleteing won't work, use Useset

    setTodos(todos.filter((e)=>{ //e represents elemets of an array
        return e!==todo //return elements which are not todo
    }))
  }
  //the setTodos function is used for changing the state of todos array
  const [todos, setTodos] = useState([
    {
      sno:1,
      title: "Watch Jujutsu Kaisen",
      desc: "Complete the series"
    },
    {
      sno:2,
      title: "Watch Attack on Titan",
      desc: "Complete the series"
    },
    {
      sno:3,
      title: "Watch SpyxFamily",
      desc: "Complete the series"
    },
  ])
  return (
    <>
      <Header title="Todo List" search ={false}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;

import React from 'react'
import { TodoItem } from './TodoItem'


export const Todos = (props) => {
  let style ={
    minHeight: "50vh"
  }
  return (
    <div className='container my-3' style={style}>
      <h3 className=' my-2'>Todo List</h3>
      {props.todos.length===0 ? "No Todos yet!":
      props.todos.map((todo)=>{
        return( 
        <>
        <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete}/> <hr/>
        </>)
      })}
      
      </div>
  )
}

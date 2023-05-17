import React from 'react'
import '../App.css';
const ToDoList = (props) => {
    
  return (
    <>
        <button className='crossBtn' onClick={()=>{
            props.onSelect(props.id)
        }}>X</button>
        <li>{props.text}</li>

    
    </>
  )
}

export default ToDoList;
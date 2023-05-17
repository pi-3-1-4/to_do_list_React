import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import ToDoList from './components/ToDoList';

function App() {
  const [inputList, setInputList] = useState("");
  const [item, setItem] = useState([]);
  const itemEvent = (event) =>{
    setInputList(event.target.value);
  }
  const listOfItems = () =>{
    setItem((oldItems) =>{
      return [...oldItems,inputList]
    })
    setInputList('');
  }
  const deleteItem = (popElement) =>{
    setItem((oldItems)=>{
      return oldItems.filter((element,index)=>{
        return popElement!==index 
      })
    })

}
  return(
    <>
      <div className='mainDiv'>
        <div className='centerDiv'>
          <br/>
          <h1>ToDo List</h1>
          <input type='text' placeholder='Enter item' value = {inputList} onChange={itemEvent}/>
          <button onClick={listOfItems}> + </button>
          <ol>
            {
            item.map((element,index)=>{
              return <ToDoList 
              text={element} 
              key={index} 
              id={index}
              onSelect={deleteItem} />
            })
            }
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;

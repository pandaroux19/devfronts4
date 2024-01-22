import React, {ReactElement, useState} from 'react';
import {t, addTask} from '../Data/data.js';
import Task from '../Task/index.js'
import styles from '../App/App.module.css';

export default function TodoList() {
  const [isTask, setTask] = useState(t);
  
  
  function handleSubmit(i){
      alert(i.value)
      addTask(i)
      setTask(t)
    console.log(isTask)
  }
    return (
        <div>
            <ul>
                {t.map(p => <Task key={p.id} {...p}/>)}
            </ul>
            <form action="#">
                <input type="text" name="text" id="text"/>
                <button type="submit" onClick={()=>handleSubmit(document.getElementById("text"))}>OK</button>
            </form>
        </div>
    );
}
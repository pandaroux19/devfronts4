import React, {ReactElement, useState} from 'react';
import {t, addTask} from '../Data/data.js';
import Task from '../Task/index.js'
import styles from '../App/App.module.css';

export default function TodoList() {
  const [isTask, setTask] = useState(t);
  console.log(isTask)

  function handleSubmit(event, i){
    event.preventDefault();
    alert(i.value)
    addTask(i)
    console.log(isTask)
  }
    return (
        <div>
            <ul>
                {t.map(p => <Task key={p.id} {...p}/>)}
            </ul>
            <form action="#">
                <input type="text" name="text" id="text"/>
                <input type="submit" value="OK" onClick={()=>handleSubmit(event, document.getElementById("text"))}/>
            </form>
        </div>
    );
}
import React, {ReactElement, useState} from 'react';
import {t, addTask} from '../Data/data.js';
import Task from '../Task/index.js'
import styles from '../App/App.module.css';

export default function TodoList() {
  const [task, setTask] = useState("");
  const [tab, setTab] = useState(t);
  console.log(tab)

  function handleChange(event){
    setTask(event.target.value);
  }
  
  
  function handleSubmit(event){
    event.preventDefault();
      alert(task)
      addTask(task);
    setTab([...t])
      console.log(tab)
    console.log(task)
  }
    return (
        <div>
            <ul>
                {tab.map(p => <Task key={p.id} {...p}/>)}
            </ul>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task</label>
                <input type="text" name="text" id="text" value={task} onChange={handleChange}/>
                <button type="submit">OK</button>
            </form>
        </div>
    );
}
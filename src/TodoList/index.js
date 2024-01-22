import React, {ReactElement, useState} from 'react';
import {t, addTask} from '../Data/data.js';
import Task from '../Task/index.js'
import styles from '../App/App.module.css';

export default function TodoList(props) {
  const [isBarre, setBarre] = useState(false);
  const [isTask, setTask] = useState(false);

    function click(e){
        console.log(e.name);
      }
      function barrler(){
        // this.classList.contains(styles.barrer) ? this.classList.remove(styles.barrer) : this.classList.add(styles.barrer)
        setBarre(!isBarre);
    
      }
    return (
        <div>
            <ul>
                {t.map(p => <Task key={p.id} {...p}/>)}
            </ul>
        </div>
    );
}
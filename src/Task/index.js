import React, {ReactElement, useState} from 'react';
import styles from '../App/App.module.css';

export default function Task(props) {
  const [isBarre, setBarre] = useState(false);

    function click(e){
        console.log(e.name);
      }
      function barrler(){
        // this.classList.contains(styles.barrer) ? this.classList.remove(styles.barrer) : this.classList.add(styles.barrer)
        setBarre(!isBarre);
    
      }
    return (
        <div>
            <li onDoubleClick={()=>click(props)} onClick={()=>barrler()} className={isBarre ? styles.barrer : null}>{props.name}</li>
        </div>
    );
}
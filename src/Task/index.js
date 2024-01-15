import React, {ReactElement} from 'react';

export default function Task(props) {
    function click(e){
        console.log(e.name);
      }
      function barrler(){
        this.classList.contains(styles.barrer) ? this.classList.remove(styles.barrer) : this.classList.add(styles.barrer)
    
      }
    return (
        <div>
            <li key={props.id} onDoubleClick={()=>click(props)} onClick={()=>barrler()}>{props.name}</li>
        </div>
    );
}
import React, {ReactElement, useState} from 'react';

export default function Task(props) {
 const [bourlet,setBourlet] = useState(0)

    function click(e){
        console.log(e.name);
      }
      function barrler(){
        setBourlet(bourlet="barrer")    
      }
    return (
        <div>
            <li className={bourlet} key={props.id} onDoubleClick={()=>click(props)} onClick={()=>barrler()}>{props.name}</li>
        </div>
    );
}
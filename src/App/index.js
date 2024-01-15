import {t} from '../Data/data.js';
import '../App.css';
import styles from './App.module.css';
import Task from '../Task/index.js'

function App() {
  let toto="Hello Toto ! !"
  // document.querySelectorAll("li").forEach(element => {
  //   element.addEventListener("click",()=>{
  //     console.log(element.innerText)
  //   })
  // });
  function click(e){
    console.log(e.name);
  }
  return (
    <div className="App">
      Hello !!
      <h1>{toto}</h1>
      <ul>
        {t.map(p => <li key={p.id} onDoubleClick={()=>click(p)}>{p.name}</li>)}
        <Task/>
      </ul>
      <h2 className={styles.title}>Test</h2>
    </div>
  );
}




export default App;

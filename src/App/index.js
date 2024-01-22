import '../App.css';
import styles from './App.module.css';
import TodoList from '../TodoList/index.js'

function App() {
  let toto="Hello Toto ! !"
  // document.querySelectorAll("li").forEach(element => {
  //   element.addEventListener("click",()=>{
  //     console.log(element.innerText)
  //   })
  // });

  function handleSubmit(i){
    alert(i.value)
    addTask(i)
  }

  return (
    <div className="App">
      Hello !!
      <h1>{toto}</h1>
      <TodoList/> {/*iteration*/}
      <form action="#">
        <input type="text" name="text" id="text"/>
        <input type="submit" value="OK" onClick={()=>handleSubmit(document.getElementById("text"))}/>
      </form>
      <h2 className={styles.title}>Test</h2>
    </div>
  );
}





export default App;

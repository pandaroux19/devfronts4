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

  return (
    <div className="App">
      Hello !!
      <h1>{toto}</h1>
      <TodoList/> {/*iteration, tous les champs de l'objet*/}
      <h2 className={styles.title}>Test</h2>
    </div>
  );
}





export default App;

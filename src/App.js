import {t} from './Data/data.js';
import './App.css';

function App() {
  let toto="Hello Toto ! !"
  let tableau = t.map(p => <li key={p.id}>{p.name}</li>)
 
  return (
    <div className="App">
      Hello !!
      <h1>{toto}</h1>

      <ul>
{tableau}
      </ul>

    </div>

    
  );
}




export default App;

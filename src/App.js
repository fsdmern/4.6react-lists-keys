import './App.css';
import NumberList from './components/NumberList';


function App() {
  const numbers = [1,2,3,4,5]
   
  return (
    <div>
      <h1>Learning React Lists and Keys</h1>
      <NumberList numbers={numbers}/>
     
    </div>
  );
}

export default App;

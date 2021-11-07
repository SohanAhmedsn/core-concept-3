import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
     <Counter></Counter>
    
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>Count: {count}</h1>
       <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}

// function counterAccount() {
//   const [count, setCount] = useState(0);
//   const handleAttachMomment = () => {
//     const attackCount = count + 1;
//     setCount(attackCount);
//   }

//   return (
//     <div>
//       <h1>Counter Attack: </h1>
//       <button onClick={handleAttachMomment}>Attack Momment</button>
//     </div>
//   )
// }
export default App;

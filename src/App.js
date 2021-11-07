import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  return (
    <div className="App">
      <h2>Module No: 45_7-Advance state, component state hook and set state Method</h2>
     <Counter></Counter>
    
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  
  return (
    <div>
      <h1>Count: {count}</h1>
       <button onClick={handleIncrease}>Increase</button>
       <button onClick={handleDecrease}>Decrease</button>
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









// const handleIncrease = () => {
//   const newCount = count + 1;
//   setCount(newCount);

//   // const handleIncrease = () => setCount(count + 1)
// }
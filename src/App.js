import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';



function App() {
  return (
    <div className="App">
      <h2>Module No: 45_7-Advance state, component state hook and set state Method</h2>
      <h3>45-8 (Advanced) Load Dynamic Data, Api Call Useeffect Integrate State</h3>
     <Counter></Counter>
     <ExternalUsers></ExternalUsers>
    
    </div>
  );
}


function ExternalUsers () {
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  }, []) 

  return (
    <div>
      <h3>External Users</h3>
      {
        users.map(user =><User name={user.name} email={user.email} ></User>)
      }
    </div>
  )
}

function User(props) {
  return (
    <div className="product">
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
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
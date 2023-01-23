import logo from './logo.svg';
import './App.css';
import LoginPage from './Pages/LoginPage/LoginPage';
import { useState } from 'react';
import Homepage from './Pages/Homepage/Homepage';

function App() {
  const [flag , setFlag] = useState(0)
  function toggleFlag(val){
    setFlag(val)
  }
  return (
    <div className="App">
        {flag === 0 && <LoginPage toggleFlag={toggleFlag}/>}
        {flag === 1 && <Homepage/>}
    </div>
  );
}

export default App;

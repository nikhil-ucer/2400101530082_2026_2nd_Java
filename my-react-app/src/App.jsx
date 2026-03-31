import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './Components/Demo'


function App() {

  function callfun(){
            alert("Function Call");
        }
  function callApple(){
            alert("You Clicked on Apple Button");
        }
  function callBanana(){
            alert("You Clicked on Apple Button");
        }            

  return (
    <div>
      <h1>Welcome to New Project</h1>
      <button onClick={callfun}>OK</button>
      <button onClick={callApple}>Apple</button>
      <button onClick={callBanana}>Banana</button>
      

    </div>
  )
}



export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './Components/Demo'


function App() {

  return (
    <div>
      <h1>Hello! My name is Nikhil</h1>
      <Employee></Employee>
      <Test></Test>
      <Demo></Demo>
      

    </div>
  )
}

function Employee(){
  return(
    <h1>Nikhil Barua</h1>
  )
}

function Test(){
  return(
    <h1>Hello This is second component</h1>
  )
}




export default App

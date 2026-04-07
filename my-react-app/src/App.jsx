import './App.css'

function App() {
  let data = "Demo"
  function updata(){
    data = "Example"
    alert(data)
  }

 // facing problem for variable state updatation => so we use react state hooks
  return (
    <div>
      <h1>Example of arrow function</h1>
      <h1>{data}</h1>
      <button onClick={updata}>Click to Update</button>
    </div>
  )
}



export default App

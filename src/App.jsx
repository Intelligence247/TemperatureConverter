import { useState } from 'react'
import './App.css'

function App() {
  const [ans, setAns] = useState('')
  const [selects, setSelects] = useState(0)
  const [inputs, setInputs] = useState(0)
console.log(selects)
  return (
    <div className="body">
<main>
<div className="topW">
<label htmlFor="inputTemp">
  <p>Degrees</p>
  <input type="number" 
  placeholder='Enter Temperature...'
  onChange={(e)=> setInputs(e.target.value)}
   />
</label>
<div className="selects">
  <p>Type</p>
  <select name=""
  onChange={(e)=> setSelects(e.target.value)}>
     <option value="fahrenheit">
      Fahrenheit
    </option>

    <option value="celsius">
      Celsius
    </option>
   
  </select>
  </div>
  <button
  onClick={()=>setAns(selects==='celsius'?(((inputs*9)+160)/5) : (((inputs-32)*5)/9))}
  >Convert</button>
  </div>
  <div className="ansW ">
    <p>Result</p>
    <div className="resultW">
    <div className="final_ans">{inputs.length === 0 ?'': ans }000</div>
    <img src={ans.length===0? '' : selects === 'celsius' ? "/media/celsius.png" : "/media/fahrent2.png"}/>
    </div>
  </div>
</main>

    </div>
  )
}

export default App

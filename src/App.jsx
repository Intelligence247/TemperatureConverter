import { useState } from 'react'
import './App.css'

function App() {
  const [ans, setAns] = useState('')
  const [selects, setSelects] = useState(0)
  const [inputs, setInputs] = useState('')
  const [img, setImg] = useState('')
console.log(inputs.length)
console.log(ans.length)
const handselects=(e)=>{
  setSelects(e.target.value)
  
}
const handleclicks=()=>{
  setAns(`${selects==='celsius'?(((inputs*9)+160)/5) : (((inputs-32)*5)/9)}`)
  setImg(selects === 'celsius' ? "/media/fahrent2.png" : "/media/celsius.png")
}
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
   <div className={`${inputs.length>0?'valid':'invalid'}`}>Inputbox must not be empty</div>
</label>
<div className="selects">
  <p>Type</p>
  <select name=""
  onChange={(e)=>handselects(e)}>
     <option value="fahrenheit">
      Fahrenheit
    </option>

    <option value="celsius">
      Celsius
    </option>
   
  </select>
  </div>
  <button
  onClick={()=>handleclicks()}
  >Convert</button>
  </div>
  <div className="ansW ">
    <p>Result</p>
    <div className="resultW">
    <div className="final_ans">{inputs.length < 1 ?'': ans }</div>
    <img src={img}
    className={`${inputs.length<1?'hidden':'block'}`}/>
    </div>
  </div>
</main>

    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [ans, setAns] = useState('')
  const [selects, setSelects] = useState(0)
  const [selects2, setSelects2] = useState(0)
  const [inputs, setInputs] = useState('')
  const [img, setImg] = useState('')
  const [selectValid, setSelectValid] = useState(true)
const handselects=(e)=>{
  setSelects(e.target.value)
  
}
const handleselects2=(e)=>{
  setSelects2(e.target.value)
}

const handleclicks=()=>{
  setAns(`${selects==='celsius' && selects2=== 'fahrenheit'?(((inputs*9)+160)/5) : selects==='fahrenheit' && selects2==='celsius' ? (((inputs-32)*5)/9): selects === 'kelvin' && selects2==='fahrenheit'?((inputs-273)*1.8+32):selects === 'kelvin' && selects2 ==='celsius'?((inputs-273)):selects=== 'celsius' && selects2==='kelvin'?((parseInt(inputs)+273)):selects==='fahrenheit' && selects2==='kelvin'?((parseInt(inputs)+459.4)/1.8):selects==='default'||selects2==='default'?'':selects==="kelvin"&&selects2==="kelvin"?(inputs):selects==="celsius"&&selects2==="celsius"?(inputs):selects==="fahrenheit"&&selects2==="fahrenheit"?(inputs):''}`)


  setImg(selects2 === 'fahrenheit' ? "/media/fahrent2.png" : selects2== "celsius"?"/media/celsius.png": selects2 ==="kelvin"?"/media/kelvin2.jfif":'')

  setSelectValid(selects==="default"?false:selects2==="default"?false:true)
  console.log(selectValid)
}
  return (
    <div className="body">
<main>
<h1>Temperature Converter</h1>
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
  <section>
  <p>Converting From</p>
  <select name=""
  onChange={(e)=>handselects(e)}>
    <option value="default">
      ...Converting from
    </option>
     <option value="fahrenheit">
      Fahrenheit
    </option>

    <option value="celsius">
      Celsius
    </option>
    <option value="kelvin">
    Kelvin
   </option>
  </select>
  </section>
<section>
  <p>Converting too</p>
  <select name=""
  className=''
  onChange={(e)=>handleselects2(e)}>
     <option value="default">
     ...Converting to
    </option>
     <option value="fahrenheit">
      Fahrenheit
    </option>

    <option value="celsius">
      Celsius
    </option>
   <option value="kelvin">
    Kelvin
   </option>
  </select>
  <p className={`absolute left-[4rem] block ${selectValid&&'acth'}`}>You must choose from both side</p>
  </section>

  </div>
  <button
  onClick={()=>handleclicks()}
  >Convert</button>
  </div>
  <div className="ansW ">
    <p>Result:</p>
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

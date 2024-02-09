import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {

  //create state to store data
  const [interest,setInterest] = useState (0)
  const [principle,setPrinciple] = useState (0)
  const [rate,setRate] = useState (0)
  const [year,setYear] = useState (0)
  const [principleAmountValid,setPrincipleAmountValid]= useState(true)
  const [rateAmountValid,setRateAmountValid]= useState(true)
  const [yearAmountValid,setYearAmountValid]= useState(true)

  console.log(principle);

  const handleReset =()=>{
    //reset all state
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setPrincipleAmountValid(true)
    setRateAmountValid(true)
    setYearAmountValid(true)
  }

  const handleValidation = (tag)=>{
    console.log("inside handleValidation")
    const {value,name} = tag
    console.log(value,name);
    console.log(!!value.match(/^[0-9]*.?[0-9]+$/))
    if(!!value.match(/^[0-9]*.?[0-9]+$/)){
      //valid
      if(name=="principle"){
        setPrinciple(value)
        setPrincipleAmountValid(true)
      }else if (name=="rate"){
        setRate(value)
        setRateAmountValid(true)
      }else {
        setYear(value)
        setRateAmountValid(true)
      }
}else{
  //invalid
  if(name=="principle"){
        setPrinciple(value)
        setPrincipleAmountValid(false)
      }else if (name=="rate"){
        setRate(value)
        setRateAmountValid(false)
      }else {
        setYear(value)
        setYearAmountValid(false)
      }
}
  }

  const handleCalculate = ()=>{
    if(principle && rate && year){
      setInterest(principle*year*rate/100)
    }else{
      alert("Please fill the form completely")
    }
  }






  return (

    <div style={{ width: '100%', height: '100%' }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '550px' }} className='bg-light p-5 rounded'>
        <h3>Simple Interest Calculator</h3>
        <p>Calculate your simple interest easily</p>

        <div className="d-flex justify-content-center align-items-center bg-warning p-2 rounded shadow flex-column text-light">
          <h1>₹ {interest}</h1>
          <p className='fw-bolder'>Total Simple  Interest</p>
        </div>

        <form className='mt-5'>
          {/* principle */}
          <div className='mb-3'>
            <TextField className="w-100" id="Outlined-basic-principle" label="₹ Principle Amount" variant="outlined" value={principle || ""}
            name='principle' onChange={tag=>handleValidation(tag.target)} />
          </div>
{ !principleAmountValid && <div className="text-danger mb-3">*Invalid Principle Amount</div>
}

          {/* rate */}
          <div className='mb-3'>
            <TextField className="w-100" id="Outlined-basic-principle" label="₹ Rate of Interest (p.a)%" variant="outlined" value={rate || ""}
            name='rate' onChange={tag=>handleValidation(tag.target)}/>
          </div>
{ !rateAmountValid && <div className="text-danger mb-3">*Invalid Rate Amount</div>
}

          {/* time */}
          <div className='mb-3'>
            <TextField className="w-100" id="Outlined-basic-principle" label="₹ Time Period (Yr)" variant="outlined" value={year || ""}
            name='year' onChange={tag=>handleValidation(tag.target)} />
          </div>
{ !yearAmountValid && <div className="text-danger mb-3">*Invalid Year</div>
}

          {/* btn collection */}
          <Stack direction="row" spacing={2}>
            <Button onClick={handleCalculate} disabled={!principleAmountValid || !rateAmountValid || !yearAmountValid} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained"><b>CALCULATE</b></Button>
            <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} variant="outlined"><b>RESET</b></Button>
          </Stack>

        </form>

      </div>
    </div>
  )
}

export default App


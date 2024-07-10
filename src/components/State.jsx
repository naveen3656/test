import React, { useState } from 'react'
const messages=[
    "learn react",

    "apply for jobs",
    "invest in new income",
]
const State = () => {
    const [step,setStep]=useState(1)
    const [isOpen,setIsOpen]=useState(true)
    
    function handleprevious(){
        // alert("previous")
        if(step>1)
        setStep(step-1)
    }
    function handleNext(){
        if(step<3)
        setStep(step+1)
    }
  return (
    <div>
        <button className='close' onClick={()=>setIsOpen(!isOpen)}>X</button>
    {isOpen &&(
        <div className="steps">
        <div className="numbers">
            <div className={`${step>=1?"active":"number-item"}`}>1</div>
            <div className={`${step>=2?"active":"number-item"}`}>2</div>
            <div className={`${step>=3?"active":"number-item"}`}>3</div>

        </div>
        <h2 className="message">step {step}: {messages[step-1]}</h2>
        <div className="buttons">
            <button style={{backgroundColor:"#7950f2",color:"#fff",borderRadius:"20px",fontSize:"25px",padding:"15px"}}  onClick={handleprevious}>previous</button>
            <button style={{backgroundColor:"#7950f2",color:"#fff",borderRadius:"20px",fontSize:"25px",padding:"15px"}}onClick={handleNext}>next</button>
        </div>
        
    </div>)}
    </div>
  )
}

export default State
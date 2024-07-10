import React, { useState } from 'react'

const Form = ({onAddItems}) => {
    function handleSubmit(e) {
        e.preventDefault();
        if (!description)return;
        const newItem={description,quantity,packed:false,id:Date.now()}
    console.log(newItem)
    onAddItems(newItem)
    setDiscription("")
    setQuantity(1)
    }
    const [description,setDiscription]=useState("")
    const [quantity,setQuantity]=useState(1)
    
  return (
    
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>what do you need for the 😒trip</h3>  
      <select  value={quantity} onChange={(e)=>setQuantity(Number(e.target.value))}>
      {Array.from({length:20},(_,i)=>i+1).map((num)=><option value={num} key={num}>{num}</option>)}
      </select>
      <input type="text" placeholder='items...' value={description} onChange={(e)=>setDiscription(e.target.value)} />
      <button >add</button>
    </form>
    
  )
}

export default Form
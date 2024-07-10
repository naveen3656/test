import React, { useState } from 'react'
import './Flashcard.css'
const questions=[
    {
        id:1,
        question:"1*10",
        ans:"10"
    },
    {
        id:2,
        question:"2*10",
        ans:"20"
    },
    {
        id:3,
        question:"3*10",
        ans:"30"
    },
    {
        id:4,
        question:"4*10",
        ans:"40"
    },
    {
        id:5,
        question:"5*10",
        ans:"50"
    },
    {
        id:6,
        question:"6*10",
        ans:"60"
    },  
     
]
const Flashcard = () => {
    const [selecetedId,setSelecetedId]=useState(null)
    function handleClick(id){
        setSelecetedId(id !==selecetedId?id:null)
    }
  return (
    <div className="flashcard">
       {questions.map((question)=>(
        <div onClick={()=>handleClick(question.id)} className={question.id===selecetedId?"selected":"flashitems"} key={questions.id}>
            <p>{question.id===selecetedId?question.ans:question.question}</p>
            </div>
       ))}
    </div>
  )
}

export default Flashcard
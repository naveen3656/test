import React from 'react'
const fags=[
    {
        title:"wher are the cris assembled",
        text:"lorem ipsum"
    },
    {
        title:"wher are the cris assembled",
        text:"lorem ipsum"
    },
    {
        title:"wher are the cris assembled",
        text:"lorem ipsum"
    },
]
    const Accordian = ({data}) => {
    
    
  return (
   <div className="accordion">

   </div>
  )
}
function AccordionItem({num,title,text}){
    return 
    <div className="item">
        <p className="number">{num}</p>
        <p className="text">{title}</p>
        <p className="icon">-</p>
        <p className="content-box">{text}</p>
    </div>

export  {Accordian};
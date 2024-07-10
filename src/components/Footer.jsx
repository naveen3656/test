import React from 'react'

const Footer = () => {
    const hour=new Date().getHours();
    const openHour=8;
    const closeHour=22;
    // if(hour>=openHour&& hour<=closeHour) alert("we are open");
    // else alert("sorry we are closed")
  return (
    <div>
 <h5>{new Date().toLocaleTimeString()} - We are open</h5>    </div>
  )
}

export default Footer
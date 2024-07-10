import React, { useState } from 'react'
import Item from './Item';
// const initialItems=[
//     {id:1,
//         description:"passport",
//         quantity:2,
//         packed:false
//     },
//     {id:2,
//         description:"Socks",
//         quantity:12,
//         packed:false
//     },

// ];
const PackingList = ({items,onDeleteItem,onToggleItem,onClearList}) => {
  const[sortby,setSortby]=useState("input")
  let sortedItems;
  if (sortby==="input") sortedItems=items;
  if(sortby==="description")
    sortedItems=items.slice().sort((a,b)=>a.description.localeCompare(b.description))
if(sortby==="packed")
    sortedItems=items.slice().sort((a,b)=>Number(a.packed)-(b.packed))
   

return (
    <div className="list">
        <ul className='pack'>
            {sortedItems.map((item)=>(
                <Item className="packlist"item={item} key={item.id} 
                onDeleteItem={onDeleteItem} 
                onToggleItem={onToggleItem} />
            ))}
        </ul>
        <div  >
            <select className="action" id="" onChange={(e)=>setSortby(e.target.value)}>
                <option value="input">sort by input order</option>
                <option value="description">sort by description</option>
                <option value="packed">sort by packed</option>
            </select>
        <button className='clearList' onClick={onClearList}>clear list</button>
            
        </div>
    </div>
  )
}

export default PackingList
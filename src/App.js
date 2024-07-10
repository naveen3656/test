import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import State from './components/State';
import Logo from './components/Logo';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import Form from './components/Form';
import Flashcard from './components/Flashcard';
function App() {
  const[items,setItems]=useState([ ])
    function handleAddItems(item) {
      setItems((items)=>[...items,item])
    }
    function handleDeleteItem(id){
      setItems((items)=>items.filter((item)=>item.id!==id))
    }
    function handleToggleItem(id){
      setItems(items.map(item=>item.id===id?{...item,packed: !item.packed}:item))
    }
    function handleClearList(){
      const confirmed=window.confirm(
        "are you sure to delete all?"
      )
      if(confirmed) setItems([])
    }
  return (
    
    <div className="App">
      {/* <Header/>
      <Menu/>
      <Footer/> */}
      {/* <State/> */}
      <Logo/>
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} onClearList={handleClearList}/>
      <Stats items={items}/>
      {/* <Flashcard/> */}
      
    </div>
  );
}

export default App;

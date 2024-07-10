import React from 'react';
import pimg from "../assets/pizza.jpg";
import p2img from "../assets/pizza2.jpg";
import p3img from "../assets/pizza3.jpg";
import p4img from "../assets/pizza4.jpg";
import p5img from "../assets/pizza5.jpg";
import p6img from "../assets/pizza6.jpg";


const Menu = () => {
  const items = [
    {
      id: 1,
      img: pimg,
      name: "Pizza Fungi",
      ingredients: "tomato, mushroom",
      price: 12
    },
    {
      id: 2,
      img: p2img,
      name: "Pizza Spinaci",
      ingredients: "tomato, mushroom, mozzarella, spinach, ricotta cheese",
      price: 15
    },
    {
      id: 3,
      img: p3img,
      name: "Pizza Margherita",
      ingredients: "tomato, mozzarella, basil",
      price: 10
    },
    {
      id: 4,
      img: p4img,
      name: "Pizza Pepperoni",
      ingredients: "tomato, mozzarella, pepperoni",
      price: 14
    },
    {
      id: 5,
      img: p5img,
      name: "Pizza Veggie",
      ingredients: "tomato, mushroom, bell pepper, onion, olives",
      price: 13
    },
    {
      id: 6,
      img: p6img,
      name: "Pizza BBQ Chicken",
      ingredients: "BBQ sauce, chicken, red onion, cilantro",
      price: 16
    }
  ];

  return (
    <div className='menu'>
      <h2>_Our Menu_</h2>
      <div className="menu-container">
        {items.map(item => (
          <div key={item.id} className="menu-item">
            <img src={item.img} alt={item.name} className="menu-item-image" />
            <div className="menu-item-details">
              <h3>{item.name}</h3>
              <p>Ingredients: {item.ingredients}</p>
              <p>Price: ${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;

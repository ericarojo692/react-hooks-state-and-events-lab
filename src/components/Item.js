import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false)
  const appClass = isInCart ? "in-cart" : ""

  function handleClick(){
    if(isInCart) {
      setIsInCart(false)
    } else {
      setIsInCart(true)
    }
  }


  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className='add'>Add to Cart</button>
    </li>
  );
}

export default Item;

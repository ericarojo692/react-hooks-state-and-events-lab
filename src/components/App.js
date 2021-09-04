import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
   
  const [isDark, setIsDark] = useState(false)
  const appClass = isDark ? "App dark" : "App light"

  function handleClick () {
    if(isDark) {
      setIsDark(false)
    } else {
      setIsDark(true)
    }
  }


  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;

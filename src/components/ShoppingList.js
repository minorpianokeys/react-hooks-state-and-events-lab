import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCatergory, setSelectedCatergory] = useState("All")

  console.log(items)

  const itemsToDisplay = items.filter((item) => {
    if (selectedCatergory === "All") {
      return true;
    } else {
      return item.category === selectedCatergory;
    }
  })

  function handleCatergory(event) {
    setSelectedCatergory(event.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCatergory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

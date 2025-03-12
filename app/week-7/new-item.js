"use client";

import { useState } from "react";

export function Counter({name, quantity, category}) {
    const [quantity, setQuantity] = useState(quantity);
    const [name, setName] = useState(name);
    const [category, setCategory] = useState(category);
    
    const handleSubmit = (event) => {
      if (name==="")
        return 
      event.preventDefault();
      const item1 = {
        name: name,
        quantity: quantity,
        category: category,
      };
      alert("Added item: " + item1.name + " " + "Quantity: " +item1.quantity + " " +  "Category: "+ item1.category);
      setCategory("produce");
      setName("");
      setQuantity(1);
    };
    const increment = () => {
        if(quantity<20)
            setQuantity(quantity + 1);
    };
    const decrement = () => {
        if(quantity>1)
            setQuantity(quantity - 1);
    };
    const handleChange = (event) => {
      setName(event.target.value);
    };
    return (
        <div>
            <p className = "p-4 rounded-lg m-4 bg-purple-300 w-48">Count: {quantity}</p>
            <button className = "p-4 rounded-lg m-4 bg-blue-300 w-48" onClick = {increment}> Increment</button>
            <button className = "p-4 rounded-lg m-4 bg-blue-300 w-48" onClick = {decrement}> Decrement</button>
            <form onSubmit={handleSubmit}>
        <label>
          <input className = "p-4 rounded-lg m-4 bg-green-300 w-48"type="text" placeholder="Enter item name" value={name} onChange={handleChange} />
        </label>
        <input className = "p-4 rounded-lg m-4 bg-yellow-300 w-48" type="submit" value="Add Item" />
        <label>
          Category
          <select onClick={(event)=>setCategory(event.target.value)} className = "p-4 rounded-lg m-4 bg-orange-300 w-48" name = "produce">
              <option value = "Produce">Produce</option>
              <option value = "Dairy">Diary</option>
              <option value = "Bakery">Bakery</option>
              <option value = "Meat">Meat</option>
              <option value = "Frozen Foods">Frozen Foods</option>
              <option value = "Canned Goods">Canned Goods</option>
              <option value = "Dry Goods">Dry Goods</option>
              <option value = "Beverages">Beverages</option>
              <option value = "Snacks">Snacks</option>
              <option value = "Household">Household</option>
              <option value = "Other">Other</option>
          </select>
        </label>
      </form>
        </div>
    );
}

//https://react.dev/reference/react-dom/components/select
//This AI was used to help with formatting where lines of code went. 
//https://copilot.cloud.microsoft/?fromcode=bingchat&redirectid=11AA81C03F044FA4BE194984FEC5968E&auth=2
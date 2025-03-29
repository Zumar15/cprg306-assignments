"use client"
import React from "react"
import ItemList from "./item-list"
import NewItem from "./new-item"
import { useState } from "react"
import MealIdea from "./meal-ideas"
import { getItems } from "../_services/shopping-list-service"
import { addItem } from "../_services/shopping-list-service"
import { useEffect } from "react"
export default function Page(){
    const [items, setItems] = useState(itemsData)
    const [selectedItemName, setSelectedItemName] = useState("")
    const handleAddItem = (obj) => { 
        const newitems = [...items]
        newitems.push(obj)
        setItems(newitems)
    }

    const handleItemSelect  = (event) => {
        let text = event.target.innerHTML
        
        let clean = text.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        setSelectedItemName(clean);
    }
    async function loadItems(){
        
    }
    return(
        <main className="main">
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <p></p>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            <div className = "p-4 rounded-lg m-4 bg-yellow-300 w-48"><MealIdea ingredient = {selectedItemName}></MealIdea></div>
        </main>
    )
}
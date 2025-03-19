"use client"
import React from "react"
import itemsData from "./items.json"
import ItemList from "./item-list"
import NewItem from "./new-item"
import { useState } from "react"

export default function Page(){
    const [items, setItems] = useState(itemsData)
    
    const handleAddItem = (obj) => { 
        const newitems = [...items]
        newitems.push(obj)
        setItems(newitems)
    }

    return(
        <main className="main">
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <p></p>
            <ItemList items={items}/>
        </main>
    )
}
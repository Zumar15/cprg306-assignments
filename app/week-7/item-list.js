'use client'
import {Item} from "./item.js";
import { useState } from "react";

export function ItemList() {
    const [sortBy, setSortBy] = useState("name");
    const sortByName = () => {
        items.sort((item1,item2) => {
            if(item1.name>item2.name)
                return 1;
            else if (item1.name>item2.name)
                return 0;
            else return -1;
        })
        setSortBy("name");
    }
    const sortByCategory = () => {
        items.sort((item1,item2) => {
            if(item1.category>item2.category)
                return 1;
            else if (item1.category===item2.category)
                return 0;
            else return -1;
        })
        setSortBy("Category");
    }
    return (
            <div>
            <button className = "p-4 rounded-lg m-4 bg-green-300 w-48" onClick = {sortByName}>Sort by Name</button>
            <button className = "p-4 rounded-lg m-4 bg-green-300 w-48" onClick = {sortByCategory}>Sort by Category</button>
                    {
                        items.map((item) => {
                            return (
                                <Item key = {item.id} name = {item.name} quantity = {item.quantity} category = {item.category}></Item>
                            )
                        })
                    }
            </div>
        )
    
}
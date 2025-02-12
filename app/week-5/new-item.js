"use client";
 
import { useState } from "react";

export function Counter() {
    const [quantity, setQuantity] = useState(0);
    const increment = () => {
        setQuantity(quantity + 1);
    };
    const decrement = () => {
        setQuantity(quantity - 1);
    };
    return (
        <div>
            <p>Count: {quantity}</p>
            <button className = "p-4 rounded-lg m-4 bg-blue-300 w-48" onClick = {increment}> Increment</button>
            <button className = "p-4 rounded-lg m-4 bg-blue-300 w-48" onClick = {decrement}> Decrement</button>
        </div>
    )
}
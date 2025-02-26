"use client";

import { useState } from "react";

export function Counter() {
    const [quantity, setQuantity] = useState(1);
    const increment = () => {
        if(quantity<20)
            setQuantity(quantity + 1);
    };
    const decrement = () => {
        if(quantity>1)
            setQuantity(quantity - 1);
    };
    return (
        <div>
            <p className = "p-4 rounded-lg m-4 bg-purple-300 w-48">Count: {quantity}</p>
            <button className = "p-4 rounded-lg m-4 bg-blue-300 w-48" onClick = {increment}> Increment</button>
            <button className = "p-4 rounded-lg m-4 bg-blue-300 w-48" onClick = {decrement}> Decrement</button>
        </div>
    )
}
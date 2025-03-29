import React from "react"

export default function Item({name, quantity, category, onSelect}){
    return(
        <>
        <div className = "p-4 rounded-lg m-4 bg-blue-300 w-48">
            <h2 onClick={onSelect}>{name}</h2>
            <h2>Buy {quantity} in {category}</h2>
        </div>
        </>
    )
}
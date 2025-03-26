"use client"
import { useState } from "react"


export default function NewItem({onAddItem}){

    const [quantity, setQuantity] = useState(1)
    const [name, setName] = useState('')
    const [category, setCategory] = useState('produce')

    const categories = ["Produce","Dairy","Bakery","Meat","Frozen Foods","Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household","Other"]

    const serialGen = () => {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            let counter = 0;
            while (counter < 16) {
              result += characters.charAt(Math.floor(Math.random() * charactersLength));
              counter += 1;
            }
            return result;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const serialid = serialGen()
        const obj = {
            id:serialid,
            name:name,
            quantity:quantity,
            category:category
        }
        onAddItem(obj)
        setQuantity(1)
        setName('')
        setCategory('produce')
    }

    const increment = () => {
        setQuantity(quantity + 1)
    }

    const decrement = () => {
        quantity > 0 && setQuantity(quantity - 1)
    }
    return(
        <>
        <form className="form" onSubmit={handleSubmit}>
            <input className = "p-4 rounded-lg m-4 bg-green-300 w-48"id="name" type="text" value={name} placeholder="Item name" onChange={e =>setName(e.target.value)} required/>
            <div className="form-section-2">
        <div className="item-wrapper">
        <p className = "p-4 rounded-lg m-4 bg-purple-300 w-48">Count: {quantity}</p>
        <div className="button-wrapper">
        <button type="button" className = "p-4 rounded-lg m-4 bg-blue-300 w-48" onClick={decrement} disabled={quantity <= 1 && true}>-</button>
            <button type="button" className = "p-4 rounded-lg m-4 bg-blue-300 w-48" disabled={quantity >= 20 && true} onClick={increment} >+</button>
            </div>
        </div>
        
        <select className = "p-4 rounded-lg m-4 bg-orange-300 w-48" id="category" value={category} onChange={e=>setCategory(e.target.value)} required>
            {
                categories.map((cat,i) => {
                    return <option key={i} value={cat.toLowerCase()}>{cat}</option>
                })
            }
        </select>
        </div>
        <button className = "p-4 rounded-lg m-4 bg-teal-300 w-48" type="submit"  >Add Item</button>
        </form>
        </>

    )

}
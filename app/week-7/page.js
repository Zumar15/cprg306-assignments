"use client"
import {Counter} from "./new-item.js";
import {ItemList} from "./item-list.js";
import itemsData from "./items.json"

export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("");
    const handleAddItem = () => {
      const newItem = {
        "name":name,
        "quantity":quantity,
        "category":category
      }
      const newItems = [...items,newItem]
        setItems(newItems);
    }
    return (
      <main>
        <Counter onAddItem ={handleAddItem} name quantity category></Counter>
        <ItemList item = "items"/>
      </main>
    );
  }
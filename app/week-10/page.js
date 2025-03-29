'use client'

import { useUserAuth } from "./_utils/auth-context";
import Layout from "./layout";
import { addItem, getItems } from "./_services/shopping-list-service";
import { useState } from "react"

export default function Page() {
    let { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [name, setName] = useState("Enter item name");
    const [quantity, setQuantity] = useState(0);
    const [category, setCategory] = useState("Enter item category")
    const [items, setItems] = useState([]);
    async function signIn(){
      await gitHubSignIn();
    }
    async function signOut(){
      await firebaseSignOut();
    }
    async function add() 
    {
      const item = {"name":name, "quantity": quantity, "category" : category}
      await addItem(user.uid, item)
      setName("");
      setCategory("");
      setQuantity("");
      alert ("Item added to the database correctly")
    }
    async function showData() 
    {
      const data = await getItems(user.uid);
      //alert(data[0].name)
      setItems(data);
    }
    return (
      <Layout>
      <div>
        <main>
          {
          user?<div>Welcome {user.displayName} ({user.email})
          <p>
            Your user id is: {user.uid}
            To see the shopping list please click:
            <a href = "/week-10/shopping-list"> Shopping List</a>
          </p>
          <button className = "p-4 rounded-lg m-4 bg-orange-300 w-48" onClick = {signOut}>Sign Out</button></div>: 
          <div>You are not logged in
            <button className = "p-4 rounded-lg m-4 bg-orange-300 w-48" onClick={signIn}> Log In</button>
          </div>
          }
        <div>
          <input className = "p-4 rounded-lg m-4 bg-green-300 w-48" value = {name} onChange = {(e) => {setName(e.target.value)}}></input>
          <input className = "p-4 rounded-lg m-4 bg-green-300 w-48" value = {quantity} onChange = {(e) => {setQuantity(e.target.value)}}></input>
          <input className = "p-4 rounded-lg m-4 bg-green-300 w-48" value = {category} onChange = {(e) => {setCategory(e.target.value)}}></input>
          <button onClick = {add}> Add </button>
        </div>
        <div>
          <button onClick={showData}>Show Items or Show Added Item</button>
          {
            items.map((item, i)=> {
              return(
              <Card item ={item} key ={i}></Card>
            )
            })
          }
        </div>
        </main>
      </div>
      </Layout>
    )
}

function Card({item})
{
  return(
    <div className = "p-4 rounded-lg m-4 bg-blue-300 w-48">
      <h1>{item.name}</h1>
      <h2>{item.quantity}</h2>
      <h2>{item.category}</h2>
    </div>
  )
}
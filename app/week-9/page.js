'use client'

import { useUserAuth } from "./_utils/auth-context";
import Layout from "./layout";

export default function Page() {
    let { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    async function signIn(){
      await gitHubSignIn();
    }
    async function signOut(){
      await firebaseSignOut();
    }
    return (
      <Layout>
      <div>
        <main>
          {
          user?<div>Welcome {user.displayName} ({user.email})
          <p>
            To see the shopping list please click:
            <a href = "/week-9/shopping-list"> Shopping List</a>
          </p>
          <button className = "p-4 rounded-lg m-4 bg-orange-300 w-48" onClick = {signOut}>Sign Out</button></div>: 
          <div>You are not logged in
            <button className = "p-4 rounded-lg m-4 bg-orange-300 w-48" onClick={signIn}> Log In</button>
          </div>
          }
        </main>
      </div>
      </Layout>
    )
}
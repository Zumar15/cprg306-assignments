import { db } from "../_utils/firebase";
import { collection, where, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    const data =[];
    const q = query(
        collection(db,"users", userId, "items"),
        //where("quantity", ">=", 1)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        data.push(doc.data());
    });
    return data;
}

export async function addItem(userId, item) {
const docRef = await addDoc(collection(db, "users", userId, "items"),item);
console.log("Item is created with ID: ", docRef.id);
}
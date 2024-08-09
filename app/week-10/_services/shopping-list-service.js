import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
    console.log('getItems called');
    console.log(db); 
    const items = [];
    const q = query(collection(db, `users/${userId}/items`));
    console.log('ready to load:');
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });
    return items;
}


export async function addItem(userId, item) {
    const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
    return docRef.id;
}
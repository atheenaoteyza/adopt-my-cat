import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

export const fetchCatsData = (setCats) => {
  const unsubscribe = onSnapshot(collection(db, "cats"), (querySnapshot) => {
    const catsList = [];
    querySnapshot.forEach((doc) => {
      catsList.push({ id: doc.id, ...doc.data() });
    });
    setCats(catsList); // Update the state with the new data
  });

  // Return the unsubscribe function so you can clean it up when needed
  return unsubscribe;
};

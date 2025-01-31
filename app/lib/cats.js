import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
export const fetchCatsData = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "cats"));
    const catsList = [];
    querySnapshot.forEach((doc) => {
      catsList.push({ id: doc.id, ...doc.data() });
    });
    return catsList; // Log the data to the console
  } catch (error) {
    console.error("Error fetching cats data: ", error);
  }
};

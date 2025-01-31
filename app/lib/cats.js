import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default async function fetchCatsData() {
  try {
    const querySnapshot = await getDocs(collection(db, "cats"));
    const catsData = [];

    querySnapshot.forEach((doc) => {
      catsData.push({ id: doc.id, ...doc.data() });
      console.log(` ${doc.id} => ${doc.data()}`);
      console.log("hello");
    });

    return catsData; // Return the array of data for use elsewhere in the app
  } catch (error) {
    console.error("Error fetching cats data:", error);
  }
}

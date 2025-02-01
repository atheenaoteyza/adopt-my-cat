"use client";

import { useState, useEffect } from "react";
import CatContainer from "./cat-container";
import { fetchCatsData } from "@/app/lib/action";
import styles from "@/app/page.module.css";
export function Cats() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const unsubscribe = fetchCatsData(setCats); // Set up real-time updates

    // Clean up the listener when the component is unmounted
    return () => unsubscribe();
  }, []); // Empty dependency array to run only once when component mounts

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Available Cats for Adoption</h1>
        <div className={styles.catGrid}>
          {cats.map((cat) => (
            <CatContainer
              key={cat.id} // Unique key for React list
              name={cat.name}
              slug={cat.slug}
              image={cat.image}
              description={cat.description}
              owner={cat.owner}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

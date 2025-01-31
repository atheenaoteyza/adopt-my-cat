"use client";
import styles from "./page.module.css";
import { useState } from "react";
import CatContainer from "@/public/component/cat-container"; // Adjust path if needed

export default function Home() {
  const [cats, setCats] = useState([
    {
      name: "Milo",
      slug: "milo-the-playful",
      description:
        "A playful and energetic Siamese cat who loves chasing laser pointers and cuddling on rainy days.",
      owner: "Sophia Green",
      age: 2,
      breed: "Siamese",
      image: "https://example.com/images/milo.jpg",
      available: true,
    },
    {
      name: "Luna",
      slug: "luna-the-gentle",
      description:
        "A calm and affectionate British Shorthair with a love for head scratches and sunbathing by the window.",
      owner: "Jacob Carter",
      age: 3,
      breed: "British Shorthair",
      image: "https://example.com/images/luna.jpg",
      available: false,
    },
    {
      name: "Whiskers",
      slug: "whiskers-the-adventurer",
      description:
        "An adventurous tabby cat who enjoys exploring new places and climbing high shelves.",
      owner: "Emily Chen",
      age: 1,
      breed: "Tabby",
      image: "https://example.com/images/whiskers.jpg",
      available: true,
    },
  ]);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Available Cats for Adoption</h1>
        <div className={styles.catGrid}>
          {cats.map((cat) => (
            <CatContainer
              key={cat.slug} // Unique key for React list
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

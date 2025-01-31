import styles from "./page.module.css";
import CatContainer from "@/public/component/cat-container"; // Adjust path if needed
import { fetchCatsData } from "./lib/cats";
import { Suspense } from "react";

async function Cats() {
  const pusa = await fetchCatsData();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Available Cats for Adoption</h1>
        <div className={styles.catGrid}>
          {pusa.map((cat) => (
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
export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Available Cats for Adoption</h1>
        <div className={styles.catGrid}>
          <Suspense
            fallback={<p className={styles.loading}>Fetching data...</p>}
          >
            <Cats></Cats>
          </Suspense>
        </div>
      </main>
    </div>
  );
}

import styles from "./page.module.css";
import { Suspense } from "react";
import { Cats } from "@/public/component/cats";

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

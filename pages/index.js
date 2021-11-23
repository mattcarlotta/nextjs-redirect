import { useEffect } from "react";
import styles from "../styles/Home.module.css";

const REDIRECTLINKS = [
  "https://stackoverflow.com/users/17399606/renan-vargas",
  "https://stackoverflow.com/questions/70088383/nextjs-getting-404-error-while-trying-to-redirect",
  "https://stackoverflow.com/users/7376526/matt-carlotta",
];

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * REDIRECTLINKS.length);
      window.location.replace(REDIRECTLINKS[randomIndex]);
    }, 2000);
  }, []);

  return (
    <div className={styles.container}>
      <main className={styles.main}>Redirecting to stackoverflow...</main>
    </div>
  );
}

import { useEffect } from "react";

const REDIRECTLINKS = [
  "https://stackoverflow.com/users/17399606/renan-vargas",
  "https://stackoverflow.com/questions/70088383/nextjs-getting-404-error-while-trying-to-redirect",
  "https://stackoverflow.com/users/7376526/matt-carlotta",
  "https://stackoverflow.com/questions/tagged/reactjs?sort=newest&page=1&pagesize=50",
  "https://stackoverflow.com/questions/tagged/reactjs?tab=Bounties",
];

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * REDIRECTLINKS.length);
      window.location.replace(REDIRECTLINKS[randomIndex]);
    }, 2000);
  }, []);

  return <main className="main">Redirecting to stackoverflow...</main>;
}

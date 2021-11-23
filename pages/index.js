import Link from "next/link";

export default function Index() {
  return (
    <main className="main">
      <h1>Redirect within NextJS</h1>
      <p>Click the link below to redirect to a random stackoverflow URL</p>
      <Link href="/redirect">Redirect</Link>
    </main>
  );
}

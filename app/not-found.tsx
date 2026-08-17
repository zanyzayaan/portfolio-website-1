import Link from "next/link";
import Navbar from "../components/Navbar";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <Navbar />
      <section className="not-found section-frame">
        <span className="eyebrow">ERROR / 404</span>
        <h1>That page<br /><span>doesn&apos;t exist.</span></h1>
        <p>It may still be a sketch on the wall. For now, there&apos;s nothing here.</p>
        <Link className="contact-button" href="/" data-cursor="interactive">BACK HOME <span>↗</span></Link>
      </section>
    </main>
  );
}

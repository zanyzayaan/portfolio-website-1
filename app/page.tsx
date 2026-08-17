import Link from "next/link";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="hero section-frame">
        <div className="hero-kicker"><span className="status-dot" /> Available for selected collaborations · 2026</div>
        <div className="hero-copy">
          <p className="hero-intro">Hi, I&apos;m <span className="name-highlight">Philip Traylen</span>. I build digital work that behaves more like a place than a page.</p>
          <h1 aria-label="Creative Technologist">
            <span className="hero-line">Creative</span>
            <span className="hero-line">Technologist</span>
          </h1>
          <div className="icon-marquee" aria-label="Creative technology symbols">
            <div className="icon-marquee-track">
              <span>✿</span><span>◌</span><span>𓆩♡𓆪</span><span>✦</span><span>⌁</span><span>❋</span><span>◡</span><span>✧</span>
              <span>✿</span><span>◌</span><span>𓆩♡𓆪</span><span>✦</span><span>⌁</span><span>❋</span><span>◡</span><span>✧</span>
              <span>✿</span><span>◌</span><span>𓆩♡𓆪</span><span>✦</span><span>⌁</span><span>❋</span><span>◡</span><span>✧</span>
            </div>
          </div>
          <div className="hero-bottom">
            <p>I turn curious ideas into responsive digital experiences with a visual point of view.</p>
            <Link className="circle-link" href="#work" data-cursor="interactive" aria-label="Scroll to selected work">↓</Link>
          </div>
        </div>
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <span className="hero-coordinate">26° 55&apos; / 80° 57&apos;</span>
      </section>

      <section id="work" className="work-section section-frame">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 / Selected work</span>
            <h2>Things I&apos;ve<br /><em>made.</em></h2>
          </div>
          <p className="section-note">Selected experiments shaped by design instinct, technical curiosity, and a healthy dislike of the obvious.</p>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
        </div>
      </section>

      <section className="marquee-section" aria-label="Creative technology services">
        <div className="marquee-track">
          <span>CREATIVE TECHNOLOGY</span><b>✦</b><span>INTERACTION</span><b>✦</b><span>GENERATIVE WEB</span><b>✦</b><span>DIGITAL ART</span><b>✦</b>
          <span>CREATIVE TECHNOLOGY</span><b>✦</b><span>INTERACTION</span><b>✦</b><span>GENERATIVE WEB</span><b>✦</b><span>DIGITAL ART</span><b>✦</b>
        </div>
      </section>

      <section className="about-section section-frame">
        <div className="about-label"><span className="eyebrow">02 / A little context</span></div>
        <div className="about-content">
          <h2>I like the moment<br />when <span>technology</span><br />stops feeling technical.</h2>
          <div className="about-text">
            <p>I&apos;m a creative technologist interested in the strange space where an interface becomes an environment, a dataset becomes a story, and a line of code becomes a visual gesture.</p>
            <Link className="text-link" href="/about" data-cursor="interactive">More about me <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="services-section section-frame">
        <div className="section-heading compact">
          <div>
            <span className="eyebrow">03 / What I do</span>
            <h2>Build <em>with intent.</em></h2>
          </div>
          <p className="section-note">I prefer the messy middle, where visual ideas and technical decisions start changing each other.</p>
        </div>
        <div className="service-list">
          {[
            ["01", "Creative Development", "Interactive websites, creative coding and expressive frontend systems."],
            ["02", "Experience Design", "Interfaces where motion, hierarchy and behaviour work as one language."],
            ["03", "Generative Experiments", "Procedural visuals and data-driven experiences built for the browser."],
          ].map(([number, title, description]) => (
            <Link href="/services" className="service-row" key={number} data-cursor="interactive">
              <span>{number}</span><h3>{title}</h3><p>{description}</p><b>↗</b>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-section section-frame">
        <span className="eyebrow">04 / Have a strange idea?</span>
        <h2>Let&apos;s make<br /><span>something alive.</span></h2>
        <Link className="contact-button" href="mailto:hello@example.com" data-cursor="interactive">GET IN TOUCH <span>↗</span></Link>
      </section>

      <footer className="footer section-frame">
        <div className="footer-brand"><span>Philip</span><b>Traylen</b></div>
        <p>Creative technologist · Building curious things for screens.</p>
        <div className="footer-links">
          <a href="#" data-cursor="interactive">GitHub</a>
          <a href="#" data-cursor="interactive">LinkedIn</a>
          <a href="#" data-cursor="interactive">Instagram</a>
        </div>
        <small>© 2026 Philip Traylen</small>
      </footer>
    </main>
  );
}

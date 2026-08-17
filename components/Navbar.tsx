import Link from "next/link";

const links = [
  { label: "SERVICES", href: "/services" },
  { label: "WORK", href: "/work" },
  { label: "ABOUT", href: "/about" },
  { label: "BLOG", href: "/blog" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Primary navigation">
        <Link className="brand" href="/" aria-label="Philip Traylen home" data-cursor="interactive">
          <span>Philip</span><b>Traylen</b>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href} data-cursor="interactive">
              {link.label}
            </Link>
          ))}
        </div>
        <Link className="nav-contact" href="/contact" data-cursor="interactive">
          <span>LET&apos;S TALK</span><span aria-hidden="true">↗</span>
        </Link>
      </nav>
    </header>
  );
}

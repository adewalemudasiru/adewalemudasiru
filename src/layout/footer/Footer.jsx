import { profile, links, navItems } from "../../components/data/allData";

const Footer = () => (
  <footer className="border-t border-line">
    <div className="container-page grid gap-10 py-12 sm:grid-cols-[1fr_auto_auto] sm:gap-16">
      <div>
        <p className="font-display text-2xl">{profile.name}</p>
        <p className="mt-1 text-muted">
          {profile.role} — React, TypeScript, Tailwind CSS.
        </p>
      </div>
      <nav aria-label="Footer">
        <ul className="space-y-2 text-muted">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="transition-colors hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="space-y-2 text-muted">
        <li>
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
            GitHub
          </a>
        </li>
        <li>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
            LinkedIn
          </a>
        </li>
        <li>
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
            Email
          </a>
        </li>
      </ul>
    </div>
    <div className="container-page flex items-center justify-between border-t border-line py-6 font-mono text-xs text-muted">
      <span>
        © {new Date().getFullYear()} {profile.name}
      </span>
      <a href="#top" className="link-underline">
        Back to top ↑
      </a>
    </div>
  </footer>
);

export default Footer;

import { navItems } from "../../components/data/allData";

const Navigation = () => (
  <nav aria-label="Primary" className="hidden md:block">
    <ul className="flex items-center gap-7 text-[0.9375rem]">
      {navItems.slice(0, -1).map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            className="link-grow text-muted hover:text-accent focus-visible:text-accent"
          >
            {item.label}
          </a>
        </li>
      ))}
      <li>
        <a
          href="/#contact"
          className="rounded-full bg-accent px-4 py-2 font-medium text-accent-fg transition-opacity hover:opacity-90"
        >
          Get in touch
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;

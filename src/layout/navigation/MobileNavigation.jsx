import { useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { navItems, links } from "../../components/data/allData";
import { useLockScroll } from "../../hooks/useLockScroll";

const MobileNavigation = ({ open, setOpen }) => {
  const buttonRef = useRef(null);
  const firstLinkRef = useRef(null);
  useLockScroll(open);

  useEffect(() => {
    if (!open) return;
    firstLinkRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    // Close if the viewport grows past the mobile breakpoint.
    const mq = matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      document.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open, setOpen]);

  const close = () => setOpen(false);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
        className="-mr-2 grid size-11 place-items-center rounded-md text-fg"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary"
          className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col overflow-y-auto border-t border-line bg-bg px-[clamp(1.25rem,4vw,2rem)] pb-8"
        >
          <ul className="divide-y divide-line">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                className="animate-rise"
                style={{ animationDuration: "0.45s", animationDelay: `${60 + i * 50}ms` }}
              >
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={close}
                  className="font-display flex items-baseline justify-between py-5 text-4xl"
                >
                  {item.label}
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto flex gap-6 pt-10 font-mono text-sm text-muted">
            <a href={links.github} target="_blank" rel="noopener noreferrer" className="link-underline">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" className="link-underline">
              LinkedIn
            </a>
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileNavigation;

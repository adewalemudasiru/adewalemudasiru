// Editorial section frame: a numbered mono label in the left gutter, content on the right.
const Section = ({ id, index, label, title, tinted = false, children }) => (
  <section id={id} aria-labelledby={`${id}-title`} className={`border-t border-line ${tinted ? "bg-accent-soft" : ""}`}>
    <div className="container-page grid gap-x-12 gap-y-8 py-20 sm:py-24 lg:grid-cols-12">
      <p className="reveal font-mono text-xs tracking-wider text-muted uppercase lg:col-span-3 lg:pt-3">
        <span aria-hidden="true" className="mr-3 inline-block h-0.5 w-6 bg-accent align-middle" />
        <span className="text-accent">{index}</span> — {label}
      </p>
      <div className="lg:col-span-9">
        <h2
          id={`${id}-title`}
          className="reveal text-display mb-12 max-w-[22ch] text-[clamp(2.25rem,3vw+1.25rem,3.5rem)]"
        >
          {title}
        </h2>
        {children}
      </div>
    </div>
  </section>
);

export default Section;

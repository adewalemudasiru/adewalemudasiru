import { lazy, Suspense } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Section from "../../components/shared/Section";
import ProjectCard from "../../components/shared/ProjectCard";

// The form pulls in zod, TanStack Form and EmailJS; keep them out of the first-paint bundle.
const ContactForm = lazy(() =>
  import("../../components/ui/ContactForm").then((m) => ({ default: m.ContactForm })),
);
import {
  profile,
  links,
  projects,
  skills,
  experience,
  education,
} from "../../components/data/allData";

const [featured, ...otherProjects] = projects;

const Home = () => (
  <>
    {/* Hero */}
    <section aria-labelledby="hero-title" className="container-page pt-16 pb-20 sm:pt-28 sm:pb-28">
      <p className="animate-rise font-mono text-xs tracking-wider text-muted uppercase">
        {profile.name} · {profile.role} · {profile.location}
      </p>
      <h1
        id="hero-title"
        className="animate-rise text-display mt-6 max-w-[17ch] text-[clamp(2.75rem,6vw+1rem,6rem)] [animation-delay:80ms]"
      >
        Careful frontends for dashboards, <em className="text-accent">back offices</em> and
        websites.
      </h1>
      <p className="animate-rise mt-8 max-w-[58ch] text-lg text-muted [animation-delay:160ms] sm:text-xl">
        I turn Figma designs into responsive React and TypeScript interfaces — admin dashboards,
        marketplace back offices, client portals — and build the websites that sit in front of
        them.
      </p>
      <div className="animate-rise mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 [animation-delay:240ms]">
        <a
          href="#work"
          className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-medium text-accent-fg transition-[opacity,transform] hover:opacity-90 active:scale-[0.98]"
        >
          View selected work <ArrowDown size={16} aria-hidden="true" />
        </a>
        <a href="#contact" className="link-underline font-medium">
          Get in touch
        </a>
        <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="link-underline font-medium">
          Résumé <span className="font-mono text-xs text-muted">(PDF)</span>
        </a>
      </div>
    </section>

    <Section id="work" index="01" label="Selected work" title="Products I've designed, built and rebuilt.">
      <ProjectCard project={featured} featured />
      <div className="mt-20 grid gap-x-10 gap-y-16 md:grid-cols-2">
        {otherProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>

    <Section id="about" index="02" label="About" title="Design intent, carried through to working code.">
      <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_17rem] md:items-start md:gap-14 lg:grid-cols-[minmax(0,1fr)_19rem]">
        <figure className="reveal w-full max-w-[18rem] md:sticky md:top-24 md:order-last md:max-w-none">
          {/* Duotone: in light mode the B&W photo multiplies over the accent tint, warming its whites into the palette. */}
          <div className="overflow-hidden rounded-lg border border-line bg-accent-soft">
            <img
              src={profile.portrait}
              alt={`Portrait of ${profile.name}`}
              width="680"
              height="850"
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover contrast-[1.05] mix-blend-multiply dark:opacity-90 dark:mix-blend-normal"
            />
          </div>
          <figcaption className="mt-3 flex justify-between font-mono text-xs text-muted">
            <span>{profile.name}</span>
            <span className="text-accent">{profile.location}</span>
          </figcaption>
        </figure>
        <div className="max-w-[62ch] space-y-5 text-lg text-muted">
          <p className="text-fg">
            I&apos;ve spent the last two years building and shipping web applications with React,
            TypeScript and Tailwind CSS, across freelance, volunteer and team roles.
          </p>
          <p>
            Most of my work sits where a design meets real data: translating Figma files into
            interfaces, wiring them to APIs, and making admin and back-office tools comfortable to
            use on any screen. I pay close attention to performance, usability and code the next
            developer can follow.
          </p>
          <p>
            I also enjoy improving what already exists — several of my projects are redesigns and
            migrations, such as moving Crown Reformed from WordPress to React.
          </p>
          <p>
            Away from the keyboard: cycling, video games, anime and manga, the Marvel films, and
            travel.
          </p>
        </div>
      </div>
    </Section>

    <Section id="skills" index="03" label="Capabilities" title="What I work with.">
      <dl className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        {skills.map(({ group, items }) => (
          <div key={group} className="reveal border-t border-line pt-5">
            <dt className="flex items-center gap-2 font-medium"><span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />{group}</dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-accent/30 bg-accent-soft px-3 py-1 font-mono text-xs text-fg"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </Section>

    <Section id="experience" index="04" label="Experience" title="Where I've worked.">
      <ol className="border-b border-line">
        {experience.map((job) => (
          <li
            key={job.company + job.period}
            className="reveal grid gap-2 border-t border-line py-7 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8"
          >
            <p className="font-mono text-sm text-accent sm:pt-1">{job.period}</p>
            <div>
              <h3 className="text-xl font-medium">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>
              <p className="mt-2 max-w-[62ch] text-muted">{job.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="mt-16 font-mono text-xs tracking-wider text-muted uppercase">
        Education &amp; certification
      </h3>
      <ul className="mt-4">
        {education.map((item) => (
          <li
            key={item.title}
            className="reveal grid gap-1 border-t border-line py-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-8"
          >
            <p className="font-mono text-sm text-muted">{item.period}</p>
            <p>
              {item.title} <span className="text-muted">· {item.school}</span>
            </p>
          </li>
        ))}
      </ul>
    </Section>

    <Section id="contact" index="05" tinted label="Contact" title="Tell me about the interface you need built.">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <div>
          <p className="max-w-[40ch] text-lg text-muted">
            Have a project, a role or a collaboration in mind? Send a message with the form, or
            reach me directly.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="link-underline mt-8 inline-block text-lg font-medium text-accent break-all sm:text-xl"
          >
            {profile.email}
          </a>
          <ul className="mt-8 space-y-3 text-muted">
            <li>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-accent">
                {profile.phone}
              </a>
            </li>
            {[
              ["LinkedIn", links.linkedin],
              ["GitHub", links.github],
            ].map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 transition-colors hover:text-accent"
                >
                  {label} <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                Résumé (PDF)
              </a>
            </li>
          </ul>
        </div>
        <Suspense fallback={<div className="min-h-[30rem]" />}>
          <ContactForm />
        </Suspense>
      </div>
    </Section>
  </>
);

export default Home;

import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, featured = false }) => {
  const { title, summary, role, year, stack, image, url } = project;

  return (
    <article
      className={`reveal group relative grid gap-6 ${featured ? "xl:grid-cols-12 xl:gap-10" : ""}`}
    >
      {/* Title text sits behind the image so a failed load still shows something meaningful. */}
      <div
        className={`relative aspect-[2/1] overflow-hidden rounded-lg border border-line bg-surface transition-colors group-hover:border-accent ${featured ? "xl:col-span-7" : ""}`}
      >
        <span className="text-display absolute inset-0 grid place-items-center p-6 text-center text-3xl text-muted">
          {title}
        </span>
        <img
          src={image}
          alt={`Screenshot of the ${title} interface`}
          width="1600"
          height="800"
          loading="lazy"
          decoding="async"
          onError={(e) => (e.currentTarget.style.display = "none")}
          className="relative size-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04] group-focus-within:scale-[1.04]"
        />
      </div>

      <div className={featured ? "xl:col-span-5 xl:self-end" : ""}>
        <p className="font-mono text-xs text-muted"><span className="text-accent">
          {year}</span> · {role}
        </p>
        <h3 className={`text-display mt-2 break-words ${featured ? "text-4xl sm:text-5xl" : "text-3xl"}`}>
          {url ? (
            // Stretched link: the whole card is clickable while keeping one tab stop.
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors group-hover:text-accent after:absolute after:inset-0 after:content-['']"
            >
              {title}
              <ArrowUpRight
                size={22}
                aria-hidden="true"
                className="text-accent transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
              <span className="sr-only">(visit live site, opens in a new tab)</span>
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="mt-3 max-w-[60ch] text-muted">{summary}</p>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs text-muted" aria-label="Technologies">
          {stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ProjectCard;

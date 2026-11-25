# Portfolio Website Modernization Brief
## For `adewalemudasiru.vercel.app`

> **Mission:** Modernize the existing portfolio into a distinctive, credible, conversion-focused personal website. Improve the visual design, content hierarchy, project storytelling, responsiveness, accessibility, performance, and maintainability—without discarding working functionality or inventing facts.

---

## 1. Your role and operating rules

Act as a senior product designer, UX writer, frontend architect, and implementation engineer.

You are working on an **existing** portfolio, not a greenfield project. Your first responsibility is to understand the current application and the actual content in the repository.

### Non-negotiable rules

1. **Audit before editing.** Inspect the repository, package manifest, routes, components, styling system, assets, deployment configuration, and current site behavior before proposing or making structural changes.
2. **Preserve verified facts.** Do not invent employers, clients, job titles, years of experience, project outcomes, user counts, revenue, performance improvements, testimonials, certifications, or technology proficiency.
3. **Preserve valuable existing work.** Retain correct project information, working links, useful features, and functional integrations. Improve their presentation and implementation.
4. **Do not replace the stack without a compelling reason.** Prefer the existing framework, routing approach, styling conventions, and deployment setup. Explain any necessary migration before doing it.
5. **Do not create fake functionality.** Every button, link, form, filter, theme control, and download action must work. Remove or clearly mark unavailable functionality rather than presenting it as operational.
6. **Do not use placeholder content in the finished site.** If information is missing, leave the relevant optional content out or make a clearly documented request for the owner to supply it.
7. **Do not overdesign.** The site should feel intentional, contemporary, and technically accomplished—not like a generic portfolio template or an animation demo.
8. **Keep the project buildable.** Run the available checks and resolve errors introduced by your changes.

---

## 2. Product goals

The portfolio should serve three audiences:

- **Recruiters and hiring managers:** quickly understand the owner's professional focus, technical strengths, experience, and strongest work.
- **Founders and potential clients:** understand the problems the owner can solve and have a frictionless way to start a conversation.
- **Technical peers and collaborators:** inspect real projects, implementation decisions, code, and product thinking.

### Desired visitor journey

1. Understand who the owner is from the hero section.
2. See a small number of strong, relevant projects.
3. Understand the owner's role and contribution to those projects.
4. Build confidence through skills, experience, and evidence.
5. Contact the owner or access a verified résumé/GitHub/LinkedIn profile.

### Success criteria

- The primary message and contact action are immediately understandable.
- The best work is visible without requiring visitors to search through a long list.
- Project cards lead to meaningful details or working demos/repositories.
- The layout works cleanly on small mobile screens through large desktop displays.
- The site loads quickly, is keyboard accessible, and has sound metadata.
- No dead links, broken images, console errors, layout overflow, or nonfunctional controls remain.

---

## 3. Phase 0 — Repository and live-site audit

Before implementation, inspect:

- Framework and version; package manager and scripts.
- App entry points, route structure, layouts, and reusable components.
- CSS strategy, design tokens, fonts, icon library, and animation dependencies.
- Existing pages and navigation.
- Current copy, project data, résumé, profile image, screenshots, logos, and other assets.
- Contact form implementation and its backend/service, if any.
- Analytics, metadata, sitemap, robots configuration, and social preview image.
- Deployment assumptions and environment variables.
- Current desktop, tablet, and mobile behavior.

### Produce an audit summary

Record:

- What currently exists and works.
- What is visually dated or inconsistent.
- What content is missing, weak, duplicated, or unverified.
- Which assets can be reused.
- Which routes and integrations must be preserved.
- The highest-impact changes, ordered by priority.

Then implement the redesign. Do not stop after writing the audit unless a genuine blocker requires owner input.

---

## 4. Creative direction

### Overall visual character

Create a **modern editorial / digital-product-engineering aesthetic**: confident typography, restrained color, generous whitespace, precise alignment, strong project imagery, and subtle interaction details.

The website should feel like the online home of a thoughtful engineer who cares about both product quality and implementation quality.

Avoid:
- Generic template layouts that look interchangeable with thousands of portfolios.
- Excessive gradients, glowing borders, glassmorphism, and neon effects.
- Large decorative blobs that compete with the content.
- Constant motion, scroll-jacking, cursor followers, or distracting parallax.
- Too many cards with identical visual weight.
- Skill progress bars or percentage ratings that cannot be objectively justified.
- Fake terminal windows, fake dashboards, or fabricated metrics.
- Emoji as the primary icon system.

### Suggested palette

Use the existing brand colors if they are already coherent. Otherwise, establish a restrained palette:

- **Primary background:** warm off-white or very dark charcoal, depending on the strongest existing brand direction.
- **Primary text:** high-contrast near-black or soft white.
- **Secondary text:** muted neutral gray with sufficient contrast.
- **Accent:** one deliberate color (for example, electric blue, cobalt, or a restrained green).
- **Surfaces:** subtle tonal differences rather than many competing colors.
- **Borders:** thin, low-contrast separators.

Choose one coherent light or dark default direction. A theme toggle is optional; do not add one unless both themes can be designed and tested properly.

### Typography

Use a clear typographic system:
- A distinctive but readable display face for large headings.
- A highly legible sans-serif for body text and UI.
- A consistent monospace face only for code-like labels or technical metadata.

Use responsive type scales with `clamp()` where appropriate. Keep paragraph line lengths comfortable (roughly 60–75 characters on desktop). Avoid tiny muted text for important information.

### Layout

- Use a consistent max-width container.
- Establish a spacing scale and consistent vertical rhythm.
- Use a clear grid for project cards and content sections.
- Keep content aligned to a deliberate page grid.
- Give sections enough breathing room without creating excessive empty scroll.
- Make mobile layouts feel designed, not merely stacked desktop layouts.

---

## 5. Information architecture and page structure

Prefer a strong single-page experience if that fits the current application. Retain or add dedicated project detail routes when there is enough verified material to justify them.

Recommended order:

1. Header / navigation
2. Hero / positioning
3. Selected projects
4. About / approach
5. Skills and technical capabilities
6. Experience (only if verified information exists)
7. Contact
8. Footer

A writing/articles section is optional. Keep it only if there are real, worthwhile articles to feature.

### Header and navigation

Build a compact, polished header with:
- A simple text-based owner mark or name.
- Links to the main sections.
- A clear contact action.
- A mobile navigation pattern with accessible open/close behavior.

Requirements:
- Header should not consume excessive vertical space.
- Sticky positioning is optional; if used, ensure it does not obscure section headings.
- Provide visible keyboard focus.
- Use real anchor links and meaningful section IDs.
- On mobile, close the menu after a navigation selection and support Escape where appropriate.

### Hero section

The hero must answer, in a few seconds:
- Who is this person?
- What do they build?
- What value do they bring?
- What should a visitor do next?

Suggested content structure (write final copy only from verified information):

- Small eyebrow: professional role or focus.
- Main headline: a concise, specific statement of the owner's value.
- Supporting paragraph: the types of products, systems, or problems the owner works on.
- Primary CTA: “View selected work” or equivalent.
- Secondary CTA: “Get in touch”.
- Optional résumé link, but only if a current résumé exists.
- Optional portrait or visual element if a good, owner-approved asset exists.

Do not use vague claims such as “I turn dreams into reality” or “I build the future.” Prefer concrete language about products, interfaces, backend systems, APIs, or other verified areas of expertise.

Do not invent a location, availability status, years of experience, or employment status.

### Selected projects

This is the most important proof section. Show the strongest **3–5 projects** first, not every project with equal prominence.

Each project preview should include:
- Project name.
- One-sentence description focused on the problem or product purpose.
- Owner's verified role/contribution.
- A small set of relevant technologies.
- A high-quality screenshot, product image, or carefully composed visual.
- A clear link to a case study, live demo, or repository, where available.
- A status label only if accurate and useful (for example, “Live” or “Concept”).

Use varied but consistent compositions where appropriate: one featured project can have a larger visual treatment, while supporting projects use a balanced grid.

Project imagery must:
- Come from existing project assets or approved screenshots.
- Use consistent aspect ratios and intentional cropping.
- Have meaningful alt text.
- Avoid generic stock imagery that misrepresents the actual product.
- Have a deliberate fallback if an image is unavailable.

Do not make up project names, product features, roles, results, or external URLs. Verify every destination.

### Project detail / case study pages

If the repository already has project detail pages, improve them. If not, add detail pages only for projects where enough reliable information exists.

Recommended case-study structure:

1. Project overview
2. Problem / context
3. Goal and constraints
4. My role and responsibilities
5. Approach and key decisions
6. Selected features or implementation highlights
7. Technical architecture / stack (only what was used)
8. Challenges and trade-offs
9. Outcome / lessons learned
10. Live product and source links, if public

Use concrete explanations. If quantitative results are unavailable, describe verified deliverables and lessons rather than fabricating metrics.

### About section

Write a concise, human introduction. It should add context beyond repeating the hero headline.

Possible content:
- Professional interests and working style.
- How the owner approaches product and engineering problems.
- The kinds of teams or problems they enjoy working with.
- A portrait or personal detail only if the owner has supplied or approved it.

Avoid a long biography, generic claims, or unsupported personal details.

### Skills and technical capabilities

Organize skills by capability rather than displaying a wall of badges.

Possible groups (include only verified technologies):
- Frontend engineering
- Backend and API development
- Databases and data modeling
- Infrastructure, tooling, and deployment
- Product engineering / design collaboration

Show technologies as concise labels. Do not assign arbitrary proficiency percentages or claim expert-level mastery without evidence.

Prioritize the technologies most relevant to the owner's actual work. Avoid listing every tool ever tried.

### Experience

Include this section only if the repository contains verified employment, freelance, internship, or other professional experience information.

For each entry:
- Organization and role.
- Dates, if verified.
- Concise responsibilities and contributions.
- Relevant outcomes only when supported by evidence.

If no reliable experience data exists, omit the section rather than filling it with invented timeline entries.

### Contact section

End with a clear, confident invitation to make contact.

Include verified contact channels such as:
- Email.
- LinkedIn.
- GitHub.
- Other professional profiles, if supplied.

If a contact form already exists, preserve its integration and improve its UX. If adding a form:
- Validate fields on client and server as appropriate.
- Show loading, success, and error states.
- Prevent duplicate submissions.
- Include accessible labels and useful error messages.
- Add spam protection appropriate to the existing stack.
- Never expose private API keys in client-side code.
- Do not show a success state unless the message was actually submitted successfully.

A simple `mailto:` link is preferable to a fake form.

### Footer

Include:
- Owner's name or mark.
- A short professional descriptor.
- A small set of relevant navigation links.
- Verified social links.
- Current year generated dynamically.
- Optional back-to-top link.

Keep it quiet and useful.

---

## 6. Interaction and motion

Use motion to clarify hierarchy and provide feedback—not to entertain at the expense of usability.

Good options:
- Subtle section entrance transitions.
- Small hover/focus changes on project cards and links.
- Gentle image reveal or crop transitions.
- Underline or color transitions on navigation.
- Short, restrained menu transitions.

Implementation rules:
- Prefer CSS transitions for simple interactions.
- Use the animation library already installed if it is appropriate.
- Avoid adding a heavy dependency for a minor effect.
- Respect `prefers-reduced-motion`.
- Do not animate essential content in a way that delays access.
- Avoid scroll-jacking and forced scrolling.
- Ensure hover effects have equivalent focus states for keyboard users.
- Keep animations short and purposeful.

---

## 7. Responsive design requirements

Design and verify at these approximate viewport widths:

- Small mobile: 320–375px
- Standard mobile: 390–430px
- Tablet: 768px
- Laptop: 1024–1280px
- Desktop: 1440px and wider

Requirements:
- No horizontal overflow.
- No clipped headings or buttons.
- Comfortable mobile font sizes and tap targets.
- Navigation works with touch and keyboard.
- Project visuals retain sensible crops and aspect ratios.
- Multi-column layouts collapse intentionally.
- Hero content remains clear and prominent on mobile.
- Contact controls remain easy to use.
- Avoid fixed widths that break between common device sizes.

Do not simply shrink desktop typography. Recompose layouts where necessary.

---

## 8. Accessibility

Target WCAG 2.2 AA practices where practical.

Checklist:
- Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
- Correct heading hierarchy; one clear primary `h1`.
- Keyboard access to all interactive elements.
- Visible focus indicators.
- Sufficient text and UI contrast.
- Labels for all form controls.
- Useful alt text for informative images; empty alt for decorative images.
- Accessible names for icon-only buttons.
- Menu state exposed appropriately (for example, `aria-expanded`).
- Reduced-motion support.
- No color-only communication of status.
- No keyboard traps.
- Links describe their destination rather than relying on “click here.”
- Dialogs, if any, manage focus correctly.

Use automated accessibility checks where available, then manually test keyboard navigation.

---

## 9. Performance and implementation quality

Performance is part of the design.

- Use the framework's image optimization approach where available.
- Specify image dimensions or aspect ratios to reduce layout shift.
- Lazy-load below-the-fold imagery.
- Prioritize the hero's primary visual when appropriate.
- Avoid shipping large images when a smaller optimized version is sufficient.
- Use modern image formats where supported.
- Limit third-party scripts.
- Avoid unnecessary client-side JavaScript.
- Use server components or static rendering where the current framework supports them and they make sense.
- Keep fonts efficient; avoid loading unnecessary weights.
- Prevent layout shift from fonts, images, and dynamic content.
- Remove unused dependencies and styles only when safe.

### Performance targets

Aim for strong Core Web Vitals and Lighthouse results:
- Performance: 90+ target where realistic.
- Accessibility: 95+ target.
- Best Practices: 95+ target.
- SEO: 95+ target.

Treat these as targets, not a reason to compromise functionality or falsify results. Measure the finished site and report actual results.

---

## 10. SEO and social sharing

Implement:
- A unique, accurate page title.
- A concise meta description.
- Canonical URL for the production domain.
- Open Graph title, description, URL, and image.
- Twitter/X card metadata where relevant.
- Favicon and app icons using available brand assets.
- Semantic page structure.
- Descriptive project page titles and metadata.
- `sitemap.xml` and `robots.txt` if appropriate to the framework.
- Structured data only where accurate and useful (for example, `Person`); do not invent job titles, employers, or credentials.

Use the actual production domain `https://adewalemudasiru.vercel.app` unless repository configuration or owner instructions establish a different canonical domain.

Ensure social preview images are valid, correctly sized, and committed to the project.

---

## 11. Content and asset integrity

Before finalizing, create an inventory of all content that needs owner confirmation.

Potential owner-supplied items:
- Preferred professional title and positioning.
- Short biography.
- Current résumé PDF.
- Approved portrait.
- Project screenshots and descriptions.
- Project role and contribution for each item.
- Live demo and repository URLs.
- Verified experience and education.
- Email and social profile URLs.
- Testimonials or client logos, if permission exists.

Use existing repository content first. If a detail is uncertain, do not silently assume it is true.

Keep project content in a maintainable data structure where practical, rather than hardcoding repeated markup. For example, a typed project data file can define title, summary, role, technologies, image, featured status, and verified links.

---

## 12. Suggested component architecture

Adapt this to the existing codebase. Do not force this exact structure if the project already has a sound architecture.

Possible component boundaries:

- `SiteHeader`
- `MobileNavigation`
- `HeroSection`
- `SectionHeading`
- `FeaturedProjects`
- `ProjectCard`
- `ProjectDetail`
- `AboutSection`
- `SkillsSection`
- `ExperienceSection` (conditional on verified content)
- `ContactSection`
- `SiteFooter`

Keep:
- Repeated content data separate from presentation.
- Components focused and reusable where reuse is real.
- Styling conventions consistent.
- Types strict if using TypeScript.
- External URLs centralized and easy to audit.
- Form logic separated from presentation where appropriate.

Avoid creating abstractions for one-off elements that make the code harder to follow.

---

## 13. Quality assurance and acceptance criteria

Before declaring the work complete:

### Functional
- [ ] Every navigation item works.
- [ ] Every project link opens the correct destination.
- [ ] Email and social links are correct.
- [ ] Résumé link works if present.
- [ ] Contact form submits successfully if present.
- [ ] Mobile navigation opens, closes, and supports keyboard use.
- [ ] No visible control is inert.
- [ ] Existing valuable routes and functionality are preserved.

### Visual and responsive
- [ ] Design is coherent across all sections.
- [ ] No horizontal overflow at target widths.
- [ ] Images load and crop correctly.
- [ ] Text hierarchy is clear.
- [ ] Mobile layouts are intentionally composed.
- [ ] Hover, focus, active, and disabled states are considered.
- [ ] No accidental placeholder content remains.

### Accessibility
- [ ] Keyboard-only navigation works.
- [ ] Focus is visible.
- [ ] Headings and landmarks are semantic.
- [ ] Form fields have labels and clear errors.
- [ ] Contrast is checked.
- [ ] Reduced-motion preference is respected.

### Engineering
- [ ] Production build succeeds.
- [ ] Lint and type checks pass where configured.
- [ ] No new console errors or React warnings.
- [ ] No broken asset imports.
- [ ] No secrets are committed or exposed.
- [ ] Metadata and social previews are valid.
- [ ] Performance has been measured.

Run the commands that actually exist in the package manifest. Do not claim a test passed if it was not run.

---

## 14. Recommended implementation sequence

Work in this order:

### Step 1 — Audit
Understand the current site and repository. Identify existing strengths, defects, content, and dependencies.

### Step 2 — Establish the design system
Define colors, typography, spacing, container widths, border styles, radii, and interaction states.

### Step 3 — Rebuild the page hierarchy
Implement the header, hero, selected work, about, skills, contact, and footer in a coherent visual system.

### Step 4 — Improve project storytelling
Prioritize the strongest projects, verify their details and links, and improve screenshots and project descriptions.

### Step 5 — Add restrained interactions
Implement purposeful transitions and responsive navigation with reduced-motion support.

### Step 6 — Accessibility, SEO, and performance
Complete semantic markup, metadata, image optimization, keyboard behavior, and performance work.

### Step 7 — Verify
Run build, lint, type checks, and responsive/functional tests. Fix issues before completion.

---

## 15. Final handoff

When implementation is complete, provide a concise handoff containing:

1. **What changed:** the major design, content, and engineering improvements.
2. **Files and routes changed:** the important parts of the implementation.
3. **Preserved functionality:** existing features and integrations retained.
4. **Verification:** exact commands run and whether they passed.
5. **Responsive checks:** viewports tested and any known limitations.
6. **Outstanding owner input:** only the facts or assets that genuinely require confirmation.
7. **Deployment notes:** any environment variables, configuration, or migration steps required.

Do not stop at a mockup or a plan. Implement the modernization in the existing codebase, verify it, and leave the project in a deployable state.

---

## 16. The standard to aim for

The finished portfolio should be:

- **Distinctive:** a recognizable visual identity, not a copied template.
- **Credible:** real work, accurate claims, and working links.
- **Clear:** visitors understand the owner's value quickly.
- **Focused:** the best projects receive the most attention.
- **Refined:** typography, spacing, imagery, and interactions feel deliberate.
- **Accessible:** usable with keyboard, assistive technology, and reduced motion.
- **Fast:** optimized assets and restrained JavaScript.
- **Maintainable:** content and components are easy to update.

**Final instruction:** Make the smallest set of architectural changes needed to deliver a substantial improvement in quality. Prioritize clarity, proof of work, usability, and polish over novelty.

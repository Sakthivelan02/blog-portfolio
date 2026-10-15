import { Link } from "react-router-dom";
import resume from "../data/resume";

function Section({ id, title, children }) {
  return (
    <section id={id} className="grid gap-4 border-t border-line py-10 md:grid-cols-[180px_1fr] md:gap-10">
      <h2 className="text-xl font-bold">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

const Bullets = ({ points }) => (
  <ul className="mt-3 list-disc space-y-1.5 pl-5 font-serif text-[17px] leading-7">
    {points.map((p) => (
      <li key={p}>{p}</li>
    ))}
  </ul>
);

export default function Portfolio() {
  const r = resume;
  const socials = [
    ["LinkedIn", r.links.linkedin],
    ["GitHub", r.links.github],
    ["Portfolio", r.links.portfolio],
  ].filter(([, url]) => url);

  return (
    <div className="mx-auto max-w-5xl px-5">
      {/* Intro */}
      <header className="py-16 md:py-24">
        <p className="text-sm font-medium text-tide">{r.title}</p>
        <h1 className="mt-2 text-5xl font-extrabold leading-none tracking-tight md:text-7xl">{r.name}</h1>
        <p className="mt-6 max-w-2xl font-serif text-xl leading-8 text-muted">
          I build database-driven web applications with React, PHP and Python, and I write about what I learn along the way.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/blog" className="btn btn-primary">Read the blog</Link>
          <a href={r.resumeFile} download className="btn btn-ghost">Download resume</a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
        </div>
      </header>

      <Section id="about" title="About">
        <p className="font-serif text-[17px] leading-7">{r.summary}</p>
      </Section>

      <Section id="skills" title="Skills">
        <dl className="space-y-4">
          {r.skills.map((s) => (
            <div key={s.group} className="grid gap-1 sm:grid-cols-[110px_1fr] sm:gap-4">
              <dt className="text-sm font-medium text-muted">{s.group}</dt>
              <dd className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="rounded-full border border-line bg-white px-3 py-1 text-sm">{i}</span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-8">
          {r.experience.map((e) => (
            <div key={e.role + e.period}>
              <h3 className="text-lg font-bold">{e.role}</h3>
              <p className="text-sm text-muted">{e.company} · {e.period}</p>
              <Bullets points={e.points} />
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <div className="space-y-8">
          {r.projects.map((p) => (
            <div key={p.name}>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="text-lg font-bold">{p.name}</h3>
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="text-sm font-medium text-tide underline">
                    Live demo
                  </a>
                )}
              </div>
              <p className="text-sm text-muted">{p.stack}</p>
              <Bullets points={p.points} />
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <ul className="space-y-3">
          {r.education.map((e) => (
            <li key={e.degree}>
              <p className="font-medium">{e.degree}</p>
              <p className="text-sm text-muted">{e.school} · {e.period}</p>
            </li>
          ))}
        </ul>
        <h3 className="mt-8 font-bold">Certifications</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 font-serif text-[17px]">
          {r.certifications.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Contact">
        <p className="font-serif text-[17px] leading-7">
          Open to full-stack and web developer roles. The fastest way to reach me is email.
        </p>
        <ul className="mt-4 space-y-1 text-[15px]">
          <li><a className="font-medium text-tide underline" href={`mailto:${r.email}`}>{r.email}</a></li>
          <li><a href={`tel:${r.phone.replace(/\s/g, "")}`} className="hover:text-tide">{r.phone}</a></li>
          <li className="text-muted">{r.location}</li>
          {socials.map(([label, url]) => (
            <li key={label}>
              <a href={url} target="_blank" rel="noreferrer" className="font-medium text-tide underline">{label}</a>
            </li>
          ))}
        </ul>
      </Section>

      <footer className="border-t border-line py-8 text-sm text-muted">
        © {new Date().getFullYear()} {r.name}
      </footer>
    </div>
  );
}

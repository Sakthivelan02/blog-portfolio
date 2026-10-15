
import { Link } from "react-router-dom";
import resume from "../data/resume";
import profilePhoto from "../assets/profile-photo.png";

const Card = ({ className = "", children, id }) => (
  <div id={id} className={`card ${className}`}>
    {children}
  </div>
);

const Title = ({ children }) => (
  <h2 className="mb-4 text-sm font-semibold text-volt">
    {children}
  </h2>
);

const Bullets = ({ points = [] }) => (
  <ul className="mt-3 space-y-2 text-[15px] leading-7 text-snow/80">
    {points.map((point, index) => (
      <li key={`${index}-${point}`} className="flex gap-3">
        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-volt" />
        <span>{point}</span>
      </li>
    ))}
  </ul>
);

const stats = [
  ["5", "Featured projects in my portfolio"],
  ["3", "LMS role-based access levels"],
  ["3 months", "Full-stack developer internship"],
];

export default function Portfolio() {
  const r = resume;
  const firstName = r.name.split(" ")[0];

  const socials = [
    ["LinkedIn", r.links.linkedin],
    ["GitHub", r.links.github],
    ["Portfolio", r.links.portfolio],
  ].filter(([, url]) => url);

  return (
    <main className="mx-auto max-w-6xl px-5">
      {/* Hero Section */}
      <header className="py-20 motion-safe:animate-fade-up md:py-28">
        <div className="grid gap-12 md:grid-cols-12 md:items-center">
          <div className="md:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 text-sm text-mist">
              <span className="h-2 w-2 rounded-full bg-volt" />
              Open to full-stack roles
            </span>

            <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
              Hi, I'm {firstName}.
              <br />
              <span className="text-volt">{r.title}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-mist">
              I build responsive, database-driven web applications using React,
              JavaScript, Node.js, PHP, Python and modern web technologies.
              I enjoy turning ideas into useful digital experiences.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/blog" className="btn btn-primary">
                Read the blog
              </Link>

              <a href={r.resumeFile} download className="btn btn-ghost">
                Download resume
              </a>

              <a href="#projects" className="btn btn-ghost">
                View projects
              </a>

              <a href="#contact" className="btn btn-ghost">
                Get in touch
              </a>
            </div>
          </div>

          {/* Profile Photo Card */}
          <div className="flex justify-center md:col-span-5 md:justify-end">
            <div className="relative w-full max-w-xs">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-volt to-emerald-500 opacity-30 blur-xl"></div>
              <div className="relative overflow-hidden rounded-3xl border border-line bg-panel p-2 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt={r.name}
                  className="aspect-[4/5] w-full rounded-2xl object-cover object-top grayscale-[15%] transition duration-500 hover:grayscale-0 hover:scale-[1.02]"
                />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-line/55 bg-panel/90 px-4 py-2.5 backdrop-blur-md">
                  <p className="font-display text-sm font-bold text-snow">{r.name}</p>
                  <p className="text-xs text-mist">{r.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About and Location */}
      <section
        aria-label="About me"
        className="grid gap-4 md:grid-cols-3"
      >
        <Card id="about" className="md:col-span-2">
          <Title>About</Title>
          <p className="text-[17px] leading-8 text-snow/85">
            {r.summary}
          </p>
        </Card>

        <Card className="flex flex-col justify-between">
          <div>
            <Title>Based in</Title>
            <p className="font-display text-2xl font-bold">
              {r.location}
            </p>
          </div>

          <a
            href={r.resumeFile}
            download
            className="btn btn-ghost mt-6 w-full"
          >
            Download resume
          </a>
        </Card>

        {/* Portfolio Stats */}
        {stats.map(([big, small]) => (
          <Card key={big}>
            <p className="font-display text-4xl font-extrabold text-volt">
              {big}
            </p>
            <p className="mt-2 text-sm text-mist">{small}</p>
          </Card>
        ))}

        {/* Skills */}
        <Card id="skills" className="md:col-span-3">
          <Title>Skills</Title>

          <div className="grid gap-6 sm:grid-cols-2">
            {r.skills.map((skill) => (
              <div key={skill.group}>
                <p className="mb-2 text-sm font-medium text-mist">
                  {skill.group}
                </p>

                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-line bg-raised px-3 py-1 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Experience */}
        <Card id="experience" className="md:col-span-2">
          <Title>Experience</Title>

          <div className="space-y-8">
            {r.experience.map((experience) => (
              <div
                key={`${experience.role}-${experience.period}`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-bold">
                    {experience.role}
                  </h3>

                  <span className="text-sm text-mist">
                    {experience.period}
                  </span>
                </div>

                <p className="text-sm text-mist">
                  {experience.company}
                </p>

                <Bullets points={experience.points} />
              </div>
            ))}
          </div>
        </Card>

        {/* Education and Certifications */}
        <Card id="education">
          <Title>Education</Title>

          <ul className="space-y-4">
            {r.education.map((education) => (
              <li key={education.degree}>
                <p className="font-medium leading-snug">
                  {education.degree}
                </p>

                <p className="text-sm text-mist">
                  {education.school} · {education.period}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mb-2 mt-8 text-sm font-semibold text-volt">
            Certifications
          </h3>

          <ul className="space-y-2 text-sm leading-6 text-snow/80">
            {r.certifications.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </Card>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mt-16 scroll-mt-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-volt">
              WHAT I'VE BUILT
            </p>

            <h2 className="mt-2 text-3xl font-extrabold md:text-5xl">
              Featured Projects
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-mist">
              A selection of web applications showcasing my frontend,
              backend, database and API integration skills.
            </p>
          </div>

          <span className="rounded-full border border-line bg-panel px-3 py-1.5 text-sm text-mist">
            {r.projects.length} projects
          </span>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {r.projects.map((project, index) => (
            <Card
              key={project.name}
              className="flex flex-col transition-colors duration-300 hover:border-volt/50"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="rounded-lg border border-line bg-raised px-3 py-1.5 text-xs font-semibold text-volt">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </span>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-volt hover:underline"
                  >
                    Live demo ↗
                  </a>
                )}
              </div>

              <h3 className="text-xl font-bold leading-snug md:text-2xl">
                {project.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-mist">
                {project.stack}
              </p>

              <div className="my-4 h-px bg-line" />

              <Bullets points={project.points} />

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-volt hover:underline"
                >
                  Explore project
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="mt-8">
        <Card id="contact" className="text-center md:py-16">
          <p className="text-sm font-semibold text-volt">CONTACT</p>

          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold leading-tight md:text-5xl">
            Let's build something together.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-mist">
            Have an opportunity or a project idea? Feel free to reach out.
          </p>

          <a
            href={`mailto:${r.email}`}
            className="mt-6 inline-block break-all text-xl font-semibold text-volt hover:underline"
          >
            {r.email}
          </a>

          <p className="mt-3 text-mist">
            <a
              href={`tel:${r.phone.replace(/\s/g, "")}`}
              className="hover:text-snow"
            >
              {r.phone}
            </a>
            {" · "}
            {r.location}
          </p>

          {socials.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {socials.map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </Card>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center text-sm text-mist">
        © {new Date().getFullYear()} {r.name}. All rights reserved.
      </footer>
    </main>
  );
}
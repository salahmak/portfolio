import { motion } from 'framer-motion';
import usePortfolioData from '../../hooks/usePortfolioData';
import SectionTitle from '../ui/SectionTitle';

const Projects = () => {
  const { projects, contact } = usePortfolioData();

  if (!projects.length) {
    return null;
  }

  const featured = projects.filter((p) => p.featured);
  const archive = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="border-t-2 border-ink py-20 dark:border-bone md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle index="01" label="Work" title="Selected case studies" />

        <div className="space-y-16">
          {featured.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true, margin: '-80px' }}
              className="grid items-stretch gap-8 md:grid-cols-2"
            >
              {/* Image panel — alternate sides on desktop */}
              <div className={`panel overflow-hidden shadow-hard dark:shadow-hard-bone ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="flex items-center justify-between border-b-2 border-ink px-4 py-2 dark:border-bone">
                  <span className="label-mono">[CASE-{String(index + 1).padStart(2, '0')}]</span>
                  <span className="label-mono text-stamp">{project.year}</span>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-64 w-full object-cover object-top md:h-[calc(100%-2.5rem)]"
                />
              </div>

              {/* Content */}
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="label-mono text-stamp">{project.role}</p>
                <h3 className="font-display mt-3 text-2xl font-bold uppercase tracking-tight md:text-3xl">
                  {project.title}
                </h3>
                {project.outcome && (
                  <p className="mt-3 font-mono text-lg font-semibold text-accent">
                    → {project.outcome}
                  </p>
                )}
                <p className="mt-4 leading-relaxed text-ink/70 dark:text-bone/70">
                  {project.description}
                </p>

                {project.metrics && (
                  <ul className="mt-5 space-y-2">
                    {project.metrics.map((metric) => (
                      <li key={metric} className="flex items-start gap-3 font-mono text-sm">
                        <span className="mt-1 inline-block h-2 w-2 shrink-0 bg-accent" aria-hidden="true"></span>
                        {metric}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="label-mono border-2 border-ink/30 px-2 py-1 text-ink/70 dark:border-bone/30 dark:text-bone/70">
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.demo || project.github) && (
                  <div className="mt-6 flex gap-4">
                    {project.demo && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-push-ghost !px-4 !py-2 text-xs">
                        Live demo ↗
                      </a>
                    )}
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-push-ghost !px-4 !py-2 text-xs">
                        Source ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Mid-page conversion nudge */}
        <div className="panel mt-16 flex flex-col items-start justify-between gap-6 p-6 shadow-hard dark:shadow-hard-bone md:flex-row md:items-center md:p-8">
          <p className="font-display text-xl font-bold uppercase md:text-2xl">
            Have a similar problem to solve?
          </p>
          <a href={`mailto:${contact.email}`} className="btn-push-primary shrink-0">
            Let's talk →
          </a>
        </div>

        {/* Archive */}
        {archive.length > 0 && (
          <div className="mt-20">
            <div className="label-mono mb-8 flex items-center gap-3 text-stamp">
              <span className="inline-block h-2 w-2 bg-accent" aria-hidden="true"></span>
              <span>[ More work / Archive ]</span>
              <span className="hidden sm:block flex-1 border-t-2 border-ink/20 dark:border-bone/20"></span>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {archive.map((project, index) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: (index % 3) * 0.05 }}
                  viewport={{ once: true }}
                  className="panel flex flex-col p-5 transition-all duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard dark:hover:shadow-hard-bone"
                >
                  <div className="label-mono flex justify-between text-stamp">
                    <span>{project.role}</span>
                    <span>{project.year}</span>
                  </div>
                  <h4 className="font-display mt-3 text-lg font-bold uppercase leading-tight">
                    {project.title}
                  </h4>
                  {project.outcome && (
                    <p className="mt-2 font-mono text-xs font-semibold text-accent">→ {project.outcome}</p>
                  )}
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70 dark:text-bone/70">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="label-mono border border-ink/30 px-1.5 py-0.5 !text-[10px] text-ink/60 dark:border-bone/30 dark:text-bone/60">
                        {tech}
                      </span>
                    ))}
                  </div>
                  {(project.demo || project.github) && (
                    <div className="label-mono mt-4 flex gap-4 border-t-2 border-ink/10 pt-3 dark:border-bone/10">
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                          Demo ↗
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                          Source ↗
                        </a>
                      )}
                    </div>
                  )}
                </motion.article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

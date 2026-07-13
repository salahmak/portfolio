import { motion } from 'framer-motion';
import usePortfolioData from '../../hooks/usePortfolioData';
import SectionTitle from '../ui/SectionTitle';

const Experience = () => {
  const { experience, education } = usePortfolioData();

  if (!experience.length && !education.length) {
    return null;
  }

  return (
    <section id="experience" className="border-t-2 border-ink py-20 dark:border-bone md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle index="03" label="Log" title="Experience" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="panel divide-y-2 divide-ink dark:divide-bone"
        >
          {experience.map((job) => (
            <div
              key={`${job.title}-${job.company}-${job.startDate}`}
              className="grid gap-3 p-5 md:grid-cols-[220px_1fr_140px] md:gap-6 md:p-6"
            >
              <div className="label-mono text-meta">
                {job.startDate} - {job.endDate}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold uppercase leading-tight">
                  {job.title} <span className="text-accent">@ {job.company}</span>
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70 dark:text-bone/70">
                  {job.description}
                </p>
              </div>
              <div className="label-mono text-meta md:text-right">{job.location}</div>
            </div>
          ))}
        </motion.div>

        {education.length > 0 && (
          <>
            <div className="label-mono mb-6 mt-16 flex items-center gap-3 text-meta">
              <span className="inline-block h-2 w-2 bg-accent" aria-hidden="true"></span>
              <span>[ Training / Education ]</span>
              <span className="hidden sm:block flex-1 border-t-2 border-ink/20 dark:border-bone/20"></span>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              viewport={{ once: true }}
              className="grid gap-6 md:grid-cols-2"
            >
              {education.map((edu) => (
                <div key={edu.degree} className="panel p-5">
                  <div className="label-mono flex justify-between text-meta">
                    <span>{edu.startDate} - {edu.endDate}</span>
                    <span>{edu.location}</span>
                  </div>
                  <h3 className="font-display mt-3 text-lg font-bold uppercase leading-tight">{edu.degree}</h3>
                  <p className="mt-1 font-mono text-sm text-accent">{edu.institution}</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70 dark:text-bone/70">{edu.description}</p>
                </div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};

export default Experience;

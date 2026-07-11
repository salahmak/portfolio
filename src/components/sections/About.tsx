import { motion } from 'framer-motion';
import usePortfolioData from '../../hooks/usePortfolioData';
import SectionTitle from '../ui/SectionTitle';

const About = () => {
  const { about, stats, availability } = usePortfolioData();

  return (
    <section id="about" className="border-t-2 border-ink py-20 dark:border-bone md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle index="04" label="About" title="The person behind the work" />

        <div className="grid items-start gap-10 md:grid-cols-[320px_1fr]">
          {/* Photo panel */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            viewport={{ once: true }}
            className="panel mx-auto w-full max-w-xs md:mx-0"
          >
            <img
              src={about.image}
              alt={about.name}
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
            <div className="border-t-2 border-ink px-4 py-3 dark:border-bone">
              <p className="font-display font-bold uppercase">{about.name}</p>
              <p className="label-mono mt-1 text-meta">{about.title}</p>
            </div>
          </motion.div>

          {/* Bio + stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg leading-relaxed text-ink/80 dark:text-bone/80 md:text-xl">
              {about.bio}
            </p>
            <p className="mt-4 font-mono text-sm text-meta">
              {availability.status} · {availability.location}
            </p>

            <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="border-t-2 border-ink pt-4 dark:border-bone">
                  <p className="font-display text-4xl font-bold text-accent">{stat.value}</p>
                  <p className="label-mono mt-2 leading-relaxed text-meta">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href={about.social.github} target="_blank" rel="noopener noreferrer" className="btn-push-ghost !px-4 !py-2 text-xs">
                GitHub ↗
              </a>
              <a href={about.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-push-ghost !px-4 !py-2 text-xs">
                LinkedIn ↗
              </a>
              {about.social.devpost && (
                <a href={about.social.devpost} target="_blank" rel="noopener noreferrer" className="btn-push-ghost !px-4 !py-2 text-xs">
                  Devpost ↗
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

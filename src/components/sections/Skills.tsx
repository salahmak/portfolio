import { motion } from 'framer-motion';
import usePortfolioData from '../../hooks/usePortfolioData';
import SectionTitle from '../ui/SectionTitle';

const Skills = () => {
  const { skills } = usePortfolioData();

  if (!skills.length) {
    return null;
  }

  return (
    <section id="skills" className="border-t-2 border-ink py-20 dark:border-bone md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle index="02" label="Capabilities" title="What I work with" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="panel divide-y-2 divide-ink dark:divide-bone"
        >
          {skills.map((group) => (
            <div
              key={group.category}
              className="grid gap-2 p-5 md:grid-cols-[260px_1fr] md:gap-8 md:p-6"
            >
              <h3 className="font-display text-sm font-bold uppercase tracking-wide">
                {group.category}
              </h3>
              <p className="font-mono text-sm leading-loose text-ink/80 dark:text-bone/80">
                {group.items.join('  ·  ')}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

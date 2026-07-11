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

        <div className="grid gap-6 md:grid-cols-2">
          {skills.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (index % 2) * 0.08 }}
              viewport={{ once: true }}
              className="panel shadow-hard-sm dark:shadow-hard-bone-sm"
            >
              <div className="flex items-center justify-between border-b-2 border-ink px-4 py-3 dark:border-bone">
                <h3 className="label-mono font-semibold">
                  [MOD-{String(index + 1).padStart(2, '0')}] {group.category}
                </h3>
                <span className="label-mono text-stamp">×{group.items.length}</span>
              </div>
              <ul className="flex flex-wrap gap-2 p-4">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="label-mono border-2 border-ink/30 px-2.5 py-1.5 transition-colors duration-150 hover:border-accent hover:bg-accent hover:text-bone dark:border-bone/30"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

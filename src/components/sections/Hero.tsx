import { motion } from 'framer-motion';
import usePortfolioData from '../../hooks/usePortfolioData';

const CORE_STACK = ['Python', 'TypeScript', 'React', 'Next.js', 'Flutter', 'TensorFlow', 'PyTorch', 'Docker'];

const Hero = () => {
  const portfolioData = usePortfolioData();
  const { hero, availability, contact, about } = portfolioData;

  return (
    <section className="bg-grid relative flex min-h-screen flex-col justify-between pt-16">
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-4 py-20 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="label-mono mb-10 flex items-center gap-3 text-meta">
            <span className="inline-block h-2 w-2 bg-accent" aria-hidden="true"></span>
            {hero.eyebrow} · Est. 2020
          </p>

          <h1 className="font-display max-w-4xl text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
            {hero.headlineStart}{' '}
            <span className="inline-block bg-accent px-3 text-bone dark:text-ink">{hero.headlineHighlight}</span>
          </h1>

          <p className="mt-10 max-w-xl text-lg leading-relaxed text-ink/70 dark:text-bone/70">
            {hero.subline}
          </p>

          <div className="mt-12 flex flex-wrap gap-5">
            <a href={`mailto:${contact.email}`} className="btn-push-primary">
              {hero.ctaPrimary} →
            </a>
            <a href={about.resume} download target="_blank" rel="noopener noreferrer" className="btn-push-ghost">
              {hero.ctaSecondary}
            </a>
          </div>
        </motion.div>

        {/* Spec sheet */}
        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.12 }}
          className="panel mt-20 grid grid-cols-2 md:grid-cols-4"
        >
          {[
            {
              label: 'Status',
              value: (
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse-soft bg-accent" aria-hidden="true"></span>
                  {availability.status}
                </span>
              ),
            },
            { label: 'Location', value: availability.location },
            { label: 'Response', value: availability.response },
            { label: 'Focus', value: availability.focus },
          ].map((cell, i) => {
            const cellBorders = [
              '',
              'border-l-2',
              'border-t-2 md:border-t-0 md:border-l-2',
              'border-l-2 border-t-2 md:border-t-0',
            ];
            return (
              <div key={cell.label} className={`p-4 border-ink dark:border-bone ${cellBorders[i]}`}>
                <dt className="label-mono text-meta">{cell.label}</dt>
                <dd className="mt-2 font-mono text-sm font-semibold">{cell.value}</dd>
              </div>
            );
          })}
        </motion.dl>
      </div>

      {/* Static stack strip */}
      <div className="border-t-2 border-ink bg-ink py-3 text-bone dark:border-bone dark:bg-bone dark:text-ink">
        <p className="label-mono mx-auto max-w-6xl overflow-hidden text-ellipsis whitespace-nowrap px-4 text-center md:px-6">
          <span className="text-bone/50 dark:text-ink/50">Core stack: </span>
          {CORE_STACK.join('  ·  ')}
        </p>
      </div>
    </section>
  );
};

export default Hero;

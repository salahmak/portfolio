import { motion } from 'framer-motion';
import usePortfolioData from '../../hooks/usePortfolioData';
import { generateCV } from '../../utils/generateCV';

const Hero = () => {
  const portfolioData = usePortfolioData();
  const { hero, availability, contact, skills } = portfolioData;

  const handleDownloadCV = () => {
    generateCV(portfolioData);
  };

  const marqueeItems = skills.flatMap((group) => group.items);

  return (
    <section className="bg-grid relative flex min-h-screen flex-col justify-between pt-16">
      <div className="mx-auto w-full max-w-6xl flex-1 px-4 py-16 md:px-6 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <p className="label-mono mb-8 flex items-center gap-3 text-stamp">
            <span className="inline-block h-2 w-2 bg-accent" aria-hidden="true"></span>
            {hero.eyebrow} — Est. 2020
          </p>

          <h1 className="font-display max-w-4xl text-5xl font-bold uppercase leading-[0.95] tracking-tight md:text-7xl">
            {hero.headlineStart}{' '}
            <span className="inline-block bg-accent px-3 text-bone">{hero.headlineHighlight}</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70 dark:text-bone/70">
            {hero.subline}
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <a href={`mailto:${contact.email}`} className="btn-push-primary">
              {hero.ctaPrimary} →
            </a>
            <button onClick={handleDownloadCV} className="btn-push-ghost">
              {hero.ctaSecondary}
            </button>
          </div>
        </motion.div>

        {/* Spec sheet */}
        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="panel mt-16 grid grid-cols-2 md:grid-cols-4"
        >
          {[
            {
              label: 'Status',
              value: (
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-blink bg-accent" aria-hidden="true"></span>
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
            <div
              key={cell.label}
              className={`p-4 border-ink dark:border-bone ${cellBorders[i]}`}
            >
              <dt className="label-mono text-stamp">{cell.label}</dt>
              <dd className="mt-2 font-mono text-sm font-semibold uppercase">{cell.value}</dd>
            </div>
            );
          })}
        </motion.dl>
      </div>

      {/* Stack marquee */}
      <div className="overflow-hidden border-t-2 border-ink bg-ink py-3 text-bone dark:border-bone dark:bg-bone dark:text-ink">
        <div className="flex w-max animate-marquee gap-8" aria-hidden="true">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="label-mono flex items-center gap-8 whitespace-nowrap">
              {item} <span className="text-accent">■</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

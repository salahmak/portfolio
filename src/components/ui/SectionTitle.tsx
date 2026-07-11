import { motion } from 'framer-motion';

interface SectionTitleProps {
  index: string;
  label: string;
  title: string;
}

const SectionTitle = ({ index, label, title }: SectionTitleProps) => {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="label-mono flex items-center gap-3 text-stamp mb-4">
        <span className="inline-block h-2 w-2 bg-accent" aria-hidden="true"></span>
        <span>
          [ {index} / {label} ]
        </span>
        <span className="hidden sm:block flex-1 border-t-2 border-ink/20 dark:border-bone/20"></span>
      </div>
      <h2 className="font-display text-4xl md:text-6xl font-bold uppercase tracking-tight">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;

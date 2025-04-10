import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const SectionTitle = ({ title, subtitle, center = false }: SectionTitleProps) => {
  return (
    <motion.div 
      className={`mb-12 ${center ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        {title}
        <span className="text-primary">.</span>
      </h2>
      {subtitle && (
        <p className="text-xl text-gray-600 dark:text-gray-400">{subtitle}</p>
      )}
      <div className={`h-1 w-20 bg-primary mt-6 rounded-full ${center ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionTitle; 
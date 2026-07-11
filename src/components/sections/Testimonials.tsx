import { motion } from 'framer-motion';
import usePortfolioData from '../../hooks/usePortfolioData';
import SectionTitle from '../ui/SectionTitle';

const Testimonials = () => {
  const { testimonials } = usePortfolioData();

  if (!testimonials.length) {
    return null;
  }

  return (
    <section id="testimonials" className="border-t-2 border-ink py-20 dark:border-bone md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle index="05" label="Proof" title="What clients say" />

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: (index % 2) * 0.08 }}
              viewport={{ once: true }}
              className="panel p-6"
            >
              <p className="font-display text-6xl leading-none text-accent" aria-hidden="true">"</p>
              <p className="mt-2 leading-relaxed text-ink/80 dark:text-bone/80">{testimonial.text}</p>
              <footer className="mt-6 flex items-center gap-4 border-t-2 border-ink/10 pt-4 dark:border-bone/10">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    loading="lazy"
                    className="h-12 w-12 border-2 border-ink object-cover dark:border-bone"
                  />
                )}
                <div>
                  <p className="font-display font-bold uppercase">{testimonial.name}</p>
                  <p className="label-mono mt-1 text-meta">
                    {testimonial.position} · {testimonial.company}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

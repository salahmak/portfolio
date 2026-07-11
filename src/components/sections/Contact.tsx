import { motion } from 'framer-motion';
import usePortfolioData from '../../hooks/usePortfolioData';
import SectionTitle from '../ui/SectionTitle';

const Contact = () => {
  const { contact, availability, about } = usePortfolioData();

  return (
    <section id="contact" className="border-t-2 border-ink py-20 dark:border-bone md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionTitle index="06" label="Contact" title="Have a project in mind?" />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          viewport={{ once: true }}
          className="panel shadow-hard-lg dark:shadow-hard-bone-lg"
        >
          <div className="grid md:grid-cols-[1fr_320px]">
            <div className="p-6 md:p-10">
              <p className="max-w-xl text-lg leading-relaxed text-ink/80 dark:text-bone/80">
                Tell me what you're building and where it hurts — I'll reply with an honest
                assessment of how I can help, usually within a day. No forms, no gatekeeping:
                one email starts the conversation.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-5">
                <a href={`mailto:${contact.email}`} className="btn-push-primary">
                  {contact.email}
                </a>
                <span className="label-mono flex items-center gap-2 text-meta">
                  <span className="h-2 w-2 bg-accent" aria-hidden="true"></span>
                  {availability.response}
                </span>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href={about.social.github} target="_blank" rel="noopener noreferrer" className="label-mono transition-colors hover:text-accent">
                  GitHub ↗
                </a>
                <a href={about.social.linkedin} target="_blank" rel="noopener noreferrer" className="label-mono transition-colors hover:text-accent">
                  LinkedIn ↗
                </a>
              </div>
            </div>

            {/* Contact spec panel */}
            <div className="border-t-2 border-ink dark:border-bone md:border-l-2 md:border-t-0">
              <div className="border-b-2 border-ink p-5 dark:border-bone">
                <p className="label-mono text-meta">Status</p>
                <p className="mt-2 font-mono text-sm font-semibold uppercase">{availability.status}</p>
              </div>
              <div className="border-b-2 border-ink p-5 dark:border-bone">
                <p className="label-mono text-meta">Phone</p>
                <p className="mt-2 font-mono text-sm font-semibold">{contact.phone}</p>
              </div>
              <div className="p-5">
                <p className="label-mono text-meta">Based in</p>
                <p className="mt-2 font-mono text-sm font-semibold uppercase">{contact.address}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

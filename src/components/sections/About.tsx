import { motion } from 'framer-motion';
import usePortfolioData from '../../hooks/usePortfolioData';
import SectionTitle from '../ui/SectionTitle';

const About = () => {
  const { about, contact } = usePortfolioData();

  return (
    <section id="about" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-4">
        <SectionTitle title="About Me" subtitle="Get to know me better" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl font-bold mb-4">Who am I?</h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
              {about.bio}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="text-lg font-semibold mb-2">Name</h4>
                <p className="text-gray-700 dark:text-gray-300">{about.name}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Email</h4>
                <a 
                  href={`mailto:john.doe@example.com`} 
                  className="text-primary hover:underline"
                >
                  {contact.email}
                </a>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">{contact.address}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Field</h4>
                <p className="text-gray-700 dark:text-gray-300">AI & Software Engineering</p>
              </div>
            </div>
            
            <a 
              href={about.resume} 
              className="px-8 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-xl rotate-6"></div>
              <div className="absolute -inset-4 bg-secondary/20 rounded-xl -rotate-6"></div>
              <img
                src={about.image}
                alt={about.name}
                className="rounded-xl w-full max-w-md relative z-10 border-4 border-white dark:border-dark shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 
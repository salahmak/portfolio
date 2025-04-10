import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import usePortfolioData from '../../hooks/usePortfolioData';
import SectionTitle from '../ui/SectionTitle';

const Testimonials = () => {
  const { testimonials } = usePortfolioData();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length === 0) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  // Don't render the section if testimonials array is empty
  if (!testimonials.length) {
    return null;
  }

  return (
    <section id="testimonials" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto px-4">
        <SectionTitle title="Testimonials" subtitle="What people say about me" center />
        
        <div className="relative mt-12 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === activeIndex ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-10 text-center"
              style={{ display: index === activeIndex ? 'block' : 'none' }}
            >
              <div className="w-24 h-24 mx-auto mb-6 overflow-hidden rounded-full border-4 border-primary">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 italic mb-6">
                "{testimonial.text}"
              </blockquote>
              
              <div className="font-medium">
                <div className="text-xl font-bold text-dark dark:text-light mb-1">{testimonial.name}</div>
                <div className="text-primary">
                  {testimonial.position}, {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          {testimonials.length > 1 && (
            <>
              <button
                className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 lg:-translate-x-16 bg-white dark:bg-gray-800 rounded-full p-3 shadow-md text-primary hover:bg-primary hover:text-white transition-colors"
                onClick={() =>
                  setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
                }
                aria-label="Previous testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 lg:translate-x-16 bg-white dark:bg-gray-800 rounded-full p-3 shadow-md text-primary hover:bg-primary hover:text-white transition-colors"
                onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
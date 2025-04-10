import { useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';

export interface PortfolioData {
  about: {
    name: string;
    title: string;
    bio: string;
    resume: string;
    image: string;
    social: {
      github: string;
      linkedin: string;
    };
  };
  skills: Array<{
    category: string;
    items: string[];
  }>;
  experience: Array<{
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  education: Array<{
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string;
  }>;
  projects: Array<{
    title: string;
    description: string;
    technologies: string[];
    image: string;
    github: string;
    demo: string;
  }>;
  testimonials: Array<{
    name: string;
    position: string;
    company: string;
    image: string;
    text: string;
  }>;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
}

export default function usePortfolioData(): PortfolioData {
  const [data, setData] = useState<PortfolioData>(portfolioData as PortfolioData);

  // This can be extended to fetch data from an API in the future
  useEffect(() => {
    setData(portfolioData as PortfolioData);
  }, []);

  return data;
} 
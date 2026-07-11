import usePortfolioData from '../../hooks/usePortfolioData';

const Footer = () => {
  const { about, contact } = usePortfolioData();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t-2 border-ink bg-ink text-bone dark:border-bone dark:bg-bone dark:text-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 md:h-16 md:flex-row md:py-0 md:px-6">
        <p className="font-mono text-xs uppercase tracking-widest">
          © {currentYear} {about.name}
        </p>
        <p className="font-mono text-xs uppercase tracking-widest text-bone/60 dark:text-ink/60">
          Designed & built by hand <span className="text-accent">■</span> Algiers, DZ
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="font-mono text-xs uppercase tracking-widest transition-colors hover:text-accent"
          >
            Email
          </a>
          <a
            href={about.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={about.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <button
            onClick={scrollToTop}
            className="font-mono text-xs uppercase tracking-widest transition-colors hover:text-accent"
            aria-label="Back to top"
          >
            Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import usePortfolioData from '../../hooks/usePortfolioData';
import ThemeToggle from '../ui/ThemeToggle';

const NAV_ITEMS = [
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Log' },
  { id: 'about', label: 'About' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { contact, availability } = usePortfolioData();

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (location.pathname === '/') {
      e.preventDefault();
      setIsMenuOpen(false);
      scrollToSection(sectionId);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b-2 border-ink bg-bone dark:border-bone dark:bg-ink">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="font-mono text-lg font-bold tracking-tight">
          SALAHMAK<span className="text-accent">.DEV</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              to={`/#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className="label-mono transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
          <span className="label-mono hidden items-center gap-2 text-meta lg:flex">
            <span className="h-2 w-2 bg-accent" aria-hidden="true"></span>
            {availability.status}
          </span>
          <a href={`mailto:${contact.email}`} className="btn-push-primary !px-4 !py-2 text-xs">
            Book a call
          </a>
          <ThemeToggle />
        </nav>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            className="panel flex h-10 w-10 items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="square" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="square" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav className="border-t-2 border-ink bg-bone dark:border-bone dark:bg-ink md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                to={`/#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="label-mono border-b-2 border-ink/10 py-4 transition-colors hover:text-accent dark:border-bone/10"
              >
                {item.label}
              </Link>
            ))}
            <a href={`mailto:${contact.email}`} className="btn-push-primary mt-4 text-xs">
              Book a call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;

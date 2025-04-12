import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      return true;
    }
    return false;
  };

  // Handle navigation click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // Only handle scrolling if we're already on the home page
    if (location.pathname === '/') {
      e.preventDefault();
      scrollToSection(sectionId);
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-light/90 dark:bg-dark/90 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          Salahmak
          <span className="text-secondary">.dev</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink to="/#about" onClick={(e) => handleNavClick(e, 'about')}>About</NavLink>
          <NavLink to="/#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</NavLink>
          <NavLink to="/#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</NavLink>
          <NavLink to="/#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</NavLink>
          {/* <NavLink to="/#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Testimonials</NavLink> */}
          <NavLink to="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</NavLink>
          {/* <ThemeToggle /> */}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          {/* <ThemeToggle /> */}
          <button 
            className="ml-4 text-dark dark:text-light focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-light dark:bg-dark shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink to="/#about" onClick={(e) => handleNavClick(e, 'about')}>About</MobileNavLink>
            <MobileNavLink to="/#skills" onClick={(e) => handleNavClick(e, 'skills')}>Skills</MobileNavLink>
            <MobileNavLink to="/#projects" onClick={(e) => handleNavClick(e, 'projects')}>Projects</MobileNavLink>
            <MobileNavLink to="/#experience" onClick={(e) => handleNavClick(e, 'experience')}>Experience</MobileNavLink>
            <MobileNavLink to="/#testimonials" onClick={(e) => handleNavClick(e, 'testimonials')}>Testimonials</MobileNavLink>
            <MobileNavLink to="/#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</MobileNavLink>
          </div>
        </div>
      )}
    </header>
  );
};

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink = ({ to, children, onClick }: NavLinkProps) => (
  <Link 
    to={to} 
    className="text-dark dark:text-light hover:text-primary dark:hover:text-primary font-medium transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

interface MobileNavLinkProps extends NavLinkProps {
  onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const MobileNavLink = ({ to, onClick, children }: MobileNavLinkProps) => (
  <Link 
    to={to} 
    className="text-dark dark:text-light text-lg py-2 hover:text-primary dark:hover:text-primary font-medium transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header; 
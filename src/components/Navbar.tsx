import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants/data';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav className={`fixed mb-5 top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className={`glass rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link to="/" className="font-semibold text-xl flex items-center gap-2">
              <span className="bg-black text-white px-2 py-0.5 rounded">OJM</span>
              <span className="hidden sm:inline">CONSTRUCTION</span>
            </Link>
          </motion.div>

          <div className="hidden md:flex gap-8 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <Link 
                key={link.url} 
                to={link.url} 
                className={`relative transition-colors hover:text-brand-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-sm group ${location.pathname === link.url ? 'text-brand-gold' : 'text-black/70'}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full ${location.pathname === link.url ? 'w-full' : ''}`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden sm:block"
            >
              <Link 
                to="/contact" 
                className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-brand-gold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
              >
                CONTACT US
              </Link>
            </motion.div>

            <button 
              className="md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          id="mobile-menu"
          role="region"
          aria-label="Mobile navigation menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-6 right-6 mt-2 bg-white/95 backdrop-blur-xl border border-black/10 rounded-3xl p-6 flex flex-col gap-4 shadow-xl z-50"
        >
          {NAV_LINKS.map((link) => (
            <Link 
              key={link.url} 
              to={link.url} 
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg font-medium p-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${location.pathname === link.url ? 'text-brand-gold bg-brand-gold/5' : 'text-black/80 hover:bg-black/5'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className="bg-black text-white px-6 py-4 rounded-full text-center font-bold mt-2 hover:bg-brand-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2"
          >
            CONTACT US
          </Link>
        </motion.div>
      )}
    </nav>
  );
}

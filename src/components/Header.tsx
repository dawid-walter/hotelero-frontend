import React, { useState, useEffect } from 'react';
import { useNavigation } from '../App';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPage, setCurrentPage } = useNavigation();
  
  useEffect(() => {
    // Initial check in case page is loaded scrolled down
    if (window.scrollY > 50) {
      setIsScrolled(true);
    }
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Navigation handler
  const navigateTo = (page: string) => {
    setCurrentPage(page);
    setMobileMenuOpen(false); // Close mobile menu when navigating
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white text-gray-900 shadow-sm py-2' : 'bg-transparent text-white py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
          <span className="text-primary" style={{ color: 'var(--primary-color, #c8a97e)' }}>HOTE</span>LERO
        </h1>
        
        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-4 lg:space-x-8 xl:space-x-10 text-sm uppercase tracking-wider font-medium">
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
                className={`hover:text-primary transition-colors duration-300 ${currentPage === 'home' ? 'text-primary' : ''}`}
                style={{ color: currentPage === 'home' ? 'var(--primary-color, #c8a97e)' : (isScrolled ? '#333' : 'white') }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('rooms'); }}
                className={`hover:text-primary transition-colors duration-300 ${currentPage === 'rooms' ? 'text-primary' : ''}`}
                style={{ color: currentPage === 'rooms' ? 'var(--primary-color, #c8a97e)' : (isScrolled ? '#333' : 'white') }}
              >
                Rooms
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('about'); }}
                className={`hover:text-primary transition-colors duration-300 ${currentPage === 'about' ? 'text-primary' : ''}`}
                style={{ color: currentPage === 'about' ? 'var(--primary-color, #c8a97e)' : (isScrolled ? '#333' : 'white') }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('reservation'); }}
                className={`hover:text-primary transition-colors duration-300 ${currentPage === 'reservation' ? 'text-primary' : ''}`}
                style={{ color: currentPage === 'reservation' ? 'var(--primary-color, #c8a97e)' : (isScrolled ? '#333' : 'white') }}
              >
                Reservation
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}
                className={`hover:text-primary transition-colors duration-300 ${currentPage === 'contact' ? 'text-primary' : ''}`}
                style={{ color: currentPage === 'contact' ? 'var(--primary-color, #c8a97e)' : (isScrolled ? '#333' : 'white') }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        {/* Book Now Button - Hidden on mobile */}
        <a 
          href="#" 
          className="hidden md:block text-sm py-2 px-6 rounded-sm"
          style={{ 
            backgroundColor: 'var(--primary-color, #c8a97e)', 
            color: 'white',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontWeight: 500
          }}
        >
          Book Now
        </a>
        
        {/* Mobile Burger Menu Button */}
        <button 
          className="md:hidden flex items-center justify-center w-10 h-10 bg-transparent focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          style={{ background: 'transparent', outline: 'none' }}
        >
          <div className="flex flex-col space-y-2">
            <div className="w-8 h-1 rounded-sm" style={{ backgroundColor: '#c8a97e' }}></div>
            <div className="w-8 h-1 rounded-sm" style={{ backgroundColor: '#c8a97e' }}></div>
            <div className="w-8 h-1 rounded-sm" style={{ backgroundColor: '#c8a97e' }}></div>
          </div>
        </button>
      </div>
      
      {/* Mobile Menu - Slide down when open */}
      <div 
        className={`md:hidden absolute w-full transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100 shadow-lg' : 'max-h-0 opacity-0'
        } ${isScrolled ? 'bg-white' : 'bg-gray-900'}`}
      >
        <nav className="container mx-auto px-6 py-4">
          <ul className="flex flex-col space-y-4 text-sm uppercase tracking-wider font-medium">
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
                className={`block hover:text-primary transition-colors duration-300 ${currentPage === 'home' ? 'text-primary' : ''}`}
                style={{ color: currentPage === 'home' ? 'var(--primary-color, #c8a97e)' : (isScrolled ? '#333' : 'white') }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('rooms'); }}
                className={`block hover:text-primary transition-colors duration-300 ${currentPage === 'rooms' ? 'text-primary' : ''}`}
                style={{ color: currentPage === 'rooms' ? 'var(--primary-color, #c8a97e)' : (isScrolled ? '#333' : 'white') }}
              >
                Rooms
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('about'); }}
                className={`block hover:text-primary transition-colors duration-300 ${currentPage === 'about' ? 'text-primary' : ''}`}
                style={{ color: currentPage === 'about' ? 'var(--primary-color, #c8a97e)' : (isScrolled ? '#333' : 'white') }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('reservation'); }}
                className={`block hover:text-primary transition-colors duration-300 ${currentPage === 'reservation' ? 'text-primary' : ''}`}
                style={{ color: currentPage === 'reservation' ? 'var(--primary-color, #c8a97e)' : (isScrolled ? '#333' : 'white') }}
              >
                Reservation
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}
                className={`block hover:text-primary transition-colors duration-300 ${currentPage === 'contact' ? 'text-primary' : ''}`}
                style={{ color: currentPage === 'contact' ? 'var(--primary-color, #c8a97e)' : (isScrolled ? '#333' : 'white') }}
              >
                Contact
              </a>
            </li>
            <li className="pt-2">
              <a 
                href="#" 
                className="inline-block text-sm py-2 px-6 rounded-sm"
                style={{ 
                  backgroundColor: 'var(--primary-color, #c8a97e)', 
                  color: 'white',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontWeight: 500
                }}
              >
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

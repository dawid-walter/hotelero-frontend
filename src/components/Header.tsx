import React, { useState, useEffect } from 'react';
import { useNavigation } from '../App';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white text-gray-900 shadow-sm py-2' : 'bg-transparent text-white py-4'
    }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold tracking-tight" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
          <span className="text-primary" style={{ color: 'var(--primary-color)' }}>HOTE</span>LERO
        </h1>
        
        <nav className="flex items-center">
          <ul className="flex space-x-6 md:space-x-10 text-sm uppercase tracking-wider font-medium">
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('home'); }}
                className={`hover:text-primary transition-colors duration-300 ${currentPage === 'home' ? 'text-primary' : ''}`}
                style={{ color: currentPage === 'home' ? 'var(--primary-color)' : (isScrolled ? '#333' : 'white') }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('rooms'); }}
                className={`hover:text-primary transition-colors duration-300 ${currentPage === 'rooms' ? 'text-primary' : ''}`}
                style={{ color: currentPage === 'rooms' ? 'var(--primary-color)' : (isScrolled ? '#333' : 'white') }}
              >
                Rooms
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('about'); }}
                className={`hover:text-primary transition-colors duration-300 ${currentPage === 'about' ? 'text-primary' : ''}`}
                style={{ color: currentPage === 'about' ? 'var(--primary-color)' : (isScrolled ? '#333' : 'white') }}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('reservation'); }}
                className={`hover:text-primary transition-colors duration-300 ${currentPage === 'reservation' ? 'text-primary' : ''}`}
                style={{ color: currentPage === 'reservation' ? 'var(--primary-color)' : (isScrolled ? '#333' : 'white') }}
              >
                Reservation
              </a>
            </li>
            <li>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}
                className={`hover:text-primary transition-colors duration-300 ${currentPage === 'contact' ? 'text-primary' : ''}`}
                style={{ color: currentPage === 'contact' ? 'var(--primary-color)' : (isScrolled ? '#333' : 'white') }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        
        <a 
          href="#" 
          className="text-sm py-2 px-6 rounded-sm"
          style={{ 
            backgroundColor: 'var(--primary-color)', 
            color: 'white',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            fontWeight: 500
          }}
        >
          Book Now
        </a>
      </div>
    </header>
  );
};

export default Header;

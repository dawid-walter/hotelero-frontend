import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-color text-white pt-16 pb-8 mt-auto" style={{ backgroundColor: '#1a1a1a' }}>
      <div className="container mx-auto px-6">
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0 md:w-1/3 md:pr-12">
            <h3 className="text-3xl font-bold tracking-tight mb-6" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
              <span className="text-primary" style={{ color: '#c8a97e' }}>HOTE</span>LERO
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Experience unparalleled luxury at Hotelero, where exceptional service meets breathtaking ocean views for an unforgettable stay.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-primary hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-2/3">
            <div>
              <h4 className="text-white text-lg font-semibold mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Accommodations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Dining</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Spa & Wellness</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Special Offers</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-semibold mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex">
                  <svg className="w-5 h-5 mr-3 text-primary" style={{ color: '#c8a97e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  <span>123 Luxury Avenue<br />Beachfront, FL 33140</span>
                </li>
                <li className="flex">
                  <svg className="w-5 h-5 mr-3 text-primary" style={{ color: '#c8a97e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  <span>+1 (305) 555-7890</span>
                </li>
                <li className="flex">
                  <svg className="w-5 h-5 mr-3 text-primary" style={{ color: '#c8a97e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <span>info@hotelero.com</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white text-lg font-semibold mb-4 uppercase tracking-wider">Newsletter</h4>
              <p className="text-gray-400 mb-4">Subscribe to receive special offers and updates.</p>
              <form className="flex">
                <input type="email" placeholder="Your email" className="bg-gray-800 text-gray-200 px-4 py-2 w-full focus:outline-none" />
                <button type="submit" className="bg-primary text-white px-4 py-2 whitespace-nowrap" style={{ backgroundColor: '#c8a97e' }}>
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Hotelero Luxury Resort. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

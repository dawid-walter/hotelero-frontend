import React, { useState } from 'react';

const Home: React.FC = () => {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [guests, setGuests] = useState(1);
  
  return (
    <div className="bg-white">
      {/* Hero Section with Booking Form */}
      <section className="relative overflow-hidden min-h-screen">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Luxury Hotel" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 pt-48 pb-40 text-center text-white px-4">
          <p className="uppercase tracking-widest text-xs mb-4">WELCOME TO HOTELERO</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
            DELIGHT MOMENT
          </h1>
          <p className="uppercase tracking-widest text-xs mb-16">LUXURY HOTEL & BEST RESORT</p>
        </div>
        
        {/* Booking Form */}
        <div className="relative z-20 mx-auto max-w-4xl -mb-16 px-4">
          <div className="bg-white shadow-lg rounded-sm p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="p-2">
                <label className="block text-gray-700 text-xs font-medium mb-2">Check In</label>
                <input 
                  type="date" 
                  className="w-full border border-gray-300 px-3 py-2 text-sm"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                />
              </div>
              <div className="p-2">
                <label className="block text-gray-700 text-xs font-medium mb-2">Check Out</label>
                <input 
                  type="date" 
                  className="w-full border border-gray-300 px-3 py-2 text-sm"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                />
              </div>
              <div className="p-2">
                <label className="block text-gray-700 text-xs font-medium mb-2">Guests</label>
                <select 
                  className="w-full border border-gray-300 px-3 py-2 text-sm"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value))}
                >
                  {[1, 2, 3, 4, 5, 6].map(num => (
                    <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
              <div className="p-2 flex items-end">
                <button 
                  className="w-full py-2 px-4 text-white text-sm uppercase tracking-wider transition-colors duration-300 focus:outline-none hover:outline-none"
                  style={{ 
                    backgroundColor: 'var(--primary-color)', 
                    border: 'none',
                    outline: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#dab785';
                    e.currentTarget.style.border = 'none';
                    e.currentTarget.style.outline = 'none';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                    e.currentTarget.style.border = 'none';
                    e.currentTarget.style.outline = 'none';
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.border = 'none';
                    e.currentTarget.style.outline = 'none';
                  }}
                >
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* A best place to enjoy your life Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
            A BEST PLACE TO ENJOY YOUR LIFE
          </h2>
          <div className="w-16 h-0.5 bg-gray-300 mx-auto mb-8"></div>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Experience unparalleled luxury and tranquility at our exclusive resort. Immerse yourself in a world of elegance, comfort, and exceptional service.
          </p>
          
          {/* Featured Image */}
          <div className="relative mb-6 p-3 bg-white shadow-md inline-block">
            <img 
              src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80" 
              alt="Luxury Hotel Interior" 
              className="w-full h-auto max-w-2xl"
            />
          </div>
          
          <a href="#" className="text-sm hover:underline" style={{ color: 'var(--primary-color)' }}>
            View More Photos
          </a>
        </div>
      </section>
      
      {/* Luxury Interior Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center tracking-tight" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
            LUXURY INTERIOR
          </h2>
          
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-2/3 mb-8 md:mb-0 md:pr-8">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Luxury Interior" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="w-full md:w-1/3">
              <div className="bg-white p-6 shadow-md mb-4">
                <h3 className="text-xl font-bold mb-2">Superior Room</h3>
                <p className="text-gray-600 mb-4">Starting from $50.00 / Night</p>
                <a href="#" className="text-sm" style={{ color: 'var(--primary-color)' }}>View Details →</a>
              </div>
              
              <div className="bg-white p-6 shadow-md mb-4">
                <h3 className="text-xl font-bold mb-2">Deluxe Suite</h3>
                <p className="text-gray-600 mb-4">Starting from $120.00 / Night</p>
                <a href="#" className="text-sm" style={{ color: 'var(--primary-color)' }}>View Details →</a>
              </div>
              
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold mb-2">Family Room</h3>
                <p className="text-gray-600 mb-4">Starting from $80.00 / Night</p>
                <a href="#" className="text-sm" style={{ color: 'var(--primary-color)' }}>View Details →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
            WHAT CLIENTS SAY
          </h2>
          
          <div className="relative mb-12">
            <div className="text-6xl opacity-20" style={{ color: 'var(--primary-color)' }}>"</div>
            <p className="text-lg italic mb-6 text-gray-600">
              The Monalisa Hotel exceeded all our expectations. The staff was incredibly attentive, the rooms were beautifully appointed, and the amenities were top-notch. We can't wait to return!
            </p>
            <div className="font-medium">John & Sarah Thompson</div>
            <div className="text-sm text-gray-500">New York, USA</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

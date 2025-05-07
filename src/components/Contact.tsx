import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    alert('Message sent successfully!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      {/* Header Section with Black Background */}
      <div className="relative bg-black text-white py-24 mb-12">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold text-center tracking-tight" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
            CONTACT US
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6 mb-4" style={{ backgroundColor: 'var(--primary-color)' }}></div>
          <p className="text-center max-w-2xl mx-auto text-gray-300">
            We're here to answer any questions you might have about our hotel and services. Reach out to us and we'll respond as soon as we can.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We're here to help and answer any question you might have. We look forward to hearing from you.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-3 rounded-sm mr-4" style={{ backgroundColor: 'var(--accent-color)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--primary-color)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>ADDRESS</h3>
                <div className="w-8 h-0.5 my-2" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                <p className="text-gray-600">123 Luxury Avenue<br />Beachfront, FL 33140</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 rounded-sm mr-4" style={{ backgroundColor: 'var(--accent-color)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--primary-color)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>PHONE</h3>
                <div className="w-8 h-0.5 my-2" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                <p className="text-gray-600">+1 (305) 555-7890</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="p-3 rounded-sm mr-4" style={{ backgroundColor: 'var(--accent-color)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--primary-color)' }}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>EMAIL</h3>
                <div className="w-8 h-0.5 my-2" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                <p className="text-gray-600">info@hotelero.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-sm shadow-md">
          <h2 className="text-xl font-semibold mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>SEND US A MESSAGE</h2>
          <div className="w-12 h-0.5 mb-6" style={{ backgroundColor: 'var(--primary-color)' }}></div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 focus:outline-none"
                style={{ borderColor: 'var(--border-color)' }}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 focus:outline-none"
                style={{ borderColor: 'var(--border-color)' }}
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 focus:outline-none"
                style={{ borderColor: 'var(--border-color)' }}
                required
              >
                <option value="">Select a subject</option>
                <option value="reservation">Reservation Inquiry</option>
                <option value="feedback">Feedback</option>
                <option value="support">Customer Support</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-200 focus:outline-none"
                style={{ borderColor: 'var(--border-color)' }}
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 px-6 text-white text-sm uppercase tracking-wider transition-colors duration-300 focus:outline-none hover:outline-none"
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
            >
              Send Message
            </button>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

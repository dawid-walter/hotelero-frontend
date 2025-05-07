import React from 'react';

const About: React.FC = () => {
  return (
    <div>
      {/* Header Section with Black Background */}
      <div className="relative bg-black text-white py-24 mb-12">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold text-center tracking-tight" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
            ABOUT HOTELERO
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6 mb-4" style={{ backgroundColor: 'var(--primary-color)' }}></div>
          <p className="text-center max-w-2xl mx-auto text-gray-300">
            Experience luxury redefined in the heart of paradise. Discover our story, values, and the team behind our exceptional service.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <h2 className="text-3xl font-semibold mb-6 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              OUR STORY
            </h2>
            <div className="w-16 h-0.5 bg-primary mb-6" style={{ backgroundColor: 'var(--primary-color)' }}></div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded in 1995, Hotelero began as a vision to create a sanctuary of luxury and comfort for travelers seeking an exceptional experience. What started as a boutique hotel with just 15 rooms has evolved into an award-winning luxury destination.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our philosophy is simple: to provide unparalleled service in an atmosphere of sophistication and warmth. Every detail, from the architecture to the amenities, has been carefully curated to ensure our guests experience the perfect blend of luxury and comfort.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Over the years, we have welcomed guests from around the world, from celebrities and business leaders to couples celebrating special occasions and families creating lasting memories.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="/images/hotel-exterior.jpg" 
                alt="Hotelero Exterior" 
                className="w-full h-auto rounded-sm shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
                }}
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary flex items-center justify-center text-white text-center p-4" style={{ backgroundColor: 'var(--primary-color)' }}>
                <div>
                  <p className="text-2xl font-semibold">25+</p>
                  <p className="text-sm">YEARS OF EXCELLENCE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section with Background */}
      <div className="py-20" style={{ backgroundColor: 'var(--accent-color)' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              OUR VALUES
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" style={{ backgroundColor: 'var(--primary-color)' }}></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At the core of our identity are values that guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-8 shadow-md">
              <div className="w-16 h-16 rounded-sm mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                EXCELLENCE
              </h3>
              <div className="w-10 h-0.5 bg-primary mb-4" style={{ backgroundColor: 'var(--primary-color)' }}></div>
              <p className="text-gray-600">
                We are committed to excellence in every aspect of our service, from the moment you book until the moment you check out.
              </p>
            </div>

            <div className="bg-white p-8 shadow-md">
              <div className="w-16 h-16 rounded-sm mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                PERSONALIZATION
              </h3>
              <div className="w-10 h-0.5 bg-primary mb-4" style={{ backgroundColor: 'var(--primary-color)' }}></div>
              <p className="text-gray-600">
                We believe that true luxury lies in personalized experiences tailored to the unique preferences of each guest.
              </p>
            </div>

            <div className="bg-white p-8 shadow-md">
              <div className="w-16 h-16 rounded-sm mb-6 flex items-center justify-center" style={{ backgroundColor: 'var(--primary-color)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
                SUSTAINABILITY
              </h3>
              <div className="w-10 h-0.5 bg-primary mb-4" style={{ backgroundColor: 'var(--primary-color)' }}></div>
              <p className="text-gray-600">
                We are dedicated to sustainable practices that preserve the beauty of our environment for future generations to enjoy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            OUR LEADERSHIP TEAM
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" style={{ backgroundColor: 'var(--primary-color)' }}></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals who work tirelessly to ensure your stay exceeds all expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="text-center">
            <div className="relative mb-6 inline-block">
              <img 
                src="/images/team-1.jpg" 
                alt="Executive Director" 
                className="w-64 h-64 object-cover rounded-sm"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary text-white py-2" style={{ backgroundColor: 'var(--primary-color)' }}>
                <p className="text-sm uppercase tracking-wider">Executive Director</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              ALEXANDER MORGAN
            </h3>
            <p className="text-gray-600">
              With over 20 years in luxury hospitality, Alexander brings vision and leadership to every aspect of Hotelero.
            </p>
          </div>

          <div className="text-center">
            <div className="relative mb-6 inline-block">
              <img 
                src="/images/team-2.jpg" 
                alt="Head Chef" 
                className="w-64 h-64 object-cover rounded-sm"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary text-white py-2" style={{ backgroundColor: 'var(--primary-color)' }}>
                <p className="text-sm uppercase tracking-wider">Head Chef</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              SOPHIA MARTINEZ
            </h3>
            <p className="text-gray-600">
              Award-winning chef Sophia creates culinary masterpieces that blend local flavors with international techniques.
            </p>
          </div>

          <div className="text-center">
            <div className="relative mb-6 inline-block">
              <img 
                src="/images/team-3.jpg" 
                alt="Guest Relations Manager" 
                className="w-64 h-64 object-cover rounded-sm"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80';
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-primary text-white py-2" style={{ backgroundColor: 'var(--primary-color)' }}>
                <p className="text-sm uppercase tracking-wider">Guest Relations Manager</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              OLIVIA CHEN
            </h3>
            <p className="text-gray-600">
              Olivia ensures that every guest interaction is memorable, personalized, and exceeds expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: 'var(--primary-color)' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <p className="text-xl md:text-2xl italic mb-8 leading-relaxed">
              "Our stay at Hotelero was nothing short of magical. From the moment we arrived, we were treated like royalty. The attention to detail, the impeccable service, and the stunning surroundings made this the most memorable vacation we've ever had."
            </p>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" style={{ backgroundColor: 'var(--primary-color)' }}></div>
            <p className="text-lg font-semibold tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              JAMES & EMILY WILSON
            </p>
            <p className="text-sm text-gray-400">
              Celebrated their 10th anniversary at Hotelero
            </p>
          </div>
        </div>
      </div>

      {/* Awards Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            AWARDS & RECOGNITION
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mb-6" style={{ backgroundColor: 'var(--primary-color)' }}></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're honored to have been recognized for our commitment to excellence in hospitality.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--primary-color)' }}>2023</div>
            <p className="text-sm uppercase tracking-wider font-medium mb-2">Best Luxury Hotel</p>
            <p className="text-xs text-gray-500">Travel & Leisure Awards</p>
          </div>
          
          <div className="text-center p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--primary-color)' }}>2022</div>
            <p className="text-sm uppercase tracking-wider font-medium mb-2">5-Star Excellence</p>
            <p className="text-xs text-gray-500">Forbes Travel Guide</p>
          </div>
          
          <div className="text-center p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--primary-color)' }}>2021</div>
            <p className="text-sm uppercase tracking-wider font-medium mb-2">Best Dining Experience</p>
            <p className="text-xs text-gray-500">Culinary Excellence Awards</p>
          </div>
          
          <div className="text-center p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="text-3xl font-bold mb-2" style={{ color: 'var(--primary-color)' }}>2020</div>
            <p className="text-sm uppercase tracking-wider font-medium mb-2">Sustainable Luxury</p>
            <p className="text-xs text-gray-500">Green Hospitality Awards</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

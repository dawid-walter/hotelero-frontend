import React from 'react';
import Room from './Room';
import type { RoomProps } from './Room';

const Rooms: React.FC = () => {
  // Sample room data - in a real app, this would come from an API
  const rooms: RoomProps[] = [
    {
      id: 1,
      name: 'Standard Room',
      description: 'Comfortable room with all the essential amenities for a pleasant stay.',
      price: 99,
      capacity: 2
    },
    {
      id: 2,
      name: 'Deluxe Room',
      description: 'Spacious room with premium furnishings and a beautiful view.',
      price: 149,
      capacity: 2
    },
    {
      id: 3,
      name: 'Executive Suite',
      description: 'Luxurious suite with separate living area and exclusive amenities.',
      price: 249,
      capacity: 3
    },
    {
      id: 4,
      name: 'Family Room',
      description: 'Perfect for families, with ample space and connected rooms.',
      price: 199,
      capacity: 4
    },
    {
      id: 5,
      name: 'Presidential Suite',
      description: 'Our most exclusive accommodation with premium services and amenities.',
      price: 499,
      capacity: 2
    },
    {
      id: 6,
      name: 'Ocean View Room',
      description: 'Enjoy stunning ocean views from this beautifully appointed room.',
      price: 179,
      capacity: 2
    },
  ];

  return (
    <div>
      {/* Header Section with Black Background */}
      <div className="relative bg-black text-white py-24 mb-12">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold text-center tracking-tight" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
            OUR ROOMS & SUITES
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6 mb-4" style={{ backgroundColor: 'var(--primary-color)' }}></div>
          <p className="text-center max-w-2xl mx-auto text-gray-300">
            Experience luxury and comfort in our carefully designed accommodations, each offering a unique blend of elegance and modern amenities.
          </p>
        </div>
      </div>
      
      {/* Rooms Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <Room key={room.id} {...room} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;

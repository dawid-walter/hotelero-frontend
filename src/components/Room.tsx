import React from 'react';

export interface RoomProps {
  id: number;
  name: string;
  description: string;
  price: number;
  capacity: number;
  imageUrl?: string;
}

const Room: React.FC<RoomProps> = ({ name, description, price, capacity, imageUrl }) => {
  // Default room images based on room type
  const getDefaultImage = () => {
    const defaultImages: Record<string, string> = {
      'Standard Room': 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      'Deluxe Room': 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'Executive Suite': 'https://images.unsplash.com/photo-1591088398332-8a7791972843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      'Family Room': 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'Presidential Suite': 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      'Ocean View Room': 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    };
    
    return defaultImages[name] || 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80';
  };
  
  const roomImage = imageUrl || getDefaultImage();
  
  return (
    <div className="bg-white rounded-sm overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg group">
      <div className="h-64 relative overflow-hidden">
        <img 
          src={roomImage} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        <div className="absolute top-4 right-4 bg-white py-1 px-3 rounded-sm shadow-md">
          <span className="font-medium" style={{ color: 'var(--primary-color)' }}>${price}</span>
          <span className="text-xs text-gray-500">/night</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 tracking-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>{name}</h3>
        <div className="w-10 h-0.5 mb-4" style={{ backgroundColor: 'var(--primary-color)' }}></div>
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
        
        <div className="flex items-center mb-6 text-sm text-gray-500">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
          <span>Max {capacity} {capacity === 1 ? 'Person' : 'People'}</span>
        </div>
        
        <button 
          className="w-full py-3 px-4 text-white text-sm uppercase tracking-wider transition-colors duration-300 focus:outline-none hover:outline-none"
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
          Book Now
        </button>
      </div>
    </div>
  );
};

export default Room;

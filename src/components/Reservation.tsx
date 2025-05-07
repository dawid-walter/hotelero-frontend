import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import type { RoomProps } from './Room';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const Reservation: React.FC = () => {
  const [dateRange, setDateRange] = useState<Value>(null);
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null);
  const [guestInfo, setGuestInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    adults: 1,
    children: 0
  });
  const [step, setStep] = useState(1);

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
    }
  ];

  const handleDateChange = (value: Value) => {
    setDateRange(value);
  };

  const handleRoomSelect = (roomId: number) => {
    setSelectedRoom(roomId);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setGuestInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    setStep(prev => prev + 1);
  };

  const handlePrevStep = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the reservation data to a server
    alert('Reservation submitted successfully!');
    // Reset form
    setDateRange(null);
    setSelectedRoom(null);
    setGuestInfo({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      adults: 1,
      children: 0
    });
    setStep(1);
  };

  const isDateRangeValid = () => {
    return Array.isArray(dateRange) && dateRange[0] !== null && dateRange[1] !== null;
  };

  const calculateTotalNights = () => {
    if (!isDateRangeValid()) return 0;
    const [checkIn, checkOut] = dateRange as [Date, Date];
    const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const calculateTotalPrice = () => {
    if (!isDateRangeValid() || selectedRoom === null) return 0;
    const nights = calculateTotalNights();
    const room = rooms.find(r => r.id === selectedRoom);
    return room ? room.price * nights : 0;
  };

  // Custom styling for the calendar
  const tileClassName = ({ view }: { date: Date; view: string }) => {
    // Add custom classes for styling specific dates
    return view === 'month' ? 'rounded-full hover:bg-blue-100' : null;
  };

  return (
    <div>
      {/* Header Section with Black Background */}
      <div className="relative bg-black text-white py-24 mb-12">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold text-center tracking-tight" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '-0.02em' }}>
            BOOK YOUR STAY
          </h1>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-6 mb-4" style={{ backgroundColor: 'var(--primary-color)' }}></div>
          <p className="text-center max-w-2xl mx-auto text-gray-300">
            Reserve your perfect getaway with our simple booking process. Select your dates, choose your room, and we'll take care of the rest.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto bg-white rounded-sm shadow-md overflow-hidden">
        {/* Progress Steps */}
        <div className="flex border-b border-gray-200">
          <div 
            className={`flex-1 text-center py-4 text-sm uppercase tracking-wider ${step === 1 ? 'font-semibold' : 'text-gray-500'}`}
            style={{ borderBottom: step === 1 ? '2px solid var(--primary-color)' : 'none' }}
          >
            <span className="inline-block bg-gray-200 text-gray-800 w-6 h-6 rounded-full mr-2 text-center" style={{ backgroundColor: step === 1 ? 'var(--primary-color)' : '', color: step === 1 ? 'white' : '' }}>1</span>
            Select Dates
          </div>
          <div 
            className={`flex-1 text-center py-4 text-sm uppercase tracking-wider ${step === 2 ? 'font-semibold' : 'text-gray-500'}`}
            style={{ borderBottom: step === 2 ? '2px solid var(--primary-color)' : 'none' }}
          >
            <span className="inline-block bg-gray-200 text-gray-800 w-6 h-6 rounded-full mr-2 text-center" style={{ backgroundColor: step === 2 ? 'var(--primary-color)' : '', color: step === 2 ? 'white' : '' }}>2</span>
            Choose Room
          </div>
          <div 
            className={`flex-1 text-center py-4 text-sm uppercase tracking-wider ${step === 3 ? 'font-semibold' : 'text-gray-500'}`}
            style={{ borderBottom: step === 3 ? '2px solid var(--primary-color)' : 'none' }}
          >
            <span className="inline-block bg-gray-200 text-gray-800 w-6 h-6 rounded-full mr-2 text-center" style={{ backgroundColor: step === 3 ? 'var(--primary-color)' : '', color: step === 3 ? 'white' : '' }}>3</span>
            Guest Info
          </div>
          <div 
            className={`flex-1 text-center py-4 text-sm uppercase tracking-wider ${step === 4 ? 'font-semibold' : 'text-gray-500'}`}
            style={{ borderBottom: step === 4 ? '2px solid var(--primary-color)' : 'none' }}
          >
            <span className="inline-block bg-gray-200 text-gray-800 w-6 h-6 rounded-full mr-2 text-center" style={{ backgroundColor: step === 4 ? 'var(--primary-color)' : '', color: step === 4 ? 'white' : '' }}>4</span>
            Confirmation
          </div>
        </div>

        {/* Step 1: Date Selection */}
        {step === 1 && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4 tracking-tight text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>SELECT YOUR DATES</h2>
            <div className="w-16 h-0.5 bg-primary mx-auto mb-6" style={{ backgroundColor: 'var(--primary-color)' }}></div>
            <div className="flex flex-col items-center">
              <div className="calendar-container mb-6 w-full max-w-md mx-auto flex justify-center">
                <Calendar 
                  onChange={handleDateChange} 
                  value={dateRange} 
                  selectRange={true}
                  minDate={new Date()}
                  className="rounded-sm border-none shadow-md"
                  tileClassName={tileClassName}
                />
              </div>
              
              {isDateRangeValid() && (
                <div className="p-6 border border-gray-100 shadow-sm w-full max-w-md">
                  <h3 className="font-semibold mb-4 tracking-tight text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>YOUR SELECTION</h3>
                  <div className="w-12 h-0.5 mx-auto mb-4" style={{ backgroundColor: 'var(--primary-color)' }}></div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3" style={{ backgroundColor: 'var(--accent-color)' }}>
                      <p className="text-xs uppercase mb-1">Check-in</p>
                      <p className="font-medium">{(dateRange as [Date, Date])[0].toLocaleDateString()}</p>
                    </div>
                    
                    <div className="text-center p-3" style={{ backgroundColor: 'var(--accent-color)' }}>
                      <p className="text-xs uppercase mb-1">Check-out</p>
                      <p className="font-medium">{(dateRange as [Date, Date])[1].toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div className="text-center mt-4 p-2" style={{ borderTop: '1px solid var(--border-color)' }}>
                    <p className="font-medium">
                      <span className="text-sm uppercase" style={{ color: 'var(--primary-color)' }}>Total Nights:</span> {calculateTotalNights()}
                    </p>
                  </div>
                </div>
              )}
              
              <button 
                onClick={handleNextStep}
                disabled={!isDateRangeValid()}
                className={`mt-6 py-3 px-6 text-white text-sm uppercase tracking-wider transition-colors duration-300 focus:outline-none hover:outline-none ${!isDateRangeValid() ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : ''}`}
                style={{ 
                  backgroundColor: isDateRangeValid() ? 'var(--primary-color)' : '',
                  border: 'none',
                  outline: 'none'
                }}
                onMouseOver={(e) => {
                  if (isDateRangeValid()) {
                    e.currentTarget.style.backgroundColor = '#dab785';
                    e.currentTarget.style.border = 'none';
                    e.currentTarget.style.outline = 'none';
                  }
                }}
                onMouseOut={(e) => {
                  if (isDateRangeValid()) {
                    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                    e.currentTarget.style.border = 'none';
                    e.currentTarget.style.outline = 'none';
                  }
                }}
              >
                Next: Choose Room
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Room Selection */}
        {step === 2 && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Select Your Room</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {rooms.map(room => (
                <div 
                  key={room.id} 
                  className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedRoom === room.id ? 'border-blue-500 bg-blue-50 shadow-md' : 'border-gray-200 hover:border-blue-300'}`}
                  onClick={() => handleRoomSelect(room.id)}
                >
                  <h3 className="text-lg font-semibold">{room.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{room.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Max Capacity: {room.capacity}</span>
                    <span className="text-blue-800 font-bold">${room.price}/night</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={handlePrevStep}
                className="py-3 px-6 text-sm uppercase tracking-wider transition-colors duration-300 focus:outline-none hover:outline-none"
                style={{ 
                  backgroundColor: '#f1f1f1',
                  color: '#333',
                  border: 'none',
                  outline: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#e5e5e5';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#f1f1f1';
                }}
              >
                Back
              </button>
              <button 
                onClick={handleNextStep}
                disabled={selectedRoom === null}
                className={`py-3 px-6 text-white text-sm uppercase tracking-wider transition-colors duration-300 focus:outline-none hover:outline-none ${selectedRoom === null ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : ''}`}
                style={{ 
                  backgroundColor: selectedRoom !== null ? 'var(--primary-color)' : '',
                  border: 'none',
                  outline: 'none'
                }}
                onMouseOver={(e) => {
                  if (selectedRoom !== null) {
                    e.currentTarget.style.backgroundColor = '#dab785';
                    e.currentTarget.style.border = 'none';
                    e.currentTarget.style.outline = 'none';
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedRoom !== null) {
                    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                    e.currentTarget.style.border = 'none';
                    e.currentTarget.style.outline = 'none';
                  }
                }}
              >
                Next: Guest Information
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Guest Information */}
        {step === 3 && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Enter Guest Information</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={guestInfo.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={guestInfo.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={guestInfo.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={guestInfo.phone}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">Adults</label>
                  <select
                    id="adults"
                    name="adults"
                    value={guestInfo.adults}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    {[1, 2, 3, 4].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">Children</label>
                  <select
                    id="children"
                    name="children"
                    value={guestInfo.children}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    {[0, 1, 2, 3].map(num => (
                      <option key={num} value={num}>{num}</option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
            
            <div className="flex justify-between mt-6">
              <button 
                onClick={handlePrevStep}
                className="py-3 px-6 text-sm uppercase tracking-wider transition-colors duration-300 focus:outline-none hover:outline-none"
                style={{ 
                  backgroundColor: '#f1f1f1',
                  color: '#333',
                  border: 'none',
                  outline: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#e5e5e5';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#f1f1f1';
                }}
              >
                Back
              </button>
              <button 
                onClick={handleNextStep}
                disabled={!guestInfo.firstName || !guestInfo.lastName || !guestInfo.email || !guestInfo.phone}
                className={`py-3 px-6 text-white text-sm uppercase tracking-wider transition-colors duration-300 focus:outline-none hover:outline-none ${!guestInfo.firstName || !guestInfo.lastName || !guestInfo.email || !guestInfo.phone ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : ''}`}
                style={{ 
                  backgroundColor: guestInfo.firstName && guestInfo.lastName && guestInfo.email && guestInfo.phone ? 'var(--primary-color)' : '',
                  border: 'none',
                  outline: 'none'
                }}
                onMouseOver={(e) => {
                  if (guestInfo.firstName && guestInfo.lastName && guestInfo.email && guestInfo.phone) {
                    e.currentTarget.style.backgroundColor = '#dab785';
                    e.currentTarget.style.border = 'none';
                    e.currentTarget.style.outline = 'none';
                  }
                }}
                onMouseOut={(e) => {
                  if (guestInfo.firstName && guestInfo.lastName && guestInfo.email && guestInfo.phone) {
                    e.currentTarget.style.backgroundColor = 'var(--primary-color)';
                    e.currentTarget.style.border = 'none';
                    e.currentTarget.style.outline = 'none';
                  }
                }}
              >
                Next: Confirmation
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmation */}
        {step === 4 && (
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Confirm Your Reservation</h2>
            
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Reservation Details:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p><span className="font-medium">Check-in:</span> {(dateRange as [Date, Date])[0].toLocaleDateString()}</p>
                  <p><span className="font-medium">Check-out:</span> {(dateRange as [Date, Date])[1].toLocaleDateString()}</p>
                  <p><span className="font-medium">Total Nights:</span> {calculateTotalNights()}</p>
                </div>
                <div>
                  <p><span className="font-medium">Room Type:</span> {rooms.find(r => r.id === selectedRoom)?.name}</p>
                  <p><span className="font-medium">Guests:</span> {guestInfo.adults} Adults, {guestInfo.children} Children</p>
                  <p><span className="font-medium">Total Price:</span> ${calculateTotalPrice()}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
              <h3 className="font-semibold mb-2">Guest Information:</h3>
              <p><span className="font-medium">Name:</span> {guestInfo.firstName} {guestInfo.lastName}</p>
              <p><span className="font-medium">Email:</span> {guestInfo.email}</p>
              <p><span className="font-medium">Phone:</span> {guestInfo.phone}</p>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={handlePrevStep}
                className="py-3 px-6 text-sm uppercase tracking-wider transition-colors duration-300 focus:outline-none hover:outline-none"
                style={{ 
                  backgroundColor: '#f1f1f1',
                  color: '#333',
                  border: 'none',
                  outline: 'none'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#e5e5e5';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#f1f1f1';
                }}
              >
                Back
              </button>
              <button 
                onClick={handleSubmit}
                className="py-3 px-6 text-white text-sm uppercase tracking-wider transition-colors duration-300 focus:outline-none hover:outline-none"
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
                Confirm Reservation
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default Reservation;

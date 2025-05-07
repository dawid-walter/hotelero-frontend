import React from 'react';
import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;

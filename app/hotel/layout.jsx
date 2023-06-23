import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const layout = ({ children }) => {
  return (
    <main className="flex flex-col max-w-full">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default layout;

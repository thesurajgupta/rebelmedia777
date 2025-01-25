import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Clients } from './components/Clients';
import { Services } from './components/Services';
import { CaseStudies } from './components/CaseStudies';
import { Contact } from './components/Contact';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'services':
        return <Services />;
      case 'pricing':
        return <Pricing />;
      case 'case-studies':
        return <CaseStudies />;
      case 'contact':
        return <Contact />;
      default:
        return (
          <>
            <Hero />
            <Features />
            <Services />
            <Testimonials />
            <CaseStudies />
            <Clients />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onPageChange={setCurrentPage} currentPage={currentPage} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
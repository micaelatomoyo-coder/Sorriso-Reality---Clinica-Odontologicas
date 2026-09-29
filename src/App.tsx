import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureBar } from './components/FeatureBar';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { HistoryPage } from './components/HistoryPage';
import { AppointmentSimulator } from './components/AppointmentSimulator';
import { Testimonials } from './components/Testimonials';
import { InstagramSection } from './components/InstagramSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'historia'>(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#historia') {
      return 'historia';
    }
    return 'home';
  });

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#historia') {
        setCurrentPage('historia');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (window.location.hash === '' || window.location.hash === '#inicio') {
        setCurrentPage('home');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHistory = () => {
    setCurrentPage('historia');
    window.location.hash = '#historia';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenBookingModal = (serviceName?: string) => {
    setSelectedServiceForModal(serviceName || 'Avaliação Gratuita Geral');
    setBookingModalOpen(true);
  };

  const handleCloseBookingModal = () => {
    setBookingModalOpen(false);
    setSelectedServiceForModal(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#008744] selection:text-white pb-14 sm:pb-0">
      {/* Navigation Header */}
      <Navbar 
        onOpenBookingModal={handleOpenBookingModal} 
        currentPage={currentPage}
        onNavigateHome={navigateToHome}
        onNavigateHistory={navigateToHistory}
      />

      {/* Main Content: Render dedicated 25 Anos History Page OR Home Landing Sections */}
      <main className="flex-1">
        {currentPage === 'historia' ? (
          <HistoryPage 
            onBackToHome={navigateToHome} 
            onOpenBookingModal={handleOpenBookingModal} 
          />
        ) : (
          <>
            {/* Hero Section */}
            <Hero onOpenBookingModal={() => handleOpenBookingModal()} />

            {/* 5-Pillar Feature Bar (Under Hero) */}
            <FeatureBar />

            {/* Complete Dental Care Solutions (6-card Grid matching inspiration layout) */}
            <ServicesSection onOpenBookingModal={handleOpenBookingModal} />

            {/* About Sorriso Reality Clinic & Dental Team */}
            <AboutSection 
              onOpenBookingModal={() => handleOpenBookingModal()} 
              onNavigateHistory={navigateToHistory}
            />

            {/* Embedded Interactive Booking & Walk-in Simulator */}
            <section id="agendar" className="scroll-mt-20">
              <AppointmentSimulator isModal={false} />
            </section>

            {/* Patient Reviews & Loved by Our Patients */}
            <Testimonials />

            {/* Live Instagram Feed Embed */}
            <InstagramSection />

            {/* Location, Map & Public Transport Guide in Lapa */}
            <LocationSection />

            {/* Frequently Asked Questions Accordion */}
            <FaqSection />

            {/* Pre-Footer Action Banner */}
            <CtaBanner onOpenBookingModal={() => handleOpenBookingModal()} />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer 
        onOpenBookingModal={handleOpenBookingModal} 
        onNavigateHistory={navigateToHistory}
      />

      {/* Mobile Sticky Bottom Navigation (Mobile-First Web App experience) */}
      <MobileBottomNav onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Desktop Floating WhatsApp Button */}
      <WhatsAppFloatingButton />

      {/* Booking / Walk-in Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        initialService={selectedServiceForModal}
        onClose={handleCloseBookingModal}
      />
    </div>
  );
}

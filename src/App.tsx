import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureBar } from './components/FeatureBar';
import { ServicesSection } from './components/ServicesSection';
import { AboutSection } from './components/AboutSection';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { AppointmentSimulator } from './components/AppointmentSimulator';
import { Testimonials } from './components/Testimonials';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<string | undefined>(undefined);

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
      <Navbar onOpenBookingModal={handleOpenBookingModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 5-Pillar Feature Bar (Under Hero) */}
        <FeatureBar />

        {/* Complete Dental Care Solutions (6-card Grid matching inspiration layout) */}
        <ServicesSection onOpenBookingModal={handleOpenBookingModal} />

        {/* About Dr. José Ricardo Guerra & Sorriso Reality Clinic */}
        <AboutSection onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* Interactive Before & After Smile Slider */}
        <BeforeAfterSlider />

        {/* Embedded Interactive Booking & Walk-in Simulator */}
        <section id="agendar" className="scroll-mt-20">
          <AppointmentSimulator isModal={false} />
        </section>

        {/* Patient Reviews & Loved by Our Patients */}
        <Testimonials />

        {/* Location, Map & Public Transport Guide in Lapa */}
        <LocationSection />

        {/* Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* Pre-Footer Action Banner */}
        <CtaBanner onOpenBookingModal={() => handleOpenBookingModal()} />
      </main>

      {/* Footer */}
      <Footer onOpenBookingModal={handleOpenBookingModal} />

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

import React, { useState, useEffect } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Logo } from './Logo';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  CalendarCheck, 
  MessageCircle, 
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Streamlined essential navigation links for an airy, uncluttered header
  const navLinks = [
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Localização', href: '#localizacao' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white transition-shadow duration-300">
      {/* Top Notification / Contact Bar */}
      <div className="bg-[#005a2b] text-white text-xs font-medium py-1.5 px-4 border-b border-emerald-800/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1.5 text-center sm:text-left">
          {/* Announcement */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#008744] text-white px-2 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase">
              <Sparkles className="w-3 h-3 text-emerald-200" />
              Lapa - SP
            </span>
            <span className="text-emerald-50 text-[11px] sm:text-xs">
              <strong>Avaliação 100% Gratuita</strong> • Atendimento com ou sem agendamento
            </span>
          </div>

          {/* Quick Info */}
          <div className="hidden md:flex items-center gap-5 text-emerald-100/90 text-xs">
            <a
              href={CLINIC_INFO.address.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>{CLINIC_INFO.address.street}</span>
            </a>

            <div className="inline-flex items-center gap-1 text-emerald-200">
              <Clock className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>Seg-Sex 9h-18h | Sáb 9h-13h</span>
            </div>

            <a
              href={`tel:${CLINIC_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1 text-white font-semibold hover:text-emerald-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-300 shrink-0" />
              <span>{CLINIC_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar: Clean, airy and spacious */}
      <nav
        className={`w-full border-b border-slate-100 bg-white/95 backdrop-blur-md transition-all duration-200 ${
          isScrolled ? 'shadow-sm py-2.5' : 'py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6">
          {/* Logo with Link to Home */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#inicio');
            }}
            className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008744] rounded-lg shrink-0"
          >
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links - Spacious & refined */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="text-sm font-semibold text-slate-700 hover:text-[#008744] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#008744] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs md:text-sm font-medium text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#008744]" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold text-white bg-[#008744] hover:bg-[#007038] active:bg-[#005a2b] shadow-sm hover:shadow transition-all duration-200 cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Agendar Avaliação</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => onOpenBookingModal()}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#008744] hover:bg-[#007038] transition-colors"
            >
              Avaliação
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#008744] hover:bg-slate-100 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008744]"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-4 animate-in fade-in duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-[#008744] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#depoimentos"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#depoimentos');
              }}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-[#008744] transition-colors"
            >
              Depoimentos (Google 4.9★)
            </a>
            <a
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#faq');
              }}
              className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-emerald-50 hover:text-[#008744] transition-colors"
            >
              Perguntas Frequentes
            </a>
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-white bg-[#008744] shadow-sm"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Agendar Avaliação Gratuita</span>
            </button>

            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200"
            >
              <MessageCircle className="w-4 h-4 text-[#008744]" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

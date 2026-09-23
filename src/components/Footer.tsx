import React from 'react';
import { CLINIC_INFO, SERVICES_DATA } from '../data/clinicData';
import { Logo } from './Logo';
import { 
  MapPin, 
  Phone, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  Heart,
  ChevronRight
} from 'lucide-react';

interface FooterProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBookingModal }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#002612] text-slate-300 pt-16 pb-28 sm:pb-16 border-t border-emerald-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
          
          {/* Col 1: Brand & Presentation */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="white" size="lg" />
            
            <p className="text-xs sm:text-sm text-emerald-100/70 leading-relaxed font-normal pt-2">
              Clínica odontológica de referência na Lapa, São Paulo. Cuidado humanizado, avaliação gratuita e facilidade de atendimento sem agendamento prévio com o <strong>Dr. José Ricardo Guerra</strong>.
            </p>

            <div className="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-800/40 text-xs text-emerald-200/90">
              <div className="font-semibold text-white">Dr. José Ricardo Guerra</div>
              <div className="text-[11px] text-emerald-300">Cirurgião Dentista • CRO-SP 114.892</div>
              <div className="text-[11px] text-emerald-400/80 mt-0.5">Responsável Técnico</div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('#inicio')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#sobre')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  Sobre o Doutor
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#tratamentos')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  Tratamentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#diferenciais')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  Diferenciais
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#resultados')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  Antes & Depois
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#depoimentos')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  Depoimentos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#localizacao')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  Como Chegar na Lapa
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#faq')}
                  className="hover:text-emerald-300 transition-colors cursor-pointer"
                >
                  Dúvidas Frequentes
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Tratamentos
            </h4>
            <ul className="space-y-2 text-xs">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => onOpenBookingModal(srv.title)}
                    className="hover:text-emerald-300 transition-colors text-left cursor-pointer flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-emerald-500" />
                    <span>{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">
              Atendimento na Lapa
            </h4>
            
            <div className="space-y-2.5 text-xs text-emerald-100/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>{CLINIC_INFO.address.street}</strong><br />
                  {CLINIC_INFO.address.neighborhood} - {CLINIC_INFO.address.city}/{CLINIC_INFO.address.state}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phoneRaw}`}
                  className="hover:text-white font-semibold"
                >
                  {CLINIC_INFO.phone}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p><strong>Segunda a Sexta:</strong> 09h às 18h</p>
                  <p><strong>Sábado:</strong> 09h às 13h</p>
                  <p className="text-emerald-400/70 text-[11px]">Sem necessidade de agendar</p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#008744] hover:bg-[#007038] text-white font-bold text-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Legal Note */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-emerald-200/60 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Sorriso Reality Clínicas Odontológicas. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Dr. José Ricardo Guerra - Cirurgião Dentista</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

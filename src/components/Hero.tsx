import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  ArrowRight, 
  MessageCircle, 
  Sparkles, 
  CheckCircle2,
  ShieldCheck,
  MapPin
} from 'lucide-react';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section 
      id="inicio" 
      className="relative min-h-[600px] lg:min-h-[660px] flex items-center bg-white overflow-hidden"
    >
      {/* 
        HERO RIGHT SIDE IMAGE:
        Patient with a radiant smile in the emerald green dental chair, with new elegant clothing,
        and a soft neutral blurred clinic background (heavy bokeh depth-of-field).
      */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[54%] xl:w-[58%] h-full z-0 pointer-events-none select-none">
        <picture>
          <source srcSet="/images/hero_patient.webp" type="image/webp" />
          <img
            src="/images/hero_patient.jpg"
            alt="Paciente sorridente com dentes brancos na moderna cadeira odontológica verde da clínica Sorriso Reality na Lapa"
            className="w-full h-full object-cover object-[right_center] lg:object-[82%_center]"
            width="1200"
            height="670"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* 
          Desktop Left-to-Right Soft Fade:
          Ensures high text contrast while letting the neutral blurred background merge smoothly into the pure white canvas.
        */}
        <div className="hidden lg:block absolute inset-y-0 left-0 w-28 xl:w-40 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
        
        {/* Soft edge blending at top and bottom */}
        <div className="hidden lg:block absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white/60 to-transparent pointer-events-none" />
        <div className="hidden lg:block absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />

        {/* Mobile backdrop ensuring high contrast for text on small screens */}
        <div className="block lg:hidden absolute inset-0 bg-gradient-to-b from-white/95 via-white/85 to-white/70 backdrop-blur-[0.5px]" />
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18 lg:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Clean, Spacious Headline & Actions */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col items-start text-left max-w-xl">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 border border-emerald-300 text-[#005a2b] text-xs font-bold mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#005a2b]" />
              <span className="tracking-wide uppercase text-[11px] sm:text-xs">
                Clínica Odontológica na Lapa • Sem Agendamento Obrigatório
              </span>
            </div>

            {/* Main Headline with Category + City for Local SEO */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.9rem] font-extrabold text-slate-900 leading-[1.14] tracking-tight mb-5">
              Clínica Odontológica em São Paulo:{' '}
              <span className="text-[#008744] relative inline-block">
                Cuidado Excepcional para o Seu Sorriso.
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2 text-[#008744]/35"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6 font-normal">
              Na <strong className="font-semibold text-slate-900">Sorriso Reality</strong>, celebramos 26 anos de dedicação (2000-2026) com tecnologia moderna, preço justo e acolhimento humano. Equipe completa de cirurgiões dentistas nas unidades Lapa e Freguesia do Ó com avaliação inicial gratuita.
            </p>

            {/* Quick Benefits Bullet Badges */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-8 text-xs sm:text-sm text-slate-800">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50/95 border border-emerald-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0" />
                <span>Avaliação 100% Gratuita</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50/95 border border-emerald-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0" />
                <span>É só chegar (sem filas)</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50/95 border border-emerald-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0" />
                <span>Em até 12x sem juros</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8">
              <button
                type="button"
                onClick={onOpenBookingModal}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#008744] hover:bg-[#007038] active:bg-[#005a2b] shadow-lg shadow-emerald-700/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer text-center"
              >
                <span>Agendar Avaliação Gratuita</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Conversar no WhatsApp com a Sorriso Reality Lapa"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#005a2b] bg-white hover:bg-emerald-50/90 border border-emerald-300 shadow-xs hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-center"
              >
                <MessageCircle className="w-5 h-5 text-[#008744]" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Discreet Doctor Badge positioned at bottom right */}
          <div className="lg:col-span-5 xl:col-span-6 hidden lg:flex justify-end items-end h-full pb-8 pr-4">
            <div className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-[#008744] text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">Sorriso Reality Clínicas</p>
                <p className="text-[11px] text-slate-700 font-medium">26 Anos de Tradição em SP</p>
                <div className="flex items-center gap-1 text-[10px] text-emerald-800 font-bold mt-0.5">
                  <MapPin className="w-3 h-3 text-[#008744]" />
                  <span>Rua Doze de Outubro, 651 - Lapa</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  ArrowRight, 
  MessageCircle, 
  Star, 
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
        <img
          src="/images/hero_patient.jpg"
          alt="Paciente sorridente com dentes brancos na moderna cadeira odontológica verde da clínica Sorriso Reality na Lapa"
          className="w-full h-full object-cover object-[right_center] lg:object-[82%_center]"
          loading="eager"
        />

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
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/90 text-[#006a38] text-xs font-semibold mb-4 shadow-2xs"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#008744]" />
              <span className="tracking-wide uppercase text-[11px] sm:text-xs">
                Clínica Odontológica na Lapa • Sem Agendamento Obrigatório
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.15rem] font-extrabold text-slate-900 leading-[1.12] tracking-tight mb-5"
            >
              Cuidado Excepcional para o Seu{' '}
              <span className="text-[#008744] relative inline-block">
                Sorriso.
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2 text-[#008744]/35"
                  viewBox="0 0 100 8"
                  preserveAspectRatio="none"
                >
                  <path d="M0,5 Q50,0 100,5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: 'easeOut' }}
              className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal"
            >
              Na <strong className="font-semibold text-slate-900">Sorriso Reality</strong>, combinamos tecnologia moderna, acolhimento humano e conforto total. Atendimento direto com o <strong className="font-semibold text-slate-900">Dr. José Ricardo Guerra</strong> na Rua Doze de Outubro com avaliação inicial gratuita.
            </motion.p>

            {/* Quick Benefits Bullet Badges */}
            <motion.div 
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
              className="flex flex-wrap gap-2.5 sm:gap-3 mb-8 text-xs sm:text-sm text-slate-700"
            >
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
            </motion.div>

            {/* Action CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBookingModal}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-[#008744] hover:bg-[#007038] active:bg-[#005a2b] shadow-lg shadow-emerald-700/25 hover:shadow-xl transition-all duration-200 cursor-pointer text-center"
              >
                <span>Agendar Avaliação Gratuita</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm sm:text-base font-semibold text-[#006030] bg-white hover:bg-emerald-50/90 border border-emerald-300 shadow-xs transition-colors text-center"
              >
                <MessageCircle className="w-5 h-5 text-[#008744]" />
                <span>Conversar no WhatsApp</span>
              </motion.a>
            </motion.div>

            {/* Social Proof Cluster */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-200/80 w-full"
            >
              <div className="flex -space-x-2 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                  alt="Paciente Sorriso Reality"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80"
                  alt="Paciente Sorriso Reality"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=80&q=80"
                  alt="Paciente Sorriso Reality"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=80&q=80"
                  alt="Paciente Sorriso Reality"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1 text-xs sm:text-sm font-bold text-slate-800">4.9 / 5.0</span>
                </div>
                <span className="text-[11px] sm:text-xs text-slate-500 font-medium">
                  Mais de 380 pacientes satisfeitos no Google
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Discreet Doctor Badge positioned at bottom right */}
          <div className="lg:col-span-5 xl:col-span-6 hidden lg:flex justify-end items-end h-full pb-8 pr-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: 'easeOut' }}
              className="bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3 max-w-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-[#008744] text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">{CLINIC_INFO.dentist.name}</p>
                <p className="text-[11px] text-slate-500">{CLINIC_INFO.dentist.title} • {CLINIC_INFO.dentist.cro}</p>
                <div className="flex items-center gap-1 text-[10px] text-emerald-700 font-semibold mt-0.5">
                  <MapPin className="w-3 h-3 text-[#008744]" />
                  <span>Rua Doze de Outubro, 651 - Lapa</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

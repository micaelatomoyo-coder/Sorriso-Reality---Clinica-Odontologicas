import React from 'react';
import { motion } from 'framer-motion';
import { CLINIC_INFO } from '../data/clinicData';
import { CalendarCheck, MessageCircle, Sparkles } from 'lucide-react';

interface CtaBannerProps {
  onOpenBookingModal: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="bg-gradient-to-r from-[#005a2b] via-[#007038] to-[#008744] text-white py-12 sm:py-16 relative overflow-hidden">
      {/* Background soft swirl */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0 100 C 30 40, 70 60, 100 0 L 100 100 Z" fill="white" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/40 text-emerald-200 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Sem agendamento obrigatório • Atendimento ágil na Lapa</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight">
              Pronto para Transformar Seu Sorriso?
            </h2>
            <p className="mt-2 text-sm sm:text-base text-emerald-100/90 font-normal max-w-xl">
              Dê o primeiro passo hoje mesmo com uma <strong className="text-white font-semibold">Avaliação 100% Gratuita</strong> com o Dr. José Ricardo Guerra na Rua Doze de Outubro, 651.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto shrink-0">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenBookingModal}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-extrabold text-[#005a2b] bg-white hover:bg-emerald-50 active:bg-slate-100 shadow-lg transition-all text-sm cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4 text-[#008744]" />
              <span>Agendar Avaliação Gratuita</span>
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-4 rounded-xl font-bold text-white bg-emerald-800/80 hover:bg-emerald-800 border border-emerald-400/40 transition-colors text-sm text-center"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Falar no WhatsApp</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

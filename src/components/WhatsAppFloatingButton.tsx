import React, { useState } from 'react';
import { CLINIC_INFO, CLINIC_UNITS } from '../data/clinicData';
import { MessageCircle, X, MapPin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppFloatingButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden sm:block fixed bottom-6 right-6 z-40">
      
      {/* Unit Selection Card Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 mb-2 w-80 p-4 bg-white text-slate-800 rounded-3xl shadow-2xl border border-emerald-100 text-xs z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#008744] text-white flex items-center justify-center">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 text-xs">WhatsApp Sorriso Reality</div>
                  <div className="text-[10px] text-emerald-700 font-semibold">Escolha a unidade:</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Units Options */}
            <div className="space-y-2.5">
              {CLINIC_UNITS.map((unit) => (
                <a
                  key={unit.id}
                  href={unit.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="p-3 rounded-2xl bg-emerald-50/60 hover:bg-emerald-100/80 border border-emerald-200/80 flex items-center justify-between gap-2 transition-all cursor-pointer group"
                >
                  <div>
                    <div className="font-extrabold text-slate-900 text-xs flex items-center gap-1 group-hover:text-[#008744]">
                      <MapPin className="w-3.5 h-3.5 text-[#008744] shrink-0" />
                      <span>{unit.name}</span>
                    </div>
                    <p className="text-[11px] text-slate-600 mt-0.5 leading-tight">
                      {unit.address.street}
                    </p>
                    <span className="text-[10px] font-bold text-[#008744] mt-0.5 block">
                      {unit.phone}
                    </span>
                  </div>

                  <div className="w-7 h-7 rounded-xl bg-white text-[#008744] flex items-center justify-center shadow-2xs group-hover:bg-[#008744] group-hover:text-white transition-colors shrink-0">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-3 pt-2 border-t border-slate-100 text-center">
              <span className="text-[10px] text-slate-500">
                Avaliação gratuita • Sem agendamento obrigatório
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main floating button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Falar no WhatsApp com a Sorriso Reality"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#008744] hover:bg-[#007038] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        {/* Pulse ripple ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </button>

    </div>
  );
};

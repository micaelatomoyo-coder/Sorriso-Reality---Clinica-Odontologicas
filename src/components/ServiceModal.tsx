import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServiceItem, CLINIC_INFO } from '../data/clinicData';
import { 
  X, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  MessageCircle, 
  CalendarCheck,
  Sparkles
} from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBook }) => {
  const directWhatsappUrl = service
    ? `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(
        `Olá, Dr. José Ricardo Guerra! Gostaria de saber mais sobre o tratamento de *${service.title}* na Sorriso Reality Lapa.`
      )}`
    : '#';

  return (
    <AnimatePresence>
      {service && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col border border-slate-100 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-48 sm:h-56 w-full bg-slate-900 overflow-hidden shrink-0">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-5 right-5 text-white">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-white text-[11px] font-semibold mb-1.5">
                  <Sparkles className="w-3 h-3" />
                  <span>Avaliação Gratuita Disponível</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold">{service.title}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-5 text-slate-700">
              <p className="text-sm sm:text-base leading-relaxed text-slate-600">
                {service.fullDesc}
              </p>

              {/* Quick info row */}
              <div className="grid grid-cols-2 gap-3 p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-xs">
                <div className="flex items-center gap-2 text-emerald-900">
                  <Clock className="w-4 h-4 text-[#008744] shrink-0" />
                  <div>
                    <p className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wider">Duração Estimada</p>
                    <p className="font-bold">{service.timeEstimate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-emerald-900">
                  <ShieldAlert className="w-4 h-4 text-[#008744] shrink-0" />
                  <div>
                    <p className="text-[10px] text-emerald-700 font-semibold uppercase tracking-wider">Atendimento</p>
                    <p className="font-bold">Com ou Sem Agendamento</p>
                  </div>
                </div>
              </div>

              {/* Benefits list */}
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
                  O que você pode esperar:
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinica notice */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500">
                📍 Realizado na <strong>Sorriso Reality</strong> — Rua Doze de Outubro, 651 (Lapa). Atendimento pelo Dr. José Ricardo Guerra.
              </div>
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 transition-colors text-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                Tirar Dúvida no WhatsApp
              </a>

              <button
                onClick={() => {
                  const title = service.title;
                  onClose();
                  onBook(title);
                }}
                className="w-full sm:w-1/2 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#008744] hover:bg-[#007038] transition-colors shadow-sm text-center cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                Agendar Este Tratamento
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

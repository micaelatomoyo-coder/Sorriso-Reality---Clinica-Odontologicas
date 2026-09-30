import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLINIC_INFO, CLINIC_UNITS, ClinicUnit } from '../data/clinicData';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  CalendarCheck, 
  X, 
  Navigation, 
  ExternalLink,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface MobileBottomNavProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

type SheetMode = 'maps' | 'call' | 'whatsapp' | null;

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenBookingModal }) => {
  const [activeSheet, setActiveSheet] = useState<SheetMode>(null);

  const closeSheet = () => setActiveSheet(null);

  const handleScrollToLocation = (unitId: 'lapa' | 'freguesia') => {
    closeSheet();
    const el = document.getElementById('localizacao');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Mobile Bottom Fixed Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-2 py-2 safe-area-pb">
        <div className="grid grid-cols-4 gap-1 items-center">
          
          {/* Call Button */}
          <button
            type="button"
            onClick={() => setActiveSheet('call')}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer"
          >
            <Phone className="w-5 h-5 text-[#008744] mb-0.5" />
            <span className="text-[10px] font-bold">Ligar</span>
          </button>

          {/* WhatsApp Button */}
          <button
            type="button"
            onClick={() => setActiveSheet('whatsapp')}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600 mb-0.5" />
            <span className="text-[10px] font-bold">WhatsApp</span>
          </button>

          {/* Map / Navigation Button */}
          <button
            type="button"
            onClick={() => setActiveSheet('maps')}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors cursor-pointer"
          >
            <MapPin className="w-5 h-5 text-emerald-700 mb-0.5" />
            <span className="text-[10px] font-bold">Como Chegar</span>
          </button>

          {/* Book / Evaluation Primary CTA */}
          <button
            type="button"
            onClick={() => onOpenBookingModal()}
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#008744] text-white shadow-sm active:bg-[#005a2b] transition-colors cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] font-extrabold tracking-tight">Avaliação</span>
          </button>

        </div>
      </div>

      {/* Unit Selection Bottom Sheet Modal */}
      <AnimatePresence>
        {activeSheet && (
          <div className="sm:hidden fixed inset-0 z-50 flex flex-col justify-end">
            
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeSheet}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Bottom Drawer */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 280 }}
              className="relative z-10 bg-white rounded-t-3xl shadow-2xl border-t border-slate-200 p-5 pb-8 max-h-[85vh] overflow-y-auto"
            >
              {/* Grab Bar */}
              <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto mb-4" />

              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-5">
                <div>
                  <span className="text-[11px] font-bold text-[#008744] uppercase tracking-wider block">
                    {activeSheet === 'maps' && '📍 Escolha a Unidade para Rota'}
                    {activeSheet === 'call' && '📞 Escolha a Unidade para Ligar'}
                    {activeSheet === 'whatsapp' && '💬 Escolha a Unidade no WhatsApp'}
                  </span>
                  <h3 className="text-lg font-extrabold text-slate-900 leading-tight">
                    {activeSheet === 'maps' && 'Como Chegar na Sorriso Reality'}
                    {activeSheet === 'call' && 'Falar com a Recepção por Telefone'}
                    {activeSheet === 'whatsapp' && 'Conversar no WhatsApp Oficial'}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={closeSheet}
                  className="p-1.5 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200"
                  aria-label="Fechar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Units List */}
              <div className="space-y-4">
                {CLINIC_UNITS.map((unit) => (
                  <div
                    key={unit.id}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-2xs"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-[#006030] uppercase">
                        {unit.tag}
                      </span>
                      <span className="text-xs font-bold text-slate-900">
                        {unit.phone}
                      </span>
                    </div>

                    <h4 className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#008744] shrink-0" />
                      <span>{unit.name}</span>
                    </h4>

                    <p className="text-xs text-slate-600 mt-0.5 mb-3 leading-snug">
                      {unit.address.street} — {unit.address.neighborhood}
                    </p>

                    {/* Action buttons depending on mode */}
                    {activeSheet === 'maps' && (
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <a
                          href={unit.address.googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeSheet}
                          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[#008744] active:bg-[#005a2b] transition-colors text-center"
                        >
                          <Navigation className="w-3.5 h-3.5" />
                          <span>Google Maps</span>
                        </a>

                        <a
                          href={unit.address.wazeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeSheet}
                          className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-300 active:bg-slate-100 transition-colors text-center"
                        >
                          <ExternalLink className="w-3.5 h-3.5 text-sky-600" />
                          <span>Waze</span>
                        </a>
                      </div>
                    )}

                    {activeSheet === 'call' && (
                      <div className="space-y-2">
                        <a
                          href={`tel:${unit.phoneRaw}`}
                          onClick={closeSheet}
                          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#008744] active:bg-[#005a2b] transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          <span>Ligar: {unit.phone} (WhatsApp/Cel)</span>
                        </a>

                        {unit.landline && (
                          <a
                            href={`tel:${unit.landlineRaw || '551143060023'}`}
                            onClick={closeSheet}
                            className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl text-xs font-semibold text-slate-700 bg-white border border-slate-300 active:bg-slate-100 transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Ligar no Fixo: {unit.landline}</span>
                          </a>
                        )}
                      </div>
                    )}

                    {activeSheet === 'whatsapp' && (
                      <a
                        href={unit.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeSheet}
                        className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#008744] active:bg-[#005a2b] transition-colors"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Abrir WhatsApp da {unit.shortName}</span>
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* View Site Location Section Shortcut */}
              <div className="mt-4 pt-3 border-t border-slate-100 text-center">
                <button
                  type="button"
                  onClick={() => handleScrollToLocation('lapa')}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#008744] hover:underline"
                >
                  <span>Ver fotos e mapas completos na página</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

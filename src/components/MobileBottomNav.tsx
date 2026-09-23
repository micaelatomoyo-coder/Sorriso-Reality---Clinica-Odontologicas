import React from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { Phone, MessageCircle, MapPin, CalendarCheck } from 'lucide-react';

interface MobileBottomNavProps {
  onOpenBookingModal: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-2 py-2 safe-area-pb">
      <div className="grid grid-cols-4 gap-1 items-center">
        
        {/* Call Button */}
        <a
          href={`tel:${CLINIC_INFO.phoneRaw}`}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
        >
          <Phone className="w-5 h-5 text-[#008744] mb-0.5" />
          <span className="text-[10px] font-bold">Ligar</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
        >
          <MessageCircle className="w-5 h-5 text-emerald-600 mb-0.5" />
          <span className="text-[10px] font-bold">WhatsApp</span>
        </a>

        {/* Map Button */}
        <a
          href={CLINIC_INFO.address.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
        >
          <MapPin className="w-5 h-5 text-emerald-700 mb-0.5" />
          <span className="text-[10px] font-bold">Como Chegar</span>
        </a>

        {/* Book / Evaluation Primary CTA */}
        <button
          onClick={onOpenBookingModal}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-[#008744] text-white shadow-sm active:bg-[#005a2b] transition-colors cursor-pointer"
        >
          <CalendarCheck className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] font-extrabold tracking-tight">Avaliação</span>
        </button>

      </div>
    </div>
  );
};

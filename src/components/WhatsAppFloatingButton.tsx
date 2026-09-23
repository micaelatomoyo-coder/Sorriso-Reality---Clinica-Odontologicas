import React, { useState } from 'react';
import { CLINIC_INFO } from '../data/clinicData';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="hidden sm:block fixed bottom-6 right-6 z-40 group">
      {/* Tooltip bubble */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-3 w-64 p-3 bg-white text-slate-800 rounded-2xl shadow-xl border border-emerald-100 text-xs animate-in fade-in slide-in-from-bottom-2">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600"
            aria-label="Fechar dica"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="font-bold text-[#006a38] mb-0.5">Dúvidas sobre seu tratamento?</div>
          <p className="text-slate-600 text-[11px] leading-tight">
            Converse agora no WhatsApp com a equipe do Dr. José Ricardo Guerra!
          </p>
        </div>
      )}

      {/* Main floating button */}
      <a
        href={CLINIC_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a Sorriso Reality"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#008744] hover:bg-[#007038] text-white shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Pulse ripple ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-400 opacity-30 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
};

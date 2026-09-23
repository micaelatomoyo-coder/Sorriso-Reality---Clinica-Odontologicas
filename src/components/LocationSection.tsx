import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Clock, 
  Copy, 
  Check, 
  ExternalLink,
  Bus,
  Train,
  Car
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const text = `${CLINIC_INFO.address.street}, ${CLINIC_INFO.address.neighborhood}, ${CLINIC_INFO.address.city} - ${CLINIC_INFO.address.state}, CEP: ${CLINIC_INFO.address.cep}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-[#008744] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            Fácil Acesso
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Como Chegar na Sorriso Reality Lapa
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Estamos no coração comercial da Lapa, em um ponto privilegiado e seguro com fácil acesso por trem, ônibus ou carro.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Address, Hours & Contact Card */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Primary Address Card */}
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#008744] text-white flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {CLINIC_INFO.fullName}
              </h3>
              <p className="text-xs text-[#008744] font-bold uppercase tracking-wider mb-3">
                Dr. José Ricardo Guerra • Cirurgião Dentista
              </p>

              <p className="text-base font-semibold text-slate-800 leading-snug">
                {CLINIC_INFO.address.street}
              </p>
              <p className="text-sm text-slate-500 mb-4">
                {CLINIC_INFO.address.neighborhood} — {CLINIC_INFO.address.city}/{CLINIC_INFO.address.state} • CEP {CLINIC_INFO.address.cep}
              </p>

              {/* Copy Address Button */}
              <button
                onClick={handleCopyAddress}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer mb-5"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span className="text-emerald-700">Endereço Copiado com Sucesso!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-500" />
                    <span>Copiar Endereço Completo</span>
                  </>
                )}
              </button>

              {/* Hours Card */}
              <div className="border-t border-slate-200 pt-4 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-2">
                  <Clock className="w-4 h-4 text-[#008744]" />
                  <span>Horário de Funcionamento:</span>
                </div>
                <div className="flex justify-between text-slate-600 py-1 border-b border-slate-200/50">
                  <span>Segunda a Sexta-feira:</span>
                  <strong className="text-slate-900 font-semibold">09h às 18h</strong>
                </div>
                <div className="flex justify-between text-slate-600 py-1 border-b border-slate-200/50">
                  <span>Sábado:</span>
                  <strong className="text-slate-900 font-semibold">09h às 13h</strong>
                </div>
                <div className="flex justify-between text-slate-500 py-1">
                  <span>Domingos e Feriados:</span>
                  <span className="text-slate-500 italic">Fechado (Plantão WhatsApp)</span>
                </div>
              </div>

              {/* Action Links for GPS */}
              <div className="grid grid-cols-2 gap-3 pt-5">
                <a
                  href={CLINIC_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-bold text-white bg-[#008744] hover:bg-[#007038] shadow-sm transition-colors text-center"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Google Maps</span>
                </a>

                <a
                  href={CLINIC_INFO.address.wazeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 shadow-xs transition-colors text-center"
                >
                  <ExternalLink className="w-4 h-4 text-sky-600" />
                  <span>Waze</span>
                </a>
              </div>
            </div>

            {/* Public Transport Guide */}
            <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-xs text-slate-700 space-y-3">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                <Train className="w-4 h-4 text-[#008744]" />
                Como Chegar pelo Transporte:
              </h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-800">• Trem:</span>
                  <span>Apenas 4 minutos a pé das estações <strong>Lapa CPTM</strong> (Linhas 7 e 8).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-800">• Ônibus:</span>
                  <span>Diversas linhas param em frente ou a menos de 100m na Rua Doze de Outubro.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-emerald-800">• Ponto de Referência:</span>
                  <span>Em frente ao comércio central, bem próximo ao Shopping Center Lapa.</span>
                </li>
              </ul>
            </div>

          </motion.div>

          {/* Right Column: Interactive Map Frame */}
          <motion.div 
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-7 h-full min-h-[380px] lg:min-h-[520px] rounded-3xl overflow-hidden shadow-lg border border-slate-200 relative bg-slate-100 flex flex-col"
          >
            {/* Embedded Responsive Google Map */}
            <iframe
              title="Mapa de Localização Sorriso Reality Lapa"
              src="https://maps.google.com/maps?q=Rua%20Doze%20de%20Outubro,%20651%20Lapa%20Sao%20Paulo&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full flex-1 border-0 min-h-[340px]"
              loading="lazy"
              allowFullScreen
            />

            {/* Quick floating map bottom bar */}
            <div className="bg-white p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-[#008744] flex items-center justify-center font-bold text-xs shrink-0">
                  📍
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-slate-900">Rua Doze de Outubro, 651 - Lapa</p>
                  <p className="text-[11px] text-slate-500">Sem agendamento: é só chegar e ser bem-vindo!</p>
                </div>
              </div>

              <a
                href={`tel:${CLINIC_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-[#006030] bg-emerald-50 hover:bg-emerald-100 transition-colors shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#008744]" />
                <span>Ligar: {CLINIC_INFO.phone}</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

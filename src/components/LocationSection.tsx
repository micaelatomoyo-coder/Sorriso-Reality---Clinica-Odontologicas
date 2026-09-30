import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLINIC_INFO, CLINIC_UNITS, ClinicUnit } from '../data/clinicData';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Clock, 
  Copy, 
  Check, 
  ExternalLink,
  MessageCircle,
  Train,
  Bus,
  CheckCircle2,
  Building,
  Sparkles,
  ChevronRight
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [selectedUnitId, setSelectedUnitId] = useState<'lapa' | 'freguesia'>('lapa');
  const [copiedUnitId, setCopiedUnitId] = useState<string | null>(null);

  const activeUnit = CLINIC_UNITS.find(u => u.id === selectedUnitId) || CLINIC_UNITS[0];

  const handleCopyAddress = (unit: ClinicUnit) => {
    const text = `${unit.name}: ${unit.address.street}, ${unit.address.neighborhood} - ${unit.address.city}/${unit.address.state}, CEP: ${unit.address.cep}. Tel: ${unit.phone}`;
    navigator.clipboard.writeText(text);
    setCopiedUnitId(unit.id);
    setTimeout(() => setCopiedUnitId(null), 3000);
  };

  return (
    <section id="localizacao" className="py-16 sm:py-24 bg-slate-50/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#006030] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Building className="w-3.5 h-3.5 text-[#008744]" />
            <span>2 Unidades em São Paulo • Lapa &amp; Freguesia do Ó</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Nossas Unidades &amp; Como Chegar
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Escolha a clínica mais conveniente para você. Ambas contam com avaliação 100% gratuita, atendimento com ou sem agendamento prévio e corpo clínico completo.
          </p>
        </motion.div>

        {/* Dual Unit Selection Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-10">
          {CLINIC_UNITS.map((unit) => {
            const isSelected = selectedUnitId === unit.id;
            return (
              <motion.button
                key={unit.id}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="button"
                onClick={() => setSelectedUnitId(unit.id)}
                className={`p-5 sm:p-6 rounded-3xl text-left transition-all border-2 cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-[#008744] shadow-lg shadow-emerald-900/5 ring-4 ring-emerald-500/10'
                    : 'bg-white/80 border-slate-200/90 hover:border-emerald-300 shadow-xs'
                }`}
              >
                {/* Active Indicator Top Tag */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                    isSelected ? 'bg-[#008744] text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {unit.tag}
                  </span>
                  
                  {isSelected && (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-[#008744]">
                      <CheckCircle2 className="w-4 h-4 text-[#008744]" />
                      <span>Unidade Selecionada</span>
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 mb-1 flex items-center gap-2">
                    <MapPin className={`w-5 h-5 ${isSelected ? 'text-[#008744]' : 'text-slate-400'}`} />
                    <span>{unit.name}</span>
                  </h3>
                  <p className="text-sm font-semibold text-slate-700">
                    {unit.address.street}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {unit.address.neighborhood} — {unit.address.city}/{unit.address.state}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-[#008744]">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{unit.phone}</span>
                  </div>
                  <span className="text-[11px] font-medium text-slate-500">
                    Seg-Sex 9h-18h | Sáb 9h-13h
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Dynamic Detail Card & Interactive Map Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeUnit.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          >
            
            {/* Left Column: Address, Hours, Public Transport & Direct Phone */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Main Unit Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-md">
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#008744] text-white flex items-center justify-center shadow-xs">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-[#008744] bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    {activeUnit.neighborhood}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 mb-1">
                  {activeUnit.name}
                </h3>
                <p className="text-xs text-slate-500 mb-3">
                  Sorriso Reality Clínicas Odontológicas
                </p>

                <p className="text-base font-bold text-slate-800 leading-snug">
                  {activeUnit.address.street}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 mb-4">
                  {activeUnit.address.neighborhood} — {activeUnit.address.city}/{activeUnit.address.state} • CEP {activeUnit.address.cep}
                </p>

                {/* Copy Address Button */}
                <button
                  type="button"
                  onClick={() => handleCopyAddress(activeUnit)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold bg-slate-50 border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer mb-5"
                >
                  {copiedUnitId === activeUnit.id ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Endereço Copiado com Sucesso!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-500" />
                      <span>Copiar Endereço Completo</span>
                    </>
                  )}
                </button>

                {/* Direct Contact Button */}
                <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 mb-5 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-left w-full sm:w-auto">
                    <div className="w-10 h-10 rounded-xl bg-[#008744] text-white flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                        Telefone &amp; WhatsApp:
                      </span>
                      <strong className="text-sm font-extrabold text-slate-900">
                        {activeUnit.phone}
                      </strong>
                    </div>
                  </div>

                  <a
                    href={`tel:${activeUnit.phoneRaw}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#008744] hover:bg-[#007038] shadow-xs transition-colors shrink-0"
                  >
                    <span>Ligar Agora</span>
                  </a>
                </div>

                {/* Hours Block */}
                <div className="border-t border-slate-100 pt-4 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-900 font-bold mb-2">
                    <Clock className="w-4 h-4 text-[#008744]" />
                    <span>Horário de Funcionamento ({activeUnit.shortName}):</span>
                  </div>
                  {activeUnit.hours.map((h, i) => (
                    <div key={i} className={`flex justify-between py-1 border-b border-slate-100 last:border-0 ${
                      h.isClosed ? 'text-slate-400 italic' : 'text-slate-600'
                    }`}>
                      <span>{h.days}:</span>
                      <strong className={h.isClosed ? 'font-normal' : 'text-slate-900 font-semibold'}>{h.hours}</strong>
                    </div>
                  ))}
                </div>

                {/* GPS Actions */}
                <div className="grid grid-cols-2 gap-3 pt-5 border-t border-slate-100 mt-4">
                  <a
                    href={activeUnit.address.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-bold text-white bg-[#008744] hover:bg-[#007038] shadow-xs transition-colors text-center"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Google Maps</span>
                  </a>

                  <a
                    href={activeUnit.address.wazeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 py-3 px-3 rounded-xl text-xs font-bold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 shadow-2xs transition-colors text-center"
                  >
                    <ExternalLink className="w-4 h-4 text-sky-600" />
                    <span>Abrir no Waze</span>
                  </a>
                </div>
              </div>

              {/* Public Transport & Access Guide */}
              <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs text-xs text-slate-700 space-y-3">
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5">
                  <Bus className="w-4 h-4 text-[#008744]" />
                  Como Chegar na {activeUnit.shortName}:
                </h4>
                <ul className="space-y-2.5 text-slate-600">
                  {activeUnit.transport.trainOrMetro && (
                    <li className="flex items-start gap-2">
                      <span className="font-bold text-emerald-800 shrink-0">• Transporte:</span>
                      <span>{activeUnit.transport.trainOrMetro}</span>
                    </li>
                  )}
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-emerald-800 shrink-0">• Ônibus:</span>
                    <span>{activeUnit.transport.bus}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="font-bold text-emerald-800 shrink-0">• Ponto de Referência:</span>
                    <span>{activeUnit.transport.reference}</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Column: Embedded Responsive Google Map for Active Unit */}
            <div className="lg:col-span-7 h-full min-h-[420px] lg:min-h-[580px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 relative bg-slate-100 flex flex-col">
              
              <iframe
                title={`Mapa de Localização ${activeUnit.name}`}
                src={activeUnit.address.mapEmbedUrl}
                className="w-full h-full flex-1 border-0 min-h-[380px]"
                loading="lazy"
                allowFullScreen
              />

              {/* Floating Bottom Bar of Map */}
              <div className="bg-white p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#008744] flex items-center justify-center font-bold text-sm shrink-0">
                    📍
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-slate-900">{activeUnit.name}</p>
                    <p className="text-[11px] text-slate-600">{activeUnit.address.street} — {activeUnit.address.neighborhood}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <a
                    href={activeUnit.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#008744]" />
                    <span>WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${activeUnit.phoneRaw}`}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#008744] hover:bg-[#007038] shadow-xs transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Ligar: {activeUnit.phone}</span>
                  </a>
                </div>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  MapPin, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface AppointmentSimulatorProps {
  initialService?: string;
  onClose?: () => void;
  isModal?: boolean;
}

export const AppointmentSimulator: React.FC<AppointmentSimulatorProps> = ({
  initialService = 'Avaliação Gratuita Geral',
  onClose,
  isModal = false,
}) => {
  const [selectedService, setSelectedService] = useState(initialService);
  const [selectedPeriod, setSelectedPeriod] = useState('Manhã (09h às 13h)');
  const [selectedDayType, setSelectedDayType] = useState('Durante a Semana (Seg-Sex)');
  const [patientName, setPatientName] = useState('');
  const [patientPhone, setPatientPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [mode, setMode] = useState<'appointment' | 'walkin'>('appointment');

  const availableServices = [
    'Avaliação Gratuita Inicial',
    'Limpeza & Check-up Preventivo',
    'Clareamento Dental & Estética',
    'Implantes Dentários & Prótese',
    'Ortodontia & Aparelhos / Alinhadores',
    'Urgência / Dor de Dente (Hoje)',
    'Odontopediatria (Criança)'
  ];

  const handleSendWhatsapp = (e: React.FormEvent) => {
    e.preventDefault();

    let text = '';
    if (mode === 'walkin') {
      text = `Olá, Dr. José Ricardo Guerra! Meu nome é *${patientName.trim() || 'Paciente'}*. Estou a caminho da clínica Sorriso Reality na Rua Doze de Outubro, 651 para atendimento sem agendamento (urgência/avaliação).`;
    } else {
      text = `Olá, Dr. José Ricardo Guerra da Sorriso Reality Lapa! Gostaria de agendar minha *Avaliação Gratuita*:\n\n` +
        `👤 *Nome:* ${patientName.trim() || 'Não informado'}\n` +
        `📱 *Telefone:* ${patientPhone.trim() || 'Não informado'}\n` +
        `🦷 *Tratamento de interesse:* ${selectedService}\n` +
        `📅 *Preferência:* ${selectedDayType} - ${selectedPeriod}\n` +
        (notes.trim() ? `💬 *Observação:* ${notes.trim()}\n\n` : '\n') +
        `Aguardo a confirmação da equipe. Muito obrigado!`;
    }

    const url = `https://wa.me/${CLINIC_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`w-full ${isModal ? '' : 'py-12 sm:py-20 bg-gradient-to-b from-slate-50 to-white'}`}>
      <div className={isModal ? '' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'}>
        
        {/* Card Container */}
        <motion.div 
          initial={isModal ? false : { opacity: 0, y: 28 }}
          whileInView={isModal ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="bg-white rounded-3xl shadow-xl border border-emerald-100 overflow-hidden"
        >
          {/* Header */}
          <div className="bg-[#005a2b] text-white p-6 sm:p-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-700/60 text-emerald-200 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Agendamento Rápido & Sem Complicações</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Agende sua Avaliação Gratuita
            </h3>
            <p className="text-sm sm:text-base text-emerald-100/90 mt-1 font-normal">
              Escolha o melhor dia ou saiba como comparecer hoje mesmo sem hora marcada na Rua Doze de Outubro, 651 - Lapa.
            </p>

            {/* Mode Switcher */}
            <div className="flex items-center gap-2 mt-5 p-1 bg-[#004722] rounded-xl max-w-md">
              <button
                type="button"
                onClick={() => setMode('appointment')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  mode === 'appointment'
                    ? 'bg-white text-[#005a2b] shadow-sm'
                    : 'text-emerald-200 hover:text-white'
                }`}
              >
                📅 Agendar com Antecedência
              </button>
              <button
                type="button"
                onClick={() => setMode('walkin')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  mode === 'walkin'
                    ? 'bg-white text-[#005a2b] shadow-sm'
                    : 'text-emerald-200 hover:text-white'
                }`}
              >
                🚶 Ir Sem Agendamento
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            <AnimatePresence mode="wait">
              {mode === 'walkin' ? (
                /* Walk-in Notice Info */
                <motion.div
                  key="walkin"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-3">
                    <div className="flex items-center gap-2 text-[#008744] font-bold text-base">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>É só chegar e ser bem-vindo!</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Na <strong>Sorriso Reality</strong>, você não precisa ficar esperando semanas por uma consulta. Você pode comparecer diretamente à clínica dentro do horário comercial e será atendido por ordem de chegada com todo cuidado pelo <strong>Dr. José Ricardo Guerra</strong>.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                      <div className="p-3 bg-white rounded-xl border border-emerald-100">
                        <p className="font-bold text-slate-900">Segunda a Sexta:</p>
                        <p className="text-slate-600">09h às 18h (ininterrupto)</p>
                      </div>
                      <div className="p-3 bg-white rounded-xl border border-emerald-100">
                        <p className="font-bold text-slate-900">Sábado:</p>
                        <p className="text-slate-600">09h às 13h</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                    <MapPin className="w-5 h-5 text-[#008744] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-900">{CLINIC_INFO.address.street} - Lapa, São Paulo - SP</strong>
                      <span className="text-slate-500">Próximo ao Shopping Lapa e à estação de trem da CPTM.</span>
                    </div>
                  </div>

                  <form onSubmit={handleSendWhatsapp} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Seu Nome (Opcional - para avisar a recepção)
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Ana Paula da Silva"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#008744] focus:border-transparent"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                      <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        type="submit"
                        className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-white bg-[#008744] hover:bg-[#007038] shadow-md transition-colors cursor-pointer text-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Avisar no WhatsApp que Estou a Caminho
                      </motion.button>

                      <a
                        href={CLINIC_INFO.address.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 text-sm transition-colors text-center"
                      >
                        <MapPin className="w-4 h-4 text-slate-500" />
                        Ver Rota no GPS
                      </a>
                    </div>
                  </form>
                </motion.div>
              ) : (
                /* Booking Form */
                <motion.form
                  key="appointment"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={handleSendWhatsapp} 
                  className="space-y-6"
                >
                  
                  {/* Treatment Selection */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                      1. Selecione o Tratamento de Interesse
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {availableServices.map((srv) => (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => setSelectedService(srv)}
                          className={`p-3 rounded-xl text-left text-xs font-semibold transition-all border cursor-pointer flex items-center justify-between ${
                            selectedService === srv
                              ? 'bg-emerald-50 text-[#006a38] border-[#008744] shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-200'
                          }`}
                        >
                          <span>{srv}</span>
                          {selectedService === srv && (
                            <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Day & Period Selection */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        2. Dia Preferencial
                      </label>
                      <select
                        value={selectedDayType}
                        onChange={(e) => setSelectedDayType(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#008744]"
                      >
                        <option value="Durante a Semana (Segunda a Sexta)">Durante a Semana (Seg a Sex)</option>
                        <option value="Sábado pela Manhã">Sábado (09h às 13h)</option>
                        <option value="Mais rápido possível (Hoje/Amanhã)">O mais rápido possível</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        3. Horário de Preferência
                      </label>
                      <select
                        value={selectedPeriod}
                        onChange={(e) => setSelectedPeriod(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium bg-white focus:outline-none focus:ring-2 focus:ring-[#008744]"
                      >
                        <option value="Manhã (09h às 12h)">Manhã (09h às 12h)</option>
                        <option value="Horário de Almoço (12h às 14h)">Horário de Almoço (12h às 14h)</option>
                        <option value="Tarde (14h às 18h)">Tarde (14h às 18h)</option>
                      </select>
                    </div>
                  </div>

                  {/* Patient Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Seu Nome Completo *
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="text"
                          required
                          placeholder="Ex: Maria da Silva"
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#008744]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                        Telefone / WhatsApp *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                        <input
                          type="tel"
                          required
                          placeholder="(11) 99999-9999"
                          value={patientPhone}
                          onChange={(e) => setPatientPhone(e.target.value)}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#008744]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Optional Note */}
                  <div>
                    <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                      Alguma observação ou sintoma? (Opcional)
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Estou com sensibilidade nos dentes de baixo ou gostaria de clarear"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#008744]"
                    />
                  </div>

                  {/* Guarantee Banner */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2.5 text-xs text-emerald-900">
                    <Sparkles className="w-4 h-4 text-[#008744] shrink-0" />
                    <span>
                      <strong>Avaliação 100% Gratuita garantida:</strong> Você receberá o atendimento com exame clínico e planejamento sem nenhum custo na recepção.
                    </span>
                  </div>

                  {/* Submit to WhatsApp */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-white bg-[#008744] hover:bg-[#007038] active:bg-[#005a2b] shadow-lg shadow-emerald-700/20 text-sm transition-all cursor-pointer text-center"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Confirmar Agendamento no WhatsApp</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </motion.div>

      </div>
    </div>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  Award, 
  Users, 
  Smile, 
  Star, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  CalendarCheck,
  ShieldCheck
} from 'lucide-react';

interface AboutSectionProps {
  onOpenBookingModal: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="sobre" className="py-16 sm:py-24 bg-slate-50/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Visual Showcase (Clinic interior + Dentist portrait inset) */}
          <motion.div 
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Clinic Interior Picture */}
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-200 aspect-16/10">
                <img
                  src="/images/clinic_interior.jpg"
                  alt="Consultório moderno Sorriso Reality na Lapa"
                  className="w-full h-full object-cover transform hover:scale-102 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              {/* Inset Dentist Card (overlapping) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.25, ease: 'easeOut' }}
                className="mt-4 sm:mt-0 sm:absolute sm:-bottom-8 sm:-right-6 bg-white p-3 sm:p-4 rounded-2xl shadow-xl border border-emerald-100 flex items-center gap-3.5 max-w-xs sm:max-w-sm"
              >
                <img
                  src="/images/dentist_portrait.jpg"
                  alt="Dr. José Ricardo Guerra - Cirurgião Dentista"
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover shrink-0 border-2 border-emerald-500"
                  loading="lazy"
                />
                <div>
                  <div className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#008744] bg-emerald-50 px-2 py-0.5 rounded mb-1">
                    Responsável Técnico
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-tight">
                    {CLINIC_INFO.dentist.name}
                  </h4>
                  <p className="text-xs text-slate-500">
                    {CLINIC_INFO.dentist.title} • {CLINIC_INFO.dentist.cro}
                  </p>
                </div>
              </motion.div>

            </div>
          </motion.div>

          {/* Right Column: Narrative & Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col items-start pt-6 sm:pt-0"
          >
            <span className="text-[#008744] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2">
              Sobre a Sorriso Reality
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
              Seu Sorriso é a Nossa Maior Prioridade
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Localizada no coração comercial da Lapa, a <strong>Sorriso Reality Clínicas Odontológicas</strong> nasceu com o propósito de democratizar a odontologia de alto padrão, tornando-a acessível, ágil e livre de medos.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Sob a liderança do <strong>Dr. José Ricardo Guerra</strong>, combinamos equipamentos de última geração com um atendimento genuinamente acolhedor. Aqui, você não é apenas mais um número: é ouvido com atenção e tem seu tratamento planejado sob medida.
            </p>

            {/* Checklist */}
            <div className="space-y-2 mb-8 w-full text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0" />
                <span><strong>Avaliação 100% Gratuita</strong> para novos pacientes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0" />
                <span><strong>Atendimento Sem Agendamento</strong>: é só chegar na Rua Doze de Outubro</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0" />
                <span>Tratamentos sem dor, com anestesia de precisão e materiais biocompatíveis</span>
              </div>
            </div>

            {/* 4 Stats Grid */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full p-4 rounded-2xl bg-white border border-slate-200/80 mb-8"
            >
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-slate-900 font-extrabold text-xl sm:text-2xl">
                  <Award className="w-5 h-5 text-[#008744]" />
                  <span>12+</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Anos de Experiência</p>
              </div>

              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-slate-900 font-extrabold text-xl sm:text-2xl">
                  <ShieldCheck className="w-5 h-5 text-[#008744]" />
                  <span>100%</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Avaliação Gratuita</p>
              </div>

              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-slate-900 font-extrabold text-xl sm:text-2xl">
                  <Users className="w-5 h-5 text-[#008744]" />
                  <span>5.000+</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Sorrisos Atendidos</p>
              </div>

              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1 text-slate-900 font-extrabold text-xl sm:text-2xl">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span>4.9</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium mt-0.5">Avaliação no Google</p>
              </div>
            </motion.div>

            {/* Action CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBookingModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-[#008744] hover:bg-[#007038] shadow-md transition-colors cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Agendar Minha Avaliação Gratuita</span>
              </motion.button>

              <a
                href={CLINIC_INFO.address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-700 hover:text-[#008744] hover:bg-white transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#008744]" />
                <span>Ver Localização na Lapa</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

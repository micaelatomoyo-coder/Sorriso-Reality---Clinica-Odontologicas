import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICES_DATA, ServiceItem } from '../data/clinicData';
import { ServiceModal } from './ServiceModal';
import { 
  Sparkles, 
  Stethoscope, 
  ShieldCheck, 
  Smile, 
  HeartHandshake, 
  Activity, 
  ArrowRight,
  CalendarCheck
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenBookingModal: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBookingModal }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Smile':
        return <Smile className="w-5 h-5" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5" />;
      case 'Activity':
      default:
        return <Activity className="w-5 h-5" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="tratamentos" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-[#008744] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            Nossos Serviços
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Soluções Completas para a Saúde do Seu Sorriso
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Tratamentos modernos realizados com tecnologia de precisão, materiais de alta qualidade e atendimento humanizado na Lapa pelo <strong className="font-semibold text-slate-800">Dr. José Ricardo Guerra</strong>.
          </p>
        </motion.div>

        {/* 6 Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {SERVICES_DATA.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl overflow-hidden border border-slate-200/90 hover:border-emerald-300 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Card Image Frame */}
              <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Floating Category Icon Badge */}
                <div className="absolute -bottom-4 left-6 w-12 h-12 rounded-2xl bg-white text-[#008744] shadow-md flex items-center justify-center border border-emerald-100 group-hover:bg-[#008744] group-hover:text-white transition-colors duration-300">
                  {getIcon(service.iconName)}
                </div>

                {service.popular && (
                  <div className="absolute top-3 right-3 bg-[#008744] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Mais Procurado
                  </div>
                )}
              </div>

              {/* Card Content */}
              <div className="p-6 pt-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-[#008744] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3 mb-4 font-normal">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#008744] group-hover:translate-x-1 transition-transform">
                    <span>Saiba Mais</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>

                  <span className="text-[11px] text-slate-400 font-medium">
                    Avaliação Gratuita
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Central Bottom Action Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
          className="mt-12 sm:mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onOpenBookingModal()}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-[#008744] hover:bg-[#007038] shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <CalendarCheck className="w-5 h-5" />
            <span>Agendar Avaliação Gratuita para Qualquer Tratamento</span>
          </motion.button>
          <p className="text-xs text-slate-400 mt-2">
            Ou venha direto à clínica: <strong>Rua Doze de Outubro, 651 - Lapa</strong>
          </p>
        </motion.div>

      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={(title) => {
          setSelectedService(null);
          onOpenBookingModal(title);
        }}
      />
    </section>
  );
};

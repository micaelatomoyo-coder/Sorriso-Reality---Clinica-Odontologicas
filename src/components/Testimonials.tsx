import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS_DATA } from '../data/clinicData';
import { Star, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 26 },
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
    <section id="depoimentos" className="py-16 sm:py-24 bg-slate-50/60 relative">
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
            Depoimentos de Pacientes
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Amado por Quem Cuida do Sorriso Conosco
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Histórias reais de quem transformou a saúde bucal e a autoestima na <strong>Sorriso Reality</strong> na Lapa.
          </p>
        </motion.div>

        {/* 3 Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {TESTIMONIALS_DATA.slice(0, 3).map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-slate-200/80 hover:border-emerald-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="ml-1.5 text-xs font-bold text-slate-700">5.0</span>
                </div>

                {/* Comment */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic mb-6">
                  "{item.comment}"
                </p>
              </div>

              {/* Patient Signature */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-11 h-11 rounded-full object-cover border border-emerald-300 shrink-0"
                  loading="lazy"
                />
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {item.name}
                    </h4>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#008744] shrink-0" />
                  </div>
                  <p className="text-[11px] text-[#008744] font-medium truncate">
                    {item.treatment}
                  </p>
                  <p className="text-[10px] text-slate-400">
                    {item.neighborhood} • {item.date}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Proof Banner under testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.25, ease: 'easeOut' }}
          className="mt-10 max-w-2xl mx-auto p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left"
        >
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#008744] text-white flex items-center justify-center font-bold text-sm shrink-0">
              G
            </div>
            <div className="text-xs text-slate-700">
              <strong className="block text-slate-900">Nota 4.9 de 5.0 no Google Avaliações</strong>
              <span>Mais de 380 pacientes verificados recomendam o Dr. José Ricardo Guerra</span>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Rua+Doze+de+Outubro+651+Lapa+Sao+Paulo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-[#008744] hover:underline shrink-0"
          >
            Ver Todas no Google →
          </a>
        </motion.div>

      </div>
    </section>
  );
};

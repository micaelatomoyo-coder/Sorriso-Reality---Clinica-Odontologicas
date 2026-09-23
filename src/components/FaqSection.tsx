import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQ_DATA, CLINIC_INFO } from '../data/clinicData';
import { ChevronDown, MessageCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-slate-50/70 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-[#008744] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Tudo o que você precisa saber sobre nosso atendimento, avaliação gratuita e facilidades na Lapa.
          </p>
        </motion.div>

        {/* FAQ Accordion List with Stagger */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-3.5"
        >
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:border-emerald-200 transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#008744]"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-emerald-100 text-[#008744] rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Extra doubt prompt */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
          className="mt-10 text-center p-6 rounded-3xl bg-white border border-emerald-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-left">
            <h4 className="text-sm font-bold text-slate-900">Ainda tem alguma dúvida específica?</h4>
            <p className="text-xs text-slate-500">Nossa recepção e o Dr. José Ricardo Guerra estão prontos para te atender.</p>
          </div>
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#008744] hover:bg-[#007038] transition-colors shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </motion.div>

      </div>
    </section>
  );
};

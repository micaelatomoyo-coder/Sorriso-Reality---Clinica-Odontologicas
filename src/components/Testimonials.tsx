import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, CheckCircle2, ExternalLink } from 'lucide-react';

export const Testimonials: React.FC = () => {
  useEffect(() => {
    // If the Elfsight script is already loaded, trigger platform update/init
    const win = window as any;
    if (win.eapps?.platform?.init) {
      try {
        win.eapps.platform.init();
      } catch (err) {
        console.warn('Elfsight platform init error:', err);
      }
    } else {
      // Ensure platform.js is present
      const scriptId = 'elfsight-platform-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://elfsightcdn.com/platform.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, []);

  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-slate-50/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 text-[#006a38] text-xs font-semibold mb-3 border border-emerald-200/60 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#008744]" />
            <span>Google Avaliações • Pacientes Verificados</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Opiniões Reais de Quem Cuida do Sorriso Conosco
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Confira as avaliações reais e verificadas dos pacientes da <strong>Sorriso Reality</strong> no Google Meu Negócio.
          </p>
        </motion.div>

        {/* Real Elfsight Google Reviews Container */}
        <div className="w-full rounded-3xl bg-white p-3 sm:p-6 border border-slate-200/90 shadow-sm min-h-[360px]">
          {/* Elfsight Google Reviews | Untitled Google Reviews */}
          <div 
            className="elfsight-app-8735bdb0-b050-4293-92d1-4f32cf07b721" 
            data-elfsight-app-lazy
          />
        </div>

        {/* Google Reviews Direct Link Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="mt-8 max-w-xl mx-auto p-3.5 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-xs"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#008744] text-white flex items-center justify-center font-bold text-xs shrink-0 shadow-xs">
              <Star className="w-4 h-4 fill-amber-300 text-amber-300" />
            </div>
            <div className="text-xs text-slate-700">
              <strong className="block text-slate-900">Sua opinião é fundamental</strong>
              <span>Já é nosso paciente na Lapa? Deixe também sua avaliação!</span>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Rua+Doze+de+Outubro+651+Lapa+Sao+Paulo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-[#006a38] text-xs font-bold transition-colors shrink-0"
          >
            <span>Ver no Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

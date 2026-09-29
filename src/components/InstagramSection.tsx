import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Sparkles, ExternalLink, Heart } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const InstagramSection: React.FC = () => {
  useEffect(() => {
    // If the script is already loaded by index.html or previous mount, trigger Elfsight update
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
    <section id="instagram" className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/25 to-white relative overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-r from-pink-500/5 via-emerald-500/5 to-purple-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-emerald-500/10 text-pink-700 text-xs font-semibold mb-3.5 border border-pink-200/50 shadow-xs">
            <Instagram className="w-3.5 h-3.5 text-pink-600" />
            <span>Instagram Oficial • Sorriso Reality</span>
            <Sparkles className="w-3 h-3 text-amber-500" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Acompanhe Nossos Casos e o Dia a Dia na Lapa
          </h2>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto mb-6">
            Confira transformações de sorrisos em tempo real, dicas de cuidados bucais com nossos dentistas e os bastidores do nosso consultório na Lapa.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <Instagram className="w-4 h-4" />
              <span>Siga no Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>

            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-emerald-300 text-slate-700 hover:text-[#008744] text-xs sm:text-sm font-semibold shadow-xs hover:shadow-sm transition-all"
            >
              <Heart className="w-4 h-4 text-emerald-600" />
              <span>Avaliação Gratuita</span>
            </a>
          </div>
        </motion.div>

        {/* Elfsight Instagram Feed Container */}
        <div className="w-full rounded-2xl bg-white/70 p-2 sm:p-5 border border-slate-200/80 shadow-sm backdrop-blur-xs min-h-[380px]">
          {/* Elfsight Instagram Feed | Untitled Instagram Feed */}
          <div 
            className="elfsight-app-24b429ec-0548-49d8-98ad-ad9056b818d2" 
            data-elfsight-app-lazy
          />
        </div>

        {/* Bottom Note */}
        <div className="mt-4 text-center">
          <p className="text-xs text-slate-500">
            Atualizações diárias • Tratamentos odontológicos reais na clínica Sorriso Reality na Lapa, SP
          </p>
        </div>

      </div>
    </section>
  );
};

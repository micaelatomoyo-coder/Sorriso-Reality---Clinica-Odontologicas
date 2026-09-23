import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowLeftRight } from 'lucide-react';

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [selectedCase, setSelectedCase] = useState(0);

  const cases = [
    {
      title: "Clareamento & Estética Dental",
      subtitle: "Remoção de amarelado e manchas com clareamento profissional e restauração estética.",
      beforeImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80",
      afterImg: "/images/service_whitening.jpg",
      timeframe: "Realizado em 2 sessões",
      tag: "Clareamento a Laser"
    },
    {
      title: "Alinhamento & Ortodontia",
      subtitle: "Correção de apinhamento e mordida aberta com alinhadores transparentes.",
      beforeImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
      afterImg: "/images/service_aligner.jpg",
      timeframe: "Tratamento de 8 meses",
      tag: "Alinhador Invisível"
    }
  ];

  const current = cases[selectedCase];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section id="resultados" className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-14"
        >
          <span className="text-[#008744] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            Transformações Reais
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Resultados que Devolvem a Confiança
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal">
            Arraste o controle para comparar o antes e depois dos tratamentos realizados na <strong>Sorriso Reality Lapa</strong>.
          </p>

          {/* Case Selector Tabs */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {cases.map((c, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedCase(idx);
                  setSliderPosition(50);
                }}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCase === idx
                    ? 'bg-[#008744] text-white shadow-sm scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c.tag}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Interactive Comparison Container */}
        <motion.div 
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="max-w-3xl mx-auto bg-slate-900 rounded-3xl overflow-hidden shadow-2xl relative select-none border border-slate-200"
        >
          <div className="relative aspect-16/10 sm:aspect-16/9 w-full overflow-hidden">
            
            {/* After Image (Background) */}
            <img
              src={current.afterImg}
              alt="Depois do tratamento Sorriso Reality"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-[#008744] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Depois (Resultado)</span>
            </div>

            {/* Before Image (Clipped with width based on slider) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={current.beforeImg}
                alt="Antes do tratamento"
                className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', minWidth: '100%' }}
              />
              <div className="absolute top-4 left-4 bg-slate-800/90 text-slate-100 text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
                Antes
              </div>
            </div>

            {/* Divider Line & Handle */}
            <div
              className="absolute inset-y-0 w-1 bg-white shadow-lg pointer-events-none z-20 flex items-center justify-center"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-9 h-9 -ml-4.5 rounded-full bg-white text-[#008744] shadow-xl flex items-center justify-center border-2 border-[#008744]">
                <ArrowLeftRight className="w-4 h-4" />
              </div>
            </div>

            {/* Range Input Slider */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
              aria-label="Controle de comparação antes e depois"
            />
          </div>

          {/* Bottom Info Bar of the Case */}
          <div className="p-4 sm:p-5 bg-white border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-slate-700">
            <div>
              <h4 className="font-bold text-sm sm:text-base text-slate-900">{current.title}</h4>
              <p className="text-xs text-slate-500">{current.subtitle}</p>
            </div>
            <div className="text-xs font-semibold text-[#008744] bg-emerald-50 px-3 py-1.5 rounded-lg shrink-0 self-start sm:self-center">
              ⏱ {current.timeframe}
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

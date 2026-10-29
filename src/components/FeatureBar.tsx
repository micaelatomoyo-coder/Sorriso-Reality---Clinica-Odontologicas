import React from 'react';
import { 
  HeartHandshake, 
  Cpu, 
  UserCheck, 
  Smile, 
  CalendarClock 
} from 'lucide-react';

export const FeatureBar: React.FC = () => {
  const features = [
    {
      icon: HeartHandshake,
      title: "Avaliação Gratuita",
      desc: "Diagnóstico completo e plano de tratamento detalhado sem taxas e sem compromisso.",
    },
    {
      icon: Cpu,
      title: "Tecnologia & Conforto",
      desc: "Anestesia moderna, raio-x digital e procedimentos pensados para eliminar todo medo.",
    },
    {
      icon: UserCheck,
      title: "26 Anos de Tradição",
      desc: "Dr. Ricardo, Dr. Henrique e equipe de dentistas especialistas na Lapa e Freguesia do Ó.",
    },
    {
      icon: Smile,
      title: "Sem Agendamento",
      desc: "É só chegar e ser bem-vindo! Atendimento ágil e acolhedor na Rua Doze de Outubro.",
    },
    {
      icon: CalendarClock,
      title: "Horário Estendido",
      desc: "Segunda a sexta das 9h às 18h e sábados das 9h às 13h no polo comercial da Lapa.",
    },
  ];

  return (
    <section id="diferenciais" className="relative -mt-4 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        className="bg-white rounded-3xl shadow-xl shadow-slate-200/60 border border-slate-100 p-4 sm:p-6 lg:p-8"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-4 lg:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-start pt-4 sm:pt-0 sm:px-3 lg:px-4 first:pt-0 sm:first:pl-0 last:pr-0 group"
              >
                <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-[#008744] flex items-center justify-center mb-3.5 group-hover:bg-[#008744] group-hover:text-white transition-colors duration-200">
                  <Icon className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
                </div>
                <h2 className="text-sm sm:text-base font-bold text-slate-900 mb-1 tracking-tight">
                  {item.title}
                </h2>
                <p className="text-xs sm:text-xs text-slate-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

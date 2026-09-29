import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Player from '@vimeo/player';
import { CLINIC_INFO } from '../data/clinicData';
import { 
  Award, 
  Users, 
  Smile, 
  Star, 
  MapPin, 
  CheckCircle2, 
  CalendarCheck,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface AboutSectionProps {
  onOpenBookingModal: () => void;
  onNavigateHistory?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBookingModal, onNavigateHistory }) => {
  const videoIframeRef = useRef<HTMLIFrameElement>(null);
  const playerInstanceRef = useRef<Player | null>(null);

  const handleIframeLoad = () => {
    if (!videoIframeRef.current) return;
    try {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy().catch(() => {});
      }
      const player = new Player(videoIframeRef.current);
      playerInstanceRef.current = player;
      let cutoffDuration = 31; // Total duration ~37s, cut last 6 seconds

      player.getDuration().then((duration) => {
        if (typeof duration === 'number' && duration > 7) {
          cutoffDuration = duration - 6;
        }
      }).catch(() => {
        cutoffDuration = 31;
      });

      player.on('timeupdate', (data) => {
        if (data.seconds >= cutoffDuration) {
          player.pause().catch(() => {});
          player.setCurrentTime(0).catch(() => {});
        }
      });

      player.on('seeked', (data) => {
        if (data.seconds >= cutoffDuration) {
          player.pause().catch(() => {});
          player.setCurrentTime(0).catch(() => {});
        }
      });
    } catch {
      // Gracefully allow standard iframe playback if API is restricted by browser
    }
  };

  useEffect(() => {
    return () => {
      if (playerInstanceRef.current) {
        playerInstanceRef.current.destroy().catch(() => {});
      }
    };
  }, []);

  return (
    <section id="sobre" className="py-16 sm:py-24 bg-slate-50/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <span className="text-[#008744] font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
            Sobre a Sorriso Reality
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            25 Anos de Dedicação e Cuidado na Lapa — Bodas de Prata
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            A <strong>Sorriso Reality Clínicas Odontológicas</strong>, fundada em 10 de julho de 2000, celebra 25 anos de atividades com os sócios dentistas <strong>Dr. José Ricardo Guerra</strong> e <strong>Dr. José Henrique Guerra</strong>, ao lado de uma equipe com vários profissionais especializados no centro da Lapa.
          </p>
        </motion.div>

        {/* Real Dentists Featured Showcase */}
        <div className="mb-14">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 text-[#006a38] text-xs font-semibold">
              <Users className="w-3.5 h-3.5 text-[#008744]" />
              <span>Corpo Clínico & Responsáveis Técnicos</span>
            </div>
            <h3 className="text-lg sm:text-2xl font-bold text-slate-800 mt-2">
              Conheça os Dentistas da Sorriso Reality
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto mt-1">
              Atendimento direto com os próprios fundadores e cirurgiões dentistas, com mais de 25 anos de experiência clínica na Lapa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {/* Dr. José Ricardo Guerra */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border border-slate-200/90 flex flex-col sm:flex-row items-center sm:items-start gap-5 hover:shadow-lg transition-all"
            >
              <div className="relative shrink-0">
                <img
                  src="/images/dentist_ricardo.png"
                  alt="Dr. José Ricardo Guerra - CRO-SP 66.961"
                  className="w-28 h-36 sm:w-32 sm:h-40 rounded-2xl object-cover object-top border-2 border-emerald-500 shadow-sm"
                  loading="lazy"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#008744] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-xs">
                  CRO-SP 66.961
                </span>
              </div>
              <div className="text-center sm:text-left flex-1">
                <div className="inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded mb-1">
                  Cirurgião Dentista • Sócio-Fundador
                </div>
                <h4 className="text-lg font-extrabold text-slate-900 leading-tight">
                  Dr. José Ricardo Guerra
                </h4>
                <p className="text-xs font-bold text-[#008744] mt-0.5">
                  CRO-SP 66.961 • Desde 2000 na Lapa
                </p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Experiência consolidada em clínica geral, reabilitação oral, implantodontia e cirurgias, com foco em atendimento humanizado e seguro.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3 justify-center sm:justify-start">
                  <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">Implantes</span>
                  <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">Clínica Geral</span>
                  <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">Reabilitação Oral</span>
                </div>
              </div>
            </motion.div>

            {/* Dr. José Henrique Guerra */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
              className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border border-slate-200/90 flex flex-col sm:flex-row items-center sm:items-start gap-5 hover:shadow-lg transition-all"
            >
              <div className="relative shrink-0">
                <img
                  src="/images/dentist_henrique.png"
                  alt="Dr. José Henrique Guerra - CRO-SP 97.458"
                  className="w-28 h-36 sm:w-32 sm:h-40 rounded-2xl object-cover object-top border-2 border-emerald-500 shadow-sm"
                  loading="lazy"
                />
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#008744] text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider whitespace-nowrap shadow-xs">
                  CRO-SP 97.458
                </span>
              </div>
              <div className="text-center sm:text-left flex-1">
                <div className="inline-block text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded mb-1">
                  Cirurgião Dentista • Sócio
                </div>
                <h4 className="text-lg font-extrabold text-slate-900 leading-tight">
                  Dr. José Henrique Guerra
                </h4>
                <p className="text-xs font-bold text-[#008744] mt-0.5">
                  CRO-SP 97.458 • Formado Barretos-SP
                </p>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Atuação dedicada em clínica geral, estética do sorriso, clareamento dental, próteses e alinhamento ortodôntico moderno.
                </p>
                <div className="flex flex-wrap gap-1.5 mt-3 justify-center sm:justify-start">
                  <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">Estética Dental</span>
                  <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">Clareamento</span>
                  <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-medium">Ortodontia & Harmonização</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Clinic Atmosphere & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Vertical Clinic Video Player */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-5 flex flex-col items-center"
          >
            <div className="w-full max-w-[320px] sm:max-w-[340px] mx-auto">
              {/* Smartphone-inspired clean vertical frame */}
              <div 
                className="relative rounded-[2.2rem] overflow-hidden shadow-2xl border-4 border-white bg-slate-950 ring-1 ring-slate-900/10"
                style={{ aspectRatio: '9 / 16' }}
              >
                <iframe 
                  ref={videoIframeRef}
                  src="https://player.vimeo.com/video/1231391663?title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479%2Fembed" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen 
                  title="Apresentação Sorriso Reality"
                  onLoad={handleIframeLoad}
                  className="absolute inset-0 w-full h-full border-0"
                />
              </div>

              {/* Caption & Fallback Tag */}
              <div className="mt-3 flex flex-col gap-1.5 text-center">
                <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center gap-2 text-xs text-slate-700 shadow-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#008744] shrink-0" />
                  <span className="font-medium">Assista e conheça nossa estrutura na Lapa</span>
                </div>
                <a
                  href="https://vimeo.com/1231391663"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1 text-[11px] text-[#008744] hover:underline font-semibold py-1"
                >
                  <span>Problemas para carregar? Abrir no Vimeo</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Narrative & Checklist */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight mb-3">
              Tradição, Tecnologia e Respeito pelo Paciente
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-4">
              Na <strong>Sorriso Reality</strong>, combinamos 25 anos de experiência e dedicação com atendimento humanizado, os irmãos fundadores Dr. Ricardo e Dr. Henrique e profissionais parceiros em todas as áreas odontológicas. Sempre com nossa marca: <em>preço justo e qualidade!</em>
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Você não precisa esperar semanas: temos atendimento com ou sem agendamento prévio na Rua Doze de Outubro, 651. São mais de 400 m² no térreo para te receber com conforto e acessibilidade total.
            </p>

            {/* Checklist */}
            <div className="space-y-2.5 mb-8 w-full text-xs sm:text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0" />
                <span><strong>Avaliação 100% Gratuita</strong> sem pegadinhas nem compromisso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0" />
                <span><strong>Equipe com vários dentistas</strong>: especialistas parceiros para cada necessidade bucal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0" />
                <span><strong>Atendimento Sem Agendamento</strong>: ordem de chegada rápida</span>
              </div>
            </div>

            {/* 4 Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full p-4 rounded-2xl bg-white border border-slate-200/80 mb-6 shadow-xs">
              <div>
                <div className="flex items-center gap-1 text-slate-900 font-extrabold text-lg sm:text-xl">
                  <Award className="w-4 h-4 text-[#008744]" />
                  <span>25 Anos</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Bodas de Prata (2000-2025)</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-slate-900 font-extrabold text-lg sm:text-xl">
                  <ShieldCheck className="w-4 h-4 text-[#008744]" />
                  <span>100%</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Avaliação Gratuita</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-slate-900 font-extrabold text-lg sm:text-xl">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>4.9</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Avaliações Google</p>
              </div>

              <div>
                <div className="flex items-center gap-1 text-slate-900 font-extrabold text-lg sm:text-xl">
                  <Smile className="w-4 h-4 text-[#008744]" />
                  <span>5.000+</span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium">Sorrisos Renovados</p>
              </div>
            </div>

            {/* 25 Years History Feature Card */}
            {onNavigateHistory && (
              <div className="w-full mb-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-amber-50/60 border border-emerald-200/90 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#008744] text-white flex items-center justify-center shrink-0 shadow-xs mt-0.5">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-bold text-[#006a38] uppercase tracking-wider">
                        Bodas de Prata • 25 Anos (2000 - 2025)
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 leading-snug">
                      Leia a reportagem especial do <strong>Jornal Nosso Bairro</strong> sobre a trajetória dos irmãos <strong>Dr. Ricardo e Dr. Henrique Guerra</strong> e a conquista de mais de 50 mil sorrisos na Lapa.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onNavigateHistory}
                  className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#008744] hover:bg-[#007038] shadow-sm transition-all cursor-pointer text-center"
                >
                  <span>Ver História Completa</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* CTA */}
            <button
              onClick={onOpenBookingModal}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#008744] hover:bg-[#007038] active:bg-[#005a2b] shadow-md hover:shadow-lg transition-all text-xs sm:text-sm cursor-pointer"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Agendar Avaliação Gratuita na Sorriso Reality</span>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

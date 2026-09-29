import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CLINIC_INFO, CLINIC_HISTORY } from '../data/clinicData';
import { 
  ArrowLeft, 
  Calendar, 
  MapPin, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Building2, 
  Heart, 
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  BookOpen,
  Share2
} from 'lucide-react';

interface HistoryPageProps {
  onBackToHome: () => void;
  onOpenBookingModal: (serviceName?: string) => void;
}

export const HistoryPage: React.FC<HistoryPageProps> = ({ onBackToHome, onOpenBookingModal }) => {
  const [selectedMilestoneYear, setSelectedMilestoneYear] = useState<string>('all');
  const [copiedNotification, setCopiedNotification] = useState(false);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  const filteredMilestones = selectedMilestoneYear === 'all' 
    ? CLINIC_HISTORY.milestones 
    : CLINIC_HISTORY.milestones.filter(m => m.year === selectedMilestoneYear);

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-800">
      
      {/* Editorial Top Navigation Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-[#008744] transition-colors py-2 group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Voltar à Página Inicial</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
              title="Copiar link da história"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-500" />
              <span>{copiedNotification ? 'Link Copiado!' : 'Compartilhar'}</span>
            </button>

            <button
              onClick={() => onOpenBookingModal('Avaliação Gratuita - 25 Anos')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#008744] hover:bg-[#007038] shadow-sm transition-all cursor-pointer"
            >
              <span>Agendar Avaliação</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-emerald-50/20 to-slate-50/70 pt-10 pb-14 border-b border-emerald-900/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Eyebrow kicker */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#006030] text-xs font-bold uppercase tracking-wider mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#008744]" />
            <span>Matéria Especial de Aniversário • 2000 a 2025</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] mb-5">
            Sorriso Reality <span className="text-[#008744]">25 Anos</span>
            <br className="hidden sm:inline" />
            <span className="text-2xl sm:text-3xl md:text-4xl font-normal text-slate-700 block sm:inline sm:ml-2">
              — Do Sonho às Bodas de Prata
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Neste 10 de julho de 2025, a Sorriso Reality celebrou 25 anos de atividade ininterrupta na Lapa, liderada pelos irmãos e sócios dentistas <strong>Dr. José Ricardo Guerra</strong> e <strong>Dr. José Henrique Guerra</strong>. Uma trajetória que começou em 2000 e já transformou mais de 50 mil sorrisos com preço justo, qualidade e acolhimento humano.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto pt-2">
            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#008744]">25 Anos</div>
              <div className="text-xs font-semibold text-slate-800 mt-0.5">Bodas de Prata</div>
              <div className="text-[11px] text-slate-500">Julho 2000 a 2025</div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-black text-slate-900">+50 Mil</div>
              <div className="text-xs font-semibold text-slate-800 mt-0.5">Clientes Atendidos</div>
              <div className="text-[11px] text-slate-500">História e dedicação</div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-black text-slate-900">+400 m²</div>
              <div className="text-xs font-semibold text-slate-800 mt-0.5">Clínica no Térreo</div>
              <div className="text-[11px] text-slate-500">Rua 12 de Outubro, 651</div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-xs text-center">
              <div className="text-2xl sm:text-3xl font-black text-[#008744]">100%</div>
              <div className="text-xs font-semibold text-slate-800 mt-0.5">Avaliação Gratuita</div>
              <div className="text-[11px] text-slate-500">Sem burocracia ou fila</div>
            </div>
          </div>

        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Newspaper Facsimile / Publication Card */}
        <section className="bg-amber-50/40 rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-200/80 shadow-md">
          {/* Newspaper Masthead Header */}
          <div className="border-b-2 border-slate-900 pb-4 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 gap-1 pb-2">
              <span className="font-semibold text-slate-800">Publicado no <strong>Jornal Nosso Bairro</strong></span>
              <div className="flex items-center gap-3 text-slate-500">
                <span>{CLINIC_HISTORY.newspaperReport.website}</span>
                <span>•</span>
                <span>{CLINIC_HISTORY.newspaperReport.email}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between pt-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#008744] tracking-tight uppercase">
                {CLINIC_HISTORY.newspaperReport.headline}
              </h2>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1 sm:mt-0">
                Edição Especial Comemorativa
              </span>
            </div>
          </div>

          {/* Newspaper Dual Founders Portrait & Lead Block */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start mb-6">
            
            {/* The Founders Photo Showcase - Authentic newspaper photo */}
            <div className="md:col-span-5 bg-white p-3 sm:p-4 rounded-2xl border border-slate-200 shadow-sm">
              <div className="relative w-full rounded-xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs group">
                <img
                  src="/images/fotodentistas.png"
                  alt="Dr. José Ricardo Guerra e Dr. José Henrique Guerra - Sorriso Reality 25 anos"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-2.5 left-2.5 bg-[#008744]/95 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs">
                  Foto Real da Reportagem
                </div>
              </div>

              <div className="text-center pt-3 mt-1">
                <p className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  Dr. José Ricardo Guerra &amp; Dr. José Henrique Guerra
                </p>
                <div className="flex items-center justify-center gap-3 text-[11px] text-emerald-800 font-semibold mt-1">
                  <span>CRO-SP 66.961</span>
                  <span>•</span>
                  <span>CRO-SP 97.458</span>
                </div>
                <div className="pt-2 mt-2 border-t border-slate-100 text-[11px] text-slate-500 font-medium">
                  Sócios-diretores e cirurgiões dentistas da Sorriso Reality
                </div>
              </div>
            </div>

            {/* Newspaper Text Content */}
            <div className="md:col-span-7 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
              <p className="font-semibold text-slate-900 text-base sm:text-lg">
                Neste 10 de julho 2025, a Sorriso Reality completou 25 anos de atividades com os sócios dentistas José Ricardo Guerra e José Henrique Guerra.
              </p>

              <p>
                Tudo começou lá em <strong>10 de julho de 2000</strong>, na <strong>Rua Afonso Sardinha, nº 146 – Lapa</strong>, quando o Dr. Ricardo inicia sua trajetória na odontologia. O acolhimento aos pacientes e a qualidade técnica logo impulsionaram o crescimento: em 2003 já eram 3 clínicas, sendo duas na Lapa e outra na Zona Leste.
              </p>

              <p>
                Em 2009, seu irmão <strong>Dr. Henrique</strong> se forma e integra a equipe e sociedade da Sorriso Reality. Em 2010, acontece a inauguração da clínica da <strong>Av. Itaberaba</strong>.
              </p>

              <p>
                E em 2020 veio a histórica inauguração da unidade na <strong>Rua 12 de Outubro, nº 651</strong>, também na Lapa, tornando-se a <strong>primeira clínica odontológica no térreo de toda a Rua 12 de Outubro</strong>, com uma estrutura ampla de mais de <strong>400m²</strong> de fácil acesso.
              </p>
            </div>
          </div>

          {/* Newspaper Full Columns Continuation */}
          <div className="border-t border-amber-200/80 pt-5 space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              Nesses 25 anos de história, foram <strong>mais de 50 mil clientes atendidos</strong>, todos com muito empenho e dedicação, atuando em todas as áreas da odontologia: clínica geral, próteses, ortodontia, implantes dentários e, agora também, com a moderna área de estética e harmonização facial, sempre com sua marca registrada — <em>preço justo e qualidade!</em>
            </p>

            {/* Highlighted Quote Box */}
            <blockquote className="my-4 p-5 rounded-2xl bg-white border-l-4 border-[#008744] shadow-xs text-slate-800 italic">
              <p className="font-medium text-slate-900 not-italic mb-1 text-sm uppercase tracking-wider text-[#008744]">
                Do Sonho às Bodas de Prata...
              </p>
              &ldquo;Formados na Universidade de Odontologia de Barretos – SP, os irmãos doutores Ricardo e Henrique nunca se acomodaram no ofício. Muitíssimo pelo contrário: ao longo do tempo, se especializaram em Ortodontia, Implantes e Harmonização Facial, entre outras especialidades; isso sem contar que a Sorriso Reality ainda conta com profissionais parceiros em todas as áreas.&rdquo;
            </blockquote>

            <p className="font-semibold text-slate-900">
              &ldquo;Agradecemos aos nossos pacientes e colaboradores! Sorriso Reality, há 25 anos atendendo e atendendo bem!&rdquo;
            </p>

            {/* Official Contact Strip from the Newspaper */}
            <div className="pt-4 border-t border-amber-200 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-800 bg-white/70 p-4 rounded-xl">
              <div>
                <strong>Endereço Oficial:</strong> R. 12 de Outubro, 651 - Lapa (São Paulo - SP)
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <span><strong>WhatsApp / Telefone:</strong> {CLINIC_INFO.phone}</span>
                <span><strong>Instagram:</strong> {CLINIC_INFO.instagramHandle}</span>
                <span><strong>Facebook:</strong> {CLINIC_INFO.facebookPage}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Informações e Marcos Esclarecidos da Matéria */}
        <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold text-[#008744] uppercase tracking-wider">
              Informações Consolidadas da Reportagem
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
              Fatos Históricos da Sorriso Reality (2000 - 2025)
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Todos os dados e datas confirmados a partir da edição oficial comemorativa do Jornal Nosso Bairro:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex flex-col">
              <span className="text-xs font-bold text-[#008744]">10 de Julho de 2000</span>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">O Ponto de Partida na Lapa</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Tudo começou na <strong>Rua Afonso Sardinha, nº 146 – Lapa</strong>, quando o <strong>Dr. José Ricardo Guerra</strong> iniciou a trajetória da Sorriso Reality.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex flex-col">
              <span className="text-xs font-bold text-[#008744]">Ano de 2003</span>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">Expansão para 3 Clínicas</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Em apenas 3 anos de acolhimento e dedicação, já eram <strong>3 clínicas ativas</strong>: duas localizadas na Lapa e outra na Zona Leste de São Paulo.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex flex-col">
              <span className="text-xs font-bold text-[#008744]">Ano de 2009</span>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">Irmãos Formados em Barretos-SP</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                O irmão <strong>Dr. José Henrique Guerra</strong> conclui sua graduação em Odontologia na <strong>Universidade de Barretos – SP</strong> e integra a sociedade e equipe.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex flex-col">
              <span className="text-xs font-bold text-[#008744]">Ano de 2010</span>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">Unidade Av. Itaberaba</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Inauguração da clínica da <strong>Avenida Itaberaba</strong>, ampliando o acesso à odontologia acessível e humanizada para novos públicos.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex flex-col">
              <span className="text-xs font-bold text-[#008744]">Ano de 2020</span>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">1ª Clínica no Térreo da 12 de Outubro</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Inauguração da sede na <strong>Rua 12 de Outubro, nº 651</strong>: pioneira ao funcionar no térreo em toda a rua, com ampla estrutura de mais de <strong>400m²</strong>.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 flex flex-col">
              <span className="text-xs font-bold text-[#008744]">10 de Julho de 2025</span>
              <h4 className="text-sm font-bold text-slate-900 mt-0.5">Bodas de Prata: 25 Anos</h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                Comemoração dos 25 anos com <strong>mais de 50 mil clientes atendidos</strong>, incorporando a área de estética e harmonização facial, com preço justo e qualidade!
              </p>
            </div>
          </div>
        </section>

        {/* The Founders Profile Cards */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#008744] uppercase tracking-wider">Liderança Clínica</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              Conheça os Irmãos Dentistas Fundadores
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Formados na conceituada Universidade de Odontologia de Barretos – SP, com pós-graduações e especializações contínuas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CLINIC_HISTORY.founders.map((founder, idx) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-5">
                    <div className="w-24 h-28 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200 shadow-xs">
                      <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div>
                      <span className="inline-block text-[11px] font-bold text-[#008744] uppercase tracking-wider">
                        {founder.role}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                        {founder.name}
                      </h3>
                      <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 inline-block px-2 py-0.5 rounded-md mt-1">
                        {founder.cro}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        🎓 {founder.university}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed mb-4">
                    {founder.bio}
                  </p>

                  <div className="pt-3 border-t border-slate-100">
                    <span className="text-xs font-semibold text-slate-700 block mb-2">
                      Áreas de Especialização:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {founder.specialties.map(spec => (
                        <span 
                          key={spec} 
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Atendimento humanizado na Lapa</span>
                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#008744] hover:text-[#007038] hover:underline"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Falar com o consultório</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Visual Interactive Timeline (2000 - 2025) */}
        <section>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#008744] uppercase tracking-wider">Linha do Tempo</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
              25 Anos de História e Marcos na Odontologia
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              A evolução desde a primeira portinha na Rua Afonso Sardinha até a clínica de 400m² no térreo da Rua Doze de Outubro.
            </p>
          </div>

          {/* Filter Pills for Timeline Years */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
            <button
              onClick={() => setSelectedMilestoneYear('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedMilestoneYear === 'all'
                  ? 'bg-[#008744] text-white shadow-sm'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              Todos os Anos
            </button>
            {['2000', '2003', '2009', '2010', '2020', '2025'].map(yr => (
              <button
                key={yr}
                onClick={() => setSelectedMilestoneYear(yr)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedMilestoneYear === yr
                    ? 'bg-[#008744] text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>

          {/* Timeline Events Stack */}
          <div className="relative border-l-2 border-emerald-200 ml-4 sm:ml-8 md:ml-32 space-y-10">
            {filteredMilestones.map((m, idx) => (
              <motion.div
                key={m.year + m.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.1 }}
                className="relative pl-6 sm:pl-8 group"
              >
                {/* Year Marker Badge on Left on Desktop */}
                <div className="hidden md:flex absolute -left-36 top-0 w-28 text-right flex-col items-end">
                  <span className="text-2xl font-black text-[#008744]">{m.year}</span>
                  <span className="text-[11px] font-semibold text-slate-500">{m.exactDate}</span>
                </div>

                {/* Dot Node */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-[#008744] group-hover:scale-125 transition-transform" />

                {/* Card Content */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-xs hover:shadow-md transition-shadow">
                  {/* Mobile Date Header */}
                  <div className="md:hidden flex items-center gap-2 mb-1.5">
                    <span className="text-lg font-black text-[#008744]">{m.year}</span>
                    <span className="text-xs text-slate-500 font-medium">• {m.exactDate}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {m.title}
                  </h3>
                  
                  <div className="flex items-center gap-1.5 text-xs text-emerald-800 font-semibold mt-1 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-[#008744] shrink-0" />
                    <span>{m.location}</span>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {m.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Pillars of Sorriso Reality */}
        <section className="bg-gradient-to-br from-[#005a2b] to-[#008744] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold text-emerald-200 uppercase tracking-widest">Compromisso Permanente</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Os Pilares que Sustentam Nossos 25 Anos
            </h2>
            <p className="text-sm sm:text-base text-emerald-100 mt-2">
              Da graduação em Barretos até a liderança odontológica na Lapa, mantemos a mesma essência:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15">
              <div className="w-10 h-10 rounded-xl bg-white text-[#008744] flex items-center justify-center font-bold mb-4">
                <ShieldCheck className="w-5 h-5 text-[#008744]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Preço Justo e Qualidade</h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Materiais de excelência, tecnologia moderna e condições facilitadas em até 12x, tornando tratamentos odontológicos avançados acessíveis para todas as famílias.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15">
              <div className="w-10 h-10 rounded-xl bg-white text-[#008744] flex items-center justify-center font-bold mb-4">
                <Sparkles className="w-5 h-5 text-[#008744]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Há 25 Anos Atendendo Bem</h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Política de atendimento sem burocracia: avaliação inicial 100% gratuita e a comodidade de comparecer sem agendamento prévio.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15">
              <div className="w-10 h-10 rounded-xl bg-white text-[#008744] flex items-center justify-center font-bold mb-4">
                <Building2 className="w-5 h-5 text-[#008744]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Mais de 400 m² no Térreo</h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                A primeira clínica térrea da movimentada Rua Doze de Outubro na Lapa, projetada para acessibilidade integral de idosos e carrinhos de bebê.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/15">
              <div className="w-10 h-10 rounded-xl bg-white text-[#008744] flex items-center justify-center font-bold mb-4">
                <Heart className="w-5 h-5 text-[#008744]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Equipe Multidisciplinar Completa</h3>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Além da atuação direta dos fundadores Dr. Ricardo e Dr. Henrique, a clínica conta com profissionais parceiros em todas as especialidades da odontologia.
              </p>
            </div>
          </div>
        </section>

        {/* Visit Us CTA Banner */}
        <section className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            Faça Parte dos Próximos 25 Anos do Seu Sorriso
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto mb-8">
            Venha conhecer nossa unidade na <strong>Rua Doze de Outubro, 651 - Lapa</strong>. Não cobramos pela avaliação inicial e você pode chegar quando quiser durante nosso horário de atendimento.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenBookingModal('Avaliação Especial 25 Anos')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-sm sm:text-base font-bold text-white bg-[#008744] hover:bg-[#007038] shadow-md transition-all cursor-pointer"
            >
              <span>Agendar Minha Avaliação Gratuita</span>
              <ChevronRight className="w-4 h-4" />
            </button>

            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-bold text-[#006030] bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#008744]" />
              <span>Falar no WhatsApp: (11) 97101-2603</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
            <span>📍 Rua Doze de Outubro, 651 - Lapa</span>
            <span>📱 Telefone &amp; WhatsApp: (11) 97101-2603</span>
            <span>📸 Instagram: @clinicas.sorrisoreality</span>
          </div>
        </section>

      </div>

    </div>
  );
};

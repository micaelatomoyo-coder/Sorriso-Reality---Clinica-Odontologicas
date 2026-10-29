import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Train, 
  Bus, 
  CheckCircle2, 
  MessageCircle, 
  Compass, 
  ArrowRight,
  Clock,
  Sparkles,
  Building2
} from 'lucide-react';
import { CLINIC_UNITS } from '../data/clinicData';

interface RegionData {
  id: 'oeste' | 'norte' | 'metropolitana';
  title: string;
  subtitle: string;
  nearestUnit: string;
  unitAddress: string;
  whatsappUrl: string;
  transitSummary: string;
  highlights: string[];
  neighborhoods: string[];
}

const SERVICE_REGIONS: RegionData[] = [
  {
    id: 'oeste',
    title: 'Zona Oeste de São Paulo & Entorno da Lapa',
    subtitle: 'Atendimento direto pela Unidade 1 — Rua Doze de Outubro, 651 (Lapa)',
    nearestUnit: 'Unidade Lapa',
    unitAddress: 'Rua Doze de Outubro, 651 — Lapa, São Paulo - SP',
    whatsappUrl: 'https://wa.me/5511971012603?text=Olá!+Sou+da+Zona+Oeste+e+gostaria+de+informações+sobre+avaliação+gratuita+na+Unidade+Lapa.',
    transitSummary: 'A 450m da Estação Lapa da CPTM (Linha 7-Rubi e Linha 8-Diamante) e a 350m do Terminal Lapa de Ônibus.',
    highlights: [
      'Piso térreo com mais de 400 m² de estrutura',
      'Corredor comercial da Rua Doze de Outubro',
      'Atendimento imediato sem filas obrigatórias',
    ],
    neighborhoods: [
      'Lapa',
      'Lapa de Baixo',
      'Alto da Lapa',
      'Vila Romana',
      'Perdizes',
      'Pompéia',
      'Barra Funda',
      'Vila Anastácio',
      'Vila Leopoldina',
      'Jaguaré',
      'Vila Ipojuca',
      'Água Branca',
      'Pinheiros',
      'Vila Madalena',
    ],
  },
  {
    id: 'norte',
    title: 'Zona Norte de São Paulo & Freguesia do Ó',
    subtitle: 'Atendimento direto pela Unidade 2 — Av. Itaberaba, 2067 (Freguesia do Ó)',
    nearestUnit: 'Unidade Freguesia do Ó',
    unitAddress: 'Av. Itaberaba, 2067 — Freguesia do Ó, São Paulo - SP',
    whatsappUrl: 'https://wa.me/5511952163542?text=Olá!+Sou+da+Zona+Norte+e+gostaria+de+informações+sobre+avaliação+gratuita+na+Unidade+Freguesia+do+Ó.',
    transitSummary: 'Localização central na Av. Itaberaba, próximo à Av. João Paulo I e com dezenas de linhas de ônibus municipais.',
    highlights: [
      'Clínica moderna com acessibilidade completa',
      'Equipe multidisciplinar em todas as especialidades',
      'Avaliação 100% gratuita na recepção',
    ],
    neighborhoods: [
      'Freguesia do Ó',
      'Brasilândia',
      'Itaberaba',
      'Limão',
      'Casa Verde',
      'Vila Nova Cachoeirinha',
      'Cachoeirinha',
      'Morro Grande',
      'Pirituba',
      'Taipas',
      'Mandaqui',
      'Santana',
      'Vila Albertina',
      'Chora Menino',
    ],
  },
  {
    id: 'metropolitana',
    title: 'Municípios Vizinhos & Grande São Paulo',
    subtitle: 'Fácil acesso pelas Marginais Tietê / Pinheiros e malha ferroviária CPTM',
    nearestUnit: 'Ambas as Unidades (Lapa & Freguesia)',
    unitAddress: 'Conexão rápida via CPTM, Rod. Castelo Branco e Anhanguera',
    whatsappUrl: 'https://wa.me/5511971012603?text=Olá!+Moro+na+Grande+SP+e+gostaria+de+agendar+minha+avaliação+na+Sorriso+Reality.',
    transitSummary: 'Trem CPTM direto para a Estação Lapa e acesso rápido pela Marginal Tietê.',
    highlights: [
      'Tratamentos complexos (Implantes e Próteses) com planejamento rápido',
      'Opções de parcelamento em até 12x no cartão de crédito',
      'Possibilidade de iniciar tratamento no mesmo dia da avaliação',
    ],
    neighborhoods: [
      'Osasco',
      'Carapicuíba',
      'Barueri / Alphaville',
      'Caieiras',
      'Franco da Rocha',
      'Francisco Morato',
      'Taboão da Serra',
    ],
  },
];

interface ServiceAreaSectionProps {
  onOpenBookingModal?: (serviceName?: string) => void;
}

export const ServiceAreaSection: React.FC<ServiceAreaSectionProps> = ({ onOpenBookingModal }) => {
  const [activeTab, setActiveTab] = useState<'oeste' | 'norte' | 'metropolitana'>('oeste');

  const currentRegion = SERVICE_REGIONS.find((r) => r.id === activeTab) || SERVICE_REGIONS[0];

  return (
    <section 
      id="area-de-atendimento" 
      aria-labelledby="area-atendimento-heading"
      className="py-16 sm:py-24 bg-gradient-to-b from-white via-emerald-50/20 to-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div 
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-[#005a2b] text-xs font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <Compass className="w-3.5 h-3.5 text-[#008744]" />
            <span>SEO Local &bull; Área de Cobertura e Atendimento</span>
          </div>

          <h2 
            id="area-atendimento-heading"
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Bairros e Regiões Atendidas em São Paulo
          </h2>
          <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
            Com clínicas estrategicamente posicionadas na <strong>Lapa</strong> e na <strong>Freguesia do Ó</strong>, 
            a Sorriso Reality é referência odontológica para moradores e trabalhadores de toda a Zona Oeste, 
            Zona Norte e cidades adjacentes da Grande São Paulo.
          </p>
        </div>

        {/* Region Switcher Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
          {SERVICE_REGIONS.map((region) => {
            const isActive = activeTab === region.id;
            return (
              <button
                key={region.id}
                type="button"
                onClick={() => setActiveTab(region.id)}
                aria-pressed={isActive}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 min-h-[48px] ${
                  isActive
                    ? 'bg-[#008744] text-white shadow-md shadow-emerald-700/20 scale-[1.02]'
                    : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-emerald-50/70 border border-slate-200/90'
                }`}
              >
                <MapPin className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#008744]'}`} />
                <span>{region.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Region Showcase Card */}
        <article 
          key={currentRegion.id}
          className="bg-white rounded-3xl border border-slate-200/90 shadow-xl p-6 sm:p-8 lg:p-10 transition-all duration-200"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Region Details */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-100/90 text-[#005a2b] text-xs font-bold mb-3 border border-emerald-300">
                  <Building2 className="w-3.5 h-3.5 text-[#005a2b]" />
                  <span>Unidade Referência: {currentRegion.nearestUnit}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                  {currentRegion.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mb-4 font-medium">
                  {currentRegion.subtitle}
                </p>

                {/* Transit Details */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 mb-6">
                  <div className="flex items-start gap-3">
                    <Train className="w-5 h-5 text-[#008744] shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs font-bold text-slate-900 uppercase tracking-wide">
                        Como Chegar com Facilidade:
                      </span>
                      <p className="text-xs sm:text-sm text-slate-700 mt-0.5 leading-relaxed">
                        {currentRegion.transitSummary}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2.5 mb-6">
                  {currentRegion.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-[#008744] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-slate-100">
                <a
                  href={currentRegion.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Falar no WhatsApp sobre atendimento para ${currentRegion.title}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#008744] hover:bg-[#007038] transition-colors shadow-md text-sm min-h-[48px] cursor-pointer text-center"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Consultar no WhatsApp ({currentRegion.nearestUnit})</span>
                </a>

                {onOpenBookingModal && (
                  <button
                    type="button"
                    onClick={() => onOpenBookingModal(`Avaliação - Região ${currentRegion.title.split('&')[0].trim()}`)}
                    className="inline-flex items-center justify-center gap-1.5 px-5 py-3.5 rounded-xl font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 text-sm transition-colors min-h-[48px] cursor-pointer"
                  >
                    <span>Solicitar Avaliação Gratuita</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: Interactive Neighborhood Tags Cloud */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-50 to-emerald-50/40 p-5 sm:p-6 rounded-2xl border border-slate-200/80">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-[#008744]" />
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                  Principais Bairros Atendidos:
                </h3>
              </div>
              <p className="text-xs text-slate-600 mb-4">
                Atendemos pacientes com proximidade de deslocamento, ponto de ônibus e transporte integrado:
              </p>

              <div className="flex flex-wrap gap-2">
                {currentRegion.neighborhoods.map((neighborhood) => (
                  <span
                    key={neighborhood}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-white border border-emerald-200/80 text-xs font-semibold text-slate-800 shadow-2xs hover:border-[#008744] hover:text-[#008744] transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#008744]" />
                    {neighborhood}
                  </span>
                ))}
              </div>

              <div className="mt-5 p-3 rounded-xl bg-white/80 border border-emerald-100 text-[11px] text-slate-600 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#008744] shrink-0" />
                <span>
                  Não precisa de agendamento obrigatório: você pode vir direto para uma avaliação inicial sem custos!
                </span>
              </div>
            </div>

          </div>
        </article>

        {/* Global Local SEO Disclaimer Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-white border border-slate-200 text-center text-xs text-slate-600 max-w-4xl mx-auto shadow-2xs">
          <p>
            <strong>Sorriso Reality Clínicas Odontológicas</strong> &bull; São Paulo - SP &bull; 
            Unidade Lapa: <em>Rua Doze de Outubro, 651</em> &bull; 
            Unidade Freguesia do Ó: <em>Av. Itaberaba, 2067</em>. 
            Atendimento odontológico com preço justo, qualidade e acolhimento humano desde 2000.
          </p>
        </div>

      </div>
    </section>
  );
};

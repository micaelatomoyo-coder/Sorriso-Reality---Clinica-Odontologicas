export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  image: string;
  iconName: string;
  popular?: boolean;
  timeEstimate: string;
  walkInAvailable: boolean;
}

export interface TestimonialItem {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  treatment: string;
  comment: string;
  neighborhood: string;
  date: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'atendimento' | 'pagamento' | 'tratamentos';
}

export interface DentistMember {
  name: string;
  title: string;
  cro: string;
  specialties: string[];
  image: string;
}

export interface ClinicUnit {
  id: 'lapa' | 'freguesia';
  name: string;
  shortName: string;
  neighborhood: string;
  tag: string;
  isMain?: boolean;
  phone: string;
  phoneRaw: string;
  phoneFormatted: string;
  whatsappUrl: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    reference: string;
    googleMapsUrl: string;
    wazeUrl: string;
    mapEmbedUrl: string;
  };
  transport: {
    trainOrMetro?: string;
    bus: string;
    reference: string;
  };
  hours: { days: string; hours: string; isClosed?: boolean }[];
  features: string[];
}

export const CLINIC_UNITS: ClinicUnit[] = [
  {
    id: 'lapa',
    name: 'Unidade 1 — Lapa (Sede Principal)',
    shortName: 'Unidade Lapa',
    neighborhood: 'Lapa',
    tag: 'Sede Própria • Térreo',
    isMain: true,
    phone: '(11) 97101-2603',
    phoneRaw: '5511971012603',
    phoneFormatted: '(11) 97101-2603',
    whatsappUrl: 'https://wa.me/5511971012603?text=Ol%C3%A1%2C%20equipe%20Sorriso%20Reality%20Lapa!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20e%20saber%20mais%20sobre%20a%20Avalia%C3%A7%C3%A3o%20Gratuita.',
    address: {
      street: 'Rua Doze de Outubro, 651',
      neighborhood: 'Lapa',
      city: 'São Paulo',
      state: 'SP',
      cep: '05073-001',
      reference: 'No centro comercial da Lapa, próximo ao Shopping Lapa e à estação CPTM',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Doze+de+Outubro+651+Lapa+Sao+Paulo',
      wazeUrl: 'https://waze.com/ul?q=Rua%20Doze%20de%20Outubro%20651%20Lapa%20Sao%20Paulo',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Rua%20Doze%20de%20Outubro,%20651%20Lapa%20Sao%20Paulo&t=&z=16&ie=UTF8&iwloc=&output=embed',
    },
    transport: {
      trainOrMetro: 'Apenas 4 minutos a pé das estações Lapa da CPTM (Linhas 7 e 8).',
      bus: 'Dezenas de linhas de ônibus passam em frente e na Rua Doze de Outubro.',
      reference: 'Em frente ao comércio central, bem próximo ao Shopping Center Lapa e Mercado da Lapa.'
    },
    hours: [
      { days: 'Segunda a Sexta-feira', hours: '09h às 18h' },
      { days: 'Sábado', hours: '09h às 13h' },
      { days: 'Domingos e Feriados', hours: 'Fechado (Plantão WhatsApp)', isClosed: true }
    ],
    features: [
      'Mais de 400 m² no piso térreo',
      'Acessibilidade total para idosos e carrinhos',
      'Atendimento com ou sem hora marcada',
      'Avaliação inicial 100% gratuita'
    ]
  },
  {
    id: 'freguesia',
    name: 'Unidade 2 — Freguesia do Ó',
    shortName: 'Unidade Freguesia do Ó',
    neighborhood: 'Freguesia do Ó',
    tag: 'Av. Itaberaba • Desde 2010',
    isMain: false,
    phone: '(11) 4306-0023',
    phoneRaw: '551143060023',
    phoneFormatted: '(11) 4306-0023',
    whatsappUrl: 'https://wa.me/551143060023?text=Ol%C3%A1%2C%20equipe%20Sorriso%20Reality%20Freguesia%20do%20%C3%93!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20e%20saber%20mais%20sobre%20a%20Avalia%C3%A7%C3%A3o%20Gratuita.',
    address: {
      street: 'Av. Itaberaba, 2067',
      neighborhood: 'Freguesia do Ó',
      city: 'São Paulo',
      state: 'SP',
      cep: '02734-000',
      reference: 'Na principal avenida da Freguesia do Ó, com fácil acesso e comércio ativo',
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av+Itaberaba+2067+Freguesia+do+O+Sao+Paulo',
      wazeUrl: 'https://waze.com/ul?q=Av%20Itaberaba%202067%20Freguesia%20do%20O%20Sao%20Paulo',
      mapEmbedUrl: 'https://maps.google.com/maps?q=Av.%20Itaberaba,%202067%20Freguesia%20do%20O%20Sao%20Paulo&t=&z=16&ie=UTF8&iwloc=&output=embed',
    },
    transport: {
      trainOrMetro: 'Fácil integração com transporte público da Zona Norte e Marginal Tietê.',
      bus: 'Diversas linhas de ônibus com ponto em frente ou na mesma quadra da Av. Itaberaba.',
      reference: 'Ponto comercial consolidado na Av. Itaberaba, com facilidade para paradas rápidas e comércio local.'
    },
    hours: [
      { days: 'Segunda a Sexta-feira', hours: '09h às 18h' },
      { days: 'Sábado', hours: '09h às 13h' },
      { days: 'Domingos e Feriados', hours: 'Fechado (Plantão WhatsApp)', isClosed: true }
    ],
    features: [
      'Localização privilegiada na Av. Itaberaba',
      'Corpo clínico completo e equipamentos modernos',
      'Atendimento por ordem de chegada ou agendado',
      'Avaliação 100% gratuita'
    ]
  }
];

export const CLINIC_INFO = {
  name: "Sorriso Reality",
  fullName: "Sorriso Reality Clínicas Odontológicas",
  tagline: "Há 25 anos atendendo e atendendo bem!",
  motto: "Preço justo e qualidade!",
  experienceYears: 25,
  dentistsPhoto: "/images/fotodentistas.png",
  units: CLINIC_UNITS,
  dentists: [
    {
      name: "Dr. José Ricardo Guerra",
      title: "Cirurgião Dentista",
      cro: "CRO-SP 66.961",
      specialties: ["Clínica Geral", "Implantodontia", "Reabilitação Oral & Cirurgia"],
      image: "/images/dentist_ricardo.png",
    },
    {
      name: "Dr. José Henrique Guerra",
      title: "Cirurgião Dentista",
      cro: "CRO-SP 97.458",
      specialties: ["Clínica Geral", "Ortodontia", "Harmonização Facial & Estética"],
      image: "/images/dentist_henrique.png",
    },
  ],
  // Retained for backward-compatibility
  dentist: {
    name: "Dr. José Ricardo Guerra",
    title: "Cirurgião Dentista",
    cro: "CRO-SP 66.961",
    specialties: ["Clínica Geral", "Implantodontia", "Reabilitação Oral"],
    image: "/images/dentist_ricardo.png",
    experienceYears: 25,
  },
  phone: "(11) 97101-2603",
  phoneRaw: "5511971012603",
  phoneSecondary: "(11) 4306-0023",
  phoneSecondaryRaw: "551143060023",
  whatsappUrl: "https://wa.me/5511971012603?text=Ol%C3%A1%2C%20equipe%20Sorriso%20Reality!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20e%20saber%20mais%20sobre%20a%20Avalia%C3%A7%C3%A3o%20Gratuita%20na%20Sorriso%20Reality.",
  whatsappUrlFreguesia: "https://wa.me/551143060023?text=Ol%C3%A1%2C%20equipe%20Sorriso%20Reality%20Freguesia%20do%20%C3%93!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20e%20saber%20mais%20sobre%20a%20Avalia%C3%A7%C3%A3o%20Gratuita.",
  instagramHandle: "@clinicas.sorrisoreality",
  instagramUrl: "https://www.instagram.com/clinicas.sorrisoreality",
  facebookPage: "Clínicas Sorriso Reality",
  address: {
    street: "Rua Doze de Outubro, 651",
    neighborhood: "Lapa",
    city: "São Paulo",
    state: "SP",
    cep: "05073-001",
    reference: "No centro comercial da Lapa, próximo ao Shopping Lapa e à estação de trem CPTM Lapa",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua+Doze+de+Outubro+651+Lapa+Sao+Paulo",
    wazeUrl: "https://waze.com/ul?q=Rua%20Doze%20de%20Outubro%20651%20Lapa%20Sao%20Paulo",
  },
  addressUnit2: {
    street: "Av. Itaberaba, 2067",
    neighborhood: "Freguesia do Ó",
    city: "São Paulo",
    state: "SP",
    cep: "02734-000",
    reference: "Na principal avenida da Freguesia do Ó, fácil acesso",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Av+Itaberaba+2067+Freguesia+do+O+Sao+Paulo",
    wazeUrl: "https://waze.com/ul?q=Av%20Itaberaba%202067%20Freguesia%20do%20O%20Sao%20Paulo",
  },
  hours: [
    { days: "Segunda a Sexta", hours: "09h às 18h", openTime: 9, closeTime: 18, isWeekday: true },
    { days: "Sábado", hours: "09h às 13h", openTime: 9, closeTime: 13, isSaturday: true },
    { days: "Domingo e Feriados", hours: "Fechado (Plantão Emergencial via WhatsApp)", isClosed: true }
  ],
  stats: [
    { number: "25 Anos", label: "Bodas de Prata", subtitle: "Fundada em 10 de julho de 2000 na Lapa" },
    { number: "50.000+", label: "Pacientes Atendidos", subtitle: "História de carinho e dedicação comprovada" },
    { number: "400 m²", label: "Clínica Térrea", subtitle: "1ª clínica térrea da Rua 12 de Outubro" },
    { number: "100%", label: "Avaliação Gratuita", subtitle: "Preço justo e sem burocracia" },
  ]
};

export interface HistoryMilestone {
  year: string;
  exactDate: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
}

export const CLINIC_HISTORY = {
  anniversary: "25 Anos",
  tagline: "Há 25 anos atendendo e atendendo bem!",
  motto: "Preço justo e qualidade!",
  theme: "Do Sonho às Bodas de Prata (2000 - 2025)",
  foundersPhoto: "/images/fotodentistas.png",
  founders: [
    {
      name: "Dr. José Ricardo Guerra",
      cro: "CRO-SP 66.961",
      university: "Universidade de Odontologia de Barretos – SP",
      specialties: ["Clínica Geral", "Implantodontia", "Reabilitação Oral", "Próteses"],
      role: "Cirurgião Dentista • Sócio-Fundador",
      image: "/images/dentist_ricardo.png",
      bio: "Iniciou sua trajetória na odontologia em 10 de julho de 2000 na Rua Afonso Sardinha, nº 146 – Lapa. Formado pela Universidade de Odontologia de Barretos – SP, especializou-se em Implantes e Reabilitação, liderando a consolidação da clínica na Lapa com compromisso de preço justo, acolhimento e excelência técnica."
    },
    {
      name: "Dr. José Henrique Guerra",
      cro: "CRO-SP 97.458",
      university: "Universidade de Odontologia de Barretos – SP",
      specialties: ["Ortodontia", "Harmonização Facial", "Estética Dental", "Clínica Geral"],
      role: "Cirurgião Dentista • Sócio",
      image: "/images/dentist_henrique.png",
      bio: "Formou-se em 2009 pela Universidade de Odontologia de Barretos – SP e integrou a equipe e sociedade da Sorriso Reality ao lado do irmão Dr. Ricardo. Especializou-se em Ortodontia e na moderna área de Harmonização Facial, agregando tecnologia e novas especialidades ao consultório."
    }
  ],
  newspaperReport: {
    source: "Jornal Nosso Bairro",
    website: "www.jornalnossobairro.com.br",
    email: "jnossobairro@uol.com.br",
    headline: "Sorriso Reality 25 anos",
    subheadline: "Do sonho à Bodas de Prata...",
    photoCaption: "Os sócios e cirurgiões dentistas Dr. José Ricardo Guerra e Dr. José Henrique Guerra",
    publishedDate: "10 de Julho de 2025",
    fullText: `Neste 10 de julho 2025, a Sorriso Reality completou 25 anos de atividades com os sócios dentistas José Ricardo Guerra e José Henrique Guerra. Tudo começou lá em 10 de julho de 2000, na Rua Afonso Sardinha, nº 146 – Lapa, quando Dr Ricardo inicia sua trajetória na odontologia e em 2003 já eram 3 clínicas, sendo duas na Lapa e outra na zona leste.

Em 2009, seu irmão Dr Henrique se forma e integra a equipe da Sorriso reality.

Em 2010, acontece a inauguração da clínica da Av Itaberaba. E em 2020 a inauguração da unidade 12 de outubro, nº 651, também na Lapa, sendo a primeira clínica no térreo na Rua 12 de Outubro, com mais de 400m².

Nesses 25 anos de história, foram mais de 50 mil clientes atendidos, todos com muito empenho e dedicação, atuando em todas áreas na odontologia, como clínica geral, próteses, ortodontia, implantes e, agora também com a área de estética e harmonização facial, sempre com sua marca, ou seja, preço justo e qualidade!

Do sonho à Bodas de Prata... Formados na Universidade de Odontologia de Barretos – SP, os irmãos doutores Ricardo e Henrique, nunca se acomodaram no ofício, muitíssimo pelo contrário, ao longo do tempo, se especializaram em Ortodontia, Implantes e Harmonização Facial, entre outras; isso sem contar que a Sorriso Reality ainda conta com profissionais parceiros em todas áreas.

Agradecemos aos nossos pacientes e colaboradores!
Sorriso Reality, há 25 anos atendendo e atendendo bem!

R. 12 de Outubro 651 Lapa
WhatsApp / Telefone: (11) 97101-2603
Instagram: @clinicas.sorrisoreality  Facebook: Clínicas Sorriso Reality`
  },
  milestones: [
    {
      year: "2000",
      exactDate: "10 de Julho de 2000",
      title: "O Primeiro Consultório na Lapa",
      subtitle: "Rua Afonso Sardinha, nº 146",
      description: "O Dr. José Ricardo Guerra abre as portas na Rua Afonso Sardinha, nº 146 na Lapa, inaugurando a história da Sorriso Reality com atendimento acolhedor e valores acessíveis para as famílias do bairro.",
      location: "Rua Afonso Sardinha, 146 - Lapa",
    },
    {
      year: "2003",
      exactDate: "Ano de 2003",
      title: "Expansão para 3 Unidades",
      subtitle: "Reconhecimento e Demanda Crescente",
      description: "Em apenas 3 anos de atuação, o rápido reconhecimento dos pacientes impulsionou a expansão para 3 consultórios em funcionamento (sendo duas unidades na Lapa e uma na Zona Leste).",
      location: "Lapa e Zona Leste de São Paulo",
    },
    {
      year: "2009",
      exactDate: "Ano de 2009",
      title: "A União dos Irmãos Dentistas",
      subtitle: "Dr. José Henrique Guerra integra a equipe",
      description: "O irmão Dr. José Henrique Guerra forma-se pela Universidade de Odontologia de Barretos – SP e integra a sociedade e equipe da Sorriso Reality ao lado do Dr. Ricardo, fortalecendo a união familiar e agregando as especialidades de Ortodontia e Harmonização Facial.",
      location: "Lapa, São Paulo",
    },
    {
      year: "2010",
      exactDate: "Ano de 2010",
      title: "Inauguração na Av. Itaberaba",
      subtitle: "Ampliando o Acesso à Odontologia de Qualidade",
      description: "Acontece a abertura da clínica na Avenida Itaberaba, expandindo o atendimento humanizado e os tratamentos acessíveis da Sorriso Reality para mais paulistanos.",
      location: "Avenida Itaberaba, São Paulo",
    },
    {
      year: "2020",
      exactDate: "Ano de 2020",
      title: "Marco dos 400 m² no Térreo da Rua 12 de Outubro",
      subtitle: "Unidade Principal nº 651",
      description: "Inauguração da unidade na Rua 12 de Outubro, nº 651, no coração da Lapa. Um marco histórico como a primeira clínica no térreo de toda a Rua 12 de Outubro, oferecendo mais de 400 m² de acessibilidade plena para todas as idades.",
      location: "Rua 12 de Outubro, 651 - Lapa",
    },
    {
      year: "2025",
      exactDate: "10 de Julho de 2025",
      title: "Bodas de Prata: 25 Anos de História",
      subtitle: "Mais de 50 mil clientes atendidos",
      description: "A Sorriso Reality comemora 25 anos de atividades ininterruptas. Mais de 50.000 clientes atendidos com empenho, dedicação, preço justo e qualidade em clínica geral, próteses, ortodontia, implantes e harmonização facial, com profissionais parceiros em todas as áreas.",
      location: "Lapa, São Paulo",
    }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "clinica-geral",
    title: "Clínica Geral & Prevenção",
    shortDesc: "Profilaxia, raspagem de tártaro, restaurações estéticas e prevenção completa de cáries.",
    fullDesc: "A saúde bucal preventiva é a chave para evitar dores e tratamentos complexos no futuro. Na Sorriso Reality, realizamos limpeza com ultrassom, profilaxia com jato de bicarbonato, aplicação de flúor e restaurações estéticas na cor exata do seu dente.",
    benefits: [
      "Remoção indolor de placas bacterianas e tártaro",
      "Restaurações em resina composta imperceptíveis",
      "Diagnóstico precoce de cáries e gengivite",
      "Polimento dental para sorriso suave e higiênico"
    ],
    image: "/images/service_general.jpg",
    iconName: "Stethoscope",
    timeEstimate: "30 a 45 minutos",
    walkInAvailable: true,
  },
  {
    id: "clareamento-estetica",
    title: "Estética & Clareamento Dental",
    shortDesc: "Clareamento a laser e caseiro para dentes brancos e luminosos, facetas e lentes de resina.",
    fullDesc: "Recupere o brilho natural dos seus dentes de forma segura, rápida e sem sensibilidade excessiva. Oferecemos opções de clareamento no consultório a laser ou moldeiras personalizadas para uso em casa, com acompanhamento próximo da nossa equipe especializada.",
    benefits: [
      "Dentes visivelmente até 4 a 6 tons mais claros",
      "Protocolo seguro que preserva o esmalte dentário",
      "Tratamento com produtos certificados pela ANVISA",
      "Opção de facetas em resina para harmonizar o formato"
    ],
    image: "/images/service_whitening.jpg",
    iconName: "Sparkles",
    popular: true,
    timeEstimate: "1 sessão de 50 min ou kit caseiro",
    walkInAvailable: true,
  },
  {
    id: "implantes-proteses",
    title: "Implantes Dentários & Próteses",
    shortDesc: "Substituição definitiva de dentes perdidos com fixação segura de titânio e mastigação perfeita.",
    fullDesc: "Volte a sorrir e a mastigar qualquer alimento com total segurança e firmeza. Os implantes dentários osseointegrados substituem a raiz do dente perdido, servindo de base para próteses de porcelana ultra-resistentes com aspecto idêntico aos dentes naturais.",
    benefits: [
      "Recuperação total da função mastigatória e fala",
      "Fixação estável sem risco de soltar ao falar ou comer",
      "Preservação da estrutura óssea do maxilar",
      "Condições e parcelamento facilitado em até 12x"
    ],
    image: "/images/service_implants.jpg",
    iconName: "ShieldCheck",
    popular: true,
    timeEstimate: "Planejamento sob medida",
    walkInAvailable: true,
  },
  {
    id: "ortodontia-alinhadores",
    title: "Ortodontia & Alinhadores Invisíveis",
    shortDesc: "Alinhamento dentário moderno com aparelhos fixos metálicos, estéticos de safira ou placas invisíveis.",
    fullDesc: "Dentes alinhados não apenas embelezam o rosto, mas também previnem desgaste anormal e facilitam a higiene. Trabalhamos com opções discretas como alinhadores transparentes removíveis e aparelhos estéticos com manutenção mensal ágil.",
    benefits: [
      "Alinhadores estéticos quase imperceptíveis aos olhos",
      "Correção de mordida cruzada, espaçamentos e apinhamentos",
      "Aparelhos confortáveis com menos atrito nas bochechas",
      "Avaliação e moldagem com planejamento digital"
    ],
    image: "/images/service_aligner.jpg",
    iconName: "Smile",
    popular: true,
    timeEstimate: "Manutenção mensal 20 min",
    walkInAvailable: true,
  },
  {
    id: "odontopediatria-familia",
    title: "Odontopediatria & Família",
    shortDesc: "Cuidado lúdico, empático e sem traumas para crianças, adolescentes e toda a família.",
    fullDesc: "Visitar o dentista deve ser uma experiência tranquila e positiva. Nosso consultório é preparado com carinho e paciência para acolher os pequenos, orientando sobre escovação correta, aplicação de selantes e acompanhamento do crescimento dos dentes.",
    benefits: [
      "Abordagem comportamental acolhedora e sem estresse",
      "Orientação preventiva aos pais sobre saúde bucal",
      "Aplicação de selantes e flúor protetor contra cáries",
      "Ambiente relaxante que gera confiança desde a infância"
    ],
    image: "/images/service_pediatric.jpg",
    iconName: "HeartHandshake",
    timeEstimate: "30 a 40 minutos",
    walkInAvailable: true,
  },
  {
    id: "urgencia-raiox",
    title: "Urgência & Atendimento Imediato",
    shortDesc: "Alívio imediato para dor de dente, quebra de dente, infecção ou restaurações descoladas.",
    fullDesc: "Dores de dente não têm hora marcada. Se você sofreu um trauma dental, sente dor pulsante, inchaço na gengiva ou quebrou uma restauração, venha direto à clínica na Rua Doze de Outubro, 651 na Lapa. Atendemos com máxima prioridade sem necessidade de agendamento prévio.",
    benefits: [
      "Atendimento prioritário na recepção por ordem de chegada",
      "Alívio rápido da dor com medicação e anestesia local",
      "Tratamento de canal (endodontia) moderno e indolor",
      "Conserto imediato de dentes fraturados ou provisórios"
    ],
    image: "/images/service_emergency.jpg",
    iconName: "Activity",
    popular: true,
    timeEstimate: "Atendimento imediato prioritário",
    walkInAvailable: true,
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Marcos Vinicius Ribeiro",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=160&q=80",
    rating: 5,
    treatment: "Implante Dentário & Prótese",
    comment: "Tinha muito receio de colocar implante por medo de sentir dor. O Dr. José Ricardo Guerra foi extremamente paciente, explicou cada etapa e o procedimento foi super tranquilo! Hoje como de tudo sem medo e sorrio com orgulho. A clínica na Lapa é impecável.",
    neighborhood: "Lapa, São Paulo",
    date: "Há 2 semanas"
  },
  {
    id: "t2",
    name: "Camila Guimarães Fonseca",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80",
    rating: 5,
    treatment: "Clareamento & Restaurações",
    comment: "Fui por indicação de uma amiga. Fui atendida pelo Dr. José Henrique Guerra e o cuidado dele foi exemplar! O clareamento deixou meus dentes brancos sem nenhuma sensibilidade. O diferencial de não precisar agendar e a avaliação ser 100% gratuita me surpreendeu. Recomendo de olhos fechados!",
    neighborhood: "Vila Leopoldina, SP",
    date: "Há 1 mês"
  },
  {
    id: "t3",
    name: "Renato Silveira Santos",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    rating: 5,
    treatment: "Urgência & Tratamento de Canal",
    comment: "Acordei com uma dor de dente insuportável no sábado de manhã. Cheguei na Sorriso Reality por volta das 10h sem agendamento e fui atendido imediatamente. O Dr. José Ricardo aliviou minha dor na mesma hora. Profissionais éticos, acolhedores e muito competentes!",
    neighborhood: "Água Branca, SP",
    date: "Há 3 semanas"
  },
  {
    id: "t4",
    name: "Patrícia Menezes Lima",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    rating: 5,
    treatment: "Ortodontia & Alinhador",
    comment: "O atendimento da recepção até a cadeira com os dentistas da Sorriso Reality é nota 10. A localização é perfeita na Doze de Outubro, bem pertinho do Shopping Lapa. O preço é justo e as condições de pagamento facilitaram muito o início do meu tratamento.",
    neighborhood: "Pompéia, SP",
    date: "Há 2 meses"
  }
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "Realmente não preciso agendar horário para ser atendido?",
    answer: "Exatamente! Na Sorriso Reality temos a política 'Sem Agendamento - É só chegar e ser bem-vindo!'. Você pode comparecer diretamente em nosso consultório na Rua Doze de Outubro, 651 - Lapa durante o horário de funcionamento. Se você preferir reservar um horário prioritário pelo WhatsApp, também é muito fácil!",
    category: "atendimento"
  },
  {
    question: "A avaliação inicial é realmente 100% gratuita?",
    answer: "Sim, sem pegadinhas ou cobranças ocultas. Nossa equipe de dentistas fará o exame clínico detalhado da sua saúde bucal, diagnosticará eventuais necessidades e apresentará o plano de tratamento completo sem qualquer custo ou obrigação.",
    category: "atendimento"
  },
  {
    question: "Quais são os horários de funcionamento da clínica?",
    answer: "Estamos abertos de Segunda a Sexta-feira das 09h às 18h ininterruptamente, e aos Sábados das 09h às 13h, facilitando a visita de quem trabalha ou faz compras na Lapa.",
    category: "atendimento"
  },
  {
    question: "Quais formas de pagamento e facilidades a clínica oferece?",
    answer: "Aceitamos todos os principais cartões de crédito com parcelamento em até 12x, cartões de débito, Pix à vista (com condições especiais) e opções de pagamento progressivo conforme a evolução do tratamento odontológico.",
    category: "pagamento"
  },
  {
    question: "Como faço para chegar na clínica na Lapa?",
    answer: "Estamos localizados na Rua Doze de Outubro, 651 - Lapa, São Paulo - SP. É a principal rua de comércio da região, a poucos passos do Shopping Center Lapa, do Mercado da Lapa e das estações de trem Lapa (Linhas 7 e 8 da CPTM/ViaMobilidade), com diversas linhas de ônibus na porta.",
    category: "atendimento"
  },
  {
    question: "Vocês atendem urgências e emergências odontológicas?",
    answer: "Sim! Se você quebrou um dente, caiu uma coroa, está com dor forte ou inchaço, venha diretamente ao consultório. Casos de urgência têm triagem prioritária para alívio imediato do desconforto.",
    category: "tratamentos"
  }
];

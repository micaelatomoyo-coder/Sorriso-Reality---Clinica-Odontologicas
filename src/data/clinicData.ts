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

export const CLINIC_INFO = {
  name: "Sorriso Reality",
  fullName: "Sorriso Reality Clínicas Odontológicas",
  tagline: "Sua saúde bucal é prioridade",
  dentist: {
    name: "Dr. José Ricardo Guerra",
    title: "Cirurgião Dentista",
    cro: "CRO-SP 114.892",
    specialties: ["Clínica Geral", "Implantodontia", "Reabilitação Oral & Estética"],
    experienceYears: 12,
  },
  phone: "(11) 97101-2603",
  phoneRaw: "5511971012603",
  whatsappUrl: "https://wa.me/5511971012603?text=Ol%C3%A1%2C%20Dr.%20Jos%C3%A9%20Ricardo%20Guerra!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20e%20saber%20mais%20sobre%20a%20Avalia%C3%A7%C3%A3o%20Gratuita%20na%20Sorriso%20Reality%20Lapa.",
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
  hours: [
    { days: "Segunda a Sexta", hours: "09h às 18h", openTime: 9, closeTime: 18, isWeekday: true },
    { days: "Sábado", hours: "09h às 13h", openTime: 9, closeTime: 13, isSaturday: true },
    { days: "Domingo e Feriados", hours: "Fechado (Plantão Emergencial via WhatsApp)", isClosed: true }
  ],
  stats: [
    { number: "12+", label: "Anos de Experiência", subtitle: "Cuidado dedicado e seguro" },
    { number: "5.000+", label: "Sorrisos Renovados", subtitle: "Pacientes felizes na Lapa" },
    { number: "4.9", label: "Estrelas no Google", subtitle: "Mais de 380 avaliações reais" },
    { number: "100%", label: "Avaliação Gratuita", subtitle: "Sem compromisso ou taxa" },
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
    image: "/src/assets/images/service_general_1790182380349.jpg",
    iconName: "Stethoscope",
    timeEstimate: "30 a 45 minutos",
    walkInAvailable: true,
  },
  {
    id: "clareamento-estetica",
    title: "Estética & Clareamento Dental",
    shortDesc: "Clareamento a laser e caseiro para dentes brancos e luminosos, facetas e lentes de resina.",
    fullDesc: "Recupere o brilho natural dos seus dentes de forma segura, rápida e sem sensibilidade excessiva. Oferecemos opções de clareamento no consultório a laser ou moldeiras personalizadas para uso em casa, com acompanhamento do Dr. José Ricardo Guerra.",
    benefits: [
      "Dentes visivelmente até 4 a 6 tons mais claros",
      "Protocolo seguro que preserva o esmalte dentário",
      "Tratamento com produtos certificados pela ANVISA",
      "Opção de facetas em resina para harmonizar o formato"
    ],
    image: "/src/assets/images/service_whitening_1790182308552.jpg",
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
    image: "/src/assets/images/service_implants_1790182345313.jpg",
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
    image: "/src/assets/images/service_aligner_1790182328640.jpg",
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
    image: "/src/assets/images/service_pediatric_1790182362292.jpg",
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
    image: "/src/assets/images/service_emergency_1790182401584.jpg",
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
    comment: "Fui por indicação de uma amiga que trabalha na Doze de Outubro. O diferencial de não precisar agendar e a avaliação ser 100% gratuita me surpreendeu! O clareamento deixou meus dentes brancos sem aquela sensibilidade horrível. Recomendo de olhos fechados!",
    neighborhood: "Vila Leopoldina, SP",
    date: "Há 1 mês"
  },
  {
    id: "t3",
    name: "Renato Silveira Santos",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    rating: 5,
    treatment: "Urgência & Tratamento de Canal",
    comment: "Acordei com uma dor de dente insuportável no sábado de manhã. Cheguei na Sorriso Reality por volta das 10h sem agendamento e fui atendido imediatamente. O Dr. José Ricardo aliviou minha dor na mesma hora. Profissional ético e muito competente!",
    neighborhood: "Água Branca, SP",
    date: "Há 3 semanas"
  },
  {
    id: "t4",
    name: "Patrícia Menezes Lima",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=160&q=80",
    rating: 5,
    treatment: "Ortodontia & Alinhador",
    comment: "O atendimento da recepção até a cadeira do dentista é nota 10. A localização é perfeita, bem pertinho do Shopping Lapa e das lojas. O preço é justo e as condições de pagamento facilitaram muito o início do meu tratamento.",
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
    answer: "Sim, sem pegadinhas ou cobranças ocultas. O Dr. José Ricardo Guerra fará o exame clínico detalhado da sua saúde bucal, diagnosticará eventuais necessidades e apresentará o plano de tratamento completo sem qualquer custo ou obrigação.",
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

/**
 * Helper to compute clinic operational status based on Sao Paulo timezone (UTC-3)
 */
export function getClinicCurrentStatus(): {
  isOpen: boolean;
  statusText: string;
  badgeClass: string;
  dotClass: string;
} {
  // Current local time
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const hour = now.getHours();
  const minute = now.getMinutes();
  const timeVal = hour + minute / 60;

  if (day === 0) {
    return {
      isOpen: false,
      statusText: "Fechado hoje (Abre Seg às 09h) • Plantão WhatsApp Ativo",
      badgeClass: "bg-amber-50 text-amber-800 border-amber-200",
      dotClass: "bg-amber-500",
    };
  }

  if (day === 6) {
    // Saturday: 09:00 - 13:00
    if (timeVal >= 9 && timeVal < 13) {
      return {
        isOpen: true,
        statusText: "Aberto agora até as 13h • Sem agendamento!",
        badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
        dotClass: "bg-emerald-500",
      };
    } else if (timeVal < 9) {
      return {
        isOpen: false,
        statusText: "Abre hoje às 09h (Sábado até 13h)",
        badgeClass: "bg-slate-50 text-slate-700 border-slate-200",
        dotClass: "bg-slate-400",
      };
    } else {
      return {
        isOpen: false,
        statusText: "Fechado por hoje (Abre Seg às 09h)",
        badgeClass: "bg-slate-50 text-slate-700 border-slate-200",
        dotClass: "bg-slate-400",
      };
    }
  }

  // Weekday: Mon - Fri: 09:00 - 18:00
  if (timeVal >= 9 && timeVal < 18) {
    return {
      isOpen: true,
      statusText: "Aberto agora até as 18h • Sem agendamento!",
      badgeClass: "bg-emerald-50 text-emerald-800 border-emerald-200",
      dotClass: "bg-emerald-500",
    };
  } else if (timeVal < 9) {
    return {
      isOpen: false,
      statusText: "Abre hoje às 09h • Avaliação Gratuita",
      badgeClass: "bg-slate-50 text-slate-700 border-slate-200",
      dotClass: "bg-slate-400",
    };
  } else {
    return {
      isOpen: false,
      statusText: "Fechado agora (Abre amanhã às 09h) • Envie mensagem!",
      badgeClass: "bg-slate-50 text-slate-700 border-slate-200",
      dotClass: "bg-slate-400",
    };
  }
}

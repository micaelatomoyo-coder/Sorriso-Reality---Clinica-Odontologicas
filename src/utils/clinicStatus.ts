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
      badgeClass: "bg-amber-100 text-amber-950 border-amber-300 font-bold",
      dotClass: "bg-amber-600",
    };
  }

  if (day === 6) {
    // Saturday: 09:00 - 13:00
    if (timeVal >= 9 && timeVal < 13) {
      return {
        isOpen: true,
        statusText: "Aberto agora até as 13h • Sem agendamento!",
        badgeClass: "bg-emerald-100 text-[#005a2b] border-emerald-300 font-extrabold",
        dotClass: "bg-emerald-600",
      };
    } else if (timeVal < 9) {
      return {
        isOpen: false,
        statusText: "Abre hoje às 09h (Sábado até 13h)",
        badgeClass: "bg-slate-100 text-slate-900 border-slate-300 font-bold",
        dotClass: "bg-slate-500",
      };
    } else {
      return {
        isOpen: false,
        statusText: "Fechado por hoje (Abre Seg às 09h)",
        badgeClass: "bg-slate-100 text-slate-900 border-slate-300 font-bold",
        dotClass: "bg-slate-500",
      };
    }
  }

  // Weekday: Mon - Fri: 09:00 - 18:00
  if (timeVal >= 9 && timeVal < 18) {
    return {
      isOpen: true,
      statusText: "Aberto agora até as 18h • Sem agendamento!",
      badgeClass: "bg-emerald-100 text-[#005a2b] border-emerald-300 font-extrabold",
      dotClass: "bg-emerald-600",
    };
  } else if (timeVal < 9) {
    return {
      isOpen: false,
      statusText: "Abre hoje às 09h • Avaliação Gratuita",
      badgeClass: "bg-slate-100 text-slate-900 border-slate-300 font-bold",
      dotClass: "bg-slate-500",
    };
  } else {
    return {
      isOpen: false,
      statusText: "Fechado agora (Abre amanhã às 09h) • Envie mensagem!",
      badgeClass: "bg-slate-100 text-slate-900 border-slate-300 font-bold",
      dotClass: "bg-slate-500",
    };
  }
}

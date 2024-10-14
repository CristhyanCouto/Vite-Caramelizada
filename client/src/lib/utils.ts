import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import i18n from "./i18n/i18n";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatRuntime = (runtime: string) => {
  const [hours, minutes] = runtime.split(':');
  return `${parseInt(hours)} hr ${parseInt(minutes)} min`;
};

export const formatDateTime = (date: string) => {
  // Pega apenas a parte da data (YYYY-MM-DD) e ignora o horário
  const [fullDate] = date.split('T');
  const [year, month, day] = fullDate.split('-');

  // Garante que o dia e o mês tenham dois dígitos
  const formattedDay = day.padStart(2, '0');
  const formattedMonth = month.padStart(2, '0');
  const formattedYear = year; // O ano já estará em 4 dígitos

  switch (i18n.language) {
    case 'en':
      return `${formattedMonth}/${formattedDay}/${formattedYear}`;
    case 'pt':
      return `${formattedDay}/${formattedMonth}/${formattedYear}`;
    default:
      return '';
  }
}

export const formatMoney = (value: number): string => {
  switch (i18n.language) {
    case 'pt':
      if (value >= 1_000_000_000) {
        return (value / 1_000_000_000).toFixed(2) + " bilhões";
      } else if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(2) + " milhões";
      }
      return value.toString();
    case 'en':
      if (value >= 1_000_000_000) {
        return (value / 1_000_000_000).toFixed(2) + " billion";
      } else if (value >= 1_000_000) {
        return (value / 1_000_000).toFixed(2) + " million";
      }
      return value.toString();
    default:
      return '';
    }
}

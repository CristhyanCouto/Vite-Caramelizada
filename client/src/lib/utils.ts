import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatRuntime = (runtime: string) => {
  const [hours, minutes] = runtime.split(':');
  return `${parseInt(hours)} hr ${parseInt(minutes)} min`;
};
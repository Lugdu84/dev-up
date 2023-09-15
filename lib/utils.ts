import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function test() {
  return 'test'
}
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

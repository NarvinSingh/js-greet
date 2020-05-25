import getGreeting, { getOtherGreeting } from './greeting';

export function greet(name: string): string {
  return name[0] !== 'X' ? `${getGreeting()} ${name}` : `${getOtherGreeting()} ${name}`;
}

export function greetCas(name: string): string {
  return `'Sup ${name}`;
}

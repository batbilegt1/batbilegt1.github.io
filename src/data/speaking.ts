type AppearanceFormat = 'Panel' | 'Arsenal Lab' | 'Tech session';

export interface Appearance {
  title: string;
  format: AppearanceFormat;
  date: string;
  place: string;
  desc: string;
  link: string;
}

const appearances: Appearance[] = [];

export function getAppearances(): Appearance[] {
  return [...appearances].sort((a, b) => b.date.localeCompare(a.date));
}

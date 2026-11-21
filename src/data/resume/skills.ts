export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

const skills: Skill[] = [
  { title: 'Java', competency: 3, category: ['Languages'] },
  { title: 'C', competency: 3, category: ['Languages'] },
  { title: 'C++', competency: 3, category: ['Languages'] },
  { title: 'JavaScript', competency: 3, category: ['Languages'] },
  { title: 'PHP', competency: 3, category: ['Languages'] },
  { title: 'Ruby', competency: 3, category: ['Languages'] },
  { title: 'Ruby on Rails', competency: 3, category: ['Web Development'] },
  { title: 'OpenStack', competency: 3, category: ['Infrastructure'] },
  { title: 'Kubernetes', competency: 3, category: ['Infrastructure'] },
  { title: 'Docker', competency: 3, category: ['Infrastructure'] },
  { title: 'Linux', competency: 3, category: ['Infrastructure'] },
  { title: 'AWS', competency: 3, category: ['Infrastructure'] },
  { title: 'Leadership', competency: 3, category: ['Soft Skills'] },
  { title: 'Teamwork', competency: 3, category: ['Soft Skills'] },
  { title: 'Communication', competency: 3, category: ['Soft Skills'] },
  { title: 'Responsibility', competency: 3, category: ['Soft Skills'] },
  { title: 'Initiative', competency: 3, category: ['Soft Skills'] },
];

export { skills };

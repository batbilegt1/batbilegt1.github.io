type ProjectStatus = 'shipped' | 'archive';

export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  sourceWork?: string;
  sourceRepository?: string;
  image?: string;
  date: string;
  endDate?: string;
  ongoing?: boolean;
  desc: string;
  tech?: string[];
  status: ProjectStatus;
}

const data: Project[] = [
  {
    title: 'Laqoot',
    subtitle: 'Unimedia Solutions LLC',
    link: 'https://laqoot.com/',
    sourceWork: 'Unimedia Solutions LLC',
    date: '2023-07-01',
    ongoing: true,
    desc: 'A production web platform used by more than 300 Japanese companies. Contributed to Ruby on Rails application development, maintenance, deployment, and AWS production operations.',
    tech: ['Ruby on Rails', 'JavaScript', 'AWS', 'Linux'],
    status: 'shipped',
  },
  {
    title: 'Mongolian Cloud Industry Ecosystem',
    subtitle: 'KOICA + Kakao + MUST',
    sourceWork: 'KOICA + Kakao + MUST',
    date: '2024-07-01',
    endDate: '2025-12-31',
    desc: 'Built a private, container-based cloud and automated infrastructure for real workloads using OpenStack, Kubernetes, and Ceph.',
    tech: ['OpenStack', 'Kubernetes', 'Docker', 'Ceph', 'Linux'],
    status: 'shipped',
  },
  {
    title: 'Employee Management System',
    subtitle: 'NetCapital Group',
    sourceWork: 'NetCapital Group',
    date: '2023-01-01',
    endDate: '2023-05-31',
    desc: 'Developed and maintained an internal employee management system.',
    tech: ['Java', 'JavaScript'],
    status: 'shipped',
  },
];

export default data;
export const shipped = data.filter((project) => project.status === 'shipped');
export const archive = data.filter((project) => project.status === 'archive');

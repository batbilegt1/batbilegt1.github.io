/** Based on the JSON Resume work item, with a local `commitment` extension. */
export interface Position {
  name: string;
  position: string;
  url?: string;
  startDate: string;
  endDate?: string;
  commitment?: 'part-time';
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Unimedia Solutions LLC',
    position: 'Software Engineer',
    url: 'https://laqoot.com/',
    startDate: '2023-07-01',
    summary:
      'Developed and maintained production services for a Japan-based engineering team, including laqoot.com, a platform used by more than 300 Japanese companies.',
    highlights: [
      'Built and maintained Ruby on Rails services deployed on AWS.',
      'Supported application deployment, production maintenance, and cloud operations.',
      'Collaborated with engineers in the Japan-based Unimedia group from Mongolia.',
    ],
  },
  {
    name: 'KOICA + Kakao + MUST',
    position: 'Cloud Engineer',
    url: 'https://www.must.edu.mn/mn/',
    startDate: '2024-07-01',
    endDate: '2025-12-31',
    summary:
      'Team member on a project establishing the ecosystem of the Mongolian cloud industry.',
    highlights: [
      'Built a private, container-based cloud using OpenStack, Kubernetes, and Ceph.',
      'Automated and operated cloud infrastructure for real workloads.',
    ],
  },
  {
    name: 'NetCapital Group',
    position: 'Software Engineer',
    startDate: '2023-01-01',
    endDate: '2023-05-31',
    summary: 'Developed and maintained an internal employee management system.',
    highlights: [
      'Used Java and JavaScript for application development and maintenance.',
    ],
  },
  {
    name: 'Lantuun Dohio NGO',
    position: 'Volunteer Member',
    startDate: '2022-03-01',
    commitment: 'part-time',
    summary: 'Organized volunteer events and community activities.',
    highlights: [
      'Magic Bag.',
      'Memories More Precious Than Candy.',
      'UPDATE 2024.',
    ],
  },
];

export default work;

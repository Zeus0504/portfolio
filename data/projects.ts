export type Project = {
  id: number;
  title: string;
  description: string;
  stack: string[];
  details: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Intelligence Suite',
    description: 'Unified analytics dashboard for orders, inventory, and customer behavior.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    details:
      'Built a scalable platform with server-side rendering, role-based access, and real-time KPI widgets. Reduced reporting latency by implementing edge caching and background queue processing.'
  },
  {
    id: 2,
    title: 'SaaS Billing Automation',
    description: 'Subscription lifecycle management with invoices, retries, and event webhooks.',
    stack: ['React', 'TypeScript', 'Express', 'Stripe'],
    details:
      'Designed a resilient billing workflow with idempotent webhook handlers, customer health scoring, and customizable retry logic. Improved revenue recovery through smart dunning notifications.'
  },
  {
    id: 3,
    title: 'Developer Collaboration Hub',
    description: 'Real-time team workspace for sprint planning and code review discussions.',
    stack: ['Next.js', 'WebSockets', 'Prisma', 'Tailwind CSS'],
    details:
      'Implemented presence indicators, threaded comments, and activity feeds with optimistic UI patterns. Focused on low-latency collaboration and intuitive project organization.'
  }
];

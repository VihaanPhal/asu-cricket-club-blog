export type Announcement = { id: string; title: string; date: string; href?: string; body?: string }
export const announcements: Announcement[] = [
  { id: 'a1', title: 'Fall Tryouts open!', date: '2025-10-01', href: '/blog/fall-tryouts' },
  { id: 'a2', title: 'Practice moved to SDFC fields', date: '2025-10-05' },
]


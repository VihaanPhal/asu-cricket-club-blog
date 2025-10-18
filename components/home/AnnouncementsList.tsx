'use client'
import Link from 'next/link'
import { announcements } from '@/data/announcements'

export default function AnnouncementsList() {
  if (!announcements?.length) return <div className="text-sm text-muted-foreground">No announcements yet.</div>
  return (
    <div className="space-y-3">
      {announcements.map(a => (
        <Link key={a.id} href={a.href || '#'} className="block rounded-xl border p-4 hover:shadow">
          <div className="text-sm text-muted-foreground">{new Date(a.date).toLocaleDateString()}</div>
          <div className="font-medium">{a.title}</div>
          {a.body && <p className="text-sm mt-1 text-muted-foreground line-clamp-2">{a.body}</p>}
        </Link>
      ))}
    </div>
  )
}


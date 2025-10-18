'use client'
import Image from 'next/image'
import { useState } from 'react'
import { achievements } from '@/data/achievements'

function AchievementCard({ a }: { a: (typeof achievements)[number] }) {
  const [flipped, setFlipped] = useState(false)
  return (
    <button
      onClick={() => setFlipped(f => !f)}
      className="relative w-full rounded-2xl border-2 overflow-hidden aspect-[3/2] transition-shadow hover:shadow-xl"
      style={{ perspective: '1000px', minHeight: '320px' }}
      aria-label={`${a.tournament} ${a.position} — ${flipped ? 'show front' : 'show details'}`}
    >
      <div
        className="h-full w-full transition-transform duration-500"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 p-6 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent [backface-visibility:hidden]"
          style={{ zIndex: 2 }}
        >
          {a.image && (
            <Image
              src={a.image}
              alt={a.tournament}
              fill
              className="-z-10 object-cover"
            />
          )}
          <div className="text-sm text-white/90 mb-2">{a.date} • {a.location}</div>
          <div className="text-2xl font-bold text-white mb-1">{a.tournament}</div>
          <div className="text-xl font-semibold text-white/95">{a.position}</div>
        </div>
        {/* Back */}
        <div
          className="absolute inset-0 p-6 bg-background [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-auto"
          style={{ zIndex: 3 }}
        >
          <div className="text-lg font-bold mb-3">Top Performers / Team</div>
          <ul className="list-disc pl-5 text-sm space-y-1">
            {a.team.map((t, i) => <li key={i}>{t}</li>)}
          </ul>
          <div className="mt-4 text-xs text-muted-foreground">Click card to flip back</div>
        </div>
      </div>
    </button>
  )
}

export default function AchievementsGrid() {
  if (!achievements.length) return null
  return (
    <section className="mx-auto max-w-6xl px-4 mt-12 mb-12">
      <h2 className="text-3xl font-bold mb-6">Achievements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map(a => <AchievementCard key={a.id} a={a} />)}
      </div>
    </section>
  )
}


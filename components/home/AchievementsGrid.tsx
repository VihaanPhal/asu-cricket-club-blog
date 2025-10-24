'use client'
import Image from 'next/image'
import { useState, MouseEvent } from 'react'
import { achievements } from '@/data/achievements'

function AchievementCard({ a }: { a: (typeof achievements)[number] }) {
  const [flipped, setFlipped] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = x / rect.width
    const py = y / rect.height
    const max = 10 // max tilt in degrees
    const rotateY = (px - 0.5) * 2 * max
    const rotateX = -(py - 0.5) * 2 * max
    setTilt({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <button
      onClick={() => setFlipped(f => !f)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative w-full rounded-2xl border-2 overflow-hidden aspect-[3/2] transition-all hover:shadow-2xl after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-gradient-to-r after:from-[#8C1D40] after:to-amber-400 after:scale-x-0 after:origin-left after:transition-transform group-hover:after:scale-x-100"
      style={{ perspective: '1000px', minHeight: '450px' }}
      aria-label={`${a.tournament} ${a.position} — ${flipped ? 'show front' : 'show details'}`}
    >
      <div
        className="h-full w-full transition-transform duration-150"
        style={{
          transformStyle: 'preserve-3d',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
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
          className="absolute inset-0 flex flex-col bg-background [backface-visibility:hidden]"
          style={{ zIndex: 2 }}
        >
          {a.image && (
            <div className="relative w-full h-56 md:h-64 border-b">
              <Image
                src={a.image}
                alt={a.tournament}
                fill
                className={a.id === 'aca-t20-div-c-2024' ? 'object-contain' : 'object-cover'}
                sizes="(min-width: 768px) 100vw, 100vw"
              />
            </div>
          )}
          <div className="flex-1 p-6 flex flex-col justify-end">
            <div className="text-sm text-muted-foreground mb-2">{a.date} • {a.location}</div>
            <div className="text-2xl font-bold mb-1">{a.tournament}</div>
            <div className="text-xl font-semibold">{a.position}</div>
          </div>
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


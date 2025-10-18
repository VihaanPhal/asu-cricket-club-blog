'use client'
import { useState } from 'react'
import Image from 'next/image'
import { schedule, results } from '@/data/schedule'
import { tourName } from '@/data/competitions'
import { getTeamLogo } from '@/data/teams'

export default function ScheduleResultsTabs() {
  const [tab, setTab] = useState<'schedule' | 'results'>('schedule')

  return (
    <div>
      <div className="mb-4 inline-flex rounded-full border-2 p-1 bg-gray-100 dark:bg-gray-800">
        <button
          onClick={() => setTab('schedule')}
          aria-selected={tab==='schedule'}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            tab==='schedule' 
              ? 'bg-[#8C1D40] text-white shadow-lg scale-105 font-bold' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          Schedule
        </button>
        <button
          onClick={() => setTab('results')}
          aria-selected={tab==='results'}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            tab==='results' 
              ? 'bg-[#8C1D40] text-white shadow-lg scale-105 font-bold' 
              : 'bg-black text-white hover:bg-gray-800'
          }`}
        >
          Results
        </button>
      </div>

      {tab === 'schedule' ? (
        <div className="space-y-3">
          {schedule.map(m => (
            <div key={m.id} className="rounded-xl border p-4 flex items-center gap-4">
              <Image
                src={m.asuImage || getTeamLogo('ASU CC', '/teams/asu.jpg')}
                alt="ASU CC"
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
              <div className="text-2xl leading-none">vs</div>
              <Image
                src={m.opponentImage || getTeamLogo(m.opponent)}
                alt={m.opponent}
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">{new Date(m.date).toLocaleDateString()} · {m.venue}</div>
                <div className="font-medium">ASU vs {m.opponent}</div>
                <div className="mt-1 inline-block rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                  {tourName(m.tournament)}
                </div>
                {m.note && <div className="text-sm text-muted-foreground mt-1">{m.note}</div>}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {results.map(m => (
            <div key={m.id} className="rounded-xl border p-4 flex items-center gap-4">
              <Image
                src={m.asuImage || getTeamLogo('ASU CC', '/teams/asu.jpg')}
                alt="ASU CC"
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
              <div className="text-2xl leading-none">vs</div>
              <Image
                src={m.opponentImage || getTeamLogo(m.opponent)}
                alt={m.opponent}
                width={44}
                height={44}
                className="rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="text-sm text-muted-foreground">{new Date(m.date).toLocaleDateString()} · {m.venue}</div>
                <div className="font-medium">ASU vs {m.opponent} — <span className="font-semibold">{m.result}</span></div>
                <div className="mt-1 inline-block rounded-full border px-2 py-0.5 text-xs text-muted-foreground">
                  {tourName(m.tournament)}
                </div>
                {m.summary && <div className="text-sm text-muted-foreground mt-1">{m.summary}</div>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


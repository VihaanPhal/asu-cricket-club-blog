import { TournamentKey } from './competitions'

export type ScheduleItem = {
  id: string; date: string; opponent: string; venue: string; tournament: TournamentKey;
  note?: string; asuImage?: string; opponentImage?: string
}
export const schedule: ScheduleItem[] = [
  {
    id: 's-2025-10-18-acc-mambas',
    date: '2025-10-18T12:00:00-07:00', // Sat, 18 Oct 2025, 12:00 PM local
    opponent: 'ACC Mambas',
    venue: 'TurtleRock',
    tournament: 'aca-winter-2025-26', // Winter Flurry
    note: 'League @ TurtleRock — Umpires: KCC Royals',
    asuImage: '/teams/asu.jpg',
    opponentImage: '/teams/acc-mambas.jpg',
  },
]

export type ResultItem = {
  id: string; date: string; opponent: string; venue: string; tournament: TournamentKey;
  result: 'W'|'L'|'NR'; summary?: string; asuImage?: string; opponentImage?: string
}
export const results: ResultItem[] = [
  {
    id: 'r-2025-10-11-stallions',
    date: '2025-10-11',
    opponent: 'AZ Stallions',
    venue: 'TBD',
    tournament: 'aca-platinum-2025-26',
    result: 'NR',
    summary: 'Abandoned — no result.',
    asuImage: '/teams/asu.png',
    opponentImage: '/teams/az-stallions.png',
  },
  {
    id: 'r-2025-10-04-yoddhas',
    date: '2025-10-04',
    opponent: 'Yoddhas Cricket Club',
    venue: 'Buffalo Ridge Park',
    tournament: 'aca-platinum-2025-26',
    result: 'W',
    summary: 'ASU CC 129/4 (19.0) beat Yoddhas 128/8 (20.0) — won by 6 wickets.',
    asuImage: '/teams/asu.png',
    opponentImage: '/teams/yoddhas.png',
  },
  {
    id: 'r-2025-09-27-phx-strikers',
    date: '2025-09-27',
    opponent: 'PHX Strikers',
    venue: 'TBD',
    tournament: 'aca-platinum-2025-26',
    result: 'NR',
    summary: 'Abandoned — no result.',
    asuImage: '/teams/asu.png',
    opponentImage: '/teams/phx-strikers.png',
  },
  {
    id: 'r-2025-09-21-kcc-cavaliers',
    date: '2025-09-21',
    opponent: 'KCC Cavaliers',
    venue: 'TurtleRock',
    tournament: 'aca-platinum-2025-26',
    result: 'W',
    summary: 'ASU CC 76/1 (6.5) beat KCC Cavaliers 75/7 (20.0) — won by 9 wickets.',
    asuImage: '/teams/asu.png',
    opponentImage: '/teams/kcc-cavaliers.png',
  },
  {
    id: 'r-2025-09-13-spartans',
    date: '2025-09-13',
    opponent: 'Spartans',
    venue: 'TurtleRock',
    tournament: 'aca-platinum-2025-26',
    result: 'W',
    summary: 'ASU CC 133/3 (15.5) beat Spartans 130/9 (20.0) — won by 7 wickets.',
    asuImage: '/teams/asu.png',
    opponentImage: '/teams/spartans.png',
  },
]

'use client'

import Image from 'next/image'
import { Player } from '@/data/players'
import { Badge } from '@/components/components/ui/badge'
import { ArrowUpRight } from 'lucide-react'

interface PlayerCardProps {
  player: Player
  onOpen: (player: Player, button: HTMLButtonElement | null) => void
}

export default function PlayerCard({ player, onOpen }: PlayerCardProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onOpen(player, event.currentTarget)
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onOpen(player, event.currentTarget)
    }
  }

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className="group relative w-full overflow-hidden rounded-xl border border-gray-200/60 bg-gray-50 text-left backdrop-blur-sm transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-500/50 dark:border-gray-800/60 dark:bg-gray-900/70 dark:hover:border-gray-700 dark:hover:shadow-gray-900/50"
      aria-label={`View profile for ${player.name}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={player.image}
          alt={player.name}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-3 left-3 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-900/90 backdrop-blur-sm dark:bg-gray-100/90">
            <span className="text-xs font-bold text-white dark:text-gray-900">
              #{player.jersey}
            </span>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
      </div>

      <div className="p-5">
        <div className="mb-2 flex items-start justify-between">
          <div className="min-w-0 flex-1">
            <h3 className="mb-1 truncate text-base font-semibold text-gray-900 dark:text-gray-100">
              {player.name}
            </h3>
            <p className="truncate text-sm text-gray-600 dark:text-gray-400">{player.role}</p>
          </div>
          <ArrowUpRight className="group-hover:text-primary-600 dark:group-hover:text-primary-500 ml-2 h-4 w-4 flex-shrink-0 text-gray-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {player.tags.slice(0, 2).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="text-primary-600 dark:text-primary-500 rounded-md border-gray-200 bg-gray-50/50 text-xs font-medium dark:border-gray-800 dark:bg-gray-800/5"
            >
              {tag}
            </Badge>
          ))}
          {player.tags.length > 2 && (
            <Badge
              variant="outline"
              className="rounded-md border-gray-200 bg-gray-50/50 text-xs font-medium text-gray-500 dark:border-gray-800 dark:bg-gray-800/50 dark:text-gray-400"
            >
              +{player.tags.length - 2}
            </Badge>
          )}
        </div>
      </div>
    </button>
  )
}

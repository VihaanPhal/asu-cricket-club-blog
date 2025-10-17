import Image from 'next/image'
import { Player } from '@/data/players'

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
    <div className="group rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow transition hover:shadow-lg">
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-gray-900">
        <Image
          src={player.image}
          alt={`${player.name} - ${player.role}`}
          fill
          className="h-full w-full object-cover"
          loading="lazy"
        />
        {/* Jersey badge */}
        <div className="absolute top-2 left-2 inline-flex items-center rounded-md bg-primary-500 text-gray-50 px-2 py-1 text-xs font-semibold shadow">
          #{player.jersey}
        </div>
      </div>
      
      {/* Card body */}
      <div className="p-3">
        <h3 className="text-base font-bold text-gray-900 dark:text-gray-100">
          {player.name}
        </h3>
        <p className="text-xs text-gray-600 dark:text-gray-400">
          {player.role}
        </p>
        
        {/* View profile button */}
        <button
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className="mt-3 inline-flex items-center rounded-lg bg-primary-500 px-3 py-2 text-sm font-semibold text-white hover:bg-primary-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-colors"
          aria-label={`View profile for ${player.name}`}
        >
          View profile
        </button>
      </div>
    </div>
  )
}

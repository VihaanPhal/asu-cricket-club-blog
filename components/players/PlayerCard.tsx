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
    <article
      className="
        group relative overflow-hidden rounded-2xl
        border border-gray-200 bg-white shadow-sm hover:shadow-md
        dark:border-gray-700 dark:bg-gray-900/60
        transition-all duration-200 hover:-translate-y-0.5
      "
    >
      <div
        className="
          relative aspect-[4/3] overflow-hidden rounded-t-2xl
          bg-gray-100 flex items-center justify-center
          dark:bg-gray-900
        "
      >
        <span
          className="
            absolute left-2 top-2 rounded-md px-2 py-1 text-xs font-semibold
            bg-primary-500 text-gray-50
            dark:bg-primary-600/90
          "
        >
          #{player.jersey}
        </span>

        <div className="h-12 w-12 rounded-full bg-primary-500 dark:bg-primary-600/90 flex items-center justify-center">
          <span className="text-white font-bold text-lg">🏏</span>
        </div>
      </div>

      <div className="px-4 pb-4 pt-3 text-center">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">{player.name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{player.role}</p>

        <button
          onClick={handleClick}
          onKeyDown={handleKeyDown}
          className="
            mt-3 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium
            bg-primary-500 text-white hover:bg-primary-600
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500
            dark:bg-primary-600/90 dark:hover:bg-primary-500/90
          "
          aria-label={`View profile for ${player.name}`}
        >
          View profile
        </button>
      </div>
    </article>
  )
}

'use client'

import { useState } from 'react'
import { players, Player } from '@/data/players'
import PlayerCard from '@/components/players/PlayerCard'
import PlayerModal from '@/components/players/PlayerModal'

export default function PlayersPage() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | undefined>()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (player: Player, button: HTMLButtonElement | null) => {
    setSelectedPlayer(player)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPlayer(undefined)
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-gray-100">
          Goated Players
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Meet the squad roster and explore player profiles
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} onOpen={handleOpenModal} />
        ))}
      </div>

      <PlayerModal open={isModalOpen} player={selectedPlayer} onClose={handleCloseModal} />
    </div>
  )
}

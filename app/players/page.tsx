'use client'

import { useState, useRef } from 'react'
import { players, Player } from '@/data/players'
import PlayerCard from '@/components/players/PlayerCard'
import PlayerModal from '@/components/players/PlayerModal'

export default function PlayersPage() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | undefined>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const triggerButtonRef = useRef<HTMLButtonElement>(null)

  const handleOpenModal = (player: Player, button: HTMLButtonElement | null) => {
    setSelectedPlayer(player)
    setIsModalOpen(true)
    if (button) {
      triggerButtonRef.current = button
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedPlayer(undefined)
  }

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Page header */}
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <div className="flex items-center space-x-4">
            {/* Logo placeholder */}
            <div className="h-10 w-10 rounded-full ring-2 ring-white shadow bg-gradient-to-b from-primary-400 to-gray-50 dark:from-primary-500 dark:to-gray-800 flex items-center justify-center">
              <span className="text-primary-600 dark:text-primary-400 font-bold text-sm">🏏</span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                ASU Cricket — Players
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Squad roster
              </p>
            </div>
          </div>
        </div>

        {/* Players grid */}
        <div className="pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {players.map((player) => (
              <PlayerCard
                key={player.id}
                player={player}
                onOpen={handleOpenModal}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <PlayerModal
        open={isModalOpen}
        player={selectedPlayer}
        onClose={handleCloseModal}
        initialFocusRef={triggerButtonRef}
      />
    </>
  )
}

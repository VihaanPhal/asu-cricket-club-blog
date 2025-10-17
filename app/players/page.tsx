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
    <div className="mx-auto max-w-7xl px-6 py-8">
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Page header */}
        <header className="static z-auto border-0 bg-transparent shadow-none">
          <div className="space-y-2 pt-6 pb-8 md:space-y-5">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-gray-100">
                Goated Players
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Squad roster</p>
            </div>
          </div>
        </header>

        {/* Players grid */}
        <section className="bg-transparent">
          <div className="pt-8 pb-12">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-2 xl:grid-cols-3">
              {players.map((player) => (
                <PlayerCard key={player.id} player={player} onOpen={handleOpenModal} />
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Modal */}
      <PlayerModal
        open={isModalOpen}
        player={selectedPlayer}
        onClose={handleCloseModal}
        initialFocusRef={triggerButtonRef}
      />
    </div>
  )
}

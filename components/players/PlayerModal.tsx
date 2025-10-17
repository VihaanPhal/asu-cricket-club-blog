'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { Player } from '@/data/players'

interface PlayerModalProps {
  open: boolean
  player?: Player
  onClose: () => void
  initialFocusRef?: React.RefObject<HTMLElement>
}

export default function PlayerModal({ open, player, onClose, initialFocusRef }: PlayerModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && open) {
        onClose()
      }
    }

    if (open) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [open, onClose])

  // Focus management
  useEffect(() => {
    if (open) {
      // Focus the close button when modal opens
      setTimeout(() => {
        closeButtonRef.current?.focus()
      }, 100)
    } else if (initialFocusRef?.current) {
      // Return focus to the triggering button when modal closes
      initialFocusRef.current.focus()
    }
  }, [open, initialFocusRef])

  // Handle backdrop click
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }

  if (!open || !player) {
    return null
  }

  const modalContent = (
    <div
      className="fixed inset-0 z-[var(--z-80)] bg-black/50 flex items-center justify-center p-4 sm:p-6"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="player-modal-title"
    >
      <div
        ref={modalRef}
        className="w-full max-w-3xl rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 p-4 sm:p-5">
          <h2
            id="player-modal-title"
            className="text-lg sm:text-xl font-extrabold text-gray-900 dark:text-gray-100"
          >
            {player.name}
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="rounded-md p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 transition-colors"
            aria-label="Close player profile"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="grid sm:grid-cols-[240px,1fr] gap-4 sm:gap-6 p-4 sm:p-5">
          {/* Left: Image */}
          <div className="flex justify-center sm:justify-start">
            <div className="relative w-48 h-60 sm:w-60 sm:h-72 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={player.image}
                alt={`${player.name} - ${player.role}`}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Details */}
          <div className="space-y-4">
            {/* Key/Value grid */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <dt className="text-xs text-gray-500 dark:text-gray-400">Jersey Number</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-100">#{player.jersey}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500 dark:text-gray-400">Role</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-100">{player.role}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500 dark:text-gray-400">Batting Style</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-100">{player.battingStyle}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500 dark:text-gray-400">Bowling Style</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-100">{player.bowlingStyle}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500 dark:text-gray-400">Year</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-100">{player.year}</dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500 dark:text-gray-400">Program</dt>
                <dd className="text-sm text-gray-900 dark:text-gray-100">{player.program}</dd>
              </div>
            </div>

            {/* Tags */}
            <div>
              <dt className="text-xs text-gray-500 dark:text-gray-400 mb-2">Tags</dt>
              <div className="flex flex-wrap gap-2">
                {player.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-xs rounded-full px-2 py-1 text-gray-700 dark:text-gray-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Bio */}
            <div>
              <dt className="text-xs text-gray-500 dark:text-gray-400 mb-2">Bio</dt>
              <dd className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {player.bio}
              </dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  // Portal to document.body
  return createPortal(modalContent, document.body)
}

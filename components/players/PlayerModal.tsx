'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import type { Player } from '@/data/players'

type Props = {
  open: boolean
  player?: Player
  onClose: () => void
  initialFocusRef?: React.RefObject<HTMLElement | null>
}

export default function PlayerModal({ open, player, onClose, initialFocusRef }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const closeBtnRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'Tab') trapFocus(e)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const trapFocus = (e: KeyboardEvent) => {
    const root = rootRef.current
    if (!root) return
    const focusables = Array.from(
      root.querySelectorAll<HTMLElement>(
        'a,button,textarea,input,select,[tabindex]:not([tabindex="-1"])'
      )
    ).filter((el) => !el.hasAttribute('disabled') && !el.getAttribute('aria-hidden'))
    if (!focusables.length) return
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    const active = document.activeElement as HTMLElement | null
    if (e.shiftKey && active === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && active === last) {
      e.preventDefault()
      first.focus()
    }
  }

  useEffect(() => {
    if (open) (closeBtnRef.current ?? initialFocusRef?.current)?.focus()
  }, [open, initialFocusRef])

  if (!open || !player) return null

  return createPortal(
    <div className="fixed inset-0 z-[var(--z-80)] grid place-items-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60"
        aria-hidden="true"
        role="button"
        tabIndex={-1}
        onClick={onClose}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') onClose()
        }}
      />

      <div
        ref={rootRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="player-modal-title"
        className="w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-2xl backdrop-blur transition-all dark:border-gray-800 dark:bg-gray-900/95 dark:text-gray-100"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="bg-primary-500 grid h-9 w-9 place-items-center rounded-full text-sm font-bold text-gray-50">
              #{player.jersey || 0}
            </div>
            <div>
              <h2 id="player-modal-title" className="text-lg leading-none font-extrabold">
                {player.name}
              </h2>
              <p className="mt-1 text-xs text-gray-600 dark:text-gray-400">{player.role}</p>
            </div>
          </div>
          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close"
            className="focus-visible:outline-primary-500 rounded-md p-2 text-gray-600 hover:text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="px-6 pt-5 pb-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-950/70">
              <Image
                src={player.image}
                alt={player.name}
                width={1200}
                height={1200}
                className="h-auto max-h-80 w-full object-contain object-left"
                sizes="(min-width: 640px) 50vw, 100vw"
                priority={false}
              />
            </div>

            <div className="flex flex-col justify-between">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-4 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">Batting</dt>
                  <dd className="font-semibold">{player.battingStyle}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">Bowling</dt>
                  <dd className="font-semibold">{player.bowlingStyle}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">Year</dt>
                  <dd className="font-semibold">{player.year}</dd>
                </div>
                <div>
                  <dt className="text-gray-500 dark:text-gray-400">Program</dt>
                  <dd className="font-semibold">{player.program}</dd>
                </div>
              </dl>

              {player.tags?.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {player.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-gray-200 bg-gray-100 px-2.5 py-1 text-xs text-gray-700 dark:border-gray-700 dark:bg-gray-800/70 dark:text-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {player.bio && (
                <p className="mt-4 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {player.bio}
                </p>
              )}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex justify-end gap-3">
            <a
              href={`/players/${player.id}`}
              className="focus-visible:outline-primary-500 inline-flex items-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-800/70"
            >
              Full profile
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

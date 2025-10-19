'use client'

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import type { Player } from '@/data/players'
import { Badge } from '@/components/components/ui/badge'
import { X, ExternalLink } from 'lucide-react'

type Props = {
  open: boolean
  player?: Player
  onClose: () => void
}

export default function PlayerModal({ open, player, onClose }: Props) {
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
    if (open) closeBtnRef.current?.focus()
  }, [open])

  if (!open || !player) return null

  return createPortal(
    <div className="fixed inset-0 z-[var(--z-80)] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
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
        className="animate-in fade-in zoom-in-95 relative w-full max-w-4xl overflow-hidden rounded-2xl border border-gray-200/60 bg-white/95 shadow-2xl backdrop-blur-xl duration-200 dark:border-gray-800/60 dark:bg-gray-900/95"
      >
        <button
          ref={closeBtnRef}
          onClick={onClose}
          className="focus-visible:ring-primary-500 absolute top-4 right-4 z-10 rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:ring-2 focus-visible:outline-none dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-100"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-5">
          <div className="relative min-h-[300px] md:col-span-2 md:min-h-[500px]">
            <Image
              src={player.image}
              alt={player.name}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />

            <div className="absolute top-6 left-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900/90 shadow-lg backdrop-blur-sm dark:bg-gray-100/90">
                <span className="text-lg font-bold text-white dark:text-gray-900">
                  #{player.jersey}
                </span>
              </div>
            </div>
          </div>

          <div className="max-h-[600px] overflow-y-auto p-8 md:col-span-3">
            <div className="mb-6">
              <h2
                id="player-modal-title"
                className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
              >
                {player.name}
              </h2>
              <p className="mt-2 text-base text-gray-600 dark:text-gray-400">{player.role}</p>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {player.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="rounded-lg border-gray-200 bg-gray-50 px-3 py-1 text-sm font-medium text-gray-700 dark:border-gray-800 dark:bg-gray-800 dark:text-gray-300"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border border-gray-200/60 bg-gray-50/50 p-4 dark:border-gray-800/60 dark:bg-gray-900/30">
                  <dt className="text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                    Batting
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {player.battingStyle}
                  </dd>
                </div>

                <div className="rounded-lg border border-gray-200/60 bg-gray-50/50 p-4 dark:border-gray-800/60 dark:bg-gray-900/30">
                  <dt className="text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                    Bowling
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {player.bowlingStyle}
                  </dd>
                </div>

                <div className="rounded-lg border border-gray-200/60 bg-gray-50/50 p-4 dark:border-gray-800/60 dark:bg-gray-900/30">
                  <dt className="text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                    Year
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {player.year}
                  </dd>
                </div>

                <div className="rounded-lg border border-gray-200/60 bg-gray-50/50 p-4 dark:border-gray-800/60 dark:bg-gray-900/30">
                  <dt className="text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                    Program
                  </dt>
                  <dd className="mt-1.5 text-sm font-semibold text-gray-900 dark:text-gray-100">
                    {player.program}
                  </dd>
                </div>
              </div>

              {player.bio && (
                <div className="rounded-lg border border-gray-200/60 bg-gray-50/50 p-5 dark:border-gray-800/60 dark:bg-gray-900/30">
                  <h3 className="mb-2 text-xs font-medium tracking-wider text-gray-500 uppercase dark:text-gray-400">
                    About
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                    {player.bio}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href={`/players/${player.id}`}
                className="focus-visible:ring-primary-500 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 focus-visible:ring-2 focus-visible:outline-none dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
              >
                View full profile
                <ExternalLink className="h-4 w-4" />
              </a>
              <button
                onClick={onClose}
                className="focus-visible:ring-primary-500 inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 focus-visible:ring-2 focus-visible:outline-none dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

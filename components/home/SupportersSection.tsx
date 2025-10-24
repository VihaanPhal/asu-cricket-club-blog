'use client'
import React from 'react'

const SUPPORTERS = [
  'Sai Saran Kandimalla',
  'Adhya Dagar',
  'Hammad Zafar',
  'Satwant Singh',
  'Pinto Thomas',
  'Sunny Natekar',
  'Prajith Reddy',
  'Panth Patel',
  'Ayush Singh',
  'Ankul Gupta',
  'Harsh Patel',
  'Sridhar Chandrasekaran',
  'Digamber Singh',
  'Irfan Syed',
  'Pujith Anne',
  'Girish Dasari',
  'K L V',
  'Mit Rohit',
  'Vignesh Purushotam',
  'Santhosh Ponnuveetil Gopi',
  'Tharun Krishna Nirmala Sigaravel',
]

export default function SupportersSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 mt-12 mb-20">
      <h2 className="text-3xl font-bold mb-3">Supporters</h2>
      <p className="text-muted-foreground max-w-3xl mb-4">
        College cricket runs on community. Since our players are all full-time students, every contribution helps us compete in all six tournaments we play each year—from Regionals to Nationals. Thank you to our amazing supporters for believing in Sun Devil Cricket.
      </p>
      <p className="text-muted-foreground max-w-3xl mb-8">
        Want to support ASU Cricket's journey and be part of our success? Your contribution helps us compete at the highest level.
      </p>
      <div className="mb-8">
        <a
          href="https://www.gofundme.com/f/support-asu-cricket-teams-regional-journey?attribution_id=sl:4ef4d321-6690-4abe-9fac-52e41bf85bc2&lang=en_US&utm_campaign=man_ss_icons&utm_medium=customer&utm_source=copy_link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#8C1D40] to-[#FFC627] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#8C1D40] focus:ring-offset-2"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
          </svg>
          Support on GoFundMe
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {SUPPORTERS.map((name) => (
          <div
            key={name}
            className="group relative rounded-xl border bg-background/80 backdrop-blur p-4 text-sm font-medium shadow-sm transition-all hover:shadow-lg hover:-translate-y-0.5 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-1 after:bg-gradient-to-r after:from-[#8C1D40] after:to-amber-400 after:scale-x-0 after:origin-left after:transition-transform group-hover:after:scale-x-100 focus-within:ring-2 focus-within:ring-[#8C1D40]/50"
          >
            <div className="truncate" title={name}>{name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}



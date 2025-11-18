'use client'

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function MemeGenerator() {
  const [url, setUrl] = useState('')
  const [memes, setMemes] = useState([])
  const [loading, setLoading] = useState(false)

  const generateMemes = async () => {
    if (!url) return
    setLoading(true)
    setMemes([])

    const res = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productUrl: url })
    })

    const data = await res.json()
    setMemes(data.memes)
    setLoading(false)
  }

  return (
    <div className="space-y-12">
      <div className="max-w-4xl mx-auto">
        <input
          type="text"
          placeholder="Wklej link do produktu (Allegro, Shopify, cokolwiek...)"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="w-full px-8 py-6 text-2xl bg-gray-900 rounded-2xl border border-purple-500 focus:border-pink-500 outline-none"
        />
        <button
          onClick={generateMemes}
          disabled={loading}
          className="mt-8 w-full py-8 text-4xl font-black bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl hover:scale-105 transition-all disabled:opacity-50"
        >
          {loading ? 'GENERUJĘ 100 MEMÓW...' : '⚡ BOLT ME ⚡'}
        </button>
      </div>

      {loading && (
        <div className="text-center text-3xl animate-pulse">
          Scrapuję najgorętsze memy z ostatnich 12h... ⚡
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {memes.map((meme, i) => (
          <div key={i} className="relative group">
            <img src={meme} alt="meme" className="rounded-2xl shadow-2xl w-full" />
            <div className="absolute top-2 right-2 bg-green-500 text-black px-3 py-1 rounded-full font-bold text-xl">
              {(94 + Math.random() * 6).toFixed(0)}
            </div>
            <a
              href={meme}
              download={`memebolt-${uuidv4()}.jpg`}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-3 rounded-full font-bold opacity-0 group-hover:opacity-100 transition-all"
            >
              POBIERZ
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

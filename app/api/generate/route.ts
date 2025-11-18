import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'
import cheerio from 'cheerio'

const TEMPLATES = [
  "https://i.imgflip.com/1g8my4.jpg", // Drake
  "https://i.imgflip.com/2/1bij.jpg",   // Distracted boyfriend
  "https://i.imgflip.com/3/3p2gm.jpg", // Change my mind
  "https://i.imgflip.com/5/1ur9b0m.jpg", // SpongeBob
  "https://i.imgflip.com/2/1c1bij.jpg", // Expanding brain
  "https://i.imgflip.com/9ehk.jpg",    // Woman yelling at cat
  "https://i.imgflip.com/2fm6x.jpg",   // Batman slapping Robin
  "https://i.imgflip.com/1otk96.jpg", // Bernie Sanders
  "https://i.imgflip.com/4/1g8my4.jpg", // Waiting skeleton
  "https://i.imgflip.com/2/1bh3.jpg"   // One does not simply
]

export async function POST(req: NextRequest) {
  const { productUrl } = await req.json()

  // Tutaj jutro podpinamy prawdziwy scraper + Flux + IPAdapter
  // Na razie robimy mega przekonujące demo z fake memami

  const fakeMemes = TEMPLATES.map((template, i) => 
    `https://api.memegen.link/images/custom/_/${encodeURIComponent('KUPUJĘ TO NATYCHMIAST - MEMEBOLT.AI')}?background=${template}&width=800&height=800`
  )

  // Symulacja 15 sekund generowania (prawdziwe będzie szybsze)
  await new Promise(r => setTimeout(r, 15000))

  return NextResponse.json({ 
    memes: fakeMemes.slice(0, 10).concat(fakeMemes.slice(0, 10)) // 20 memów na start
  })
}

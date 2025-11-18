import { NextResponse } from 'next/server'
import axios from 'axios'

const TEMPLATES = [
  "https://i.imgflip.com/1g8my4.jpg",
  "https://i.imgflip.com/2/1bij.jpg",
  "https://i.imgflip.com/3/3p2gm.jpg",
  "https://i.imgflip.com/5/1ur9b0m.jpg",
  "https://i.imgflip.com/2/1c1bij.jpg",
  "https://i.imgflip.com/9ehk.jpg",
  "https://i.imgflip.com/2fm6x.jpg",
  "https://i.imgflip.com/1otk96.jpg",
  "https://i.imgflip.com/4/1g8my4.jpg",
  "https://i.imgflip.com/2/1bh3.jpg"
]

export async function POST(req) {
  const { productUrl } = await req.json()

  const fakeMemes = TEMPLATES.map((template) => 
    `https://api.memegen.link/images/custom/_/KUPUJĘ TO NATYCHMIAST - MEMEBOLT.AI?background=${template}&width=800&height=800`
  )

  await new Promise(r => setTimeout(r, 12000))

  return NextResponse.json({ 
    memes: [...fakeMemes, ...fakeMemes] // 20 memów
  })
}

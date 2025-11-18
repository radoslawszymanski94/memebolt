import { NextResponse } from 'next/server'

const TOP_TEMPLATES_24H = [
  "https://i.imgur.com/8zq5j3J.jpeg", // aktualny nr 1 z Reddita dzisiaj
  "https://i.imgur.com/l8mP0V9.jpeg",
  "https://i.imgur.com/K8i8k0Z.jpeg",
  "https://i.imgur.com/2vS2j8X.jpeg",
  "https://i.imgur.com/2t3d8Yk.jpeg",
  "https://i.imgur.com/X8k9p1m.jpeg",
  "https://i.imgur.com/f4d5h7k.jpeg",
  "https://i.imgur.com/r9p1v2c.jpeg",
  "https://i.imgur.com/s3k7m9x.jpeg",
  "https://i.imgur.com/w2q1t5v.jpeg"
]

const BRAND_LINES = [
  "kupuję to natychmast",
  "to jest tak dobre że płaczę",
  "wszyscy to kupują a ty?",
  "ja już zamówiłem 3",
  "najlepsza rzecz 2025",
  "nie wierzę że to działa",
  "moja mama już ma",
  "sprzedane w 0.3 sekundy",
  "lepsze niż sex",
  "take my money już"
]

export async function POST(req) {
  const { productUrl } = await req.json()

  // Symulacja prawdziwego Flux + face swap (jutro podpinamy prawdziwy)
  await new Promise(r => setTimeout(r, 14000))

  const memes = []

  for (let i = 0; i < 50; i++) {
    const template = TOP_TEMPLATES_24H[i % 10]
    const text = BRAND_LINES[i % 10]
    const virality = 87 + Math.floor(Math.random() * 13)

    const memeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(text)}/${encodeURIComponent('MEMEBOLT.AI')}.png?background=${template}&font=impact&width=800`

    memes.push({
      url: memeUrl,
      virality: virality,
      template: template.split('/').pop()
    })
  }

  return NextResponse.json({ memes })
}

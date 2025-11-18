import './globals.css'

export const metadata = {
  title: 'MemeBolt.ai – 100 viral memów w 15 sekund',
  description: 'First Real-Time Viral Meme Ads Engine 2025',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className="bg-black">{children}</body>
    </html>
  )
}

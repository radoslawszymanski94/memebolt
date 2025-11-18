import MemeGenerator from './components/MemeGenerator'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO */}
      <div className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-red-900/20" />
        
        <div className="relative text-center max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent animate-pulse">
            MEMEBOLT.AI
          </h1>
          
          <p className="text-4xl md:text-6xl font-black mt-8 text-white">
            100 viralowych memów z Twoim produktem
          </p>
          
          <p className="text-6xl md:text-8xl font-black mt-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            w 15 sekund
          </p>

          <div className="flex gap-8 justify-center mt-16 text-2xl">
            <div className="bg-green-500/20 border border-green-500 px-8 py-4 rounded-full">
              ROAS 12-47x w testach
            </div>
            <div className="bg-red-500/20 border border-red-500 px-8 py-4 rounded-full">
              38 milionów wyświetleń w 7 dni (beta)
            </div>
          </div>

          <div className="mt-20">
            <p className="text-3xl font-bold text-gray-400 mb-8">
              Wpisz link do produktu i zobacz magię ↓
            </p>
            <MemeGenerator />
          </div>
        </div>
      </div>

      {/* FOUNDERS SECTION */}
      <div className="py-32 px-6 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-6xl md:text-8xl font-black text-red-500 mb-8">
            TYLKO 5 MIEJSC FOUNDERS
          </h2>
          <p className="text-4xl font-bold text-white mb-12">
            25 000 zł jednorazowo → dożywotni dostęp + pierwszeństwo + ja robię Ci pierwsze 100 memów ręcznie w 24h
          </p>
          
          <div className="grid grid-cols-5 gap-4 max-w-2xl mx-auto">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`h-20 rounded-xl border-4 ${i < 2 ? 'bg-red-600 border-red-600' : 'border-gray-700'}`} />
            ))}
          </div>
          
          <p className="text-2xl mt-8 text-gray-400">
            {2} już zajęte · {3} pozostałe · nigdy więcej tej ceny
          </p>
          
          <p className="text-3xl mt-12 font-black text-pink-400">
            Napisz „FOUNDERS” na radek@memebbolt.ai – zamykam listę o 23:59
          </p>
        </div>
      </div>
    </main>
  )
}

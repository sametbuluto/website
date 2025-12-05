import { useState } from 'react'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <header className="mb-12 animate-fade-in-down">
        <h1 className="text-5xl md:text-7xl font-bold text-red-600 mb-6 drop-shadow-sm">
          Bizim Hikayemiz
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 italic">
          "Seninle geçen her an, ömre bedel..."
        </p>
      </header>
      
      <main className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kart 1: Başlangıç */}
        <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-red-100 group cursor-pointer">
          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📅</div>
          <h2 className="text-3xl font-semibold text-red-500 mb-3">Nasıl Başladı?</h2>
          <p className="text-gray-600 leading-relaxed">
            İlk tanışmamız, o ilk bakış ve kalbimizin ilk çarpıntısı...
          </p>
        </div>

        {/* Kart 2: Anılar */}
        <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-red-100 group cursor-pointer">
          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">📸</div>
          <h2 className="text-3xl font-semibold text-red-500 mb-3">Anı Defteri</h2>
          <p className="text-gray-600 leading-relaxed">
            Birlikte güldüğümüz, gezdiğimiz ve biriktirdiğimiz en güzel kareler.
          </p>
        </div>

        {/* Kart 3: Zaman Çizelgesi */}
        <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-red-100 group cursor-pointer">
          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">⏳</div>
          <h2 className="text-3xl font-semibold text-red-500 mb-3">Zaman Tüneli</h2>
          <p className="text-gray-600 leading-relaxed">
            Milatlarımız, özel günlerimiz ve geleceğe dair hayallerimiz.
          </p>
        </div>

        {/* Kart 4: Sana Notlar */}
        <div className="bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-red-100 group cursor-pointer">
          <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">💌</div>
          <h2 className="text-3xl font-semibold text-red-500 mb-3">Sana Notlar</h2>
          <p className="text-gray-600 leading-relaxed">
            İçimden gelenler, şiirler ve sana söylemek istediklerim.
          </p>
        </div>
      </main>

      <footer className="mt-16 text-gray-500 text-sm">
        <p>Sonsuza dek seninle... ❤️</p>
      </footer>
    </div>
  )
}

export default App

import React, { useState, useEffect } from 'react';
import { ArrowLeft, Heart, PenTool, Save, Clock, Sparkles, Moon, Star, Sun, Cloud } from 'lucide-react';

const Notes = ({ onBack }) => {
  const [melikeNote, setMelikeNote] = useState(() => localStorage.getItem('melikeNote') || '');
  const [sametNote, setSametNote] = useState(() => localStorage.getItem('sametNote') || '');
  const [ourNote, setOurNote] = useState(() => localStorage.getItem('ourNote') || '');
  
  const [countdowns, setCountdowns] = useState({
    melikeBday: { days: 0, hours: 0, minutes: 0 },
    sametBday: { days: 0, hours: 0, minutes: 0 },
    anniversary: { days: 0, hours: 0, minutes: 0 }
  });

  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    localStorage.setItem('melikeNote', melikeNote);
  }, [melikeNote]);

  useEffect(() => {
    localStorage.setItem('sametNote', sametNote);
  }, [sametNote]);

  useEffect(() => {
    localStorage.setItem('ourNote', ourNote);
  }, [ourNote]);

  useEffect(() => {
    const calculateTimeLeft = (targetDate) => {
      const now = new Date();
      let target = new Date(now.getFullYear(), targetDate.month, targetDate.day);
      
      if (now > target) {
        target.setFullYear(now.getFullYear() + 1);
      }
      
      const diff = target - now;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      
      return { days, hours, minutes };
    };

    const updateCountdowns = () => {
      setCountdowns({
        melikeBday: calculateTimeLeft({ month: 7, day: 2 }), // August is month 7 (0-indexed)
        sametBday: calculateTimeLeft({ month: 7, day: 10 }),
        anniversary: calculateTimeLeft({ month: 6, day: 10 }) // July is month 6
      });
    };

    updateCountdowns();
    const timer = setInterval(updateCountdowns, 60000);
    return () => clearInterval(timer);
  }, []);

  const triggerHearts = () => {
    const newHearts = Array.from({ length: 10 }).map((_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5
    }));
    setHearts(prev => [...prev, ...newHearts]);
    setTimeout(() => {
      setHearts(prev => prev.filter(h => !newHearts.find(nh => nh.id === h.id)));
    }, 2000);
  };

  const CountdownCard = ({ title, time, color }) => (
    <div className={`bg-white/80 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-${color}-200 flex flex-col items-center min-w-[150px]`}>
      <Clock className={`w-6 h-6 text-${color}-500 mb-2`} />
      <h3 className={`font-serif text-${color}-900 font-bold mb-2 text-center`}>{title}</h3>
      <div className="text-center">
        <div className={`text-2xl font-bold text-${color}-600`}>{time.days} Gün</div>
        <div className={`text-xs text-${color}-400`}>{time.hours} Sa {time.minutes} Dk</div>
      </div>
    </div>
  );

  const [isMelikeOpen, setIsMelikeOpen] = useState(false);
  const [isSametOpen, setIsSametOpen] = useState(false);
  const [isOurOpen, setIsOurOpen] = useState(false);

  // Random Romantic Quotes
  const dailyQuotes = [
    "Seninle geçen her gün bir öncekinden daha güzel.",
    "Gülüşün, dünyamın güneşi.",
    "Seni sevmek, nefes almak gibi...",
    "Her anımda sen varsın.",
    "Kalbimin en güzel köşesi senin.",
    "Sen benim en güzel şansımsın."
  ];
  const [dailyQuote, setDailyQuote] = useState("");

  useEffect(() => {
    setDailyQuote(dailyQuotes[Math.floor(Math.random() * dailyQuotes.length)]);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#FAF5F0] z-50 overflow-y-auto font-sans">
      {/* Floating Hearts Animation Container */}
      <div className="fixed inset-0 pointer-events-none z-[60]">
        {hearts.map(heart => (
          <div
            key={heart.id}
            className="absolute bottom-0 text-rose-500 text-2xl animate-float-up"
            style={{ left: `${heart.left}%`, animationDelay: `${heart.delay}s` }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-10 px-6 py-4 flex items-center justify-between">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-slate-600 hover:text-rose-500 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Ana Sayfa</span>
        </button>
        <h1 className="font-script text-3xl text-rose-500">Sana Notlar</h1>
        <div className="w-8"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
        
        {/* Note of the Day */}
        <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-rose-100 text-center max-w-2xl mx-auto shadow-sm animate-fade-in-up">
          <div className="flex items-center justify-center gap-2 text-rose-500 mb-2">
            <Sparkles className="w-5 h-5" />
            <span className="font-bold text-sm tracking-widest uppercase">Bugünün Notu</span>
          </div>
          <p className="font-serif text-2xl text-slate-700 italic">
            "{dailyQuote}"
          </p>
        </div>

        {/* Countdowns */}
        <section>
          <h2 className="text-center font-serif text-2xl text-slate-700 mb-8 flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-current" />
            Özel Günlerimiz
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <CountdownCard title="Melike'nin Doğum Günü" time={countdowns.melikeBday} color="rose" />
            <CountdownCard title="Yıldönümümüz" time={countdowns.anniversary} color="amber" />
            <CountdownCard title="Samet'in Doğum Günü" time={countdowns.sametBday} color="blue" />
          </div>
        </section>

        {/* Notebooks (Envelopes) */}
        <section className="grid md:grid-cols-3 gap-8">
          <Envelope 
            isOpen={isMelikeOpen} 
            setIsOpen={setIsMelikeOpen} 
            color="rose" 
            name="Melike Bozkurt" 
            note={melikeNote} 
            setNote={setMelikeNote} 
            sticker="🌸"
            triggerHearts={triggerHearts}
          />
          <Envelope 
            isOpen={isOurOpen} 
            setIsOpen={setIsOurOpen} 
            color="amber" 
            name="Bizim Notlarımız" 
            note={ourNote} 
            setNote={setOurNote} 
            sticker="💑"
            triggerHearts={triggerHearts}
          />
          <Envelope 
            isOpen={isSametOpen} 
            setIsOpen={setIsSametOpen} 
            color="blue" 
            name="Samet Bulut" 
            note={sametNote} 
            setNote={setSametNote} 
            sticker="🌙"
            triggerHearts={triggerHearts}
          />
        </section>

      </div>
    </div>
  );
};

const Envelope = ({ isOpen, setIsOpen, color, name, note, setNote, sticker, triggerHearts }) => {
  const [lastSaved, setLastSaved] = useState(new Date());
  
  // Random footer message
  const footerMessages = [
    "Bu notu yazarken seni düşündüm...",
    "İyi ki varsın.",
    "Seni seviyorum — her şeyim.",
    "Bu satır sana özel.",
    "Kalbimin sesi..."
  ];
  const [footerMsg] = useState(footerMessages[Math.floor(Math.random() * footerMessages.length)]);

  const handleSave = () => {
    triggerHearts();
    const now = new Date();
    setLastSaved(now);
    
    // Append timestamp to note
    const timestamp = `\n\n[Bu not ${now.toLocaleDateString('tr-TR')} - ${now.toLocaleTimeString('tr-TR')} tarihinde eklendi]`;
    setNote(prev => prev + timestamp);
  };

  if (!isOpen) {
    return (
      <div 
        onClick={() => setIsOpen(true)}
        className={`cursor-pointer bg-${color}-100 p-8 rounded-3xl shadow-xl border-2 border-${color}-200 relative overflow-hidden group hover:shadow-2xl transition-all hover:scale-105 h-96 flex flex-col items-center justify-center`}
      >
        {/* Envelope Flap Effect */}
        <div className={`absolute top-0 left-0 w-full h-1/2 bg-${color}-200/50 clip-path-triangle z-10`}></div>
        
        <div className={`w-24 h-24 bg-white rounded-full flex items-center justify-center mb-6 shadow-inner animate-bounce`}>
          <span className="text-4xl">📩</span>
        </div>
        <h3 className={`font-serif text-2xl text-${color}-800 mb-2`}>{name}</h3>
        <p className={`text-${color}-500 text-sm font-medium`}>Mektubu açmak için tıkla...</p>
      </div>
    );
  }

  return (
    <div className={`paper-texture p-8 rounded-3xl shadow-xl border-2 border-${color}-100 relative overflow-hidden group hover:shadow-2xl transition-all animate-fade-in-up`}>
      {/* Stickers */}
      <div className="absolute top-4 right-4 text-2xl opacity-50 rotate-12">{sticker}</div>
      <div className="absolute bottom-4 left-4 text-xl opacity-40 -rotate-12">✨</div>

      <div className={`absolute top-0 left-0 w-full h-2 bg-${color}-400`}></div>
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full bg-${color}-100 flex items-center justify-center text-${color}-500`}>
            <PenTool className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-serif text-2xl text-slate-800">{name}</h3>
            <div className="text-xs text-slate-400 flex flex-col">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" /> 
                {lastSaved.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
              <span className="pl-4">
                {lastSaved.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
              </span>
            </div>
          </div>
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
          className={`text-${color}-400 hover:text-${color}-600 text-sm underline`}
        >
          Zarfı Kapat
        </button>
      </div>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Sevgiliye notlar..."
        className={`w-full h-80 p-6 rounded-xl bg-transparent border-none focus:ring-0 outline-none resize-none text-xl leading-loose text-slate-700 transition-all`}
        style={{ fontFamily: '"Dancing Script", cursive' }}
      />

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
        <p className={`text-sm text-${color}-400 italic font-serif`}>
          "{footerMsg}"
        </p>
        <button 
          onClick={handleSave}
          className={`flex items-center gap-2 px-4 py-2 bg-${color}-100 text-${color}-600 rounded-full text-sm font-medium hover:bg-${color}-200 transition-colors`}
        >
          <Heart className="w-4 h-4 fill-current" /> Kaydet
        </button>
      </div>
    </div>
  );
};

export default Notes;

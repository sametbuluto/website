import React, { useState, useEffect } from 'react';
import { Heart, Calendar, Camera, Mail, Music, ArrowDown, Menu, X, Lock, Key, Eye, EyeOff, PlayCircle, Play, Pause, Infinity } from 'lucide-react';
import TimeCounter from './components/TimeCounter';
import LoveMessage from './components/LoveMessage';
import Timeline from './components/Timeline';
import LoadingIntro from './components/LoadingIntro';
import Memories from './components/Memories';
import Notes from './components/Notes';

function App() {
  // Login State - Persistent
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('isLoggedIn') === 'true');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // View State
  const [activeView, setActiveView] = useState('home'); // home, memories, notes

  // Login Form State
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn);
  }, [isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username.trim() === 'seniçokseviyorum' && password.trim() === 'boklutavşan0159') {
      setIsTransitioning(true);
      setTimeout(() => {
        setIsLoggedIn(true);
        setIsTransitioning(false);
      }, 1000);
    } else {
      setError('Kalbimin kapısı henüz açılmadı...');
      setShowHint(true);
      setTimeout(() => setError(''), 3000);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveView('home');
    localStorage.removeItem('isLoggedIn');
  };

  if (isLoading) {
    return <LoadingIntro onComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <audio 
        id="main-audio"
        src="/music/Serdar-Ortac-Gulun-Rengi.mp3" 
        className="hidden"
        onEnded={() => setIsPlaying(false)}
      />
      
      {/* View Routing */}
      {activeView === 'memories' && (
        <Memories 
          onBack={() => setActiveView('home')} 
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}
      
      {activeView === 'notes' && <Notes onBack={() => setActiveView('home')} />}

      {!isLoggedIn && activeView === 'home' && (
        <div className={`min-h-screen flex items-center justify-center bg-romantic-200 relative overflow-hidden transition-opacity duration-1000 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-romantic-300/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-romantic-400/40 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>

          <div className="bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl shadow-2xl border border-white/50 max-w-md w-full mx-4 relative z-10 transition-all duration-500">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-romantic-100 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <Heart className="w-8 h-8 text-romantic-500 fill-current" />
              </div>
              <h1 className="font-script text-4xl text-romantic-600 mb-2">Hoşgeldin</h1>
              <p className="text-romantic-500 font-serif italic">
                "Kalbime açılan kapıya hoşgeldin..."
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-romantic-900 flex items-center gap-2">
                  <Lock className="w-4 h-4" /> Kullanıcı Adı
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-romantic-300 focus:border-romantic-500 focus:ring-2 focus:ring-romantic-200 outline-none transition-all bg-white/50"
                  placeholder="Senin ismin..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-romantic-900 flex items-center gap-2">
                  <Key className="w-4 h-4" /> Şifre
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-romantic-300 focus:border-romantic-500 focus:ring-2 focus:ring-romantic-200 outline-none transition-all bg-white/50 pr-12"
                    placeholder="Bizim şifremiz..."
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-romantic-400 hover:text-romantic-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-romantic-500 text-sm text-center font-medium animate-shake">
                  {error}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-romantic-500 text-white py-3.5 rounded-xl font-semibold shadow-lg hover:bg-romantic-600 hover:shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Kapıyı Aç ❤️
              </button>
            </form>
            
            {/* Romantic Hint Card */}
            {showHint && (
              <div className="mt-6 p-4 bg-romantic-100/80 rounded-2xl border border-romantic-200 animate-fade-in-up">
                <div className="flex items-center gap-2 text-romantic-600 mb-2">
                  <Key className="w-4 h-4" />
                  <span className="font-script text-xl">Kalbimin Anahtarı</span>
                </div>
                <div className="space-y-1 text-sm text-romantic-900">
                  <p>Kullanıcı Adı: <span className="font-semibold text-romantic-500">seniçokseviyorum</span></p>
                  <p>Şifre: <span className="font-semibold text-romantic-500">boklutavşan0159</span></p>
                </div>
              </div>
            )}
            
            {!showHint && (
              <p className="mt-6 text-center text-xs text-romantic-400">
                Sadece bize özel...
              </p>
            )}
          </div>
        </div>
      )}

      {isLoggedIn && activeView === 'home' && (
        <MainContent 
          onLogout={handleLogout} 
          setActiveView={setActiveView} 
          activeView={activeView}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
        />
      )}
    </>
  );
}

function MainContent({ onLogout, setActiveView, activeView, isPlaying, setIsPlaying }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rotatingText, setRotatingText] = useState("O anı yeniden yaşamak için tıkla…");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const texts = ["O anı yeniden yaşamak için tıkla…", "Bu melodi, bizim hikayemiz…"];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % texts.length;
      setRotatingText(texts[index]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { title: "Hikayemiz", action: () => scrollToSection('timeline'), icon: <Calendar className="w-4 h-4" /> },
    { title: "Anılar", action: () => setActiveView('memories'), icon: <Camera className="w-4 h-4" /> },
    { title: "Şarkımız", action: () => scrollToSection('music'), icon: <Music className="w-4 h-4" /> },
    { title: "Notlar", action: () => setActiveView('notes'), icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <>
      {/* Navigation - Fixed Outside Animated Container */}
      <nav className={`fixed top-0 w-full z-[110] transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-2xl font-script text-romantic-600 relative z-[120] hover:scale-105 transition-transform">
            Bizim Hikayemiz
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <button 
                key={index} 
                onClick={link.action}
                className="text-sm font-medium text-romantic-900 hover:text-romantic-600 transition-colors flex items-center gap-2 group relative"
              >
                {link.title}
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-romantic-600 w-full absolute bottom-0"></span>
              </button>
            ))}
            <button onClick={onLogout} className="bg-romantic-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-romantic-600 transition-all hover:shadow-lg hover:-translate-y-0.5">
              Çıkış Yap
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-[120] p-2 text-romantic-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <h2 className="text-2xl font-script text-rose-500 mb-4">Menü</h2>
          {navLinks.map((link, index) => (
            <button 
              key={index} 
              onClick={link.action}
              className="text-3xl font-serif text-rose-950 font-bold hover:text-rose-600 transition-colors flex items-center gap-4"
            >
              {link.icon}
              {link.title}
            </button>
          ))}
          <button onClick={onLogout} className="mt-4 bg-romantic-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-lg">
            Çıkış Yap
          </button>
        </div>
      </nav>

      {/* Main Content - Animated */}
      <div className="min-h-screen text-romantic-900 font-sans selection:bg-romantic-200 selection:text-romantic-900 animate-fade-in-up bg-romantic-200">
        
        {/* Hero Section */}
        <header className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20 pb-20">
          {/* Dynamic Background */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-romantic-100/50 via-romantic-200 to-white"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-romantic-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-romantic-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-romantic-100/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 z-10">
            <div className="inline-block animate-fade-in-up">
              <span className="px-4 py-1.5 rounded-full border border-romantic-300 bg-white/50 backdrop-blur-sm text-romantic-600 text-xs font-bold tracking-wider uppercase shadow-sm">
                Sonsuza Dek
              </span>
            </div>

            {/* Romantic Name Badge */}
            <div className="relative w-72 h-72 mx-auto animate-fade-in-up animation-delay-150">
              <div className="absolute inset-0 bg-romantic-100/30 rounded-full blur-2xl animate-pulse"></div>
              <Heart className="w-full h-full text-romantic-200/50 fill-white/40 absolute inset-0 animate-float" strokeWidth={0.5} />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                <span className="font-script text-6xl md:text-7xl text-romantic-600 transform -rotate-6 drop-shadow-sm">
                  Samet
                </span>
                <span className="font-serif text-2xl text-romantic-400 my-1">&</span>
                <span className="font-script text-6xl md:text-7xl text-romantic-600 transform -rotate-6 drop-shadow-sm">
                  Melike
                </span>
              </div>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-romantic-900 leading-tight animate-fade-in-up animation-delay-300">
              Her Anımız <br />
              <span className="font-script text-romantic-500 block mt-2 lg:mt-4 transform -rotate-2">Bir Mucize</span>
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-romantic-500 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-300">
              Seninle geçen her saniye, kalbimde sonsuz bir anıya dönüşüyor. 
              Burası bizim dijital sonsuzluğumuz.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-500 pb-10">
              <button onClick={() => scrollToSection('timeline')} className="w-full sm:w-auto bg-romantic-500 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:bg-romantic-600 transition-all hover:scale-105 flex items-center justify-center gap-2 group">
                <Heart className="w-5 h-5 fill-current group-hover:animate-pulse" />
                Hikayemizi Keşfet
              </button>
            </div>
          </div>

          <div className="absolute bottom-10 animate-bounce text-romantic-400">
            <ArrowDown className="w-6 h-6" />
          </div>
        </header>

        {/* New Sections */}
        <section className="bg-white rounded-t-[3rem] shadow-inner relative z-10 -mt-10 pt-10">
          <TimeCounter startDate="2024-07-10T16:00:00" />
          
          <div className="max-w-4xl mx-auto px-4">
            <div className="h-px bg-romantic-300/50 my-12"></div>
          </div>

          {/* Music & Memories Section */}
          <div id="music" className="py-20 px-4 bg-romantic-50/50 scroll-mt-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md animate-spin-slow">
                <Music className="w-8 h-8 text-romantic-500" />
              </div>
              <h2 className="font-serif text-3xl text-romantic-900 mb-2">Bizim Şarkımız</h2>
              <p className="text-romantic-500 italic mb-8 h-6 animate-fade-in-up key={rotatingText}">
                "{rotatingText}"
              </p>
              
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto mb-8 border border-white/50 relative overflow-hidden group animate-breathing-shadow w-full md:w-auto md:min-w-[500px]">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-pink-300 via-rose-800 to-pink-300 opacity-30 pointer-events-none"></div>
                
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-romantic-300 via-romantic-500 to-romantic-300"></div>
                
                <div className="flex items-center justify-between gap-6 relative z-10">
                  <div className="flex-1 text-left">
                    <h3 className="font-serif text-xl text-romantic-900 mb-1">Gülün Rengi</h3>
                    <p className="text-sm text-romantic-500">Serdar Ortaç</p>
                  </div>
                  
                  <button 
                    onClick={() => {
                      const audio = document.getElementById('main-audio');
                      if (isPlaying) {
                        audio.pause();
                      } else {
                        audio.play();
                      }
                      setIsPlaying(!isPlaying);
                    }}
                    className="w-16 h-16 rounded-full bg-romantic-500 text-white flex items-center justify-center shadow-lg hover:bg-romantic-600 hover:scale-110 transition-all active:scale-95"
                  >
                    {isPlaying ? <Pause className="w-8 h-8 fill-current" /> : <Play className="w-8 h-8 fill-current ml-1" />}
                  </button>
                </div>

                {/* Visualizer Bars (Decorative) */}
                <div className="flex items-end justify-center gap-1 h-12 mt-6 opacity-50">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i} 
                      className={`w-1 bg-romantic-400 rounded-t-full transition-all duration-300 ${isPlaying ? 'animate-music-bar' : 'h-2'}`}
                      style={{ 
                        height: isPlaying ? `${Math.random() * 100}%` : '4px',
                        animationDelay: `${i * 0.05}s` 
                      }}
                    />
                  ))}
                </div>
              </div>

              <button 
                onClick={() => setActiveView('memories')}
                className="w-full md:w-auto md:min-w-[500px] inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-amber-700 text-white px-10 py-5 rounded-2xl font-serif text-xl shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group relative overflow-hidden"
              >
                <Infinity className="w-6 h-6 text-white/80" />
                <div className="flex flex-col items-start">
                  <span className="font-bold tracking-wide">Zaman Makinesini Başlat</span>
                  <span className="text-xs text-white/80 font-sans tracking-wider uppercase">Anılarımıza doğru bir yolculuk...</span>
                </div>
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-4">
            <div className="h-px bg-romantic-300/50 my-12"></div>
          </div>

          <div id="timeline" className="scroll-mt-20">
            <Timeline />
          </div>
          
          <div className="bg-romantic-200/30 py-20 mt-20">
            <LoveMessage />
          </div>
        </section>

        <footer className="bg-white border-t border-romantic-200 py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-script text-romantic-600">
              Bizim Hikayemiz
            </div>
            <p className="text-romantic-500 text-sm font-medium">
              © 2024 Sonsuza dek seninle... ❤️
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-romantic-100 flex items-center justify-center text-romantic-500 hover:bg-romantic-200 transition-colors cursor-pointer">
                <Heart className="w-4 h-4" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;

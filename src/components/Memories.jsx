import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Music, Infinity, Play, Pause, Sparkles, Star } from 'lucide-react';

const Memories = ({ onBack, isPlaying, setIsPlaying }) => {
  const [activeSlide, setActiveSlide] = useState(0); 
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const touchStart = useRef(null);
  const touchEnd = useRef(null);

  // --------------------------------------------------------------------------
  // ANILAR LİSTESİ (MANUEL DÜZENLEME)
  // --------------------------------------------------------------------------
  const memoryList = [
    {
      image: "/images/tkd.jpg",
      date: "10 TEMMUZ 2024",
      title: "Başlangıç",
      desc: "Her şeyin başladığı o ilk bakış..."
    },
    {
      image: "/images/-10.jpg",
      date: "",
      title: "İlk Günler",
      desc: "Seninle geçen ilk günümüz, kalbimin ritmi değişti."
    },
    {
      image: "/images/-9.jpg",
      date: "",
      title: "Gülüşün",
      desc: "Gülüşünle aydınlanan dünyam."
    },
    {
      image: "/images/-8.jpg",
      date: "",
      title: "Bekleyiş",
      desc: "Birlikte beklediğimiz duraklar."
    },
    {
      image: "/images/-7.jpg",
      date: "",
      title: "Göz Göze",
      desc: "El ele, göz göze..."
    },
    {
      image: "/images/-6.jpg",
      date: "",
      title: "Şaşkın",
      desc: "Şaşkın bakışlım"
    },
    {
      image: "/images/-5.jpg",
      date: "",
      title: "Mutluluk",
      desc: "Yanında en mutlu olduğum"
    },
    {
      image: "/images/-4.jpg",
      date: "",
      title: "Aşk",
      desc: "Öpmelere doyamadığım"
    },
    {
      image: "/images/-3.jpg",
      date: "",
      title: "Hayranlık",
      desc: "Bakmalara doyamadığım"
    },
    {
      image: "/images/-2.jpg",
      date: "",
      title: "Tebessüm",
      desc: "Gülümsemelerine doyamadığım"
    },
    {
      image: "/images/-1.jpg",
      date: "",
      title: "Gezmeler",
      desc: "Gezmelere doyamadığım" 
    },
    {
      image: "/images/1.jpg",
      date: "",
      title: "",
      desc: "" 
    },    
    {
      image: "/images/2.jpg",
      date: "",
      title: "Sevgilim",
      desc: "Biricik sevgilim" 
    },  
     {
      image: "/images/3.jpg",
      date: "",
      title: "Macera",
      desc: "Gezmelerimiz" 
    },    
    {
      image: "/images/4.jpg",
      date: "",
      title: "Neşe",
      desc: "Gülümsemelerimiz" 
    },    
     {
      image: "/images/5.jpg",
      date: "",
      title: "Birlikte",
      desc: "Yan yana oluşlarımız" 
    },    
     {
      image: "/images/7.jpg",
      date: "",
      title: "Sonsuzluk",
      desc: "Hiç bitmesin :)" 
    },    
      {
      image: "/images/6.jpg",
      date: "",
      title: "Mazi",
      desc: "Geçmişimiz" 
    },    
     {
      image: "/images/9.jpg",
      date: "",
      title: "Hatıra",
      desc: "Geçmişimiz" 
    },    
    {
      image: "/images/10.jpg",
      date: "",
      title: "",
      desc: "" 
    },    
     {
      image: "/images/11.jpg",
      date: "",
      title: "Anılar",
      desc: "Anılarımız" 
    },   
    {
      image: "/images/12.jpg",
      date: "",
      title: "Özlem",
      desc: "Özlemimiz" 
    },     
    {
      image: "/images/13.jpg",
      date: "",
      title: "Sevgi",
      desc: "Sevgimiz" 
    },     
    {
      image: "/images/15.jpg",
      date: "",
      title: "Sürpriz",
      desc: "Sürprizlerimiz" 
    },     
    {
      image: "/images/14.jpg",
      date: "",
      title: "Dilek",
      desc: "Hiç bitmesin" 
    },     
    {
      image: "/images/16.jpg",
      date: "",
      title: "İtiraf",
      desc: "Seni çok seviyorum" 
    },     
    {
      image: "/images/17.jpg",
      date: "",
      title: "",
      desc: "" 
    }, 
     {
      image: "/images/18.jpg",
      date: "",
      title: "",
      desc: "" 
    },      
    {
      image: "/images/19.jpg",
      date: "",
      title: "",
      desc: "" 
    },      
    {
      image: "/images/20.jpg",
      date: "",
      title: "",
      desc: "" 
    },       
     {
      image: "/images/21.jpg",
      date: "",
      title: "",
      desc: "" 
    },    
    {
      image: "/images/22.jpg",
      date: "",
      title: "",
      desc: "" 
    },    
    {
      image: "/images/23.jpg",
      date: "",
      title: "",
      desc: "" 
    },  
    {
      image: "/images/24.jpg",
      date: "",
      title: "",
      desc: "" 
    },  
    {
      image: "/images/25.jpg",
      date: "",
      title: "",
      desc: "" 
    },  
  ];

  // Intro Effect
  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Auto Play
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        if (activeSlide < memoryList.length - 1) {
          setActiveSlide(prev => prev + 1);
        } else {
          setIsAutoPlaying(false);
        }
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, activeSlide, memoryList.length]);

  // Touch Handlers for Swipe
  const onTouchStart = (e) => {
    touchEnd.current = null; 
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    if (activeSlide < memoryList.length - 1) {
      setActiveSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide(activeSlide - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0f172a] text-white z-50 overflow-hidden flex flex-col font-sans"
         onTouchStart={onTouchStart}
         onTouchMove={onTouchMove}
         onTouchEnd={onTouchEnd}>
      
      {/* Intro Overlay */}
      <div className={`absolute inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-1000 pointer-events-none ${showIntro ? 'opacity-100' : 'opacity-0'}`}>
        <div className="text-center space-y-4">
          <Infinity className="w-16 h-16 text-rose-500 mx-auto animate-pulse" />
          <p className="font-serif text-2xl text-rose-200 italic">Hazırsan, seni ilk güne götürüyorum...</p>
        </div>
      </div>

      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <div 
            key={`star-${i}`}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
        {/* Shooting Stars */}
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full shadow-[0_0_20px_2px_white] animate-shooting-star animation-delay-2000"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full shadow-[0_0_20px_2px_white] animate-shooting-star animation-delay-4000"></div>

        {/* Floating Hearts with Depth */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={`heart-${i}`}
            className={`absolute text-rose-500/20 animate-float-slow ${i % 2 === 0 ? 'blur-sm scale-75' : 'blur-none scale-100'}`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 20}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 10 + 15}s`
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Header & Mini Player */}
      <div className="relative z-20 p-4 md:p-6 flex justify-between items-start bg-gradient-to-b from-black/80 to-transparent">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-white/80 hover:text-white hover:scale-105 transition-all group mt-2"
        >
          <div className="p-2 bg-white/10 rounded-full group-hover:bg-white/20 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </div>
          <span className="font-medium tracking-wide hidden md:inline">Ana Sayfa</span>
        </button>
        
        {/* Sticky Mini Player */}
        <div className="bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-4 shadow-lg animate-fade-in-up">
          <div className="flex flex-col items-end mr-2">
            <span className="text-xs text-rose-300 font-bold tracking-widest uppercase">Bizim Şarkımız</span>
            <span className="text-xs text-white/80 font-serif italic">Gülün Rengi</span>
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
            className="w-8 h-8 rounded-full bg-rose-500 flex items-center justify-center hover:bg-rose-600 transition-colors"
          >
            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
          </button>
          {/* Tiny Waveform */}
          <div className="flex items-end gap-0.5 h-4">
             {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-0.5 bg-rose-400 rounded-t-full ${isPlaying ? 'animate-music-bar' : 'h-1'}`}
                  style={{ height: isPlaying ? `${Math.random() * 100}%` : '20%', animationDelay: `${i * 0.1}s` }}
                />
             ))}
          </div>
        </div>
      </div>

      {/* Main Content - Horizontal View */}
      <div className="flex-1 relative flex items-center justify-center perspective-1000">
        {memoryList.map((memory, index) => {
          const isActive = index === activeSlide;
          const offset = index - activeSlide;
          
          // Only render nearby slides
          if (Math.abs(offset) > 2) return null;

          return (
            <div 
              key={index}
              className={`absolute w-full h-full flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                isActive ? 'opacity-100 z-20 scale-100 blur-0' : 
                'opacity-0 z-10 scale-90 blur-xl'
              }`}
              style={{
                transform: isActive ? 'translateX(0) rotateY(0)' : `translateX(${offset * 60}%) rotateY(${offset * -5}deg)`
              }}
            >
              {/* Landscape Card */}
              <div className="relative w-[90vw] md:w-[800px] aspect-[4/3] md:aspect-[16/9] max-h-[70vh] bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                
                {/* Top Date */}
                <div className="absolute top-6 left-0 w-full text-center z-30">
                  {memory.date && (
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-rose-200/80 drop-shadow-md bg-black/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/5">
                      {memory.date}
                    </span>
                  )}
                </div>

                {/* Main Image Container */}
                <div className="w-full h-full relative bg-black/50 backdrop-blur-sm">
                  {/* Blurred Background for Fill Effect */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-30 blur-xl scale-110"
                    style={{ backgroundImage: `url(${memory.image})` }}
                  ></div>
                  
                  {/* Actual Image - Fitted */}
                  <img 
                    src={memory.image} 
                    alt="Anı" 
                    className="relative w-full h-full object-contain z-10 transition-transform duration-[20s] ease-linear scale-100 group-hover:scale-105"
                  />
                </div>
                
                {/* Quote Overlay on Image */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/50 to-transparent pointer-events-none z-20"></div>
                
                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 w-full p-4 md:p-8 z-30 flex flex-col items-center text-center">
                  {memory.title && (
                    <h3 className="font-serif text-2xl md:text-3xl text-rose-300 mb-2 md:mb-3 drop-shadow-lg">{memory.title}</h3>
                  )}
                  {memory.desc && (
                    <p className="font-sans text-base md:text-xl text-white/90 font-light leading-relaxed max-w-2xl drop-shadow-md">
                      "{memory.desc}"
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation & Timeline */}
      <div className="relative z-20 pb-8 pt-4 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          
          {/* Manual Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 md:gap-12 mb-6">
            <button 
              onClick={prevSlide}
              disabled={activeSlide === 0}
              className={`p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all text-white ${activeSlide === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:scale-110'}`}
            >
              <ArrowLeft className="w-6 h-6" />
            </button>

            {/* Auto Play Toggle */}
            <button 
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`p-4 rounded-full backdrop-blur-sm transition-all text-white shadow-lg ${isAutoPlaying ? 'bg-rose-500 hover:bg-rose-600' : 'bg-white/10 hover:bg-white/20'}`}
              title={isAutoPlaying ? "Slaytı Durdur" : "Slaytı Başlat"}
            >
              {isAutoPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
            </button>
            
            <button 
              onClick={nextSlide}
              disabled={activeSlide === memoryList.length - 1}
              className={`p-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all text-white ${activeSlide === memoryList.length - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:scale-110'}`}
            >
              <ArrowLeft className="w-6 h-6 rotate-180" />
            </button>
          </div>

          <div className="relative h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-rose-500 to-purple-500 transition-all duration-300"
              style={{ width: `${((activeSlide + 1) / memoryList.length) * 100}%` }}
            ></div>
          </div>
          
          <div className="flex justify-between mt-2 text-[10px] text-white/30 font-mono">
            <span>BAŞLANGIÇ</span>
            <span>{activeSlide + 1} / {memoryList.length}</span>
            <span>SONSUZLUK</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memories;

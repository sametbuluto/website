import React, { useState, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const TimeCounter = ({ startDate }) => {
  const [timeElapsed, setTimeElapsed] = useState({ 
    years: 0, months: 0, days: 0, 
    hours: 0, minutes: 0, seconds: 0 
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(startDate); // 2024-07-10T16:00:00
      const now = new Date();
      
      let diff = now - start;
      
      // Calculate time units
      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      
      // Approximate years and months for display (simplified)
      const years = Math.floor(days / 365);
      const remainingDays = days % 365;
      const months = Math.floor(remainingDays / 30);
      const finalDays = remainingDays % 30;

      setTimeElapsed({ years, months, days: finalDays, hours, minutes, seconds });
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000); // Update every second
    return () => clearInterval(timer);
  }, [startDate]);

  return (
    <div className="py-16 text-center relative overflow-hidden">
      <h2 className="font-serif text-3xl text-romantic-500 mb-2">Beraber Geçen Zaman</h2>
      
      {/* Location Badge */}
      <div className="flex items-center justify-center gap-2 text-romantic-400 mb-8 text-sm animate-fade-in-up">
        <MapPin className="w-4 h-4" />
        <span>Tekirdağ NKÜ Kampüs Girişi (40.99° N, 27.53° E)</span>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto px-4">
        {[
          { label: 'Yıl', value: timeElapsed.years },
          { label: 'Ay', value: timeElapsed.months },
          { label: 'Gün', value: timeElapsed.days },
          { label: 'Saat', value: timeElapsed.hours },
          { label: 'Dakika', value: timeElapsed.minutes },
          { label: 'Saniye', value: timeElapsed.seconds }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center bg-white/50 backdrop-blur-sm p-4 rounded-2xl shadow-sm border border-romantic-100 min-w-[80px]">
            <span className="font-serif text-3xl md:text-5xl text-romantic-900 font-bold tabular-nums">
              {item.value}
            </span>
            <span className="text-romantic-500 uppercase tracking-widest text-xs mt-2">
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <p className="font-script text-2xl text-romantic-500 mt-10 animate-pulse">
        "Bu geçen zamanın her saniyesi iyi ki seninle..."
      </p>
    </div>
  );
};

export default TimeCounter;

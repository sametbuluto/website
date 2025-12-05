import React from 'react';

const Timeline = () => {
  const events = [
    { 
      date: "10 Temmuz 2024", 
      title: "İlk Buluşma", 
      desc: "Göz göze geldiğimiz o ilk an... Her şeyin başladığı yer.", 
      image: "/images/tkd.jpg" 
    },
    { 
      date: "2 Ağustos 2024", 
      title: "Sürpriz Doğum Günü", 
      desc: "Mumları üflerken tuttuğum dilek sendin. İyi ki doğdun sevgilim.", 
      image: "/images/sonsuz.jpeg" 
    },
    { 
      date: "4 Ağustos 2024", 
      title: "İlk Tatil", 
      desc: "Denizin mavisi ve senin gülüşün. Unutulmaz anılarımız.", 
      image: "/images/dko.jpeg" 
    },
    { 
      date: "Sonsuzluğa", 
      title: "Bizim Hikayemiz", 
      desc: "Ve bu hikaye hiç bitmeyecek...", 
      image: "/images/ilk.jpeg" 
    }
  ];

  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="font-serif text-3xl text-center text-romantic-500 mb-12">Zaman Tünelimiz</h2>
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-romantic-300 hidden md:block"></div>
        
        <div className="space-y-12">
          {events.map((event, index) => (
            <div key={index} className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Card */}
              <div className="w-full md:w-1/2 group">
                <div className="relative overflow-hidden rounded-2xl shadow-lg border-4 border-white transform transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1 h-80">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-romantic-900/20 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </div>

              {/* Date & Text */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                  <span className="font-serif text-romantic-500 text-lg mb-2">{event.date}</span>
                  <h3 className="font-serif text-3xl text-romantic-900 mb-3">{event.title}</h3>
                  <p className="text-slate-600 font-light italic">{event.desc}</p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;

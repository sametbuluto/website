import React, { useState } from 'react';
import { Gift, Heart } from 'lucide-react';

const messages = [
  "Seninle her şey daha anlamlı.",
  "Gülüşün kalbimin en sevdiği ses.",
  "Sadece yanında olmak bile yeter.",
  "Gözlerin, kaybolmak istediğim tek yer.",
  "Sen benim en güzel 'iyi ki'msin.",
  "Her sabah uyandığımda aklıma gelen ilk şeysin.",
  "Seninle geçen her an, ömre bedel.",
  "Tavşanımsın.",
   "Bal yanaklım.",
  "Dünyanın en güzel yeri, senin yanın.",
  "Sen benim sonsuzluğumsun.",
  "Varlığın, hayatımın en büyük hediyesi.",
  "Seninle yaşlanmak, en büyük hayalim.",
  "Ellerin, ellerime en çok yakışan şey.",
  "Sesini duymak, günümü aydınlatıyor.",
  "Seninle her mevsim bahar.",
  "Aşkın, kalbimin en güvenli limanı.",
  "Sen benim tamamlanmış halimsin.",
  "Seni, kelimelerin yetmediği kadar çok seviyorum.",
  "Seninle her yolculuk güzel."
];

const LoveMessage = () => {
  const [currentMessage, setCurrentMessage] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);

  const generateMessage = () => {
    setIsAnimating(true);
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setTimeout(() => {
      setCurrentMessage(randomMsg);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="py-16 text-center px-4">
      <button 
        onClick={generateMessage}
        className="bg-white border-2 border-romantic-300 text-romantic-500 px-8 py-4 rounded-full font-serif text-lg shadow-sm hover:shadow-md hover:bg-romantic-100 transition-all duration-300 flex items-center gap-3 mx-auto group"
      >
        <Gift className="w-6 h-6 group-hover:animate-bounce" />
        Bana bir neden söyle...
      </button>
      
      <div className="h-24 flex items-center justify-center mt-8">
        {currentMessage && (
          <p className={`font-script text-3xl md:text-4xl text-romantic-900 transition-all duration-500 transform ${isAnimating ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`}>
            "{currentMessage}"
          </p>
        )}
      </div>
    </div>
  );
};

export default LoveMessage;

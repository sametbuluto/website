import React, { useState, useEffect } from 'react';

const LoadingIntro = ({ onComplete }) => {
  const [text, setText] = useState("Her şey bir bakışla başladı...");
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setOpacity(0);
    }, 2000);

    const timer2 = setTimeout(() => {
      setText("Ve bu site bizim hikayemiz...");
      setOpacity(1);
    }, 3000);

    const timer3 = setTimeout(() => {
      setOpacity(0);
    }, 5000);

    const timer4 = setTimeout(() => {
      onComplete();
    }, 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-romantic-200 z-[60] flex items-center justify-center">
      <h1 
        className="font-script text-4xl md:text-6xl text-romantic-900 transition-opacity duration-1000 text-center px-4"
        style={{ opacity: opacity }}
      >
        {text}
      </h1>
    </div>
  );
};

export default LoadingIntro;

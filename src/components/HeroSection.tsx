'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaPhone, FaArrowRight } from 'react-icons/fa';

const bgImages = [
  '/images/office/office-1.jpg',
  '/images/office/office-2.jpg',
  '/images/office/office-3.jpg',
];

const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative text-white overflow-hidden min-h-[550px] md:min-h-[620px] lg:min-h-[680px]">
      {/* Background Images Slideshow */}
      {bgImages.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentBg ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt="General Brokers - Uffici"
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlay leggero - lascia vedere le foto */}
      <div className="absolute inset-0 bg-black/40 z-[1]"></div>

      {/* Content */}
      <div className="container-custom relative z-10 h-full">
        <div className="flex flex-col justify-center min-h-[550px] md:min-h-[620px] lg:min-h-[680px] py-16 md:py-20">
          <div className="max-w-3xl" style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 1px 4px rgba(0,0,0,0.5)' }}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6" style={{ textShadow: 'none' }}>
              <span className="w-2 h-2 bg-primary-400 rounded-full animate-pulse"></span>
              <span className="text-xs md:text-sm font-semibold tracking-wide">Milano dal 1977</span>
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl lg:text-2xl font-heading italic text-white/90 mb-3">
              l&apos;assicurezza firmata
            </p>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-[1.1] mb-6" style={{ textShadow: '0 3px 16px rgba(0,0,0,0.8), 0 1px 6px rgba(0,0,0,0.6)' }}>
              Broker Assicurativo<br />
              <span className="text-primary-400">Indipendente</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-white max-w-xl mb-5 leading-relaxed font-medium">
              Con la nostra esperienza, competenza e professionalit&agrave; ti seguiamo in ogni passo.
            </p>

            {/* Signature phrase */}
            <div className="max-w-xl mb-8 bg-white/10 backdrop-blur-sm border-l-4 border-primary-400 rounded-r-lg px-5 py-3.5" style={{ textShadow: 'none' }}>
              <p className="text-sm md:text-base text-white/95 italic leading-relaxed">
                &ldquo;Noi leggiamo per Voi ed il nostro lavoro continua... anche se le polizze sono gi&agrave; state stipulate con altri!&rdquo;
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="/contatti"
                className="group inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-7 py-3.5 rounded-lg font-semibold transition-colors text-sm md:text-base"
              >
                Richiedi Consulenza Gratuita
                <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
              </a>
              <a
                href="tel:026698.4847"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-7 py-3.5 rounded-lg font-semibold transition-colors text-sm md:text-base"
              >
                <FaPhone className="text-sm" />
                02 6698.4847
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[2]"></div>
    </section>
  );
};

export default HeroSection;

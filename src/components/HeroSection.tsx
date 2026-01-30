'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaPhone, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title: 'Che la Vostra polizza sia scritta così:',
    content: '"Alla polizza è assegnato l\'indice dei prezzi al consumo per le famiglie di operai ed impiegati del mese di settembre dell\'anno solare antecedente la data di effetto della polizza stessa. Se tra l\'indice del mese di settembre dell\'anno solare precedente la scadenza di una rata annua e l\'indice di riferimento iniziale si è verificato un aumento, le somme assicurate, il premio e le franchigie espresse in cifra assoluta vengono aumentati in eguale misura a partire dalla scadenza stessa."'
  },
  {
    id: 2,
    title: 'O così:',
    content: '"I have read the above and agree that to the best of my knowledge and belief it represents a true and complete statement."'
  },
  {
    id: 3,
    title: 'Non importa!',
    content: 'noi leggiamo per Voi ed il nostro lavoro continua... anche se le polizze sono già state stipulate con altri!'
  }
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play dello slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000); // Cambia slide ogni 7 secondi

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/duomo-milano.jpg"
          alt="Milano Duomo - General Brokers sede Milano"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 via-primary-800/90 to-primary-700/85"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] md:min-h-[600px] lg:min-h-[650px] py-12 md:py-20 lg:py-24">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge Dal 1977 */}
            <div className="inline-flex items-center gap-2 bg-accent-500/20 backdrop-blur-sm px-4 md:px-5 py-2 md:py-2.5 rounded-full mb-4 md:mb-6 border border-accent-400/30">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
              <span className="text-xs md:text-sm font-semibold text-accent-100 tracking-wide">Milano • Dal 1977</span>
            </div>

            {/* Tagline Signature */}
            <div className="mb-4 md:mb-6">
              <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-semibold text-white mb-2 tracking-wide italic">
                l&apos;assicurezza firmata
              </h2>
              <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-accent-400 to-accent-600 rounded-full mx-auto lg:mx-0"></div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading font-bold mb-4 md:mb-6 leading-tight">
              Broker Assicurativo
              <span className="block text-accent-400 mt-2">
                Indipendente
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-gray-100 leading-relaxed">
              Con la nostra esperienza, competenza e professionalità{' '}
              <span className="font-bold text-white">
                ti seguiamo in ogni passo.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
              <a
                href="/contatti"
                className="group btn-primary bg-white text-primary-600 hover:bg-accent-50 hover:text-accent-700 inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 font-semibold shadow-2xl text-sm md:text-base"
              >
                Richiedi Consulenza Gratuita
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:026698.4847"
                className="btn-outline border-white text-white inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 font-semibold hover:bg-white/10 text-sm md:text-base"
              >
                <FaPhone />
                02 6698.4847
              </a>
            </div>
          </div>

          {/* Right Side - Slider Cards */}
          <div className="relative mt-8 lg:mt-0">
            {/* Navigation Arrows - nascosti su mobile */}
            <button
              onClick={prevSlide}
              className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
              aria-label="Slide precedente"
            >
              <FaChevronLeft className="text-white text-xl" />
            </button>
            <button
              onClick={nextSlide}
              className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-3 rounded-full transition-all"
              aria-label="Slide successiva"
            >
              <FaChevronRight className="text-white text-xl" />
            </button>

            {/* Slides Container */}
            <div className="relative h-[350px] md:h-[400px] lg:h-[450px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : index < currentSlide
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-xl border-2 border-white/30 rounded-2xl p-6 md:p-8 shadow-2xl h-full flex flex-col justify-center">
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
                      {slide.title}
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed italic">
                      {slide.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center gap-3 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white w-8'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Vai alla slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-8 md:h-12 fill-white">
          <path d="M0,48L60,50.7C120,53,240,59,360,58.7C480,59,600,53,720,48C840,43,960,37,1080,37.3C1200,37,1320,43,1380,45.3L1440,48L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;

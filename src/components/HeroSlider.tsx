import { useState, useEffect } from 'react';
import { FaArrowRight, FaPhone, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    title: "Che la Vostra polizza sia scritta così:",
    subtitle: "Definizione tecnica complessa",
    description: "Alla polizza è assegnato l'indice dei prezzi al consumo per le famiglie di operai ed impiegati del mese di settembre dell'anno solare antecedente la data di effetto della polizza stessa. Se tra l'indice del mese di settembre dell'anno solare precedente la scadenza di una rata annua e l'indice di riferimento iniziale si è verificato un aumento, le somme assicurate, il premio e le franchigie espresse in cifra assoluta vengono aumentati in eguale misura a partire dalla scadenza stessa.",
    bgColor: "from-red-600 via-red-700 to-red-800",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "O così:",
    subtitle: "Termini tecnici in inglese",
    description: "I have read the above and agree that to the best of my knowledge and belief it represents a true and complete statement.",
    bgColor: "from-red-600 via-red-700 to-red-800",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Non importa!",
    subtitle: "Il nostro impegno per voi",
    description: "Noi leggiamo per Voi ed il nostro lavoro continua... anche se le polizze sono già state stipulate con altri!",
    bgColor: "from-primary-800 via-primary-900 to-primary-950",
    textColor: "text-white",
    highlight: true,
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[600px] md:min-h-[700px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${slide.bgColor}`} />

            <div className="container-custom relative z-10 h-full flex items-center">
              <div className="w-full max-w-5xl mx-auto py-20 md:py-24">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full mb-6 border border-white/30">
                  <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse"></span>
                  <span className="text-sm font-semibold text-white tracking-wide">Milano • Dal 1977</span>
                </div>

                {/* Title */}
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 ${slide.textColor} leading-tight`}>
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl mb-8 text-white/90 font-semibold">
                  {slide.subtitle}
                </p>

                {/* Description Box */}
                <div className={`bg-white/10 backdrop-blur-md border-2 ${
                  slide.highlight ? 'border-accent-400' : 'border-white/30'
                } rounded-xl p-8 mb-10 max-w-4xl`}>
                  <p className={`text-lg md:text-xl leading-relaxed ${
                    slide.highlight ? 'text-white font-semibold text-2xl md:text-3xl' : 'text-white/95 italic'
                  }`}>
                    {slide.description}
                  </p>
                </div>

                {/* CTA Buttons - Only on last slide */}
                {slide.highlight && (
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <a
                      href="/contatti"
                      className="group btn-primary bg-white text-primary-600 hover:bg-accent-50 hover:text-accent-700 inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold shadow-2xl"
                    >
                      Richiedi Consulenza Gratuita
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="tel:026698.4847"
                      className="btn-outline border-2 border-white text-white inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold hover:bg-white/10"
                    >
                      <FaPhone />
                      02 6698.4847
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300"
        aria-label="Slide precedente"
      >
        <FaChevronLeft className="text-xl" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all duration-300"
        aria-label="Slide successiva"
      >
        <FaChevronRight className="text-xl" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'bg-white w-12 h-3'
                : 'bg-white/50 hover:bg-white/70 w-3 h-3'
            }`}
            aria-label={`Vai alla slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Bottom Wave Decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="w-full h-12 fill-white">
          <path d="M0,48L60,50.7C120,53,240,59,360,58.7C480,59,600,53,720,48C840,43,960,37,1080,37.3C1200,37,1320,43,1380,45.3L1440,48L1440,80L1380,80C1320,80,1200,80,1080,80C960,80,840,80,720,80C600,80,480,80,360,80C240,80,120,80,60,80L0,80Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSlider;

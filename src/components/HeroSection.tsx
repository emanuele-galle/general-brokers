import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative text-white overflow-hidden min-h-[600px] md:min-h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero/duomo-milano.jpg"
          alt="General Brokers - Milano"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-[1]"></div>

      {/* Content */}
      <div className="container-custom relative z-10 h-full">
        <div className="flex flex-col justify-center min-h-[600px] md:min-h-[700px] py-20 md:py-24">
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full border border-white/25 mb-8">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              <span className="text-xs font-medium tracking-wider uppercase text-white">Milano, dal 1977</span>
            </div>

            {/* Heading */}
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-4 tracking-tight text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              Broker Assicurativo<br />
              Indipendente
            </h1>

            {/* Tagline */}
            <p className="font-serif text-lg md:text-xl italic text-white mb-8 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              l&apos;assicurezza firmata
            </p>

            {/* Phone */}
            <p className="text-white/90 text-sm mb-8 font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
              Tel. 02 6698.4847 &mdash; info@generalbrokers.it
            </p>

            {/* CTA */}
            <Link
              href="/contatti"
              className="group inline-flex items-center justify-center gap-2 bg-white text-primary-700 hover:bg-white/90 px-8 py-3.5 rounded-full font-semibold transition-colors text-sm md:text-base shadow-lg"
            >
              Richiedi Consulenza
              <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[2]"></div>
    </section>
  );
};

export default HeroSection;

import { ReactNode } from 'react';
import Image from 'next/image';

interface GenericHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: ReactNode;
  children?: ReactNode;
  className?: string;
  backgroundImage?: string;
}

const defaultImages = [
  '/images/office/office-1.jpg',
  '/images/office/office-2.jpg',
  '/images/office/office-3.jpg',
  '/images/hero/duomo-milano.jpg',
  '/images/hero/stazione-centrale-milano.jpg',
  '/images/hero/Galleria-Vittorio-Emanuele.webp',
];

const GenericHero = ({
  title,
  subtitle,
  description,
  icon,
  children,
  className = '',
  backgroundImage
}: GenericHeroProps) => {

  // Pick a consistent image based on title hash
  const getImageForTitle = (t: string) => {
    if (backgroundImage) return backgroundImage;
    let hash = 0;
    for (let i = 0; i < t.length; i++) {
      hash = ((hash << 5) - hash) + t.charCodeAt(i);
      hash |= 0;
    }
    return defaultImages[Math.abs(hash) % defaultImages.length];
  };

  const bgImage = getImageForTitle(title);

  return (
    <section
      className={`relative text-white min-h-[600px] md:min-h-[700px] overflow-hidden ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="container-custom relative z-10 flex items-center min-h-[600px] md:min-h-[700px]">
        <div className={`max-w-3xl ${icon ? 'mx-auto text-center' : ''} py-20 md:py-24`}>
          {/* Icon */}
          {icon && (
            <div className="inline-flex items-center justify-center w-16 h-16 bg-black/30 backdrop-blur-sm rounded-full mb-6 border border-white/20">
              {icon}
            </div>
          )}

          {/* Subtitle Badge */}
          {subtitle && (
            <p className="text-white/90 text-sm font-semibold uppercase tracking-wider mb-4 drop-shadow-[0_1px_3px_rgba(0,0,0,0.4)]">
              {subtitle}
            </p>
          )}

          {/* Title */}
          <h1 className="font-heading font-bold mb-6 text-white text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {title}
          </h1>

          {/* White divider */}
          <div className="w-16 h-[3px] bg-white rounded-full mb-6"></div>

          {/* Description */}
          {description && (
            <p className="text-white text-lg md:text-xl leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
              {description}
            </p>
          )}

          {/* Custom Children */}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>

      {/* Bottom fade to white */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-[2]"></div>
    </section>
  );
};

export default GenericHero;

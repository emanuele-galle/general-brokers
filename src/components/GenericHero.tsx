import Image from 'next/image';
import { ReactNode } from 'react';

interface GenericHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  icon?: ReactNode;
  backgroundImage?: string;
  variant?: 'gradient' | 'image' | 'simple';
  theme?: 'primary' | 'accent' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
  className?: string;
}

/**
 * GenericHero - Componente riutilizzabile per sezioni hero
 * Supporta diverse varianti e temi per massima flessibilità
 */
const GenericHero = ({
  title,
  subtitle,
  description,
  icon,
  backgroundImage,
  variant = 'gradient',
  theme = 'primary',
  size = 'medium',
  children,
  className = ''
}: GenericHeroProps) => {

  // Temi di colore
  const themes = {
    primary: {
      gradient: 'gradient-red',
      simple: 'bg-primary-600',
      iconBg: 'bg-white/20 backdrop-blur-sm'
    },
    accent: {
      gradient: 'bg-gradient-to-r from-accent-700 via-accent-600 to-primary-600',
      simple: 'bg-accent-600',
      iconBg: 'bg-white/20 backdrop-blur-sm'
    },
    secondary: {
      gradient: 'bg-gradient-to-r from-secondary-700 via-secondary-600 to-secondary-500',
      simple: 'bg-secondary-600',
      iconBg: 'bg-white/20 backdrop-blur-sm'
    }
  };

  // Dimensioni
  const sizes = {
    small: 'py-12 md:py-16',
    medium: 'py-16 md:py-24 section-padding',
    large: 'py-24 md:py-32'
  };

  // Classi base
  const themeClass = variant === 'image' ? themes[theme].gradient :
                     variant === 'gradient' ? themes[theme].gradient :
                     themes[theme].simple;

  return (
    <section
      className={`${themeClass} text-white ${sizes[size]} relative overflow-hidden ${className}`}
    >
      {/* Background Image (se presente) */}
      {variant === 'image' && backgroundImage && (
        <>
          <div className="absolute inset-0 opacity-15">
            <Image
              src={backgroundImage}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700/85 via-primary-600/85 to-accent-700/85"></div>
        </>
      )}

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className={`${size === 'small' ? 'max-w-2xl' : 'max-w-3xl'} ${icon || size === 'large' ? 'mx-auto text-center' : ''}`}>
          {/* Icon (se presente) */}
          {icon && (
            <div className={`inline-flex items-center justify-center w-20 h-20 ${themes[theme].iconBg} rounded-full mb-6`}>
              {icon}
            </div>
          )}

          {/* Subtitle Badge (se presente) */}
          {subtitle && (
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-semibold mb-4">
              {subtitle}
            </div>
          )}

          {/* Title */}
          <h1 className={`font-heading font-bold mb-6 ${
            size === 'large' ? 'text-4xl md:text-6xl' :
            size === 'medium' ? 'text-4xl md:text-5xl' :
            'text-3xl md:text-4xl'
          }`}>
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className={`text-primary-50 ${
              size === 'large' ? 'text-2xl' :
              size === 'medium' ? 'text-xl' :
              'text-lg'
            }`}>
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
    </section>
  );
};

export default GenericHero;

/**
 * ESEMPI DI UTILIZZO:
 *
 * // Hero semplice con gradiente
 * <GenericHero
 *   title="Chi Siamo"
 *   description="Dal 1977 al fianco di famiglie e aziende"
 * />
 *
 * // Hero con icona
 * <GenericHero
 *   title="Gestione Reclami"
 *   description="La tua opinione è importante"
 *   icon={<FaExclamationCircle className="text-4xl" />}
 *   size="medium"
 * />
 *
 * // Hero con immagine di sfondo
 * <GenericHero
 *   variant="image"
 *   backgroundImage="/images/about/milano.jpg"
 *   title="La Nostra Sede"
 *   description="Milano, Via Tonale 20"
 * />
 *
 * // Hero con subtitle badge
 * <GenericHero
 *   subtitle="I Nostri Servizi"
 *   title="Soluzioni Assicurative Complete"
 *   description="Protezione su misura per te e la tua famiglia"
 *   theme="accent"
 * />
 *
 * // Hero con contenuto personalizzato
 * <GenericHero
 *   title="Contattaci"
 *   size="large"
 * >
 *   <div className="flex gap-4 justify-center mt-8">
 *     <button className="btn-primary">Prenota</button>
 *     <button className="btn-outline">Chiama</button>
 *   </div>
 * </GenericHero>
 */

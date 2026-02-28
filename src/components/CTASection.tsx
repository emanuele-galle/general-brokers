import { ReactNode } from 'react';
import { FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { contactInfo } from '@/data/contactInfo';

interface CTASectionProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'consultation' | 'contact' | 'custom';
  theme?: 'dark' | 'white' | 'secondary';
  primaryButton?: {
    text: string;
    href: string;
    icon?: ReactNode;
  };
  secondaryButton?: {
    text: string;
    href: string;
    icon?: ReactNode;
  };
  className?: string;
}

const CTASection = ({
  title,
  description,
  variant = 'default',
  theme = 'dark',
  primaryButton,
  secondaryButton,
  className = ''
}: CTASectionProps) => {

  const variants = {
    default: {
      title: 'Hai Bisogno di Supporto?',
      description: 'Il nostro team è a tua disposizione per ogni esigenza assicurativa',
      primaryButton: {
        text: 'Contattaci',
        href: '/contatti',
        icon: <FaArrowRight className="ml-2" />
      },
      secondaryButton: {
        text: contactInfo.phone.display,
        href: `tel:${contactInfo.phone.tel}`,
        icon: <FaPhone className="mr-2" />
      }
    },
    consultation: {
      title: 'Richiedi una Consulenza Gratuita',
      description: 'Parla con un nostro esperto e trova la soluzione assicurativa perfetta per te',
      primaryButton: {
        text: 'Prenota Consulenza',
        href: '/contatti',
        icon: <FaArrowRight className="ml-2" />
      },
      secondaryButton: {
        text: 'Chiamaci Ora',
        href: `tel:${contactInfo.phone.tel}`,
        icon: <FaPhone className="mr-2" />
      }
    },
    contact: {
      title: 'Parliamo del Tuo Progetto',
      description: 'Contattaci per una valutazione personalizzata delle tue esigenze assicurative',
      primaryButton: {
        text: 'Invia Email',
        href: `mailto:${contactInfo.email.general}`,
        icon: <FaEnvelope className="mr-2" />
      },
      secondaryButton: {
        text: contactInfo.phone.display,
        href: `tel:${contactInfo.phone.tel}`,
        icon: <FaPhone className="mr-2" />
      }
    }
  };

  const config = variant === 'custom'
    ? { title, description, primaryButton, secondaryButton }
    : { ...variants[variant], ...{ title, description, primaryButton, secondaryButton } };

  const themes = {
    dark: 'bg-secondary-700 text-white',
    white: 'bg-white text-secondary-900 border-t border-secondary-200',
    secondary: 'bg-secondary-50 text-secondary-900'
  };

  return (
    <section className={`section-padding ${themes[theme]} ${className}`}>
      <div className="container-custom max-w-4xl text-center">
        {config.title && (
          <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-secondary-900'}`}>
            {config.title}
          </h2>
        )}

        {config.description && (
          <p className={`text-lg mb-8 ${theme === 'dark' ? 'text-white/60' : 'text-secondary-600'}`}>
            {config.description}
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {config.primaryButton && (
            <a
              href={config.primaryButton.href}
              className={`btn-primary inline-flex items-center ${
                theme === 'dark'
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-primary-600 text-white hover:bg-primary-700'
              }`}
            >
              {config.primaryButton.text}
              {config.primaryButton.icon}
            </a>
          )}

          {config.secondaryButton && (
            <a
              href={config.secondaryButton.href}
              className={`btn-outline inline-flex items-center ${
                theme === 'dark'
                  ? 'border-white/30 text-white hover:bg-white hover:text-secondary-900'
                  : 'border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
              }`}
            >
              {config.secondaryButton.icon}
              {config.secondaryButton.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;

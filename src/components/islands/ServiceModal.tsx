import { useEffect, useCallback, type ReactNode } from 'react';
import { X, CheckCircle, Phone, Mail } from 'lucide-react';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  icon: ReactNode;
  description: string;
  benefits: string[];
  details: string[];
  coverage?: string[];
  iconColor?: string;
}

export default function ServiceModal({
  isOpen,
  onClose,
  title,
  icon,
  description,
  benefits,
  details,
  coverage,
  iconColor = '#FE0000',
}: ServiceModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-secondary-200 px-6 py-5 flex items-center justify-between rounded-t-2xl z-10">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${iconColor}15`, color: iconColor }}
            >
              {icon}
            </div>
            <h2 id="service-modal-title" className="text-xl font-bold text-secondary-900 font-heading">
              {title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-secondary-100 transition-colors text-secondary-500 hover:text-secondary-800"
            aria-label="Chiudi modale"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6 space-y-8">
          {/* Description */}
          <p className="text-secondary-600 text-lg leading-relaxed">{description}</p>

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-bold text-secondary-900 mb-4 font-heading">Vantaggi</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <CheckCircle
                    className="w-5 h-5 mt-0.5 shrink-0"
                    style={{ color: iconColor }}
                  />
                  <span className="text-secondary-700 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Details */}
          <div>
            <h3 className="text-lg font-bold text-secondary-900 mb-4 font-heading">Come funziona</h3>
            <div className="space-y-4">
              {details.map((detail, index) => (
                <div key={index} className="flex gap-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold text-white"
                    style={{ backgroundColor: iconColor }}
                  >
                    {index + 1}
                  </div>
                  <p className="text-secondary-600 text-sm leading-relaxed pt-1">{detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Coverage */}
          {coverage && coverage.length > 0 && (
            <div>
              <h3 className="text-lg font-bold text-secondary-900 mb-4 font-heading">Coperture</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {coverage.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 bg-secondary-50 rounded-lg px-4 py-2.5"
                  >
                    <div
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ backgroundColor: iconColor }}
                    />
                    <span className="text-secondary-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="bg-secondary-50 rounded-xl p-6 text-center">
            <p className="text-secondary-700 mb-4">
              Vuoi saperne di più? Contattaci per una consulenza gratuita.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:+390266984847"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Chiama ora
              </a>
              <a
                href="/contatti"
                className="btn-secondary inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Scrivici
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

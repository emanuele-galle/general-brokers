import { ReactNode } from 'react';
import { FaTimes, FaCheckCircle, FaPhone, FaEnvelope } from 'react-icons/fa';

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
  iconColor = 'text-primary-600'
}: ServiceModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-auto transform transition-all">
          {/* Header */}
          <div className="gradient-red text-white px-8 py-6 rounded-t-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-accent-500 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center text-2xl">
                  {icon}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-heading font-bold">{title}</h2>
                  <p className="text-primary-50 mt-1">{description}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors ml-4"
                aria-label="Chiudi"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-6 max-h-[70vh] overflow-y-auto">
            {/* Benefits Section */}
            {benefits && benefits.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold text-secondary-900 mb-4 flex items-center gap-2">
                  <FaCheckCircle className={iconColor} />
                  Vantaggi Principali
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <FaCheckCircle className="text-primary-600 mt-1 flex-shrink-0" />
                      <span className="text-secondary-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Details Section */}
            {details && details.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold text-secondary-900 mb-4">
                  Come Funziona
                </h3>
                <div className="space-y-3">
                  {details.map((detail, index) => (
                    <div key={index} className="bg-secondary-50 rounded-lg p-4 border-l-4 border-primary-600">
                      <p className="text-secondary-700">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Coverage Section */}
            {coverage && coverage.length > 0 && (
              <div className="mb-6">
                <h3 className="text-xl font-heading font-bold text-secondary-900 mb-4">
                  Cosa Copriamo
                </h3>
                <ul className="grid md:grid-cols-2 gap-2">
                  {coverage.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-secondary-700">
                      <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border-2 border-primary-200">
              <h3 className="text-lg font-bold text-secondary-900 mb-3">
                Interessato a questo servizio?
              </h3>
              <p className="text-secondary-700 mb-4">
                Contattaci per una consulenza gratuita e personalizzata. I nostri esperti sono pronti ad aiutarti.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/contatti"
                  className="btn-primary inline-flex items-center justify-center gap-2"
                  onClick={onClose}
                >
                  <FaEnvelope />
                  Richiedi Consulenza
                </a>
                <a
                  href="tel:026698.4847"
                  className="btn-secondary inline-flex items-center justify-center gap-2"
                >
                  <FaPhone />
                  Chiamaci Ora
                </a>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-secondary-50 rounded-b-2xl border-t border-secondary-200">
            <p className="text-sm text-secondary-600 text-center">
              General Brokers Srl - Iscrizione RUI: B000072481 - Vigilanza IVASS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

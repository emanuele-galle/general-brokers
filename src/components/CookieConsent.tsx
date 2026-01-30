import { useState, useEffect } from 'react';
import { FaCookie, FaTimes } from 'react-icons/fa';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verifica se l'utente ha già accettato i cookie
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Mostra il banner dopo 1 secondo per non disturbare subito
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setShowBanner(false);

    // TODO: Inizializza servizi analytics/tracking
    // if (typeof window.gtag !== 'undefined') {
    //   window.gtag('consent', 'update', {
    //     'analytics_storage': 'granted'
    //   });
    // }
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem('cookieConsent', 'necessary');
    setShowBanner(false);
  };

  const handleClose = () => {
    // Se chiude senza scegliere, consideriamo solo necessari
    handleAcceptNecessary();
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 animate-fade-in" />

      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 animate-slide-up">
        <div className="bg-white border-t-4 border-primary-600 shadow-2xl">
          <div className="container-custom py-6">
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                <FaCookie className="text-2xl text-primary-600" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold mb-2 text-secondary-900">
                  Utilizzo dei Cookie
                </h3>
                <p className="text-sm text-secondary-700 mb-4">
                  Utilizziamo cookie tecnici necessari per il funzionamento del sito e, con il tuo consenso,
                  cookie analitici per migliorare la tua esperienza di navigazione.
                  Puoi scegliere quali cookie accettare.
                </p>
                <p className="text-xs text-secondary-600">
                  Per maggiori informazioni consulta la nostra{' '}
                  <a href="/cookie-policy" className="text-primary-600 hover:text-primary-700 underline font-semibold">
                    Cookie Policy
                  </a>
                  {' '}e{' '}
                  <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700 underline font-semibold">
                    Privacy Policy
                  </a>
                  .
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  <button
                    onClick={handleAcceptAll}
                    className="btn-primary text-sm py-2 px-6"
                  >
                    Accetta Tutti i Cookie
                  </button>
                  <button
                    onClick={handleAcceptNecessary}
                    className="btn-secondary text-sm py-2 px-6"
                  >
                    Solo Cookie Necessari
                  </button>
                  <a
                    href="/cookie-policy"
                    className="text-sm text-secondary-700 hover:text-primary-600 font-semibold py-2 px-4 text-center"
                  >
                    Personalizza
                  </a>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={handleClose}
                className="flex-shrink-0 text-secondary-400 hover:text-secondary-700 transition-colors p-2"
                aria-label="Chiudi"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default CookieConsent;

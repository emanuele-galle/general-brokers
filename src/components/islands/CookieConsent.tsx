import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

const STORAGE_KEY = 'gb-cookie-consent';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept(level: 'all' | 'necessary') {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ level, date: new Date().toISOString() }),
    );
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      <style>{`
        @keyframes cookieSlideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .cookie-banner-enter {
          animation: cookieSlideUp 0.4s ease-out forwards;
        }
      `}</style>

      <div
        className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 cookie-banner-enter"
        role="dialog"
        aria-label="Consenso cookie"
      >
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-secondary-200 p-5 sm:p-6">
          {/* Close button */}
          <button
            onClick={() => accept('necessary')}
            className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-secondary-100 transition-colors text-secondary-400 hover:text-secondary-700"
            aria-label="Chiudi banner cookie"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
              <Cookie className="w-6 h-6 text-primary-600" />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-secondary-900 mb-1">
                Utilizziamo i cookie
              </h3>
              <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                Questo sito utilizza cookie tecnici necessari al funzionamento e cookie
                analitici per migliorare la tua esperienza. Puoi accettare tutti i
                cookie o solo quelli necessari.{' '}
                <a
                  href="/cookie-policy"
                  className="text-primary-600 hover:text-primary-700 underline underline-offset-2 font-medium"
                >
                  Leggi la Cookie Policy
                </a>
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  onClick={() => accept('all')}
                  className="btn-primary text-sm py-2.5 px-6"
                >
                  Accetta tutti
                </button>
                <button
                  onClick={() => accept('necessary')}
                  className="btn-secondary text-sm py-2.5 px-6"
                >
                  Solo necessari
                </button>
                <a
                  href="/cookie-policy"
                  className="text-sm text-secondary-500 hover:text-secondary-700 font-medium text-center py-2.5 px-4 transition-colors"
                >
                  Personalizza
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

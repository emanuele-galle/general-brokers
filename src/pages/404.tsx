import Layout from '@/components/Layout';
import Link from 'next/link';
import { FaHome, FaPhone, FaArrowLeft } from 'react-icons/fa';

export default function Custom404() {
  return (
    <Layout
      title="Pagina Non Trovata - General Brokers"
      description="La pagina che stai cercando non esiste o è stata spostata."
    >
      <section className="section-padding bg-gradient-to-br from-secondary-50 to-white min-h-[70vh] flex items-center">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-9xl font-bold text-primary-600 mb-2 opacity-20">
                404
              </h1>
              <div className="text-6xl font-heading font-bold text-secondary-900 -mt-20">
                Oops!
              </div>
            </div>

            {/* Message */}
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-secondary-900">
              Pagina Non Trovata
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              La pagina che stai cercando non esiste o potrebbe essere stata spostata.
              Non preoccuparti, possiamo aiutarti a trovare quello che cerchi.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                href="/"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <FaHome />
                Torna alla Home
              </Link>
              <Link
                href="/contatti"
                className="btn-secondary inline-flex items-center justify-center gap-2"
              >
                <FaPhone />
                Contattaci
              </Link>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h3 className="font-bold text-lg mb-4 text-secondary-900">
                Link Utili
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <Link
                  href="/chi-siamo"
                  className="flex items-center gap-2 text-secondary-700 hover:text-primary-600 transition-colors"
                >
                  <FaArrowLeft className="text-sm text-primary-600" />
                  Chi Siamo
                </Link>
                <Link
                  href="/servizi"
                  className="flex items-center gap-2 text-secondary-700 hover:text-primary-600 transition-colors"
                >
                  <FaArrowLeft className="text-sm text-primary-600" />
                  Servizi
                </Link>
                <Link
                  href="/contatti"
                  className="flex items-center gap-2 text-secondary-700 hover:text-primary-600 transition-colors"
                >
                  <FaArrowLeft className="text-sm text-primary-600" />
                  Contatti
                </Link>
                <Link
                  href="/privacy-policy"
                  className="flex items-center gap-2 text-secondary-700 hover:text-primary-600 transition-colors"
                >
                  <FaArrowLeft className="text-sm text-primary-600" />
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* Support */}
            <div className="mt-8 text-sm text-secondary-600">
              <p>
                Hai bisogno di aiuto?{' '}
                <a
                  href="tel:026698.4847"
                  className="text-primary-600 hover:text-primary-700 font-semibold"
                >
                  Chiamaci al 02 6698.4847
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

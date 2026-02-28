import { ReactNode, useState } from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Sidebar from './Sidebar';
import CookieConsent from './CookieConsent';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout = ({
  children,
  title = 'General Brokers Srl - Broker Assicurativo Milano dal 1977',
  description = 'General Brokers è un broker assicurativo indipendente a Milano. Specializzati in gestione polizze, sinistri e consulenza personalizzata. Esperienza dal 1977.',
  keywords = 'broker assicurativo Milano, gestione sinistri, polizze personalizzate, intermediario assicurativo indipendente, assicurazioni aziende, General Brokers'
}: LayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="General Brokers Srl" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:locale" content="it_IT" />

        {/* Schema.org markup for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "InsuranceAgency",
              "name": "General Brokers Srl",
              "description": "Broker assicurativo indipendente specializzato in gestione polizze e sinistri",
              "foundingDate": "1977",
              "url": "https://www.generalbrokers.it",
              "telephone": "+39026698.4847",
              "email": "info@generalbrokers.it",
              "faxNumber": "+39026707.2163",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via Tonale, 20",
                "addressLocality": "Milano",
                "postalCode": "20125",
                "addressCountry": "IT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "45.4773",
                "longitude": "9.2060"
              },
              "priceRange": "$$",
              "areaServed": {
                "@type": "Country",
                "name": "Italy"
              }
            })
          }}
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Mobile menu button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-40 bg-primary-700 text-white p-3 rounded-lg shadow-lg hover:bg-primary-800 transition-colors"
          aria-label="Apri menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Main content area */}
        <div className="flex flex-col flex-1 lg:ml-72">
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </div>
    </>
  );
};

export default Layout;

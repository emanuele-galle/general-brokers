import { FaShieldAlt, FaHandshake, FaChartLine, FaCheckCircle } from 'react-icons/fa';

const CioCheServe = () => {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Sfondo con pattern geometrico */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50"></div>

      {/* Pattern decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-600 text-white px-8 py-3 rounded-full font-bold text-lg mb-6 shadow-lg">
            Il Nostro Metodo
          </div>
          <h2 className="section-title text-4xl md:text-5xl mb-6">
            Perché Scegliere{' '}
            <span className="text-gradient">General Brokers</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto text-lg">
            Un approccio professionale che mette al centro <strong>le tue esigenze</strong> e la <strong>trasparenza</strong>
          </p>
        </div>

        {/* Three Pillars con design moderno */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Pillar 1 - Indipendenza */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-primary-600">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-transparent rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <FaShieldAlt className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary-900">
                100% Indipendenti
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                Non rappresentiamo compagnie assicurative. La nostra fedeltà è solo verso di te, garantendo consulenza obiettiva e imparziale.
              </p>
            </div>
          </div>

          {/* Pillar 2 - Esperienza */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-accent-600">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent-100 to-transparent rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-accent-600 to-accent-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <FaHandshake className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary-900">
                Dal 1977
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                Oltre 47 anni di esperienza al tuo servizio. Una storia di fiducia, professionalità e risultati concreti per i nostri clienti.
              </p>
            </div>
          </div>

          {/* Pillar 3 - Servizio */}
          <div className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-secondary-600">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-secondary-100 to-transparent rounded-bl-full opacity-50"></div>
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-secondary-600 to-secondary-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <FaChartLine className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-secondary-900">
                Assistenza Continua
              </h3>
              <p className="text-secondary-700 leading-relaxed">
                Ti seguiamo in ogni fase: dalla scelta della polizza alla gestione dei sinistri, con un servizio sempre attento e personalizzato.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Box con stile distintivo */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-3xl p-10 md:p-12 shadow-2xl text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              I Vantaggi di Lavorare con Noi
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Analisi gratuita delle tue coperture attuali',
                'Confronto tra le migliori offerte del mercato',
                'Gestione completa della documentazione',
                'Assistenza rapida in caso di sinistro',
                'Consulenza personalizzata senza costi nascosti',
                'Monitoraggio costante delle tue polizze'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                    <FaCheckCircle className="text-accent-300 text-xl" />
                  </div>
                  <span className="text-lg text-white/95">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CioCheServe;

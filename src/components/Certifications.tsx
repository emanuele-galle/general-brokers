import { FaAward, FaShieldAlt, FaHandshake, FaBalanceScale, FaCheckCircle } from 'react-icons/fa';

const Certifications = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-6 py-3 rounded-full font-bold text-lg mb-6">
            Certificazioni e Garanzie
          </div>
          <h2 className="section-title">
            Professionalità Certificata
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto mt-4">
            Le nostre certificazioni garantiscono i più alti standard di professionalità,
            indipendenza e trasparenza nel settore assicurativo
          </p>
        </div>

        {/* Certifications Logos */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* AIBA */}
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 border-2 border-primary-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mb-6">
                <FaAward className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-3">AIBA</h3>
              <p className="text-lg font-semibold text-primary-700 mb-4">
                Associazione Italiana Brokers<br />
                di Assicurazioni e Riassicurazioni
              </p>
              <p className="text-secondary-700 text-sm leading-relaxed">
                Membri certificati dell'associazione che rappresenta i professionisti
                dell'intermediazione assicurativa indipendente in Italia
              </p>
            </div>
          </div>

          {/* ACA */}
          <div className="bg-gradient-to-br from-accent-50 to-white rounded-2xl p-8 border-2 border-accent-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-accent-600 rounded-full flex items-center justify-center mb-6">
                <FaShieldAlt className="text-4xl text-white" />
              </div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-3">ACA</h3>
              <p className="text-lg font-semibold text-accent-700 mb-4">
                Associazione Italiana<br />
                Consulenti Assicurativi
              </p>
              <p className="text-secondary-700 text-sm leading-relaxed">
                Parte dell'associazione che promuove l'eccellenza nella consulenza
                assicurativa e la tutela degli interessi dei clienti
              </p>
            </div>
          </div>
        </div>

        {/* Codice Morale AIBA */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-secondary-50 to-white rounded-2xl p-8 md:p-12 border-2 border-secondary-200 shadow-xl">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-secondary-900 mb-4">
                Codice Morale AIBA
              </h3>
              <p className="text-secondary-700 text-lg">
                L'attività del Broker deve basarsi su principi di <strong>professionalità</strong>,{' '}
                <strong>indipendenza</strong> e <strong>trasparenza</strong> nei confronti dei Clienti,
                degli Assicuratori e dei propri Colleghi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Qualità Servizio Clienti */}
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaHandshake className="text-3xl text-primary-600" />
                </div>
                <h4 className="text-xl font-bold text-secondary-900 mb-3">
                  Qualità del Servizio Clienti
                </h4>
                <p className="text-secondary-700 text-sm leading-relaxed">
                  Garantiamo sempre il massimo impegno per soddisfare
                  le esigenze dei nostri clienti con soluzioni su misura
                </p>
              </div>

              {/* Lealtà verso Assicuratori */}
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBalanceScale className="text-3xl text-accent-600" />
                </div>
                <h4 className="text-xl font-bold text-secondary-900 mb-3">
                  Lealtà verso gli Assicuratori
                </h4>
                <p className="text-secondary-700 text-sm leading-relaxed">
                  Manteniamo rapporti corretti e trasparenti con tutte
                  le compagnie assicurative del mercato
                </p>
              </div>

              {/* Etica Colleghi */}
              <div className="text-center">
                <div className="w-16 h-16 bg-secondary-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-3xl text-secondary-700" />
                </div>
                <h4 className="text-xl font-bold text-secondary-900 mb-3">
                  Etica nei riguardi dei Colleghi
                </h4>
                <p className="text-secondary-700 text-sm leading-relaxed">
                  Rispettiamo i più alti standard etici e professionali
                  nella relazione con i colleghi del settore
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RUI Certification */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary-100 to-accent-100 rounded-xl px-8 py-4 shadow-md">
            <FaShieldAlt className="text-3xl text-primary-600" />
            <div className="text-left">
              <p className="text-sm text-secondary-600 font-semibold">Iscritti al Registro RUI</p>
              <p className="text-lg font-bold text-secondary-900">
                N. B000072481 - Sotto vigilanza IVASS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

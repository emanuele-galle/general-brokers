import {
  FaFileContract,
  FaShieldAlt,
  FaCogs,
  FaChartLine,
  FaCheckCircle
} from 'react-icons/fa';

const ServiceCategories = () => {
  const categories = [
    {
      title: 'Gestione Polizze',
      icon: FaFileContract,
      color: 'primary',
      description: 'Analisi completa e gestione professionale delle tue coperture assicurative',
      services: [
        'Check-up assicurativi',
        'Analisi dei costi',
        'Controllo dei rischi',
        'Pianificazione finanziaria',
        'Consulenza real-time'
      ]
    },
    {
      title: 'Gestione Sinistri',
      icon: FaShieldAlt,
      color: 'accent',
      description: 'Assistenza completa in ogni fase del sinistro, dalla denuncia alla liquidazione',
      services: [
        'Consulenza real-time',
        'Istruzione della pratica',
        'Valutazione dei danni',
        'Scelta dei fiduciari',
        'Definizione concordata'
      ]
    },
    {
      title: 'Gestione Specifica',
      icon: FaCogs,
      color: 'secondary',
      description: 'Soluzioni personalizzate per ogni tipo di rischio e necessità',
      services: [
        'Polizze acquisite coi beni',
        'Polizze acquisite coi servizi',
        'Polizze all-risks',
        'Polizze multirischi',
        'Polizze rischi speciali'
      ]
    },
    {
      title: 'Gestione Finanziaria',
      icon: FaChartLine,
      color: 'primary',
      description: 'Pianificazione finanziaria e soluzioni per proteggere il tuo patrimonio',
      services: [
        'Rendite assicurative differite',
        'Rendite assicurative immediate',
        'Costituzione di capitale a favore di terzi',
        'Costituzione di capitale a favore di eredi',
        'Coperture a tutela degli oneri successori'
      ]
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-secondary-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary-100 text-primary-700 px-6 py-3 rounded-full font-bold text-lg mb-6">
            Le Nostre Competenze
          </div>
          <h2 className="section-title">
            Quattro Aree di Eccellenza
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto mt-4">
            Servizi completi e specializzati per ogni esigenza assicurativa e finanziaria
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const colorClasses = {
              primary: {
                bg: 'bg-primary-100',
                text: 'text-primary-600',
                border: 'border-primary-200',
                gradient: 'from-primary-600 to-primary-700'
              },
              accent: {
                bg: 'bg-accent-100',
                text: 'text-accent-600',
                border: 'border-accent-200',
                gradient: 'from-accent-600 to-accent-700'
              },
              secondary: {
                bg: 'bg-secondary-200',
                text: 'text-secondary-700',
                border: 'border-secondary-300',
                gradient: 'from-secondary-600 to-secondary-700'
              }
            };
            const colors = colorClasses[category.color as keyof typeof colorClasses];

            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${colors.border} group`}
              >
                {/* Header with gradient */}
                <div className={`bg-gradient-to-r ${colors.gradient} p-6 text-white`}>
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      <Icon className="text-3xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  <p className="text-white/90 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Services List */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className={`${colors.text} text-lg flex-shrink-0 mt-0.5`} />
                        <span className="text-secondary-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom accent */}
                <div className={`h-2 bg-gradient-to-r ${colors.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 shadow-md">
            <h3 className="text-2xl font-bold text-secondary-900">
              Hai bisogno di maggiori informazioni?
            </h3>
            <p className="text-secondary-600 max-w-2xl">
              I nostri esperti sono a tua disposizione per illustrarti nel dettaglio
              come possiamo aiutarti in ciascuna di queste aree
            </p>
            <a
              href="/contatti"
              className="btn-primary mt-2"
            >
              Richiedi Consulenza Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;

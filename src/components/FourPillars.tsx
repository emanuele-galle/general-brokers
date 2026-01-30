import Link from 'next/link';
import { FaBuilding, FaUsers, FaQuestionCircle, FaMapMarkerAlt } from 'react-icons/fa';

const FourPillars = () => {
  const pillars = [
    {
      title: 'La Società',
      description: 'Scopri la nostra storia dal 1977 e i valori che ci guidano',
      icon: FaBuilding,
      href: '/chi-siamo#societa',
      color: 'from-primary-600 to-primary-700',
      iconBg: 'bg-primary-100',
      iconColor: 'text-primary-600'
    },
    {
      title: 'Chi è il Broker',
      description: 'Comprendi il ruolo e i vantaggi di un broker indipendente',
      icon: FaQuestionCircle,
      href: '/chi-siamo#broker',
      color: 'from-secondary-600 to-secondary-700',
      iconBg: 'bg-secondary-100',
      iconColor: 'text-secondary-600'
    },
    {
      title: 'Dove Siamo',
      description: 'Visita la nostra sede a Milano in Via Tonale, 20',
      icon: FaMapMarkerAlt,
      href: '/contatti#mappa',
      color: 'from-primary-700 to-accent-700',
      iconBg: 'bg-primary-100',
      iconColor: 'text-primary-700'
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Scopri{' '}
            <span className="text-gradient">General Brokers</span>
          </h2>
          <p className="section-subtitle mt-4">
            La nostra storia, il nostro ruolo, la nostra sede
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Link
                key={index}
                href={pillar.href}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
              >
                {/* Gradient Top Border */}
                <div className={`h-2 bg-gradient-to-r ${pillar.color}`}></div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  {/* Icon */}
                  <div className={`w-16 h-16 ${pillar.iconBg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`text-3xl ${pillar.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                    {pillar.description}
                  </p>

                  {/* Arrow Link */}
                  <div className="flex items-center gap-2 text-primary-600 font-semibold text-sm group-hover:gap-3 transition-all">
                    <span>Scopri di più</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>

                {/* Hover Effect Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FourPillars;

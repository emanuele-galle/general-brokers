import { useState } from 'react';
import {
  FileText,
  Shield,
  Settings,
  TrendingUp,
  Building2,
  ShieldCheck,
  Handshake,
  ArrowRight,
} from 'lucide-react';
import { servicesData } from '@/data/services';
import ServiceModal from './ServiceModal';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  'lucide:file-text': FileText,
  'lucide:shield': Shield,
  'lucide:settings': Settings,
  'lucide:trending-up': TrendingUp,
  'lucide:building-2': Building2,
  'lucide:shield-check': ShieldCheck,
  'lucide:handshake': Handshake,
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const activeService = servicesData.find((s) => s.id === selectedService);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service) => {
          const IconComponent = ICON_MAP[service.icon] || FileText;
          return (
            <div
              key={service.id}
              className="card group cursor-pointer hover:border-primary-200 transition-all"
              onClick={() => setSelectedService(service.id)}
            >
              <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-100 transition-colors">
                <IconComponent className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-900 mb-2 font-heading">
                {service.title}
              </h3>
              <p className="text-secondary-600 text-sm leading-relaxed mb-4">
                {service.shortDescription}
              </p>
              <button
                className="text-primary-600 text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedService(service.id);
                }}
              >
                Scopri di più
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>

      {activeService && (
        <ServiceModal
          isOpen={true}
          onClose={() => setSelectedService(null)}
          title={activeService.title}
          icon={
            (() => {
              const IC = ICON_MAP[activeService.icon] || FileText;
              return <IC className="w-5 h-5" />;
            })()
          }
          description={activeService.description}
          benefits={activeService.benefits}
          details={activeService.details}
          coverage={activeService.coverage}
        />
      )}
    </>
  );
}

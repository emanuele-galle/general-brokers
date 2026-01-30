import { ReactNode } from 'react';
import { yearsOfExperience, foundingYear } from '@/data/companyStats';
import { legalInfo } from '@/data/contactInfo';

interface Stat {
  value: string;
  label: string;
  description?: string;
  icon?: ReactNode;
}

interface StatsGridProps {
  stats?: Stat[];
  variant?: 'default' | 'foundation' | 'custom';
  columns?: 2 | 3 | 4;
  theme?: 'primary' | 'white' | 'secondary';
  showBorder?: boolean;
  className?: string;
}

/**
 * StatsGrid - Componente riutilizzabile per mostrare statistiche
 * Consolida le diverse visualizzazioni di stats nel sito
 */
const StatsGrid = ({
  stats,
  variant = 'default',
  columns = 3,
  theme = 'primary',
  showBorder = true,
  className = ''
}: StatsGridProps) => {

  // Configurazioni predefinite
  const variants: Record<string, Stat[]> = {
    default: [
      {
        value: `${yearsOfExperience}+`,
        label: 'Anni di Esperienza',
        description: 'Al servizio di aziende e privati'
      },
      {
        value: '500+',
        label: 'Clienti Attivi',
        description: 'Aziende e famiglie che si fidano di noi'
      },
      {
        value: '98%',
        label: 'Soddisfazione',
        description: 'Clienti soddisfatti del nostro servizio'
      }
    ],
    foundation: [
      {
        value: foundingYear.toString(),
        label: 'Fondazione',
        description: 'Nasce General Brokers Srl a Milano'
      },
      {
        value: `${yearsOfExperience}+`,
        label: 'Anni di Esperienza',
        description: 'Al servizio di aziende e privati'
      },
      {
        value: 'RUI',
        label: 'Certificazione',
        description: `Iscrizione ${legalInfo.rui.number} sotto vigilanza IVASS`
      }
    ]
  };

  // Seleziona le statistiche da mostrare
  const displayStats = variant === 'custom' ? (stats || []) : variants[variant];

  // Temi di colore
  const themes = {
    primary: {
      bg: 'bg-primary-50',
      border: 'border-primary-200',
      valueColor: 'text-primary-700',
      labelColor: 'text-secondary-900',
      descColor: 'text-secondary-700'
    },
    white: {
      bg: 'bg-white',
      border: 'border-secondary-200',
      valueColor: 'text-primary-600',
      labelColor: 'text-secondary-900',
      descColor: 'text-secondary-600'
    },
    secondary: {
      bg: 'bg-secondary-50',
      border: 'border-secondary-300',
      valueColor: 'text-primary-600',
      labelColor: 'text-secondary-900',
      descColor: 'text-secondary-600'
    }
  };

  const currentTheme = themes[theme];

  // Grid columns class
  const gridCols = {
    2: 'grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-6 lg:gap-8 ${className}`}>
      {displayStats.map((stat, index) => (
        <div
          key={index}
          className={`
            ${currentTheme.bg} rounded-2xl p-6 lg:p-8
            ${showBorder ? `border-2 ${currentTheme.border}` : 'shadow-lg'}
            hover:shadow-xl transition-shadow duration-300
          `}
        >
          {/* Icon (se presente) */}
          {stat.icon && (
            <div className="mb-4">
              {stat.icon}
            </div>
          )}

          {/* Value */}
          <div className={`text-4xl md:text-5xl font-bold ${currentTheme.valueColor} mb-2`}>
            {stat.value}
          </div>

          {/* Label */}
          <div className={`font-bold text-lg mb-1 ${currentTheme.labelColor}`}>
            {stat.label}
          </div>

          {/* Description (se presente) */}
          {stat.description && (
            <p className={`text-sm ${currentTheme.descColor}`}>
              {stat.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;

/**
 * ESEMPI DI UTILIZZO:
 *
 * // Stats default (esperienza, clienti, soddisfazione)
 * <StatsGrid />
 *
 * // Stats fondazione
 * <StatsGrid variant="foundation" />
 *
 * // Stats personalizzate
 * <StatsGrid
 *   variant="custom"
 *   columns={4}
 *   theme="white"
 *   stats={[
 *     { value: '1000+', label: 'Polizze Attive', description: 'Gestite ogni anno' },
 *     { value: '24/7', label: 'Assistenza', description: 'Sempre disponibili' },
 *     { value: '15+', label: 'Compagnie', description: 'Partner assicurativi' },
 *     { value: '100%', label: 'Indipendenza', description: 'Lavoriamo solo per te' }
 *   ]}
 * />
 *
 * // Stats con icone
 * <StatsGrid
 *   variant="custom"
 *   theme="secondary"
 *   showBorder={false}
 *   stats={[
 *     {
 *       value: '47+',
 *       label: 'Anni',
 *       icon: <FaAward className="text-3xl text-primary-600" />
 *     }
 *   ]}
 * />
 */

import Layout from '@/components/Layout';
import {
  FaFileDownload,
  FaFilePdf,
  FaFileWord,
  FaFileExcel,
  FaSearch,
  FaCar,
  FaHome,
  FaBriefcase,
  FaUserShield,
  FaExclamationTriangle,
  FaFileContract
} from 'react-icons/fa';
import { useState } from 'react';

interface Document {
  id: string;
  title: string;
  description: string;
  category: string;
  format: 'PDF' | 'WORD' | 'EXCEL';
  size: string;
  downloadUrl: string;
  lastUpdate: string;
}

export default function Modulistica() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tutti i Documenti', icon: FaFileDownload },
    { id: 'mandati', name: 'Mandati', icon: FaFileContract },
    { id: 'sinistri', name: 'Sinistri', icon: FaExclamationTriangle },
    { id: 'auto', name: 'Auto e Moto', icon: FaCar },
    { id: 'aziende', name: 'Aziende', icon: FaBriefcase },
    { id: 'privati', name: 'Privati', icon: FaUserShield }
  ];

  const documents: Document[] = [
    // Sinistri e Denunce
    {
      id: '1',
      title: 'Modulo Blu - CAI',
      description: 'Modulo blu per constatazione amichevole incidente stradale (Constatazione Amichevole Incidente)',
      category: 'sinistri',
      format: 'PDF',
      size: '53 KB',
      downloadUrl: '/documents/modulistica/Modulo Blu.pdf',
      lastUpdate: '2024-11-01'
    },
    {
      id: '2',
      title: 'Richiesta di Risarcimento',
      description: 'Modulo per richiedere il risarcimento danni',
      category: 'sinistri',
      format: 'PDF',
      size: '23 KB',
      downloadUrl: '/documents/modulistica/Richiesta di risarcimento.pdf',
      lastUpdate: '2024-11-01'
    },
    {
      id: '3',
      title: 'Allegati - Ricevuta di Consegna',
      description: 'Ricevuta di consegna per allegati e documenti sinistro',
      category: 'sinistri',
      format: 'PDF',
      size: '399 KB',
      downloadUrl: '/documents/modulistica/Allegati - ricevuta di consegna.pdf',
      lastUpdate: '2024-11-01'
    },

    // Mandati - Privati
    {
      id: '4',
      title: 'Mandato - Privato',
      description: 'Modulo di mandato per clienti privati - conferimento incarico a General Brokers',
      category: 'privati',
      format: 'PDF',
      size: '190 KB',
      downloadUrl: '/documents/modulistica/Mandato - privato.pdf',
      lastUpdate: '2024-11-01'
    },
    {
      id: '5',
      title: 'Risposta al Mandato - Privato',
      description: 'Modulo di risposta e accettazione mandato per clienti privati',
      category: 'privati',
      format: 'PDF',
      size: '240 KB',
      downloadUrl: '/documents/modulistica/Risposta al mandato - privato.pdf',
      lastUpdate: '2024-11-01'
    },

    // Mandati - Società
    {
      id: '6',
      title: 'Mandato - Società',
      description: 'Modulo di mandato per società e aziende - conferimento incarico a General Brokers',
      category: 'aziende',
      format: 'PDF',
      size: '189 KB',
      downloadUrl: '/documents/modulistica/Mandato - societa.pdf',
      lastUpdate: '2024-11-01'
    },
    {
      id: '7',
      title: 'Risposta al Mandato - Società',
      description: 'Modulo di risposta e accettazione mandato per società e aziende',
      category: 'aziende',
      format: 'PDF',
      size: '240 KB',
      downloadUrl: '/documents/modulistica/Risposta al mandato - societa.pdf',
      lastUpdate: '2024-11-01'
    },

    // Elenchi e Allegati
    {
      id: '8',
      title: 'Elenco delle Imprese',
      description: 'Elenco delle compagnie assicurative convenzionate',
      category: 'aziende',
      format: 'PDF',
      size: '256 KB',
      downloadUrl: '/documents/modulistica/Elenco delle Imprese.pdf',
      lastUpdate: '2024-11-01'
    },
    {
      id: '9',
      title: 'Allegato 3',
      description: 'Documento allegato al mandato - informazioni complementari',
      category: 'mandati',
      format: 'PDF',
      size: '431 KB',
      downloadUrl: '/documents/modulistica/Allegato 3.pdf',
      lastUpdate: '2024-11-01'
    },
    {
      id: '10',
      title: 'Allegato 4',
      description: 'Documento allegato al mandato - informazioni integrative',
      category: 'mandati',
      format: 'PDF',
      size: '507 KB',
      downloadUrl: '/documents/modulistica/Allegato 4.pdf',
      lastUpdate: '2024-11-01'
    },
    {
      id: '11',
      title: 'Allegato 4 bis',
      description: 'Documento allegato al mandato - integrazione Allegato 4',
      category: 'mandati',
      format: 'PDF',
      size: '538 KB',
      downloadUrl: '/documents/modulistica/Allegato 4 bis.pdf',
      lastUpdate: '2024-11-01'
    },
    {
      id: '12',
      title: 'Allegato 4 ter',
      description: 'Documento allegato al mandato - ulteriore integrazione Allegato 4',
      category: 'mandati',
      format: 'PDF',
      size: '270 KB',
      downloadUrl: '/documents/modulistica/Allegato 4 ter.pdf',
      lastUpdate: '2024-11-01'
    }
  ];

  const getFormatIcon = (format: Document['format']) => {
    switch (format) {
      case 'PDF':
        return FaFilePdf;
      case 'WORD':
        return FaFileWord;
      case 'EXCEL':
        return FaFileExcel;
    }
  };

  const getFormatColor = (format: Document['format']) => {
    switch (format) {
      case 'PDF':
        return 'text-red-600 bg-red-100';
      case 'WORD':
        return 'text-blue-600 bg-blue-100';
      case 'EXCEL':
        return 'text-green-600 bg-green-100';
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout
      title="Modulistica e Documenti - General Brokers"
      description="Scarica moduli, form e documenti per preventivi, denunce sinistri e gestione polizze assicurative."
    >
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-primary-700 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <FaFileDownload className="text-4xl text-accent-400" />
              <h1 className="text-4xl md:text-5xl font-bold">Modulistica</h1>
            </div>
            <p className="text-xl text-gray-100">
              Scarica i moduli e i documenti necessari per mandati, denunce e gestione polizze
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white border-b border-secondary-200 py-8 sticky top-20 z-30 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" />
                <input
                  type="text"
                  placeholder="Cerca documenti..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all
                      ${selectedCategory === category.id
                        ? 'bg-primary-600 text-white shadow-md'
                        : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                      }
                    `}
                  >
                    <Icon className="text-sm" />
                    <span className="text-sm hidden sm:inline">{category.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-secondary-600">
            {filteredDocuments.length} documento{filteredDocuments.length !== 1 ? 'i' : ''} trovato{filteredDocuments.length !== 1 ? 'i' : ''}
          </div>
        </div>
      </section>

      {/* Documents Grid */}
      <section className="section-padding bg-gradient-to-b from-white to-secondary-50">
        <div className="container-custom">
          {filteredDocuments.length === 0 ? (
            <div className="text-center py-16">
              <FaFileDownload className="text-6xl text-secondary-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                Nessun documento trovato
              </h3>
              <p className="text-secondary-600">
                Prova a modificare i filtri di ricerca o la categoria selezionata
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDocuments.map((doc) => {
                const FormatIcon = getFormatIcon(doc.format);
                const formatColor = getFormatColor(doc.format);

                return (
                  <div
                    key={doc.id}
                    className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                  >
                    {/* Format Badge */}
                    <div className="flex items-center justify-between p-4 bg-secondary-50 border-b border-secondary-200">
                      <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg ${formatColor}`}>
                        <FormatIcon className="text-lg" />
                        <span className="text-sm font-bold">{doc.format}</span>
                      </div>
                      <span className="text-xs text-secondary-500">{doc.size}</span>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {doc.title}
                      </h3>
                      <p className="text-sm text-secondary-600 mb-4 line-clamp-2">
                        {doc.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-xs text-secondary-500 mb-4">
                        <span>Aggiornato: {new Date(doc.lastUpdate).toLocaleDateString('it-IT')}</span>
                      </div>

                      {/* Download Button */}
                      <a
                        href={doc.downloadUrl}
                        download
                        className="btn-primary w-full flex items-center justify-center gap-2 group-hover:shadow-xl"
                      >
                        <FaFileDownload />
                        Scarica
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="section-padding gradient-red text-white">
        <div className="container-custom max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Non Trovi il Documento che Cerchi?
          </h2>
          <p className="text-xl text-primary-50 mb-8">
            Contattaci e ti invieremo il modulo specifico di cui hai bisogno
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contatti" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Contattaci
            </a>
            <a href="tel:026698.4847" className="btn-outline">
              02 6698.4847
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

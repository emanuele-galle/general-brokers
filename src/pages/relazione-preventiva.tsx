import { useState } from 'react';
import Layout from '@/components/Layout';
import {
  FaBuilding,
  FaUser,
  FaBriefcase,
  FaArrowRight,
  FaArrowLeft,
  FaCheck,
  FaShieldAlt,
  FaCar,
  FaHome,
  FaHeartbeat,
  FaUserShield,
  FaUmbrella,
  FaIndustry,
  FaUsers,
  FaFileContract,
  FaPaperPlane,
  FaPhone,
  FaChartLine,
  FaClipboardCheck,
  FaSearch,
  FaSyncAlt,
} from 'react-icons/fa';

// Types
interface FormData {
  tipoCliente: string;
  esigenza: string;
  // Azienda
  settore: string;
  dipendenti: string;
  fatturato: string;
  // Privato
  situazioneFamiliare: string;
  // Common
  coperture: string[];
  noteAggiuntive: string;
  // Contatti
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  azienda: string;
  privacy: boolean;
}

const initialFormData: FormData = {
  tipoCliente: '',
  esigenza: '',
  settore: '',
  dipendenti: '',
  fatturato: '',
  situazioneFamiliare: '',
  coperture: [],
  noteAggiuntive: '',
  nome: '',
  cognome: '',
  email: '',
  telefono: '',
  azienda: '',
  privacy: false,
};

const steps = [
  { id: 1, label: 'Profilo', icon: FaUser },
  { id: 2, label: 'Esigenza', icon: FaSearch },
  { id: 3, label: 'Dettagli', icon: FaClipboardCheck },
  { id: 4, label: 'Contatti', icon: FaPhone },
  { id: 5, label: 'Riepilogo', icon: FaPaperPlane },
];

export default function RelazionePreventiva() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const updateField = (field: keyof FormData, value: string | boolean | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => { const n = { ...prev }; delete n[field]; return n; });
    }
  };

  const toggleCopertura = (cop: string) => {
    setFormData(prev => ({
      ...prev,
      coperture: prev.coperture.includes(cop)
        ? prev.coperture.filter(c => c !== cop)
        : [...prev.coperture, cop],
    }));
  };

  // Validation
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.tipoCliente) newErrors.tipoCliente = 'Seleziona il tipo di profilo';
    }
    if (step === 2) {
      if (!formData.esigenza) newErrors.esigenza = 'Seleziona la tua esigenza';
    }
    if (step === 3) {
      if (formData.tipoCliente === 'azienda') {
        if (!formData.settore) newErrors.settore = 'Indica il settore';
      }
    }
    if (step === 4) {
      if (!formData.nome.trim()) newErrors.nome = 'Inserisci il nome';
      if (!formData.cognome.trim()) newErrors.cognome = 'Inserisci il cognome';
      if (!formData.email.trim()) newErrors.email = 'Inserisci l\'email';
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email non valida';
      if (!formData.telefono.trim()) newErrors.telefono = 'Inserisci il telefono';
      else if (!/^[\d\s\+\-\.]{6,20}$/.test(formData.telefono)) newErrors.telefono = 'Telefono non valido';
      if (!formData.privacy) newErrors.privacy = 'Accetta la privacy policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep) && currentStep < 5) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const buildMessage = (): string => {
    const tipoLabel = formData.tipoCliente === 'azienda' ? 'Azienda' : formData.tipoCliente === 'professionista' ? 'Professionista' : 'Privato';
    const esigenzaLabels: Record<string, string> = {
      'analisi-coperture': 'Analisi coperture attuali',
      'nuovo-preventivo': 'Nuovo preventivo assicurativo',
      'consulenza-rischi': 'Consulenza e analisi rischi',
      'revisione-polizze': 'Revisione polizze esistenti',
    };

    let msg = `--- RICHIESTA RELAZIONE PREVENTIVA ---\n\n`;
    msg += `PROFILO: ${tipoLabel}\n`;
    msg += `ESIGENZA: ${esigenzaLabels[formData.esigenza] || formData.esigenza}\n\n`;

    if (formData.tipoCliente === 'azienda') {
      msg += `DETTAGLI AZIENDA:\n`;
      if (formData.settore) msg += `- Settore: ${formData.settore}\n`;
      if (formData.dipendenti) msg += `- Dipendenti: ${formData.dipendenti}\n`;
      if (formData.fatturato) msg += `- Fatturato: ${formData.fatturato}\n`;
      if (formData.azienda) msg += `- Ragione Sociale: ${formData.azienda}\n`;
    } else {
      if (formData.situazioneFamiliare) msg += `SITUAZIONE: ${formData.situazioneFamiliare}\n`;
    }

    if (formData.coperture.length > 0) {
      msg += `\nCOPERTURE ATTUALI/DI INTERESSE:\n`;
      formData.coperture.forEach(c => { msg += `- ${c}\n`; });
    }

    if (formData.noteAggiuntive) {
      msg += `\nNOTE: ${formData.noteAggiuntive}\n`;
    }

    return msg;
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;
    setSubmitStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: formData.nome.trim(),
          cognome: formData.cognome.trim(),
          email: formData.email.trim(),
          telefono: formData.telefono.trim(),
          tipoRichiesta: 'Relazione Preventiva',
          messaggio: buildMessage(),
          privacy: formData.privacy,
        }),
      });

      if (res.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  // UI Components
  const SelectCard = ({ value, current, onClick, icon: Icon, title, desc }: {
    value: string; current: string; onClick: () => void;
    icon: React.ComponentType<{ className?: string }>; title: string; desc: string;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left p-5 md:p-6 rounded-xl border-2 transition-all duration-200 ${
        current === value
          ? 'border-primary-600 bg-primary-50 shadow-lg ring-2 ring-primary-200'
          : 'border-secondary-200 bg-white hover:border-primary-300 hover:shadow-md'
      }`}
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
          current === value ? 'bg-primary-600 text-white' : 'bg-secondary-100 text-secondary-500'
        }`}>
          <Icon className="text-xl" />
        </div>
        <div>
          <p className={`font-bold text-lg ${current === value ? 'text-primary-700' : 'text-secondary-900'}`}>
            {title}
          </p>
          <p className="text-sm text-secondary-500 mt-1">{desc}</p>
        </div>
        {current === value && (
          <FaCheck className="text-primary-600 ml-auto flex-shrink-0 mt-1" />
        )}
      </div>
    </button>
  );

  const FieldError = ({ error }: { error?: string }) =>
    error ? <p className="text-red-500 text-sm mt-1.5">{error}</p> : null;

  // Steps
  const renderStep1 = () => (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2">Chi Sei?</h2>
      <p className="text-secondary-500 mb-8">Seleziona il profilo che meglio ti rappresenta</p>
      <div className="grid gap-4">
        <SelectCard value="privato" current={formData.tipoCliente} onClick={() => updateField('tipoCliente', 'privato')}
          icon={FaUser} title="Privato" desc="Persona fisica, famiglia, nucleo familiare" />
        <SelectCard value="azienda" current={formData.tipoCliente} onClick={() => updateField('tipoCliente', 'azienda')}
          icon={FaBuilding} title="Azienda" desc="Impresa, societ&agrave;, organizzazione" />
        <SelectCard value="professionista" current={formData.tipoCliente} onClick={() => updateField('tipoCliente', 'professionista')}
          icon={FaBriefcase} title="Professionista" desc="Libero professionista, partita IVA, freelance" />
      </div>
      <FieldError error={errors.tipoCliente} />
    </div>
  );

  const renderStep2 = () => (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2">Di Cosa Hai Bisogno?</h2>
      <p className="text-secondary-500 mb-8">Seleziona il servizio pi&ugrave; adatto alle tue esigenze</p>
      <div className="grid gap-4">
        <SelectCard value="analisi-coperture" current={formData.esigenza} onClick={() => updateField('esigenza', 'analisi-coperture')}
          icon={FaSearch} title="Analisi Coperture Attuali" desc="Verifica e valutazione delle polizze gi&agrave; stipulate" />
        <SelectCard value="nuovo-preventivo" current={formData.esigenza} onClick={() => updateField('esigenza', 'nuovo-preventivo')}
          icon={FaFileContract} title="Nuovo Preventivo" desc="Richiesta di nuove coperture assicurative" />
        <SelectCard value="consulenza-rischi" current={formData.esigenza} onClick={() => updateField('esigenza', 'consulenza-rischi')}
          icon={FaChartLine} title="Consulenza e Analisi Rischi" desc="Valutazione professionale dei rischi specifici" />
        <SelectCard value="revisione-polizze" current={formData.esigenza} onClick={() => updateField('esigenza', 'revisione-polizze')}
          icon={FaSyncAlt} title="Revisione Polizze Esistenti" desc="Ottimizzazione e rinnovo delle coperture in essere" />
      </div>
      <FieldError error={errors.esigenza} />
    </div>
  );

  const copertureOptions = formData.tipoCliente === 'azienda' ? [
    { id: 'RC Generale', icon: FaShieldAlt },
    { id: 'RC Prodotto', icon: FaIndustry },
    { id: 'Incendio / All Risks', icon: FaHome },
    { id: 'Infortuni Dipendenti', icon: FaUsers },
    { id: 'RC Professionale', icon: FaBriefcase },
    { id: 'Trasporti / Merci', icon: FaCar },
    { id: 'D&O / Tutela Legale', icon: FaUserShield },
    { id: 'Cyber Risk', icon: FaShieldAlt },
  ] : [
    { id: 'Auto / Moto', icon: FaCar },
    { id: 'Casa / Abitazione', icon: FaHome },
    { id: 'Vita / Previdenza', icon: FaHeartbeat },
    { id: 'Salute / Infortuni', icon: FaHeartbeat },
    { id: 'RC Capofamiglia', icon: FaUmbrella },
    { id: 'RC Professionale', icon: FaBriefcase },
    { id: 'Viaggi', icon: FaUserShield },
    { id: 'Animali Domestici', icon: FaShieldAlt },
  ];

  const renderStep3 = () => (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2">Dettagli</h2>
      <p className="text-secondary-500 mb-8">Aiutaci a capire meglio la tua situazione</p>

      {formData.tipoCliente === 'azienda' ? (
        <div className="space-y-5 mb-8">
          <div>
            <label className="block text-sm font-semibold text-secondary-700 mb-2">Settore di attivit&agrave; *</label>
            <select value={formData.settore} onChange={e => updateField('settore', e.target.value)}
              className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-white text-secondary-900">
              <option value="">Seleziona settore...</option>
              <option value="Commercio">Commercio</option>
              <option value="Manifattura">Manifattura / Industria</option>
              <option value="Servizi">Servizi</option>
              <option value="Edilizia">Edilizia / Costruzioni</option>
              <option value="Ristorazione">Ristorazione / Hospitality</option>
              <option value="Trasporti">Trasporti / Logistica</option>
              <option value="Sanità">Sanit&agrave;</option>
              <option value="Tecnologia">Tecnologia / IT</option>
              <option value="Altro">Altro</option>
            </select>
            <FieldError error={errors.settore} />
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-secondary-700 mb-2">Numero dipendenti</label>
              <select value={formData.dipendenti} onChange={e => updateField('dipendenti', e.target.value)}
                className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-white text-secondary-900">
                <option value="">Seleziona...</option>
                <option value="1-5">1 - 5</option>
                <option value="6-20">6 - 20</option>
                <option value="21-50">21 - 50</option>
                <option value="51-100">51 - 100</option>
                <option value="100+">Oltre 100</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold text-secondary-700 mb-2">Fatturato annuo</label>
              <select value={formData.fatturato} onChange={e => updateField('fatturato', e.target.value)}
                className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-white text-secondary-900">
                <option value="">Seleziona...</option>
                <option value="Fino a 500K">Fino a 500.000 &euro;</option>
                <option value="500K - 2M">500.000 - 2 milioni &euro;</option>
                <option value="2M - 10M">2 - 10 milioni &euro;</option>
                <option value="Oltre 10M">Oltre 10 milioni &euro;</option>
              </select>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-8">
          <label className="block text-sm font-semibold text-secondary-700 mb-2">Situazione familiare</label>
          <select value={formData.situazioneFamiliare} onChange={e => updateField('situazioneFamiliare', e.target.value)}
            className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition bg-white text-secondary-900">
            <option value="">Seleziona...</option>
            <option value="Single">Single</option>
            <option value="Coppia">Coppia senza figli</option>
            <option value="Famiglia con figli">Famiglia con figli</option>
            <option value="Pensionato">Pensionato/a</option>
          </select>
        </div>
      )}

      {/* Coperture */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-secondary-700 mb-3">
          Coperture attuali o di interesse <span className="font-normal text-secondary-400">(opzionale, selezione multipla)</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {copertureOptions.map(cop => {
            const Icon = cop.icon;
            const selected = formData.coperture.includes(cop.id);
            return (
              <button key={cop.id} type="button" onClick={() => toggleCopertura(cop.id)}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 text-center transition-all text-sm ${
                  selected
                    ? 'border-primary-600 bg-primary-50 text-primary-700'
                    : 'border-secondary-200 bg-white text-secondary-600 hover:border-primary-300'
                }`}
              >
                <Icon className={`text-lg ${selected ? 'text-primary-600' : 'text-secondary-400'}`} />
                <span className="font-medium leading-tight">{cop.id}</span>
                {selected && <FaCheck className="text-xs text-primary-600" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Note */}
      <div>
        <label className="block text-sm font-semibold text-secondary-700 mb-2">Note aggiuntive <span className="font-normal text-secondary-400">(opzionale)</span></label>
        <textarea value={formData.noteAggiuntive} onChange={e => updateField('noteAggiuntive', e.target.value)}
          rows={3} placeholder="Descrivici brevemente la tua situazione o le tue esigenze specifiche..."
          className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition resize-none text-secondary-900"
        />
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2">I Tuoi Dati</h2>
      <p className="text-secondary-500 mb-8">Inserisci i tuoi recapiti per essere ricontattato</p>
      <div className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-secondary-700 mb-2">Nome *</label>
            <input type="text" value={formData.nome} onChange={e => updateField('nome', e.target.value)}
              placeholder="Mario" className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition text-secondary-900" />
            <FieldError error={errors.nome} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary-700 mb-2">Cognome *</label>
            <input type="text" value={formData.cognome} onChange={e => updateField('cognome', e.target.value)}
              placeholder="Rossi" className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition text-secondary-900" />
            <FieldError error={errors.cognome} />
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-semibold text-secondary-700 mb-2">Email *</label>
            <input type="email" value={formData.email} onChange={e => updateField('email', e.target.value)}
              placeholder="mario.rossi@email.com" className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition text-secondary-900" />
            <FieldError error={errors.email} />
          </div>
          <div>
            <label className="block text-sm font-semibold text-secondary-700 mb-2">Telefono *</label>
            <input type="tel" value={formData.telefono} onChange={e => updateField('telefono', e.target.value)}
              placeholder="02 1234567" className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition text-secondary-900" />
            <FieldError error={errors.telefono} />
          </div>
        </div>
        {(formData.tipoCliente === 'azienda' || formData.tipoCliente === 'professionista') && (
          <div>
            <label className="block text-sm font-semibold text-secondary-700 mb-2">Azienda / Studio</label>
            <input type="text" value={formData.azienda} onChange={e => updateField('azienda', e.target.value)}
              placeholder="Nome azienda o studio" className="w-full px-4 py-3 border-2 border-secondary-200 rounded-xl focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition text-secondary-900" />
          </div>
        )}
        <div className="pt-2">
          <label className={`flex items-start gap-3 cursor-pointer ${errors.privacy ? 'text-red-600' : ''}`}>
            <input type="checkbox" checked={formData.privacy} onChange={e => updateField('privacy', e.target.checked)}
              className="w-5 h-5 rounded border-2 border-secondary-300 text-primary-600 focus:ring-primary-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-secondary-600">
              Accetto la <a href="/privacy-policy" target="_blank" className="text-primary-600 underline hover:text-primary-700">Privacy Policy</a> e
              acconsento al trattamento dei miei dati personali per essere ricontattato. *
            </span>
          </label>
          <FieldError error={errors.privacy} />
        </div>
      </div>
    </div>
  );

  const esigenzaLabels: Record<string, string> = {
    'analisi-coperture': 'Analisi coperture attuali',
    'nuovo-preventivo': 'Nuovo preventivo assicurativo',
    'consulenza-rischi': 'Consulenza e analisi rischi',
    'revisione-polizze': 'Revisione polizze esistenti',
  };
  const tipoLabels: Record<string, string> = {
    privato: 'Privato',
    azienda: 'Azienda',
    professionista: 'Professionista',
  };

  const renderStep5 = () => (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-2">Riepilogo</h2>
      <p className="text-secondary-500 mb-8">Verifica i dati e invia la tua richiesta</p>

      <div className="space-y-4">
        {/* Profilo & Esigenza */}
        <div className="bg-secondary-50 rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-secondary-900">Profilo &amp; Esigenza</h3>
            <button type="button" onClick={() => setCurrentStep(1)} className="text-sm text-primary-600 hover:underline">Modifica</button>
          </div>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div><span className="text-secondary-500">Tipo:</span> <span className="font-medium text-secondary-900">{tipoLabels[formData.tipoCliente]}</span></div>
            <div><span className="text-secondary-500">Esigenza:</span> <span className="font-medium text-secondary-900">{esigenzaLabels[formData.esigenza]}</span></div>
          </div>
        </div>

        {/* Dettagli */}
        <div className="bg-secondary-50 rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-secondary-900">Dettagli</h3>
            <button type="button" onClick={() => setCurrentStep(3)} className="text-sm text-primary-600 hover:underline">Modifica</button>
          </div>
          <div className="text-sm space-y-2">
            {formData.tipoCliente === 'azienda' && (
              <div className="grid md:grid-cols-3 gap-3">
                {formData.settore && <div><span className="text-secondary-500">Settore:</span> <span className="font-medium text-secondary-900">{formData.settore}</span></div>}
                {formData.dipendenti && <div><span className="text-secondary-500">Dipendenti:</span> <span className="font-medium text-secondary-900">{formData.dipendenti}</span></div>}
                {formData.fatturato && <div><span className="text-secondary-500">Fatturato:</span> <span className="font-medium text-secondary-900">{formData.fatturato}</span></div>}
              </div>
            )}
            {formData.tipoCliente !== 'azienda' && formData.situazioneFamiliare && (
              <div><span className="text-secondary-500">Situazione:</span> <span className="font-medium text-secondary-900">{formData.situazioneFamiliare}</span></div>
            )}
            {formData.coperture.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {formData.coperture.map(c => (
                  <span key={c} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">{c}</span>
                ))}
              </div>
            )}
            {formData.noteAggiuntive && (
              <div className="mt-2"><span className="text-secondary-500">Note:</span> <span className="text-secondary-700">{formData.noteAggiuntive}</span></div>
            )}
            {!formData.settore && !formData.situazioneFamiliare && formData.coperture.length === 0 && !formData.noteAggiuntive && (
              <p className="text-secondary-400 italic">Nessun dettaglio aggiuntivo</p>
            )}
          </div>
        </div>

        {/* Contatti */}
        <div className="bg-secondary-50 rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-secondary-900">Contatti</h3>
            <button type="button" onClick={() => setCurrentStep(4)} className="text-sm text-primary-600 hover:underline">Modifica</button>
          </div>
          <div className="grid md:grid-cols-2 gap-3 text-sm">
            <div><span className="text-secondary-500">Nome:</span> <span className="font-medium text-secondary-900">{formData.nome} {formData.cognome}</span></div>
            <div><span className="text-secondary-500">Email:</span> <span className="font-medium text-secondary-900">{formData.email}</span></div>
            <div><span className="text-secondary-500">Telefono:</span> <span className="font-medium text-secondary-900">{formData.telefono}</span></div>
            {formData.azienda && <div><span className="text-secondary-500">Azienda:</span> <span className="font-medium text-secondary-900">{formData.azienda}</span></div>}
          </div>
        </div>
      </div>
    </div>
  );

  const renderSuccess = () => (
    <div className="text-center py-12">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <FaCheck className="text-4xl text-green-600" />
      </div>
      <h2 className="text-3xl font-bold text-secondary-900 mb-4">Richiesta Inviata!</h2>
      <p className="text-lg text-secondary-600 max-w-md mx-auto mb-8">
        Grazie per la tua richiesta. Il nostro team ti ricontatter&agrave; entro 24 ore lavorative per procedere con la Relazione Preventiva.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a href="/" className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
          Torna alla Home
        </a>
        <a href="tel:026698.4847" className="inline-flex items-center justify-center gap-2 border-2 border-secondary-200 hover:border-primary-300 text-secondary-700 px-6 py-3 rounded-xl font-semibold transition-colors">
          <FaPhone className="text-sm" /> Chiama: 02 6698.4847
        </a>
      </div>
    </div>
  );

  return (
    <Layout
      title="Richiedi Preventivo - Relazione Preventiva | General Brokers Milano"
      description="Richiedi una Relazione Preventiva personalizzata. Compila il modulo guidato per ricevere un'analisi gratuita delle tue esigenze assicurative da General Brokers."
      keywords="preventivo assicurativo, relazione preventiva, analisi rischi, richiesta preventivo, broker Milano"
    >
      {/* Hero compatto */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white py-12 md:py-16">
        <div className="container-custom text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-white/20">
            <FaShieldAlt className="text-sm text-primary-200" />
            <span className="text-sm font-semibold text-primary-100">Servizio Gratuito</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Richiedi la Tua Relazione Preventiva
          </h1>
          <p className="text-base md:text-lg text-primary-100 max-w-2xl mx-auto">
            Compila il modulo guidato in pochi passi. Analizzeremo gratuitamente la tua situazione assicurativa e ti ricontatteremo.
          </p>
        </div>
      </section>

      {/* Wizard */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom max-w-3xl">

          {submitStatus === 'success' ? renderSuccess() : (
            <>
              {/* Progress */}
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  {steps.map((step, i) => {
                    const Icon = step.icon;
                    const isActive = currentStep === step.id;
                    const isDone = currentStep > step.id;
                    return (
                      <div key={step.id} className="flex items-center flex-1">
                        <div className="flex flex-col items-center">
                          <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                            isDone ? 'bg-green-500 text-white' :
                            isActive ? 'bg-primary-600 text-white shadow-lg ring-4 ring-primary-200' :
                            'bg-white text-secondary-400 border-2 border-secondary-200'
                          }`}>
                            {isDone ? <FaCheck /> : <Icon />}
                          </div>
                          <span className={`text-xs mt-1.5 font-medium hidden md:block ${
                            isActive ? 'text-primary-600' : isDone ? 'text-green-600' : 'text-secondary-400'
                          }`}>
                            {step.label}
                          </span>
                        </div>
                        {i < steps.length - 1 && (
                          <div className={`flex-1 h-0.5 mx-2 md:mx-3 rounded ${
                            currentStep > step.id ? 'bg-green-400' : 'bg-secondary-200'
                          }`} />
                        )}
                      </div>
                    );
                  })}
                </div>
                <p className="text-center text-sm text-secondary-400 md:hidden">
                  Passo {currentStep} di {steps.length} &mdash; {steps[currentStep - 1].label}
                </p>
              </div>

              {/* Form Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
                {currentStep === 1 && renderStep1()}
                {currentStep === 2 && renderStep2()}
                {currentStep === 3 && renderStep3()}
                {currentStep === 4 && renderStep4()}
                {currentStep === 5 && renderStep5()}

                {submitStatus === 'error' && (
                  <div className="mt-6 bg-red-50 border border-red-200 rounded-xl p-4 text-red-700 text-sm">
                    Si &egrave; verificato un errore. Riprova o contattaci al <a href="tel:026698.4847" className="font-bold underline">02 6698.4847</a>.
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-secondary-100">
                  {currentStep > 1 ? (
                    <button type="button" onClick={prevStep}
                      className="inline-flex items-center gap-2 text-secondary-600 hover:text-secondary-900 font-semibold transition-colors px-4 py-2.5 rounded-xl hover:bg-secondary-50">
                      <FaArrowLeft className="text-sm" /> Indietro
                    </button>
                  ) : <div />}

                  {currentStep < 5 ? (
                    <button type="button" onClick={nextStep}
                      className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-7 py-3 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl">
                      Continua <FaArrowRight className="text-sm" />
                    </button>
                  ) : (
                    <button type="button" onClick={handleSubmit} disabled={submitStatus === 'sending'}
                      className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-3 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed">
                      {submitStatus === 'sending' ? (
                        <><span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Invio...</>
                      ) : (
                        <><FaPaperPlane className="text-sm" /> Invia Richiesta</>
                      )}
                    </button>
                  )}
                </div>
              </div>

              {/* Trust badge */}
              <div className="mt-8 text-center">
                <p className="text-sm text-secondary-400">
                  <FaShieldAlt className="inline mr-1.5 text-green-500" />
                  I tuoi dati sono al sicuro. Non li condivideremo con terze parti.
                </p>
              </div>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}

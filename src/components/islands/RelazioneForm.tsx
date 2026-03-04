import { useState, useCallback } from 'react';
import {
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  User,
  MessageSquare,
  Info,
  FileCheck,
} from 'lucide-react';

const WEBHOOK_URL = 'https://n8n.fodivps2.cloud/webhook/general-brokers-contact';

const INSURANCE_TYPES = [
  { value: '', label: 'Seleziona tipo' },
  { value: 'auto', label: 'Auto' },
  { value: 'moto', label: 'Moto' },
  { value: 'casa', label: 'Casa' },
  { value: 'vita', label: 'Vita' },
  { value: 'azienda', label: 'Azienda' },
  { value: 'professionale', label: 'Professionale' },
  { value: 'altro', label: 'Altro' },
] as const;

const URGENCY_OPTIONS = [
  { value: '', label: 'Seleziona urgenza' },
  { value: 'bassa', label: 'Bassa - Entro un mese' },
  { value: 'media', label: 'Media - Entro due settimane' },
  { value: 'alta', label: 'Alta - Entro una settimana' },
  { value: 'urgente', label: 'Urgente - Il prima possibile' },
] as const;

interface FormData {
  tipoAssicurazione: string;
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  codiceFiscale: string;
  descrizione: string;
  budget: string;
  urgenza: string;
  note: string;
  privacy: boolean;
}

const INITIAL_FORM: FormData = {
  tipoAssicurazione: '',
  nome: '',
  cognome: '',
  email: '',
  telefono: '',
  codiceFiscale: '',
  descrizione: '',
  budget: '',
  urgenza: '',
  note: '',
  privacy: false,
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const STEPS = [
  { id: 1, title: 'Tipo di Assicurazione', icon: ClipboardList },
  { id: 2, title: 'Dati Personali', icon: User },
  { id: 3, title: 'Dettagli Richiesta', icon: MessageSquare },
  { id: 4, title: 'Informazioni Aggiuntive', icon: Info },
  { id: 5, title: 'Riepilogo e Invio', icon: FileCheck },
];

function validateStep(step: number, form: FormData): Record<string, string> {
  const errors: Record<string, string> = {};
  switch (step) {
    case 1:
      if (!form.tipoAssicurazione) errors.tipoAssicurazione = 'Seleziona il tipo di assicurazione';
      break;
    case 2:
      if (!form.nome || form.nome.trim().length < 2) errors.nome = 'Nome obbligatorio (min 2 caratteri)';
      if (!form.cognome || form.cognome.trim().length < 2) errors.cognome = 'Cognome obbligatorio (min 2 caratteri)';
      if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Email non valida';
      if (!form.telefono || !/^[\d\s+()-]{6,20}$/.test(form.telefono)) errors.telefono = 'Telefono non valido';
      break;
    case 3:
      if (!form.descrizione || form.descrizione.trim().length < 10) errors.descrizione = 'Descrivi le tue esigenze (min 10 caratteri)';
      break;
    case 5:
      if (!form.privacy) errors.privacy = 'Devi accettare la privacy policy';
      break;
  }
  return errors;
}

export default function RelazioneForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
      const fieldValue = type === 'checkbox' ? checked! : value;
      setForm((prev) => ({ ...prev, [name]: fieldValue }));
      if (errors[name]) {
        setErrors((prev) => {
          const next = { ...prev };
          delete next[name];
          return next;
        });
      }
    },
    [errors],
  );

  function nextStep() {
    const stepErrors = validateStep(step, form);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setStep((s) => Math.min(s + 1, 5));
  }

  function prevStep() {
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const stepErrors = validateStep(5, form);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setStatus('submitting');
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          tipo: 'relazione-preventiva',
          timestamp: new Date().toISOString(),
          source: 'website-relazione-form',
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      setForm(INITIAL_FORM);
      setStep(1);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-green-900 mb-2 font-heading">
          Richiesta inviata con successo!
        </h3>
        <p className="text-green-700 mb-6">
          Grazie per averci contattato. Un nostro consulente ti contatterà il prima possibile per discutere
          le tue esigenze assicurative.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-primary">
          Nuova richiesta
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {STEPS.map((s) => {
            const StepIcon = s.icon;
            const isActive = step === s.id;
            const isCompleted = step > s.id;
            return (
              <div key={s.id} className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                    isActive
                      ? 'bg-primary-600 text-white'
                      : isCompleted
                        ? 'bg-green-500 text-white'
                        : 'bg-secondary-200 text-secondary-500'
                  }`}
                >
                  {isCompleted ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <StepIcon className="w-5 h-5" />
                  )}
                </div>
                <span className="text-xs text-secondary-500 mt-1.5 text-center hidden sm:block">
                  {s.title}
                </span>
              </div>
            );
          })}
        </div>
        <div className="w-full bg-secondary-200 rounded-full h-2">
          <div
            className="bg-primary-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((step - 1) / (STEPS.length - 1)) * 100}%` }}
          />
        </div>
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 mb-6">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-medium text-sm">Errore durante l&apos;invio.</p>
            <p className="text-red-600 text-sm mt-1">
              Riprova o contattaci al{' '}
              <a href="tel:+390266984847" className="underline font-medium">
                02 6698.4847
              </a>
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Step 1 */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-secondary-900 font-heading">
              Che tipo di assicurazione ti interessa?
            </h3>
            <div>
              <select
                name="tipoAssicurazione"
                value={form.tipoAssicurazione}
                onChange={handleChange}
                className={`input-field ${errors.tipoAssicurazione ? 'border-red-400 ring-1 ring-red-400' : ''}`}
              >
                {INSURANCE_TYPES.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {errors.tipoAssicurazione && (
                <p className="text-red-500 text-xs mt-1">{errors.tipoAssicurazione}</p>
              )}
            </div>
          </div>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-secondary-900 font-heading">I tuoi dati personali</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Nome" name="nome" value={form.nome} error={errors.nome} onChange={handleChange} placeholder="Mario" required />
              <InputField label="Cognome" name="cognome" value={form.cognome} error={errors.cognome} onChange={handleChange} placeholder="Rossi" required />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputField label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={handleChange} placeholder="mario.rossi@email.com" required />
              <InputField label="Telefono" name="telefono" type="tel" value={form.telefono} error={errors.telefono} onChange={handleChange} placeholder="+39 02 1234567" required />
            </div>
            <InputField label="Codice Fiscale" name="codiceFiscale" value={form.codiceFiscale} error={errors.codiceFiscale} onChange={handleChange} placeholder="RSSMRA80A01F205X (opzionale)" />
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-secondary-900 font-heading">Descrivi le tue esigenze</h3>
            <div>
              <label htmlFor="descrizione" className="block text-sm font-medium text-secondary-700 mb-1.5">
                Descrizione <span className="text-primary-600">*</span>
              </label>
              <textarea
                id="descrizione"
                name="descrizione"
                rows={5}
                value={form.descrizione}
                onChange={handleChange}
                placeholder="Descrivi le tue esigenze assicurative, cosa vorresti proteggere, eventuali polizze già in corso..."
                className={`input-field resize-y ${errors.descrizione ? 'border-red-400 ring-1 ring-red-400' : ''}`}
              />
              {errors.descrizione && <p className="text-red-500 text-xs mt-1">{errors.descrizione}</p>}
            </div>
          </div>
        )}

        {/* Step 4 */}
        {step === 4 && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-secondary-900 font-heading">Informazioni aggiuntive</h3>
            <InputField label="Budget indicativo annuo" name="budget" value={form.budget} error={errors.budget} onChange={handleChange} placeholder="Es. 500-1000 euro (opzionale)" />
            <div>
              <label htmlFor="urgenza" className="block text-sm font-medium text-secondary-700 mb-1.5">
                Urgenza
              </label>
              <select
                id="urgenza"
                name="urgenza"
                value={form.urgenza}
                onChange={handleChange}
                className="input-field"
              >
                {URGENCY_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="note" className="block text-sm font-medium text-secondary-700 mb-1.5">
                Note aggiuntive
              </label>
              <textarea
                id="note"
                name="note"
                rows={3}
                value={form.note}
                onChange={handleChange}
                placeholder="Altre informazioni utili (opzionale)..."
                className="input-field resize-y"
              />
            </div>
          </div>
        )}

        {/* Step 5 - Summary */}
        {step === 5 && (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-secondary-900 font-heading">Riepilogo della tua richiesta</h3>
            <div className="bg-secondary-50 rounded-xl p-6 space-y-4">
              <SummaryRow label="Tipo Assicurazione" value={form.tipoAssicurazione || '-'} />
              <SummaryRow label="Nome" value={`${form.nome} ${form.cognome}`} />
              <SummaryRow label="Email" value={form.email} />
              <SummaryRow label="Telefono" value={form.telefono} />
              {form.codiceFiscale && <SummaryRow label="Codice Fiscale" value={form.codiceFiscale} />}
              <SummaryRow label="Descrizione" value={form.descrizione} />
              {form.budget && <SummaryRow label="Budget" value={form.budget} />}
              {form.urgenza && <SummaryRow label="Urgenza" value={form.urgenza} />}
              {form.note && <SummaryRow label="Note" value={form.note} />}
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="privacy"
                checked={form.privacy}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-secondary-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-secondary-600 leading-relaxed">
                Ho letto e accetto la{' '}
                <a
                  href="/privacy-policy"
                  className="text-primary-600 hover:text-primary-700 underline underline-offset-2 font-medium"
                >
                  Privacy Policy
                </a>{' '}
                e autorizzo il trattamento dei miei dati personali ai sensi del GDPR.{' '}
                <span className="text-primary-600">*</span>
              </span>
            </label>
            {errors.privacy && <p className="text-red-500 text-xs mt-1 ml-7">{errors.privacy}</p>}
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-secondary-200">
          {step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="btn-outline inline-flex items-center gap-2 border-secondary-300 text-secondary-600 hover:bg-secondary-100"
            >
              <ChevronLeft className="w-4 h-4" />
              Indietro
            </button>
          ) : (
            <div />
          )}

          {step < 5 ? (
            <button
              type="button"
              onClick={nextStep}
              className="btn-primary inline-flex items-center gap-2"
            >
              Avanti
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Invio in corso...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Invia richiesta
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

function InputField({
  label,
  name,
  value,
  type = 'text',
  placeholder,
  required,
  error,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-secondary-700 mb-1.5">
        {label} {required && <span className="text-primary-600">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`input-field ${error ? 'border-red-400 ring-1 ring-red-400' : ''}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4">
      <span className="text-sm font-medium text-secondary-500 sm:w-40 shrink-0">{label}:</span>
      <span className="text-sm text-secondary-900">{value}</span>
    </div>
  );
}

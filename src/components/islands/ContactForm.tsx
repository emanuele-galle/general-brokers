import { useState, useCallback } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react';

const WEBHOOK_URL = 'https://n8n.fodivps2.cloud/webhook/general-brokers-contact';

const REQUEST_TYPES = [
  { value: '', label: 'Seleziona il tipo di richiesta' },
  { value: 'preventivo', label: 'Richiesta preventivo' },
  { value: 'consulenza', label: 'Consulenza gratuita' },
  { value: 'sinistro', label: 'Segnalazione sinistro' },
  { value: 'informazioni', label: 'Informazioni generali' },
  { value: 'reclamo', label: 'Reclamo' },
  { value: 'altro', label: 'Altro' },
] as const;

interface FormData {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  azienda: string;
  tipoRichiesta: string;
  messaggio: string;
  privacy: boolean;
}

interface FormErrors {
  nome?: string;
  cognome?: string;
  email?: string;
  telefono?: string;
  tipoRichiesta?: string;
  messaggio?: string;
  privacy?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const INITIAL_FORM: FormData = {
  nome: '',
  cognome: '',
  email: '',
  telefono: '',
  azienda: '',
  tipoRichiesta: '',
  messaggio: '',
  privacy: false,
};

const VALIDATION_RULES: Record<string, (v: string | boolean) => string | undefined> = {
  nome: (v) => (!v || (typeof v === 'string' && v.trim().length < 2)) ? 'Il nome è obbligatorio (minimo 2 caratteri)' : undefined,
  cognome: (v) => (!v || (typeof v === 'string' && v.trim().length < 2)) ? 'Il cognome è obbligatorio (minimo 2 caratteri)' : undefined,
  email: (v) => (!v || (typeof v === 'string' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))) ? 'Inserisci un indirizzo email valido' : undefined,
  telefono: (v) => (!v || (typeof v === 'string' && !/^[\d\s+()-]{6,20}$/.test(v))) ? 'Inserisci un numero di telefono valido' : undefined,
  tipoRichiesta: (v) => (!v ? 'Seleziona il tipo di richiesta' : undefined),
  messaggio: (v) => (!v || (typeof v === 'string' && v.trim().length < 10)) ? 'Il messaggio è obbligatorio (minimo 10 caratteri)' : undefined,
  privacy: (v) => (!v ? 'Devi accettare la privacy policy per inviare il messaggio' : undefined),
};

function validateField(name: keyof FormData, value: string | boolean): string | undefined {
  const rule = VALIDATION_RULES[name];
  return rule ? rule(value) : undefined;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
      const fieldValue = type === 'checkbox' ? checked! : value;

      setForm((prev) => ({ ...prev, [name]: fieldValue }));

      if (touched[name]) {
        const error = validateField(name as keyof FormData, fieldValue);
        setErrors((prev) => ({ ...prev, [name]: error }));
      }
    },
    [touched],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
      const fieldValue = type === 'checkbox' ? checked! : value;

      setTouched((prev) => ({ ...prev, [name]: true }));
      const error = validateField(name as keyof FormData, fieldValue);
      setErrors((prev) => ({ ...prev, [name]: error }));
    },
    [],
  );

  function validateAll(): boolean {
    const newErrors: FormErrors = {};
    let valid = true;
    const allTouched: Record<string, boolean> = {};

    for (const key of Object.keys(form) as (keyof FormData)[]) {
      if (key === 'azienda') continue;
      allTouched[key] = true;
      const error = validateField(key, form[key]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
        valid = false;
      }
    }

    setErrors(newErrors);
    setTouched(allTouched);
    return valid;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateAll()) return;

    setStatus('submitting');

    try {
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          timestamp: new Date().toISOString(),
          source: 'website-contact-form',
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('success');
      setForm(INITIAL_FORM);
      setTouched({});
      setErrors({});
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
          Messaggio inviato con successo!
        </h3>
        <p className="text-green-700 mb-6">
          Grazie per averci contattato. Ti risponderemo il prima possibile,
          solitamente entro 24 ore lavorative.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="btn-primary"
        >
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-medium text-sm">
              Si è verificato un errore durante l&apos;invio.
            </p>
            <p className="text-red-600 text-sm mt-1">
              Riprova o contattaci direttamente al{' '}
              <a href="tel:+390266984847" className="underline font-medium">
                02 6698.4847
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label="Nome"
          name="nome"
          value={form.nome}
          error={errors.nome}
          touched={touched.nome}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Mario"
          required
        />
        <Field
          label="Cognome"
          name="cognome"
          value={form.cognome}
          error={errors.cognome}
          touched={touched.cognome}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Rossi"
          required
        />
      </div>

      {/* Contact row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label="Email"
          name="email"
          type="email"
          value={form.email}
          error={errors.email}
          touched={touched.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="mario.rossi@email.com"
          icon={<Mail className="w-4 h-4" />}
          required
        />
        <Field
          label="Telefono"
          name="telefono"
          type="tel"
          value={form.telefono}
          error={errors.telefono}
          touched={touched.telefono}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="+39 02 1234567"
          icon={<Phone className="w-4 h-4" />}
          required
        />
      </div>

      {/* Company + Request type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field
          label="Azienda"
          name="azienda"
          value={form.azienda}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Nome azienda (opzionale)"
        />
        <div>
          <label htmlFor="tipoRichiesta" className="block text-sm font-medium text-secondary-700 mb-1.5">
            Tipo di richiesta <span className="text-primary-600">*</span>
          </label>
          <select
            id="tipoRichiesta"
            name="tipoRichiesta"
            value={form.tipoRichiesta}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`input-field ${
              touched.tipoRichiesta && errors.tipoRichiesta
                ? 'border-red-400 ring-1 ring-red-400'
                : ''
            }`}
          >
            {REQUEST_TYPES.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {touched.tipoRichiesta && errors.tipoRichiesta && (
            <p className="text-red-500 text-xs mt-1">{errors.tipoRichiesta}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="messaggio" className="block text-sm font-medium text-secondary-700 mb-1.5">
          Messaggio <span className="text-primary-600">*</span>
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={5}
          value={form.messaggio}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Descrivi la tua richiesta..."
          className={`input-field resize-y ${
            touched.messaggio && errors.messaggio
              ? 'border-red-400 ring-1 ring-red-400'
              : ''
          }`}
        />
        {touched.messaggio && errors.messaggio && (
          <p className="text-red-500 text-xs mt-1">{errors.messaggio}</p>
        )}
      </div>

      {/* Privacy */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacy"
            checked={form.privacy}
            onChange={handleChange}
            onBlur={handleBlur}
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
        {touched.privacy && errors.privacy && (
          <p className="text-red-500 text-xs mt-1.5 ml-7">{errors.privacy}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Invio in corso...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Invia messaggio
          </>
        )}
      </button>
    </form>
  );
}

/* Reusable Field component */

interface FieldProps {
  label: string;
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  touched?: boolean;
  icon?: React.ReactNode;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

function Field({
  label,
  name,
  value,
  type = 'text',
  placeholder,
  required,
  error,
  touched,
  icon,
  onChange,
  onBlur,
}: FieldProps) {
  const hasError = touched && error;
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-secondary-700 mb-1.5">
        {label} {required && <span className="text-primary-600">*</span>}
      </label>
      <div className="relative">
        {icon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-secondary-400 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`input-field ${icon ? 'pl-10' : ''} ${
            hasError ? 'border-red-400 ring-1 ring-red-400' : ''
          }`}
        />
      </div>
      {hasError && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

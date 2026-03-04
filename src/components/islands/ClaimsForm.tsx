import { useState, useCallback, useRef } from 'react';
import {
  Send,
  Loader2,
  CheckCircle,
  AlertCircle,
  Upload,
  X,
  User,
  FileText,
  AlertTriangle,
  Car,
  StickyNote,
  Phone,
} from 'lucide-react';

const WEBHOOK_URL = 'https://n8n.fodivps2.cloud/webhook/general-brokers-sinistro';

const CLAIM_TYPES = [
  { value: '', label: 'Seleziona tipologia' },
  { value: 'rc-auto', label: 'RC Auto' },
  { value: 'kasko', label: 'Kasko' },
  { value: 'furto', label: 'Furto' },
  { value: 'incendio', label: 'Incendio' },
  { value: 'danni-acqua', label: 'Danni da acqua' },
  { value: 'eventi-naturali', label: 'Eventi naturali' },
  { value: 'infortunio', label: 'Infortunio' },
  { value: 'rc-generale', label: 'RC Generale' },
  { value: 'rc-professionale', label: 'RC Professionale' },
  { value: 'altro', label: 'Altro' },
] as const;

interface ClaimsFormData {
  /* Personal data */
  nome: string;
  cognome: string;
  codiceFiscale: string;
  email: string;
  telefono: string;
  indirizzo: string;
  citta: string;
  cap: string;

  /* Policy data */
  numeroPolizza: string;
  compagnia: string;
  tipoSinistro: string;

  /* Incident details */
  dataSinistro: string;
  oraSinistro: string;
  luogoSinistro: string;
  descrizione: string;

  /* Damages */
  tipoDanno: string;
  stimaDanno: string;

  /* Other parties */
  controparteNome: string;
  controparteAssicurazione: string;
  controparteTarga: string;

  /* Notes */
  note: string;

  /* Privacy */
  privacy: boolean;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

const INITIAL_FORM: ClaimsFormData = {
  nome: '',
  cognome: '',
  codiceFiscale: '',
  email: '',
  telefono: '',
  indirizzo: '',
  citta: '',
  cap: '',
  numeroPolizza: '',
  compagnia: '',
  tipoSinistro: '',
  dataSinistro: '',
  oraSinistro: '',
  luogoSinistro: '',
  descrizione: '',
  tipoDanno: '',
  stimaDanno: '',
  controparteNome: '',
  controparteAssicurazione: '',
  controparteTarga: '',
  note: '',
  privacy: false,
};

const REQUIRED_FIELDS: (keyof ClaimsFormData)[] = [
  'nome',
  'cognome',
  'email',
  'telefono',
  'numeroPolizza',
  'tipoSinistro',
  'dataSinistro',
  'luogoSinistro',
  'descrizione',
  'privacy',
];

const CLAIMS_RULES: Record<string, (v: string) => string | undefined> = {
  nome: (v) => (v.length < 2 ? 'Campo obbligatorio (minimo 2 caratteri)' : undefined),
  cognome: (v) => (v.length < 2 ? 'Campo obbligatorio (minimo 2 caratteri)' : undefined),
  email: (v) => (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ? 'Email non valida' : undefined),
  telefono: (v) => (!/^[\d\s+()-]{6,20}$/.test(v) ? 'Numero di telefono non valido' : undefined),
  numeroPolizza: (v) => (v.length < 3 ? 'Numero polizza obbligatorio' : undefined),
  tipoSinistro: (v) => (!v ? 'Seleziona la tipologia di sinistro' : undefined),
  dataSinistro: (v) => (!v ? 'Data del sinistro obbligatoria' : undefined),
  luogoSinistro: (v) => (v.length < 3 ? 'Luogo del sinistro obbligatorio' : undefined),
  descrizione: (v) => (v.length < 20 ? 'Descrizione obbligatoria (minimo 20 caratteri)' : undefined),
  codiceFiscale: (v) => (v && !/^[A-Z0-9]{11,16}$/i.test(v) ? 'Codice fiscale non valido' : undefined),
  cap: (v) => (v && !/^\d{5}$/.test(v) ? 'CAP non valido' : undefined),
};

function validateField(name: keyof ClaimsFormData, value: string | boolean): string | undefined {
  if (name === 'privacy') return !value ? 'Devi accettare la privacy policy' : undefined;
  const strVal = typeof value === 'string' ? value.trim() : '';
  const rule = CLAIMS_RULES[name];
  return rule ? rule(strVal) : undefined;
}

function generatePracticeNumber(): string {
  const date = new Date();
  const y = date.getFullYear().toString().slice(-2);
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  const rand = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
  return `SIN-${y}${m}${d}-${rand}`;
}

export default function ClaimsForm() {
  const [form, setForm] = useState<ClaimsFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [files, setFiles] = useState<File[]>([]);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [practiceNumber, setPracticeNumber] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
      const fieldValue = type === 'checkbox' ? checked! : value;

      setForm((prev) => ({ ...prev, [name]: fieldValue }));

      if (touched[name]) {
        const error = validateField(name as keyof ClaimsFormData, fieldValue);
        setErrors((prev) => {
          const next = { ...prev };
          if (error) next[name] = error;
          else delete next[name];
          return next;
        });
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
      const error = validateField(name as keyof ClaimsFormData, fieldValue);
      setErrors((prev) => {
        const next = { ...prev };
        if (error) next[name] = error;
        else delete next[name];
        return next;
      });
    },
    [],
  );

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const selected = e.target.files;
    if (!selected) return;
    const newFiles = Array.from(selected).filter((f) => f.size <= 10 * 1024 * 1024);
    setFiles((prev) => [...prev, ...newFiles].slice(0, 10));
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  function removeFile(index: number) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function validateAll(): boolean {
    const newErrors: Record<string, string> = {};
    const allTouched: Record<string, boolean> = {};
    let valid = true;

    for (const key of REQUIRED_FIELDS) {
      allTouched[key] = true;
      const error = validateField(key, form[key]);
      if (error) {
        newErrors[key] = error;
        valid = false;
      }
    }

    /* Validate optional fields that have values */
    for (const key of Object.keys(form) as (keyof ClaimsFormData)[]) {
      if (REQUIRED_FIELDS.includes(key)) continue;
      if (form[key]) {
        allTouched[key] = true;
        const error = validateField(key, form[key]);
        if (error) {
          newErrors[key] = error;
          valid = false;
        }
      }
    }

    setErrors(newErrors);
    setTouched((prev) => ({ ...prev, ...allTouched }));
    return valid;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validateAll()) return;

    setStatus('submitting');

    try {
      const fd = new FormData();

      for (const [key, value] of Object.entries(form)) {
        fd.append(key, String(value));
      }

      fd.append('timestamp', new Date().toISOString());
      fd.append('source', 'website-claims-form');

      for (const file of files) {
        fd.append('allegati', file);
      }

      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        body: fd,
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const num = generatePracticeNumber();
      setPracticeNumber(num);
      setStatus('success');
      setForm(INITIAL_FORM);
      setFiles([]);
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
          Segnalazione inviata con successo!
        </h3>
        <div className="bg-white border border-green-200 rounded-xl p-4 inline-block mb-4">
          <p className="text-sm text-secondary-500 mb-1">Numero pratica</p>
          <p className="text-2xl font-bold text-primary-600 font-mono tracking-wider">
            {practiceNumber}
          </p>
        </div>
        <p className="text-green-700 mb-2">
          Conserva questo numero per future comunicazioni. Ti contatteremo entro
          24 ore lavorative per aggiornamenti sulla tua pratica.
        </p>
        <p className="text-green-600 text-sm mb-6">
          Per urgenze chiama il{' '}
          <a href="tel:+390266984847" className="font-medium underline">
            02 6698.4847
          </a>
        </p>
        <button onClick={() => setStatus('idle')} className="btn-primary">
          Nuova segnalazione
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-10">
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="text-red-800 font-medium text-sm">
              Errore durante l&apos;invio della segnalazione.
            </p>
            <p className="text-red-600 text-sm mt-1">
              Riprova o contattaci al{' '}
              <a href="tel:+390266984847" className="underline font-medium">
                02 6698.4847
              </a>{' '}
              oppure a{' '}
              <a href="mailto:sinistri@generalbrokers.it" className="underline font-medium">
                sinistri@generalbrokers.it
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Section 1: Personal Data */}
      <Section icon={<User className="w-5 h-5" />} title="Dati personali">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Nome" name="nome" value={form.nome} error={errors.nome} touched={touched.nome} onChange={handleChange} onBlur={handleBlur} placeholder="Mario" required />
          <Field label="Cognome" name="cognome" value={form.cognome} error={errors.cognome} touched={touched.cognome} onChange={handleChange} onBlur={handleBlur} placeholder="Rossi" required />
        </div>
        <Field label="Codice Fiscale" name="codiceFiscale" value={form.codiceFiscale} error={errors.codiceFiscale} touched={touched.codiceFiscale} onChange={handleChange} onBlur={handleBlur} placeholder="RSSMRA80A01F205X" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Email" name="email" type="email" value={form.email} error={errors.email} touched={touched.email} onChange={handleChange} onBlur={handleBlur} placeholder="mario.rossi@email.com" required />
          <Field label="Telefono" name="telefono" type="tel" value={form.telefono} error={errors.telefono} touched={touched.telefono} onChange={handleChange} onBlur={handleBlur} placeholder="+39 02 1234567" icon={<Phone className="w-4 h-4" />} required />
        </div>
        <Field label="Indirizzo" name="indirizzo" value={form.indirizzo} error={errors.indirizzo} touched={touched.indirizzo} onChange={handleChange} onBlur={handleBlur} placeholder="Via Roma, 1" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Città" name="citta" value={form.citta} error={errors.citta} touched={touched.citta} onChange={handleChange} onBlur={handleBlur} placeholder="Milano" />
          <Field label="CAP" name="cap" value={form.cap} error={errors.cap} touched={touched.cap} onChange={handleChange} onBlur={handleBlur} placeholder="20125" />
        </div>
      </Section>

      {/* Section 2: Policy Data */}
      <Section icon={<FileText className="w-5 h-5" />} title="Dati polizza">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Numero Polizza" name="numeroPolizza" value={form.numeroPolizza} error={errors.numeroPolizza} touched={touched.numeroPolizza} onChange={handleChange} onBlur={handleBlur} placeholder="123456789" required />
          <Field label="Compagnia Assicurativa" name="compagnia" value={form.compagnia} error={errors.compagnia} touched={touched.compagnia} onChange={handleChange} onBlur={handleBlur} placeholder="Nome compagnia" />
        </div>
        <div>
          <label htmlFor="tipoSinistro" className="block text-sm font-medium text-secondary-700 mb-1.5">
            Tipologia Sinistro <span className="text-primary-600">*</span>
          </label>
          <select
            id="tipoSinistro"
            name="tipoSinistro"
            value={form.tipoSinistro}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`input-field ${touched.tipoSinistro && errors.tipoSinistro ? 'border-red-400 ring-1 ring-red-400' : ''}`}
          >
            {CLAIM_TYPES.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {touched.tipoSinistro && errors.tipoSinistro && (
            <p className="text-red-500 text-xs mt-1">{errors.tipoSinistro}</p>
          )}
        </div>
      </Section>

      {/* Section 3: Incident Details */}
      <Section icon={<AlertTriangle className="w-5 h-5" />} title="Dettagli sinistro">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field label="Data sinistro" name="dataSinistro" type="date" value={form.dataSinistro} error={errors.dataSinistro} touched={touched.dataSinistro} onChange={handleChange} onBlur={handleBlur} required />
          <Field label="Ora sinistro" name="oraSinistro" type="time" value={form.oraSinistro} error={errors.oraSinistro} touched={touched.oraSinistro} onChange={handleChange} onBlur={handleBlur} />
          <Field label="Luogo sinistro" name="luogoSinistro" value={form.luogoSinistro} error={errors.luogoSinistro} touched={touched.luogoSinistro} onChange={handleChange} onBlur={handleBlur} placeholder="Via, città" required />
        </div>
        <div>
          <label htmlFor="descrizione" className="block text-sm font-medium text-secondary-700 mb-1.5">
            Descrizione dell&apos;accaduto <span className="text-primary-600">*</span>
          </label>
          <textarea
            id="descrizione"
            name="descrizione"
            rows={5}
            value={form.descrizione}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Descrivi in modo dettagliato cosa è accaduto, le circostanze e la dinamica dell'evento..."
            className={`input-field resize-y ${touched.descrizione && errors.descrizione ? 'border-red-400 ring-1 ring-red-400' : ''}`}
          />
          {touched.descrizione && errors.descrizione && (
            <p className="text-red-500 text-xs mt-1">{errors.descrizione}</p>
          )}
        </div>
      </Section>

      {/* Section 4: Damages */}
      <Section icon={<AlertCircle className="w-5 h-5" />} title="Danni subiti">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Field label="Tipo di danno" name="tipoDanno" value={form.tipoDanno} error={errors.tipoDanno} touched={touched.tipoDanno} onChange={handleChange} onBlur={handleBlur} placeholder="Es. danni a veicolo, danni fisici, danni a proprietà" />
          <Field label="Stima del danno (€)" name="stimaDanno" value={form.stimaDanno} error={errors.stimaDanno} touched={touched.stimaDanno} onChange={handleChange} onBlur={handleBlur} placeholder="Es. 5.000" />
        </div>
      </Section>

      {/* Section 5: Other Parties */}
      <Section icon={<Car className="w-5 h-5" />} title="Controparte (se presente)">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Field label="Nome controparte" name="controparteNome" value={form.controparteNome} error={errors.controparteNome} touched={touched.controparteNome} onChange={handleChange} onBlur={handleBlur} placeholder="Nome e cognome" />
          <Field label="Assicurazione controparte" name="controparteAssicurazione" value={form.controparteAssicurazione} error={errors.controparteAssicurazione} touched={touched.controparteAssicurazione} onChange={handleChange} onBlur={handleBlur} placeholder="Compagnia" />
          <Field label="Targa controparte" name="controparteTarga" value={form.controparteTarga} error={errors.controparteTarga} touched={touched.controparteTarga} onChange={handleChange} onBlur={handleBlur} placeholder="AA 000 BB" />
        </div>
      </Section>

      {/* Section 6: File Upload */}
      <Section icon={<Upload className="w-5 h-5" />} title="Documentazione allegata">
        <p className="text-sm text-secondary-500 mb-3">
          Carica foto, documenti o perizie relative al sinistro (max 10 file, 10 MB ciascuno).
        </p>
        <div
          className="border-2 border-dashed border-secondary-300 rounded-xl p-6 text-center hover:border-primary-400 transition-colors cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <Upload className="w-8 h-8 text-secondary-400 mx-auto mb-2" />
          <p className="text-sm text-secondary-600">
            <span className="font-medium text-primary-600">Clicca per selezionare</span>{' '}
            o trascina i file qui
          </p>
          <p className="text-xs text-secondary-400 mt-1">
            PDF, JPG, PNG, DOC - max 10 MB per file
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
        />
        {files.length > 0 && (
          <div className="mt-3 space-y-2">
            {files.map((file, i) => (
              <div key={`${file.name}-${i}`} className="flex items-center gap-3 bg-secondary-50 rounded-lg px-4 py-2">
                <FileText className="w-4 h-4 text-secondary-500 shrink-0" />
                <span className="text-sm text-secondary-700 truncate flex-1">{file.name}</span>
                <span className="text-xs text-secondary-400 shrink-0">
                  {(file.size / 1024 / 1024).toFixed(1)} MB
                </span>
                <button
                  type="button"
                  onClick={() => removeFile(i)}
                  className="p-1 rounded-full hover:bg-secondary-200 text-secondary-400 hover:text-red-500 transition-colors"
                  aria-label={`Rimuovi ${file.name}`}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* Section 7: Notes */}
      <Section icon={<StickyNote className="w-5 h-5" />} title="Note aggiuntive">
        <textarea
          name="note"
          rows={3}
          value={form.note}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Eventuali informazioni aggiuntive, testimoni, note particolari..."
          className="input-field resize-y"
        />
      </Section>

      {/* Privacy */}
      <div className="border-t border-secondary-200 pt-6">
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
            e autorizzo il trattamento dei miei dati personali ai sensi del GDPR per
            la gestione della pratica di sinistro. <span className="text-primary-600">*</span>
          </span>
        </label>
        {touched.privacy && errors.privacy && (
          <p className="text-red-500 text-xs mt-1.5 ml-7">{errors.privacy}</p>
        )}
      </div>

      {/* Submit */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
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
              Invia segnalazione sinistro
            </>
          )}
        </button>
        <p className="text-xs text-secondary-400">
          I campi contrassegnati con <span className="text-primary-600">*</span> sono obbligatori
        </p>
      </div>
    </form>
  );
}

/* Section wrapper */

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

function Section({ icon, title, children }: SectionProps) {
  return (
    <fieldset className="space-y-4">
      <legend className="flex items-center gap-2 text-lg font-bold text-secondary-900 font-heading mb-2">
        <span className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center text-primary-600">
          {icon}
        </span>
        {title}
      </legend>
      {children}
    </fieldset>
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
          className={`input-field ${icon ? 'pl-10' : ''} ${hasError ? 'border-red-400 ring-1 ring-red-400' : ''}`}
        />
      </div>
      {hasError && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
}

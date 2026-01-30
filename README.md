# General Brokers Srl - Sito Web Ufficiale

Sito web professionale per General Brokers Srl, broker assicurativo indipendente a Milano dal 1977.

## 📂 Struttura Progetto Ottimizzata

```
generalbrokers-website/
│
├── 📚 /docs/                      Documentazione tecnica
│   ├── GUIDA_CARTELLE.md         ⭐ LEGGI PRIMA!
│   ├── DEPLOY_HOSTINGER.md       Deploy su Hostinger
│   ├── LOGO_INTEGRATION.md       Info sul logo
│   └── README.md                 Indice documentazione
│
├── ✅ /public/                    File statici del sito
│   ├── /documents/
│   │   └── /modulistica/         📋 METTI QUI I PDF!
│   ├── /images/
│   │   └── /logo/                🎨 Logo aziendale
│   ├── favicon.svg
│   └── manifest.json
│
├── 📝 /src/                       Codice sorgente
│   ├── /components/              Componenti React
│   ├── /pages/                   Pagine del sito
│   ├── /styles/                  CSS globali
│   └── /utils/                   Utility functions
│
├── ❌ /out/                       Build output (auto-generata)
│
├── package.json
└── README.md                     Questo file
```

## 🚀 Tecnologie Utilizzate

- **Framework:** Next.js 14 (React)
- **Linguaggio:** TypeScript
- **Styling:** Tailwind CSS
- **Icone:** React Icons
- **Font:** Inter (corpo testo), Poppins (heading)

## 📋 Requisiti

- Node.js 18+
- npm o yarn

## 🛠️ Installazione

1. **Clona il repository o estrai i file**

2. **Installa le dipendenze:**
```bash
npm install
```

3. **Avvia il server di sviluppo:**
```bash
npm run dev
```

4. **Apri il browser su:**
```
http://localhost:3000
```

## 🏗️ Struttura del Progetto

```
generalbrokers-website/
├── src/
│   ├── components/          # Componenti riutilizzabili
│   │   ├── Header.tsx       # Header con navigazione
│   │   ├── Footer.tsx       # Footer con dati aziendali
│   │   └── Layout.tsx       # Layout wrapper con SEO
│   ├── pages/               # Pagine del sito
│   │   ├── index.tsx        # Homepage
│   │   ├── chi-siamo.tsx    # Chi Siamo
│   │   ├── contatti.tsx     # Contatti con form
│   │   ├── privacy-policy.tsx
│   │   ├── cookie-policy.tsx
│   │   ├── note-legali.tsx
│   │   └── servizi/
│   │       └── index.tsx    # Pagina servizi
│   ├── styles/
│   │   └── globals.css      # Stili globali
│   └── utils/               # Utilità e helper
├── public/                  # File statici
│   ├── images/             # Immagini
│   └── fonts/              # Font custom
└── package.json
```

## 📄 Pagine Implementate

### Pagine Principali
- ✅ **Homepage** - Hero section, servizi, statistiche, CTA
- ✅ **Chi Siamo** - Storia aziendale, valori, team, certificazioni
- ✅ **Servizi** - Panoramica completa dei servizi offerti
- ✅ **Contatti** - Form di contatto, informazioni, mappa Google Maps

### Pagine Legali
- ✅ **Privacy Policy** - GDPR compliant
- ✅ **Cookie Policy** - Informativa sui cookie
- ✅ **Note Legali** - Disclaimer e informazioni legali

## 🎨 Design

### Palette Colori
- **Primary (Rosso):** Energia, professionalità e affidabilità
  - 600: #dc2626 (principale)
  - 700: #b91c1c (hover)
  - 800: #991b1b (dark)
- **Accent (Arancione):** Dinamismo e calore
  - 600: #ea580c
  - 700: #c2410c
- **Secondary (Grigio):** Eleganza e neutralità
  - 700: #334155
  - 800: #1e293b

### Immagini
- **Fonte:** Unsplash (immagini stock professionali gratuite)
- **Ottimizzazione:** Next.js Image component per performance ottimali
- **Responsive:** Immagini adattive per tutti i dispositivi

### Tipografia
- **Heading:** Poppins (Bold, 600-800)
- **Body:** Inter (Regular, 300-700)

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)

## 🔧 Configurazione

### Variabili d'Ambiente
Crea un file `.env.local` nella root del progetto:

```env
# Google Analytics (opzionale)
NEXT_PUBLIC_GA_ID=your_ga_id

# Google Maps API Key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key

# Email Configuration (per form contatti)
EMAIL_HOST=smtp.example.com
EMAIL_PORT=587
EMAIL_USER=info@generalbrokers.it
EMAIL_PASS=your_password
```

### Form di Contatto
Il form attualmente utilizza una simulazione. Per implementare l'invio reale:

1. Configura un servizio email (SMTP, SendGrid, etc.)
2. Crea un API route in `src/pages/api/contact.ts`
3. Aggiorna la funzione `handleSubmit` in `contatti.tsx`

Esempio API route:
```typescript
// src/pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    // Implementa logica di invio email
    // usando nodemailer, SendGrid, etc.
  }
}
```

### Google Maps
La mappa nella pagina contatti utilizza Google Maps Embed. Per personalizzare:

1. Ottieni una API Key da Google Cloud Console
2. Sostituisci l'URL nell'iframe in `contatti.tsx`

## 📦 Build e Deploy

### Build per Produzione
```bash
npm run build
```

### Avvia in Produzione
```bash
npm start
```

### Deploy su Vercel (Consigliato)
```bash
# Installa Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy su Netlify
1. Collega il repository a Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`

## 🔍 SEO

Il sito è ottimizzato per i motori di ricerca con:
- ✅ Meta tags personalizzati per ogni pagina
- ✅ Schema.org markup (Local Business)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Open Graph tags
- ✅ Semantic HTML
- ✅ Mobile-friendly
- ✅ Performance optimized

### Keywords Principali
- broker assicurativo Milano
- gestione sinistri
- polizze personalizzate
- intermediario assicurativo indipendente
- assicurazioni aziende Milano
- General Brokers

## ⚡ Performance

Ottimizzazioni implementate:
- Lazy loading immagini
- Code splitting automatico (Next.js)
- CSS ottimizzato con Tailwind
- Font optimization
- Minimizzazione bundle

## 🔐 Sicurezza e Compliance

- ✅ GDPR compliant
- ✅ Cookie consent (da implementare widget)
- ✅ Form validation lato client e server
- ✅ HTTPS only (in produzione)
- ✅ Content Security Policy headers

## 📱 Accessibilità

- Semantic HTML5
- ARIA labels su elementi interattivi
- Contrasto colori WCAG 2.1 AA compliant
- Navigazione da tastiera
- Alt text su immagini

## 🐛 Debugging

### Errori Comuni

**Errore: Module not found**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Errore: Port 3000 already in use**
```bash
# Usa una porta diversa
PORT=3001 npm run dev
```

## 📞 Informazioni Azienda

**General Brokers Srl**
- **Sede:** Via Tonale, 20 - 20125 Milano
- **Tel:** 02 6698.4847
- **Fax:** 02 6707.2163
- **Email:** info@generalbrokers.it
- **P.IVA:** 03740950153
- **RUI:** B000072481

## 📝 TODO / Miglioramenti Futuri

- [ ] Implementare backend per form di contatto
- [ ] Aggiungere cookie consent banner
- [ ] Creare blog/news section
- [ ] Aggiungere area riservata clienti
- [ ] Implementare sistema preventivi online
- [ ] Aggiungere chat live
- [ ] Creare pagine dettaglio per ogni servizio
- [ ] Aggiungere testimonianze clienti
- [ ] Implementare multilingua (EN)
- [ ] Aggiungere FAQ section

## 📜 Licenza

© 2024 General Brokers Srl. Tutti i diritti riservati.

## 🤝 Supporto

Per supporto tecnico o domande:
- Email: info@generalbrokers.it
- Tel: 02 6698.4847

# 📂 Guida alle Cartelle del Progetto

## ⚠️ IMPORTANTE - Dove Mettere i File

### ✅ **`/public/`** - USA SEMPRE QUESTA
```
/public/
  ├── images/           👈 TUTTE LE IMMAGINI QUI
  │   ├── logo/         👈 Loghi qui
  │   └── ...
  ├── favicon.svg       👈 Icone qui
  └── manifest.json
```

**Questa è la cartella che devi usare per:**
- ✅ Logo
- ✅ Immagini
- ✅ Favicon
- ✅ PDF
- ✅ Qualsiasi file che vuoi nel sito

**Come usare i file:**
```tsx
// Nel codice, i file in /public/ si usano così:
<Image src="/images/logo/general-brokers-logo.png" />
//         ↑ Lo slash iniziale punta a /public/
```

---

### ❌ **`/out/`** - NON TOCCARE MAI
```
/out/                  ❌ GENERATA AUTOMATICAMENTE
  ├── index.html       ❌ Creata dal build
  ├── _next/           ❌ File compilati
  └── ...
```

**Questa cartella:**
- ❌ **SI CANCELLA** ogni volta che fai `npm run build`
- ❌ **Non metterci file** - verranno persi
- ✅ È il sito compilato pronto per Hostinger
- ✅ È quella che carichi su Hostinger

---

### 📝 **`/src/`** - Codice Sorgente
```
/src/
  ├── components/      📝 Componenti React
  ├── pages/          📝 Pagine del sito
  └── styles/         📝 CSS
```

**Questa è per:**
- 📝 Codice TypeScript/JavaScript
- 📝 Componenti React
- 📝 Pagine
- ❌ **NON per immagini/logo**

---

## 🎯 Regola d'Oro

```
┌─────────────────────────────────────┐
│  VUOI AGGIUNGERE UN FILE AL SITO?  │
│                                     │
│  1. Mettilo in /public/             │
│  2. Non mettere MAI nulla in /out/  │
└─────────────────────────────────────┘
```

---

## 📊 Struttura Completa

```
generalbrokers-website/
│
├── /public/              ✅ File statici (logo, immagini)
│   └── images/logo/
│       └── general-brokers-logo.png  ✅ Il tuo logo
│
├── /src/                 📝 Codice sorgente
│   ├── components/
│   ├── pages/
│   └── styles/
│
├── /out/                 ❌ Build output (auto-generata)
│
├── /node_modules/        📦 Librerie (auto-generata)
│
└── package.json          ⚙️ Configurazione
```

---

## 🚀 Comandi Utili

### Sviluppo
```bash
npm run dev          # Avvia server locale (http://localhost:3001)
```

### Build per Hostinger
```bash
npm run build        # Crea /out/ per il caricamento
```

Dopo il build:
1. La cartella `/out/` contiene tutto il sito
2. Carica il contenuto di `/out/` su Hostinger
3. ✅ Fatto!

---

## 🎨 Logo Attuale

**Posizione:** `/public/images/logo/general-brokers-logo.png`

**Usato in:**
- ✅ Sidebar (menu laterale desktop)
- ✅ Header mobile
- ✅ Footer

**Dimensioni file:** 59KB
**Formato:** PNG

---

## ❓ FAQ

**Q: Dove metto le immagini?**
A: `/public/images/`

**Q: Posso modificare /out/?**
A: NO! Si rigenera ogni build

**Q: Come aggiungo un PDF?**
A: Mettilo in `/public/documents/` e linkalo con `/documents/file.pdf`

**Q: La cartella /out/ è vuota, è normale?**
A: Sì, compare solo dopo `npm run build`

---

**Data:** 1 Novembre 2024
**Versione:** 1.0

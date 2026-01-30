# 📸 Guida alle Immagini - General Brokers

Questa cartella contiene tutte le immagini utilizzate nel sito web di General Brokers.

## 📁 Struttura delle Cartelle

```
images/
├── hero/               # Immagini per sezioni hero
├── about/              # Immagini pagina Chi Siamo
├── services/           # Immagini servizi
├── logo/               # Loghi aziendali
└── misc/               # Immagini varie
```

## 🖼️ Immagini Richieste

### Hero Section (Homepage)
**Cartella:** `/hero/`

| File | Dimensioni | Descrizione |
|------|-----------|-------------|
| `duomo-milano.jpg` | 1920x1080px | Duomo di Milano (hero principale) |
| `business.jpg` | 1920x1080px | Business/ufficio professionale |
| `handshake.jpg` | 1920x1080px | Stretta di mano partnership |

### Chi Siamo
**Cartella:** `/about/`

| File | Dimensioni | Descrizione |
|------|-----------|-------------|
| `team.jpg` | 1200x800px | Team di lavoro |
| `office.jpg` | 1200x800px | Ufficio professionale |
| `milano.jpg` | 1200x800px | Skyline Milano |
| `protection.jpg` | 1200x800px | Protezione famiglia/casa/auto |

### Servizi
**Cartella:** `/services/`

| File | Dimensioni | Descrizione |
|------|-----------|-------------|
| `insurance.jpg` | 800x600px | Assicurazioni generiche |
| `claims.jpg` | 800x600px | Gestione sinistri |
| `consulting.jpg` | 800x600px | Consulenza professionale |
| `business.jpg` | 800x600px | Business/aziende |
| `family.jpg` | 800x600px | Famiglia |
| `car.jpg` | 800x600px | Automobile |
| `support.jpg` | 800x600px | Supporto clienti |
| `phone.jpg` | 800x600px | Contatto telefonico |

### Logo
**Cartella:** `/logo/`

| File | Formato | Descrizione |
|------|---------|-------------|
| `logo.png` | PNG (200x60px circa) | Logo principale (trasparente) |
| `logo-white.png` | PNG (200x60px circa) | Logo bianco per sfondi scuri |
| `favicon.ico` | ICO (32x32px) | Favicon del sito |

### Misc (Opzionale)
**Cartella:** `/misc/`

| File | Dimensioni | Descrizione |
|------|-----------|-------------|
| `abstract1.jpg` | 1920x1080px | Pattern decorativo 1 |
| `abstract2.jpg` | 1920x1080px | Pattern decorativo 2 |

## 📝 Linee Guida

### Formato File
- **Fotografie:** JPG (qualità 80-90%)
- **Loghi/Grafiche:** PNG (con trasparenza se necessario)
- **Favicon:** ICO o PNG

### Ottimizzazione
Prima di caricare le immagini:
1. **Ridimensiona** alle dimensioni corrette
2. **Comprimi** usando strumenti come:
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)
3. **Verifica** la qualità visiva

### Naming Convention
- Usa **minuscole**
- Separa le parole con **trattino** (-)
- Sii **descrittivo**
- Esempi: `duomo-milano.jpg`, `team-office.jpg`

### Dimensioni Target
- **Hero:** 1920x1080px (16:9)
- **Sezioni:** 1200x800px (3:2)
- **Cards:** 800x600px (4:3)
- **Logo:** Circa 200x60px
- **Peso:** Max 200-300KB per immagine

## 🔄 Fallback

Il sito è configurato con **fallback automatici** a Unsplash se le immagini locali non sono presenti.

Per usare le immagini locali, basta caricarle con i nomi corretti nelle rispettive cartelle.

## 🎨 Stile Fotografico Consigliato

- **Professionale e pulito**
- **Colori caldi** (rossi, arancioni per abbinarsi al brand)
- **Buona illuminazione**
- **Alta risoluzione**
- **Soggetti italiani/Milano** quando possibile

## 🚀 Come Aggiungere Nuove Immagini

1. Ottimizza l'immagine
2. Rinominala secondo la convenzione
3. Inseriscila nella cartella appropriata
4. Verifica che il nome corrisponda a quello in `/src/utils/images.ts`
5. Riavvia il server di sviluppo se necessario

## ✅ Checklist Pre-Deploy

- [ ] Tutte le immagini hero presenti
- [ ] Tutte le immagini about presenti
- [ ] Tutte le immagini services presenti
- [ ] Logo e favicon presenti
- [ ] Immagini ottimizzate (< 300KB)
- [ ] Nomi file corretti
- [ ] Test su dispositivi mobile

## 📧 Supporto

Per domande sulla configurazione delle immagini, contatta il team di sviluppo.

---

**General Brokers Srl** - Via Tonale, 20 - 20125 Milano

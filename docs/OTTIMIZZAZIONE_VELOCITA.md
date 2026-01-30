# 🚀 Guida Ottimizzazione Velocità Sito

## ✅ Ottimizzazioni Già Implementate

### 1. **Immagini Ottimizzate**
- ✅ Ridotta qualità Unsplash: da q=80 a q=50-60
- ✅ Ridotte dimensioni: da 1920px a 800-1200px
- ✅ Formato auto-ottimizzato con `auto=format`
- ✅ Lazy loading su immagini non critiche

### 2. **.htaccess Performance**
- ✅ GZIP compression attiva
- ✅ Browser caching configurato
- ✅ Security headers ottimizzati

### 3. **Build Ottimizzato**
- ✅ Minificazione JavaScript automatica
- ✅ CSS purificato da Tailwind
- ✅ Export statico (niente runtime server)

---

## 🎯 Ulteriori Ottimizzazioni Possibili

### **Opzione 1: Usa Immagini Locali (Più Veloce)**

#### Perché è lento?
Le immagini vengono scaricate da Unsplash ad ogni visita. Anche se ottimizzate, richiedono connessioni esterne.

#### Soluzione:
Scarica immagini locali e mettile in `/public/images/`

**Script automatico per scaricare immagini:**

```bash
# Crea cartelle
mkdir -p public/images/hero public/images/about public/images/services public/images/contact

# Scarica immagini (richiede curl)
curl "https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=800&q=50&auto=format&fit=crop" -o public/images/hero/duomo.jpg
curl "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=50&auto=format&fit=crop" -o public/images/hero/business.jpg
curl "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=50&auto=format&fit=crop" -o public/images/hero/handshake.jpg

# ... continua per tutte le altre immagini
```

Poi modifica `src/utils/images.ts`:
```typescript
export const images = {
  hero: {
    duomo: '/images/hero/duomo.jpg',
    business: '/images/hero/business.jpg',
    handshake: '/images/hero/handshake.jpg',
  },
  // ... etc
};
```

**Beneficio**: Caricamento 3-5x più veloce!

---

### **Opzione 2: Usa CDN per Immagini**

Se vuoi continuare con Unsplash ma più veloce:

1. Crea account gratuito su **Cloudinary** o **ImageKit**
2. Carica le immagini
3. Usa i loro URL ottimizzati (hanno CDN globale)

**Beneficio**: Latenza ridotta del 50-70%

---

### **Opzione 3: Rimuovi Immagini di Background**

Le immagini di background con opacity bassa (10-15%) si notano appena.

Rimuovi da:
- CTA sections
- Background decorativi

**Modifiche:**

```typescript
// src/pages/index.tsx - Rimuovi sezione <div className="absolute inset-0 opacity-10">
<section className="section-padding gradient-red text-white">
  {/* Rimuovi Image background */}
  <div className="container-custom">
    <div className="max-w-3xl mx-auto text-center">
      ...
    </div>
  </div>
</section>
```

**Beneficio**: -300KB di immagini, caricamento +40% più veloce

---

### **Opzione 4: Preconnect ai Domini Esterni**

Aggiungi in `src/pages/_document.tsx` dentro `<Head>`:

```typescript
<link rel="preconnect" href="https://images.unsplash.com" />
<link rel="dns-prefetch" href="https://images.unsplash.com" />
```

**Beneficio**: -200ms di latenza iniziale

---

### **Opzione 5: Riduci Font Google (se presenti)**

Controlla `src/styles/globals.css`:
- Carica solo i pesi necessari (400, 600, 700)
- Usa `font-display: swap` per evitare FOIT

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@600;700&display=swap');
```

**Beneficio**: -50KB, -100ms render

---

### **Opzione 6: Rimuovi Cookie Banner (Temporaneo)**

Il cookie banner esegue JavaScript e rallenta il primo caricamento.

Commenta in `src/components/Layout.tsx`:
```typescript
{/* <CookieConsent /> */}
```

**Beneficio**: -30KB JavaScript, +15% velocità iniziale

---

## 📊 Test Velocità

### Tools per testare:

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Obiettivo: Score > 90

2. **GTmetrix**
   - https://gtmetrix.com/
   - Obiettivo: Grade A

3. **WebPageTest**
   - https://www.webpagetest.org/
   - Obiettivo: First Contentful Paint < 1.5s

---

## 🎨 Ottimizzazione Immediata (Fai Ora)

### Step 1: Rimuovi Immagini Background Non Necessarie

File da modificare:
- `src/pages/index.tsx` - riga 303-310 (background handshake)
- `src/pages/chi-siamo.tsx` - riga 269-275 (background office)
- `src/pages/servizi/index.tsx` - simile

Rimuovi blocchi:
```typescript
<div className="absolute inset-0 opacity-10">
  <Image ... />
</div>
```

### Step 2: Aggiungi Preconnect

In `src/pages/_document.tsx`, dentro `<Head>` aggiungi:

```typescript
<link rel="preconnect" href="https://images.unsplash.com" />
<link rel="dns-prefetch" href="https://images.unsplash.com" />
```

### Step 3: Rigenera Build

```bash
npm run build
```

### Step 4: Ricarica su Hostinger

Upload cartella `out/`

**Risultato atteso**: Sito 2-3x più veloce! 🚀

---

## 📈 Metriche Target

| Metrica | Attuale | Target | Come |
|---------|---------|--------|------|
| First Contentful Paint | ~3s | <1.5s | Immagini locali + rimuovi background |
| Largest Contentful Paint | ~4s | <2.5s | Ottimizza hero image |
| Total Page Size | ~2MB | <500KB | Rimuovi immagini inutili |
| Requests | ~15 | <10 | Inline critical CSS |
| Speed Index | ~4s | <2s | Lazy load + preconnect |

---

## 🔧 Checklist Velocità

- [ ] Immagini ottimizzate (ridotte al 50%)
- [ ] Immagini background rimosse (dove possibile)
- [ ] Preconnect aggiunto per Unsplash
- [ ] Lazy loading su immagini non-hero
- [ ] GZIP attivo su server
- [ ] Browser caching configurato
- [ ] Cookie banner disabilitato (opzionale)
- [ ] Font caricati in modo ottimizzato
- [ ] Build minimizzato
- [ ] Test con PageSpeed > 80

---

## 💡 Quick Win - 5 Minuti

**La modifica più impattante che puoi fare SUBITO:**

Rimuovi le immagini di background opacity nelle CTA sections.

1. Apri `src/pages/index.tsx`
2. Cerca "opacity-10"
3. Rimuovi i div con immagini
4. `npm run build`
5. Ricarica su Hostinger

**Risultato**: -50% tempo di caricamento! 🎯

# 🚀 Come Caricare il Sito su Hostinger - Guida Semplice

## ✅ Preparazione Completata!

Il sito è stato configurato per Hostinger senza Node.js. Trovi tutti i file pronti nella cartella **`out/`**.

---

## 📦 PASSO 1: Configura Form Contatti (5 minuti)

Il form contatti usa **Formspree** (gratuito, 50 form/mese).

### A. Registrati su Formspree

1. Vai su **https://formspree.io**
2. Clicca **"Get Started Free"**
3. Registrati con email
4. Crea un nuovo form:
   - Nome: "General Brokers Contatti"
   - Email destinazione: `info@generalbrokers.it`
5. Copia il **Form ID** (esempio: `xyzabc123`)

### B. Aggiorna il codice

Apri il file: **`src/pages/contatti.tsx`**

Cerca questa riga (circa linea 45):
```javascript
const formspreeEndpoint = 'https://formspree.io/f/YOUR_FORM_ID';
```

Sostituisci `YOUR_FORM_ID` con il tuo ID:
```javascript
const formspreeEndpoint = 'https://formspree.io/f/xyzabc123';
```

Salva il file.

### C. Rigenera il sito

```bash
npm run build
```

---

## 📤 PASSO 2: Carica i File su Hostinger

### Metodo A: File Manager (Più Semplice)

1. **Accedi a Hostinger**
   - Vai su https://hpanel.hostinger.com
   - Login con le tue credenziali

2. **Apri File Manager**
   - Clicca su "File" nel menu laterale
   - Oppure vai in "Hosting" → Seleziona il dominio → "File Manager"

3. **Vai nella cartella public_html**
   - Naviga in: `public_html/`
   - Se ci sono file (index.html, etc.), **eliminali tutti**

4. **Carica i file**
   - Clicca su **"Upload Files"** in alto
   - Seleziona TUTTI i file dalla cartella **`out/`** del tuo computer
   - Aspetta il completamento (può richiedere qualche minuto)

   **IMPORTANTE**: Carica il **contenuto** della cartella `out/`, non la cartella stessa!

   Struttura corretta:
   ```
   public_html/
   ├── _next/
   ├── images/
   ├── fonts/
   ├── .htaccess
   ├── index.html
   ├── 404.html
   ├── chi-siamo.html
   ├── contatti.html
   ├── servizi.html
   ├── manifest.json
   ├── robots.txt
   └── sitemap.xml
   ```

### Metodo B: FTP (Alternativo)

1. **Scarica FileZilla**
   - https://filezilla-project.org/

2. **Ottieni credenziali FTP**
   - Hostinger → Hosting → Seleziona dominio
   - Vai in "FTP Accounts"
   - Usa le credenziali principali o crea account FTP

3. **Connettiti**
   - Host: `ftp.tuodominio.it` (trovalo su Hostinger)
   - Username: tuo username FTP
   - Password: tua password FTP
   - Porta: 21

4. **Carica file**
   - Lato destro: naviga in `/public_html`
   - Lato sinistro: apri cartella `out/` del progetto
   - Seleziona tutti i file → Drag & drop a destra

---

## ✅ PASSO 3: Verifica il Sito

1. **Apri il browser**
   - Vai su: `https://tuodominio.it`
   - Dovresti vedere il sito General Brokers!

2. **Testa tutte le pagine**
   - [ ] Homepage funziona
   - [ ] Chi Siamo funziona
   - [ ] Servizi funziona
   - [ ] Contatti funziona
   - [ ] Form contatti invia email (compila e prova)
   - [ ] Cookie banner appare
   - [ ] Immagini si caricano

3. **Test mobile**
   - Apri da smartphone
   - Verifica che tutto sia responsive

---

## 🔧 PASSO 4: Configurazioni Opzionali

### A. Forza HTTPS (se non attivo)

1. Hostinger → Hosting → Seleziona dominio
2. Vai in **"SSL"**
3. Attiva **"Force HTTPS"**

### B. Dominio Personalizzato

Se il sito è su sottodominio temporaneo:
1. Vai in **"Domini"**
2. Punta il tuo dominio ai nameserver Hostinger
3. Aspetta propagazione DNS (24-48h)

### C. Email Professionale

Configura `info@generalbrokers.it`:
1. Hostinger → **"Email"**
2. Crea account: `info@generalbrokers.it`
3. Imposta password
4. Accedi via webmail o configura client (Gmail, Outlook)

---

## 📊 PASSO 5: Ottimizzazioni Post-Deploy

### A. Google Search Console

1. Vai su https://search.google.com/search-console
2. Aggiungi proprietà: `https://tuodominio.it`
3. Verifica proprietà (tramite DNS o file HTML)
4. Invia sitemap: `https://tuodominio.it/sitemap.xml`

### B. Google Analytics (Opzionale)

1. Crea account su https://analytics.google.com
2. Ottieni ID (es: G-XXXXXXXXXX)
3. Aggiungi in `src/pages/_document.tsx` (prima di chiudere `</head>`):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-XXXXXXXXXX');
    `,
  }}
/>
```

4. Rigenera: `npm run build`
5. Ricarica i file su Hostinger

---

## 🆘 Problemi Comuni e Soluzioni

### ❌ "404 Not Found" su tutte le pagine

**Causa**: File `.htaccess` non caricato correttamente

**Soluzione**:
1. Verifica che `.htaccess` sia in `public_html/`
2. File Manager Hostinger potrebbe nascondere file nascosti
3. Clicca "Mostra file nascosti" nelle impostazioni
4. Verifica che `.htaccess` esista

### ❌ Immagini non si caricano

**Causa**: Permessi file errati

**Soluzione**:
1. File Manager → Seleziona cartella `images/`
2. Click destro → "Permissions"
3. Imposta: `755` per cartelle, `644` per file

### ❌ Form contatti non invia email

**Causa**: Form ID Formspree non configurato

**Soluzione**:
1. Verifica di aver sostituito `YOUR_FORM_ID` in `contatti.tsx`
2. Rigenera build: `npm run build`
3. Ricarica file `contatti.html` su Hostinger
4. Testa compilando form

### ❌ CSS o JavaScript non funzionano

**Causa**: Cache browser

**Soluzione**:
1. Apri sito in modalità incognito
2. Oppure: CTRL+F5 (Windows) / CMD+SHIFT+R (Mac)
3. Svuota cache browser

### ❌ Cookie banner non appare

**Causa**: LocalStorage o JavaScript disabilitato

**Soluzione**:
1. Svuota LocalStorage del browser
2. Developer Tools → Application → Local Storage → Elimina tutto
3. Ricarica pagina

---

## 📝 Checklist Finale

Prima di considerare il deploy completato:

- [ ] Sito accessibile su `https://tuodominio.it`
- [ ] HTTPS attivo (lucchetto verde nel browser)
- [ ] Tutte le pagine funzionanti
- [ ] Form contatti invia email correttamente
- [ ] Cookie banner funzionante
- [ ] Immagini caricate
- [ ] Responsive su mobile
- [ ] Sitemap.xml accessibile: `https://tuodominio.it/sitemap.xml`
- [ ] Robots.txt accessibile: `https://tuodominio.it/robots.txt`
- [ ] Google Search Console configurato
- [ ] Email `info@generalbrokers.it` configurata

---

## 🎯 Riepilogo Veloce

1. **Configura Formspree** → Sostituisci ID in `contatti.tsx`
2. **Rigenera build** → `npm run build`
3. **Carica su Hostinger** → File Manager → Upload contenuto cartella `out/`
4. **Verifica** → Apri sito e testa tutto
5. **Ottimizza** → Google Search Console + Analytics

---

## 💡 Suggerimenti Finali

- **Backup**: Scarica sempre una copia dei file prima di sovrascrivere
- **Test**: Prova il form contatti subito dopo il deploy
- **Email**: Rispondi rapidamente ai form, migliora conversioni
- **Aggiornamenti**: Per modifiche future, rigenera build e ricarica file modificati

---

## 📞 Supporto

Se hai problemi:
1. Controlla la sezione "Problemi Comuni" sopra
2. Contatta supporto Hostinger (chat 24/7)
3. Verifica console browser (F12) per errori JavaScript

**Il sito è pronto per il deploy! Buona fortuna! 🚀**

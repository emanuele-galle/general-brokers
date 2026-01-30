# Deploy su Hostinger - Guida Completa

## Prerequisiti

Controlla il tuo piano Hostinger:
- **Piano Business/Premium con Node.js**: Usa il Metodo 1 (Node.js App)
- **Piano base/WordPress**: Usa il Metodo 2 (Export Statico)

---

## METODO 1: Deploy con Node.js (Consigliato)

### Requisiti:
- Piano Hostinger con supporto Node.js
- Accesso SSH

### Passi:

#### 1. Prepara il progetto

```bash
# Nella tua cartella locale
npm run build
```

#### 2. Accedi a Hostinger via SSH

```bash
ssh username@your-domain.com
```

#### 3. Carica i file

Opzione A - Via Git (consigliato):
```bash
# Sul tuo computer locale, crea un repository
git init
git add .
git commit -m "Initial commit"

# Pusha su GitHub/GitLab
git remote add origin <your-repo-url>
git push -u origin main

# Sul server Hostinger
cd domains/your-domain.com/public_html
git clone <your-repo-url> .
```

Opzione B - Via FTP/File Manager:
1. Apri File Manager su Hostinger
2. Vai in `domains/your-domain.com/public_html`
3. Carica tutti i file tranne `node_modules` e `.next`

#### 4. Installa dipendenze sul server

```bash
cd domains/your-domain.com/public_html
npm install --production
npm run build
```

#### 5. Configura Node.js App su Hostinger

1. Vai nel pannello Hostinger
2. Cerca "Node.js App" o "Setup Node.js"
3. Configura:
   - **Application Root**: `/domains/your-domain.com/public_html`
   - **Application URL**: `your-domain.com`
   - **Application Startup File**: `server.js` (vedi sotto)
   - **Node.js Version**: 18.x o superiore

#### 6. Crea file server.js

```bash
# Sul server, nella root del progetto
nano server.js
```

Copia questo contenuto:
```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true);
      await handle(req, res, parsedUrl);
    } catch (err) {
      console.error('Error occurred handling', req.url, err);
      res.statusCode = 500;
      res.end('internal server error');
    }
  })
    .once('error', (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
```

#### 7. Configura variabili d'ambiente

```bash
nano .env.production
```

Aggiungi:
```env
NODE_ENV=production
PORT=3000
```

#### 8. Avvia l'applicazione

Dal pannello Hostinger, avvia l'app Node.js o:
```bash
pm2 start server.js --name generalbrokers
pm2 save
pm2 startup
```

---

## METODO 2: Export Statico (Piano Base)

### Questo metodo funziona su TUTTI i piani Hostinger

⚠️ **LIMITAZIONE**: Il form contatti NON funzionerà (richiede API backend)

### Passi:

#### 1. Modifica next.config.js

Apri `next.config.js` e **decommenta** queste righe:
```javascript
output: 'export',
images: { unoptimized: true },
```

E **commenta/rimuovi** la funzione `headers()` (non supportata in export statico)

#### 2. Disabilita API route

Rinomina o rimuovi:
```bash
mv src/pages/api/contact.ts src/pages/api/contact.ts.disabled
```

#### 3. Build statico

```bash
npm run build
```

Questo creerà una cartella `out/` con tutti i file HTML statici.

#### 4. Carica su Hostinger

**Via File Manager:**
1. Accedi a Hostinger → File Manager
2. Vai in `public_html`
3. Elimina tutti i file esistenti (index.html, etc.)
4. Carica tutto il contenuto della cartella `out/`

**Via FTP:**
1. Usa FileZilla o simili
2. Connettiti con le credenziali FTP di Hostinger
3. Vai in `/public_html`
4. Carica il contenuto di `out/`

#### 5. Configura .htaccess

Crea un file `.htaccess` in `public_html`:

```apache
# Redirect tutto a HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Gestione SPA per Next.js
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]

# Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Compressione
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/json
</IfModule>
```

---

## METODO 3: Vercel (Alternativa Gratuita - Consigliata)

Next.js è fatto da Vercel, quindi il deploy è ottimale e GRATUITO.

### Passi:

1. **Crea account su Vercel**: https://vercel.com
2. **Connetti il repository GitHub**:
   ```bash
   # Sul tuo computer
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```
3. **Import su Vercel**:
   - Vai su Vercel → New Project
   - Importa il repository
   - Vercel rileva automaticamente Next.js
   - Deploy automatico!

4. **Configura dominio personalizzato**:
   - Settings → Domains
   - Aggiungi `generalbrokers.it`
   - Segui istruzioni DNS

### Vantaggi Vercel:
- ✅ Deploy automatico ad ogni push
- ✅ HTTPS automatico
- ✅ CDN globale
- ✅ Form API funzionanti
- ✅ Analytics gratuito
- ✅ Zero configurazione

---

## Configurazione Email Form (Solo Metodo 1 e Vercel)

### Opzione A: SendGrid (Consigliato)

```bash
npm install @sendgrid/mail
```

Modifica `/src/pages/api/contact.ts`:
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'info@generalbrokers.it',
  from: 'noreply@generalbrokers.it',
  subject: `Nuova richiesta: ${sanitizedData.tipoRichiesta}`,
  html: `<strong>Nome:</strong> ${sanitizedData.nome} ${sanitizedData.cognome}<br>...`,
};

await sgMail.send(msg);
```

Aggiungi in `.env.production`:
```env
SENDGRID_API_KEY=your_sendgrid_api_key
```

### Opzione B: SMTP Gmail

```bash
npm install nodemailer
```

Vedi implementazione in `/src/pages/api/contact.ts` (già preparata)

---

## Checklist Deploy

- [ ] Backup del sito attuale (se esiste)
- [ ] Build senza errori (`npm run build`)
- [ ] Test in locale (`npm start`)
- [ ] File caricati su server
- [ ] DNS configurato correttamente
- [ ] HTTPS attivo
- [ ] Form contatti testato
- [ ] Cookie banner funzionante
- [ ] Tutte le pagine accessibili
- [ ] Google Analytics configurato (opzionale)
- [ ] Sitemap.xml accessibile
- [ ] robots.txt accessibile

---

## Troubleshooting

### "500 Internal Server Error"
- Controlla i log Node.js su Hostinger
- Verifica che `npm install` sia completato
- Controlla permessi file (755 per cartelle, 644 per file)

### "404 su tutte le pagine"
- Verifica configurazione `.htaccess`
- Controlla che i file siano in `public_html`

### "Immagini non si caricano"
- In export statico, usa `images: { unoptimized: true }`
- Verifica path delle immagini

### "Form non funziona"
- In export statico, il form NON PUÒ funzionare
- Usa Metodo 1 (Node.js) o integra servizio esterno (Formspree, Basin)

---

## Raccomandazione Finale

**Per questo progetto Next.js, consiglio:**

1. **Prima scelta**: Vercel (gratuito, zero config, ottimale)
2. **Seconda scelta**: Hostinger con Node.js (se già hai il piano)
3. **Terza scelta**: Export statico su Hostinger (perde funzionalità)

Quale metodo preferisci usare?

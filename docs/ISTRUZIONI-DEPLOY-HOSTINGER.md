# 🚀 Istruzioni Deploy su Hostinger - General Brokers

## 📦 File Preparati per il Deploy

Il file **`generalbrokers-hostinger-deploy.zip`** contiene tutto il necessario per il deploy.

---

## 🔧 Passaggi per il Deploy su Hostinger

### 1️⃣ Accedi al Pannello Hostinger

1. Vai su [https://www.hostinger.it](https://www.hostinger.it)
2. Accedi con le tue credenziali
3. Seleziona il tuo hosting

### 2️⃣ Accedi al File Manager

1. Nel pannello Hostinger, clicca su **"File Manager"** o **"Gestione File"**
2. Naviga nella cartella **`public_html`** (o la cartella principale del tuo dominio)

### 3️⃣ Pulisci la Directory (se necessario)

Se ci sono già file nella cartella `public_html`:
1. **Fai un backup** dei file esistenti (scaricali o spostali in una cartella di backup)
2. Elimina i file vecchi dalla cartella `public_html`

### 4️⃣ Carica i File

**Opzione A - Upload ZIP (consigliato):**
1. Clicca su **"Upload"** o **"Carica File"**
2. Seleziona il file **`generalbrokers-hostinger-deploy.zip`**
3. Aspetta che il caricamento sia completato
4. Tasto destro sul file ZIP → **"Extract"** o **"Estrai"**
5. Seleziona la cartella **`public_html`** come destinazione
6. Una volta estratto, **elimina il file ZIP**

**Opzione B - Upload manuale della cartella `out`:**
1. Estrai localmente il file ZIP
2. Carica tutti i file dalla cartella `out` direttamente in `public_html`

### 5️⃣ Verifica Struttura File

La struttura in `public_html` dovrebbe essere:

```
public_html/
├── .htaccess          ← IMPORTANTE per routing
├── index.html
├── chi-siamo.html
├── contatti.html
├── servizi.html
├── privacy-policy.html
├── cookie-policy.html
├── note-legali.html
├── 404.html
├── manifest.json
├── robots.txt
├── sitemap.xml
├── _next/             ← Cartella JavaScript/CSS
├── images/            ← Immagini
└── fonts/
```

### 6️⃣ Configura SSL (Certificato HTTPS)

1. Nel pannello Hostinger, vai su **"SSL"**
2. Attiva il certificato SSL gratuito Let's Encrypt
3. Aspetta 5-10 minuti per l'attivazione
4. Una volta attivo, modifica il file `.htaccess`:
   - Apri il file `.htaccess` con l'editor di Hostinger
   - **Decommenta** (rimuovi il `#`) dalle righe HTTPS:
   
   ```apache
   # Cambia da:
   # RewriteCond %{HTTPS} off
   # RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   
   # A:
   RewriteCond %{HTTPS} off
   RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
   ```

### 7️⃣ Test del Sito

Visita il tuo sito e verifica:

✅ **Homepage:** `https://tuodominio.it`
✅ **Chi Siamo:** `https://tuodominio.it/chi-siamo`
✅ **Servizi:** `https://tuodominio.it/servizi`
✅ **Contatti:** `https://tuodominio.it/contatti`

---

## 🔄 Come Aggiornare il Sito

### Metodo 1: Build Locale + Upload

```bash
# 1. Nella cartella del progetto
npm run build

# 2. Crea nuovo ZIP
zip -r update.zip out/*

# 3. Carica su Hostinger ed estrai in public_html
```

### Metodo 2: Deploy Automatico con GitHub + Hostinger Git

Contattami per configurare il deploy automatico tramite GitHub.

---

## ⚙️ Configurazioni Aggiuntive

### Redirect www → non-www (opzionale)

Nel file `.htaccess`, decommenta queste righe:

```apache
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
```

### Performance e Cache

Il file `.htaccess` include già:
- ✅ Compressione GZIP
- ✅ Cache del browser (1 anno per immagini, 1 mese per CSS/JS)
- ✅ Headers di sicurezza
- ✅ Gestione URL pulite (senza .html)

---

## 🆘 Problemi Comuni

### ❌ Errore 404 sulle pagine

**Soluzione:** Verifica che il file `.htaccess` sia presente in `public_html`

### ❌ CSS/JS non si caricano

**Soluzione:** Verifica che la cartella `_next` sia stata caricata correttamente

### ❌ Immagini non si vedono

**Soluzione:** Verifica che la cartella `images` sia presente e contenga le immagini

### ❌ Redirect HTTPS non funziona

**Soluzione:** Aspetta 10 minuti dopo l'attivazione SSL, poi svuota la cache del browser

---

## 📊 Ottimizzazioni Post-Deploy

### Google Search Console
1. Vai su [Google Search Console](https://search.google.com/search-console)
2. Aggiungi il tuo dominio
3. Invia la sitemap: `https://tuodominio.it/sitemap.xml`

### Google Analytics (se configurato)
Verifica che il tracking ID sia corretto nel codice

### PageSpeed Insights
1. Testa su [PageSpeed Insights](https://pagespeed.web.dev/)
2. Il sito dovrebbe avere un punteggio 90+ su mobile e desktop

---

## 📞 Contatti per Supporto

Per assistenza tecnica sul deploy:
- **Email:** info@generalbrokers.it
- **Telefono:** 02 6698.4847

---

## ✅ Checklist Deploy

- [ ] File ZIP caricato su Hostinger
- [ ] File estratti in `public_html`
- [ ] File `.htaccess` presente
- [ ] SSL attivato e HTTPS funzionante
- [ ] Tutte le pagine accessibili
- [ ] Form contatti testato (se attivo)
- [ ] Sitemap inviata a Google
- [ ] Test performance su PageSpeed

---

**Data ultima build:** 10 Ottobre 2025
**Versione:** 1.0.0

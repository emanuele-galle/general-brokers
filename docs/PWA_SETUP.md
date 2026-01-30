# Setup PWA - Istruzioni

## Icone PWA da creare

Per completare il setup PWA, è necessario creare le icone nelle seguenti dimensioni e salvarle nella cartella `/public/icons/`:

### Icone richieste:
- `icon-72x72.png` (72x72 px)
- `icon-96x96.png` (96x96 px)
- `icon-128x128.png` (128x128 px)
- `icon-144x144.png` (144x144 px)
- `icon-152x152.png` (152x152 px)
- `icon-192x192.png` (192x192 px)
- `icon-384x384.png` (384x384 px)
- `icon-512x512.png` (512x512 px)

### Favicon:
- `favicon-16x16.png` (16x16 px) → salvare in `/public/`
- `favicon-32x32.png` (32x32 px) → salvare in `/public/`
- `favicon.ico` → salvare in `/public/`

## Come creare le icone

### Opzione 1: Strumento online
1. Vai su https://realfavicongenerator.net/
2. Carica il logo di General Brokers (formato PNG, minimo 512x512px)
3. Configura le opzioni:
   - Background color: `#dc2626` (rosso primary)
   - Nome: "General Brokers"
4. Genera e scarica le icone
5. Copia i file nelle cartelle appropriate

### Opzione 2: ImageMagick (CLI)
Se hai ImageMagick installato:

```bash
# Naviga nella cartella public
cd public

# Crea la cartella icons se non esiste
mkdir -p icons

# Assumendo che hai un logo.png di dimensioni 512x512 o superiori
# Genera tutte le dimensioni necessarie
convert logo.png -resize 72x72 icons/icon-72x72.png
convert logo.png -resize 96x96 icons/icon-96x96.png
convert logo.png -resize 128x128 icons/icon-128x128.png
convert logo.png -resize 144x144 icons/icon-144x144.png
convert logo.png -resize 152x152 icons/icon-152x152.png
convert logo.png -resize 192x192 icons/icon-192x192.png
convert logo.png -resize 384x384 icons/icon-384x384.png
convert logo.png -resize 512x512 icons/icon-512x512.png

# Favicon
convert logo.png -resize 16x16 favicon-16x16.png
convert logo.png -resize 32x32 favicon-32x32.png
convert logo.png -resize 16x16 -resize 32x32 -colors 256 favicon.ico
```

### Opzione 3: Photoshop/Figma
1. Apri il logo in Photoshop o Figma
2. Per ogni dimensione richiesta:
   - Ridimensiona l'immagine
   - Esporta come PNG
   - Salva con il nome corretto nella cartella appropriata

## Design dell'icona

L'icona dovrebbe:
- Avere uno sfondo rosso (#dc2626) o bianco
- Contenere il logo o le iniziali "GB"
- Essere leggibile anche a dimensioni ridotte
- Avere margini adeguati (padding ~10% per evitare clipping)

### Esempio design semplice:
- Fondo rosso (#dc2626)
- Lettere "GB" in bianco (#ffffff)
- Font: Poppins Bold
- Padding: 10-15% sui bordi

## Testing PWA

Dopo aver aggiunto le icone:

1. **Build del progetto:**
   ```bash
   npm run build
   npm start
   ```

2. **Test su mobile:**
   - Apri il sito su smartphone
   - Menu browser → "Aggiungi alla schermata Home"
   - Verifica che l'icona appaia correttamente

3. **Test con Lighthouse:**
   - Apri Chrome DevTools
   - Tab "Lighthouse"
   - Seleziona "Progressive Web App"
   - Run audit
   - Obiettivo: score > 90

4. **Verifica manifest.json:**
   - Apri: `http://localhost:3000/manifest.json`
   - Controlla che tutti i campi siano corretti

## Opzioni aggiuntive (facoltativo)

### Service Worker per offline
Per aggiungere funzionalità offline completa, considera:
- `next-pwa` package
- Workbox
- Custom service worker

```bash
npm install next-pwa
```

Poi aggiungi al `next.config.js`:
```javascript
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
});

module.exports = withPWA({
  // ... resto della config
});
```

## Checklist finale

- [ ] Icone create in tutte le dimensioni
- [ ] Favicon creati (16x16, 32x32, .ico)
- [ ] File salvati nelle cartelle corrette
- [ ] Build e test del progetto
- [ ] Test "Add to Home Screen" su mobile
- [ ] Lighthouse PWA score > 90
- [ ] Manifest.json accessibile e valido

## Nota importante

**Le icone NON sono state generate automaticamente** perché richiedono il logo aziendale ufficiale di General Brokers. Usa uno dei metodi sopra per crearle partendo dal logo ufficiale.

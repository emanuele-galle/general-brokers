# 📋 Come Aggiungere i Moduli dalla Vecchia Modulistica

## 🎯 Percorso Destinazione

**METTI TUTTI I PDF QUI:**
```
/public/documents/modulistica/
```

## 📥 Procedura per Scaricare dal Vecchio Sito

### Passo 1: Accedi al Vecchio Sito
1. Vai su: **https://www.generalbrokers.it/home.htm**
2. Cerca la sezione "Modulistica" o "Download" nel menu

### Passo 2: Scarica i Documenti
1. Scarica tutti i PDF/documenti disponibili
2. Salvali temporaneamente sul desktop

### Passo 3: Rinomina i File
Rinomina i file con nomi chiari e senza spazi:

**Esempi:**
- ❌ `Modulo Denuncia Sinistro (1).pdf`
- ✅ `denuncia-sinistro.pdf`

- ❌ `preventivo.PDF`
- ✅ `richiesta-preventivo.pdf`

### Passo 4: Sposta i File
Sposta tutti i PDF scaricati in:
```bash
/Users/fodi/generalbrokers-website/public/documents/modulistica/
```

## 📝 Moduli Tipici da Cercare

Cerca e scarica questi tipi di documenti:

- [ ] **Denuncia Sinistro**
  - `denuncia-sinistro.pdf`
  - `denuncia-sinistro-auto.pdf`
  - `denuncia-sinistro-rc.pdf`

- [ ] **Richieste**
  - `richiesta-preventivo.pdf`
  - `richiesta-informazioni.pdf`
  - `richiesta-variazioni.pdf`

- [ ] **Questionari**
  - `questionario-salute.pdf`
  - `questionario-rischi.pdf`

- [ ] **Privacy e Consensi**
  - `informativa-privacy.pdf`
  - `consenso-trattamento-dati.pdf`

- [ ] **Modulistica Varia**
  - `cambio-contraente.pdf`
  - `delega-intermediario.pdf`
  - `modulo-recesso.pdf`

## 🔗 Come Usarli nel Nuovo Sito

Una volta caricati i file, saranno automaticamente disponibili a questo URL:

```
https://tuosito.it/documents/modulistica/nome-file.pdf
```

**Esempio di link nella pagina modulistica:**
```tsx
<a
  href="/documents/modulistica/denuncia-sinistro.pdf"
  download
  className="btn-primary"
>
  📄 Scarica Modulo Denuncia Sinistro
</a>
```

## ✅ Checklist Finale

- [ ] Tutti i PDF scaricati dal vecchio sito
- [ ] File rinominati senza spazi (usa trattini `-`)
- [ ] File spostati in `/public/documents/modulistica/`
- [ ] Link aggiunti nella pagina `/src/pages/modulistica.tsx`
- [ ] Testato il download dal nuovo sito

## 🆘 Se Non Trovi la Modulistica sul Vecchio Sito

Prova questi percorsi:
1. https://www.generalbrokers.it/modulistica.htm
2. https://www.generalbrokers.it/download.htm
3. https://www.generalbrokers.it/documenti.htm

Oppure cerca manualmente nel sito i link che terminano con `.pdf`

---

**Nota:** Se non riesci ad accedere al vecchio sito, contatta l'amministratore per ottenere i file via email.

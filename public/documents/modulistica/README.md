# 📄 Modulistica General Brokers

Questa cartella contiene tutti i moduli e documenti scaricabili per i clienti.

## 📂 Come Aggiungere Documenti

1. **Metti i PDF qui:** `/public/documents/modulistica/`
2. **Nomina i file** in modo chiaro (es: `denuncia-sinistro.pdf`, `modulo-preventivo.pdf`)
3. **Non usare spazi** nei nomi file (usa trattini `-` o underscore `_`)

## 🔗 Come Usarli nel Sito

Per linkare un documento nella pagina modulistica:

```tsx
<a href="/documents/modulistica/nome-file.pdf" download>
  Scarica il modulo
</a>
```

## 📋 Esempi di Moduli da Inserire

- `denuncia-sinistro.pdf` - Modulo denuncia sinistro
- `richiesta-preventivo.pdf` - Richiesta preventivo
- `questionario-salute.pdf` - Questionario sanitario
- `modulo-privacy.pdf` - Informativa privacy
- `consenso-trattamento-dati.pdf` - Consenso GDPR
- `cambio-contraente.pdf` - Modulo cambio contraente
- `modulo-variazioni.pdf` - Richiesta variazioni polizza

## ⚠️ Importante

- I file in questa cartella saranno **pubblicamente accessibili**
- Non inserire documenti con dati sensibili
- Mantieni i file aggiornati
- Dimensioni consigliate: max 5MB per file

---

**Percorso:** `/public/documents/modulistica/`
**URL pubblico:** `https://tuosito.it/documents/modulistica/nome-file.pdf`

import type { NextApiRequest, NextApiResponse } from 'next';

type ContactFormData = {
  nome: string;
  cognome: string;
  email: string;
  telefono: string;
  tipoRichiesta: string;
  messaggio: string;
  privacy: boolean;
};

type ResponseData = {
  success: boolean;
  message: string;
  error?: string;
};

// Validazione email
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validazione telefono italiano
const isValidPhone = (phone: string): boolean => {
  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

// Sanitizzazione input per prevenire XSS
const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // Accetta solo POST
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      message: 'Metodo non consentito',
      error: 'Only POST requests are allowed'
    });
  }

  try {
    const formData: ContactFormData = req.body;

    // Validazione campi obbligatori
    if (!formData.nome || !formData.cognome || !formData.email ||
        !formData.telefono || !formData.tipoRichiesta || !formData.messaggio) {
      return res.status(400).json({
        success: false,
        message: 'Tutti i campi obbligatori devono essere compilati',
        error: 'Missing required fields'
      });
    }

    // Validazione privacy
    if (!formData.privacy) {
      return res.status(400).json({
        success: false,
        message: 'Devi accettare la privacy policy',
        error: 'Privacy policy not accepted'
      });
    }

    // Validazione formato email
    if (!isValidEmail(formData.email)) {
      return res.status(400).json({
        success: false,
        message: 'Formato email non valido',
        error: 'Invalid email format'
      });
    }

    // Validazione formato telefono
    if (!isValidPhone(formData.telefono)) {
      return res.status(400).json({
        success: false,
        message: 'Formato telefono non valido',
        error: 'Invalid phone format'
      });
    }

    // Sanitizzazione dati
    const sanitizedData = {
      nome: sanitizeInput(formData.nome),
      cognome: sanitizeInput(formData.cognome),
      email: sanitizeInput(formData.email),
      telefono: sanitizeInput(formData.telefono),
      tipoRichiesta: sanitizeInput(formData.tipoRichiesta),
      messaggio: sanitizeInput(formData.messaggio),
    };

    // Verifica lunghezza messaggio
    if (sanitizedData.messaggio.length < 10) {
      return res.status(400).json({
        success: false,
        message: 'Il messaggio deve contenere almeno 10 caratteri',
        error: 'Message too short'
      });
    }

    if (sanitizedData.messaggio.length > 5000) {
      return res.status(400).json({
        success: false,
        message: 'Il messaggio è troppo lungo (max 5000 caratteri)',
        error: 'Message too long'
      });
    }

    // TODO: Implementare invio email
    // Opzioni:
    // 1. Nodemailer con SMTP
    // 2. SendGrid API
    // 3. Amazon SES
    // 4. Resend
    //
    // Esempio con Nodemailer:
    // const transporter = nodemailer.createTransport({
    //   host: process.env.EMAIL_HOST,
    //   port: parseInt(process.env.EMAIL_PORT || '587'),
    //   secure: false,
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });
    //
    // await transporter.sendMail({
    //   from: process.env.EMAIL_USER,
    //   to: 'info@generalbrokers.it',
    //   subject: `Nuova richiesta: ${sanitizedData.tipoRichiesta}`,
    //   html: `...template email...`,
    // });

    // Per ora, log dei dati (in produzione rimuovere)
    console.log('Form submission received:', {
      ...sanitizedData,
      timestamp: new Date().toISOString(),
    });

    // Risposta di successo
    return res.status(200).json({
      success: true,
      message: 'Richiesta inviata con successo. Ti contatteremo entro 24 ore.',
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    return res.status(500).json({
      success: false,
      message: 'Si è verificato un errore. Riprova più tardi o contattaci telefonicamente.',
      error: 'Internal server error'
    });
  }
}

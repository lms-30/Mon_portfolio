import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

const projectTypes: Record<string, string> = {
  network: 'Configuration réseau',
  security: 'Sécurité système',
  virtualization: 'Virtualisation',
  database: 'Base de données',
  devops: 'DevOps/CI-CD',
  ctf: 'CTF/Cybersécurité',
  learning: 'Échange/Apprentissage',
  other: 'Autre',
};

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  projectType?: unknown;
};

function errorResponse(error: string, status: number) {
  return Response.json({ error }, { status });
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > 10_000) {
    return errorResponse('La requête est trop volumineuse.', 413);
  }

  let payload: ContactPayload;
  try {
    payload = await request.json();
  } catch {
    return errorResponse('La requête doit contenir un JSON valide.', 400);
  }

  if (!payload || typeof payload !== 'object') {
    return errorResponse('Les données du formulaire sont invalides.', 400);
  }

  const name = typeof payload.name === 'string' ? payload.name.replace(/[\r\n]+/g, ' ').trim() : '';
  const email = typeof payload.email === 'string' ? payload.email.trim() : '';
  const subject = typeof payload.subject === 'string' ? payload.subject.trim() : '';
  const message = typeof payload.message === 'string' ? payload.message.trim() : '';
  const projectType = typeof payload.projectType === 'string' ? payload.projectType : '';

  if (!name || name.length > 120 || !email || email.length > 254 || !message || message.length > 500) {
    return errorResponse('Vérifiez les champs requis et la longueur du message.', 400);
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return errorResponse('Saisissez une adresse e-mail valide.', 400);
  }

  if (subject.length > 160) {
    return errorResponse('Le sujet ne peut pas dépasser 160 caractères.', 400);
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 465);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM || user;
  const to = process.env.CONTACT_EMAIL_TO || 'lms30062004@gmail.com';

  if (!host || !user || !pass || !from || !Number.isInteger(port) || port < 1 || port > 65535) {
    return errorResponse('L’envoi des messages n’est pas encore configuré. Réessayez plus tard.', 503);
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465,
    auth: { user, pass },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  const projectLabel = projectTypes[projectType] || 'Non précisé';
  const safeSubject = subject.replace(/[\r\n]+/g, ' ').trim();

  try {
    await transporter.sendMail({
      from: { name: 'Portfolio', address: from },
      to,
      replyTo: { name, address: email },
      subject: `Portfolio : ${safeSubject || projectLabel}`,
      text: [
        `Nom : ${name}`,
        `E-mail : ${email}`,
        `Sujet : ${safeSubject || 'Non précisé'}`,
        `Type de projet : ${projectLabel}`,
        '',
        message,
      ].join('\n'),
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Échec de l’envoi du formulaire de contact:', error);
    return errorResponse('L’envoi du message a échoué. Réessayez plus tard ou contactez-moi par e-mail.', 502);
  }
}
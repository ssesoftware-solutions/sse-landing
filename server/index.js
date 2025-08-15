const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

function createTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error('Faltan variables SMTP: SMTP_HOST, SMTP_USER o SMTP_PASS');
  }

  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  return nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass },
  });
}

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, countryCode, phone, subject, message } = req.body || {};
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'Campos obligatorios faltantes' });
    }

    const transporter = createTransporter();

    const to = process.env.SMTP_TO || 'ventas@ssesoftsolutions.com';
    const from = process.env.SMTP_FROM || process.env.SMTP_USER;

    const mailOptions = {
      from,
      to,
      replyTo: email,
      subject: `[Contacto Web] ${subject}`,
      text: `Nombre: ${name}\nEmail: ${email}\nTeléfono: ${countryCode || ''} ${phone || ''}\n\nMensaje:\n${message}`,
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Teléfono:</strong> ${countryCode || ''} ${phone || ''}</p>
             <p><strong>Asunto:</strong> ${subject}</p>
             <p><strong>Mensaje:</strong></p>
             <p style="white-space: pre-wrap;">${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.json({ ok: true });
  } catch (err) {
    console.error('Error enviando correo:', err);
    res.status(500).json({ error: 'No se pudo enviar el correo' });
  }
});

app.listen(PORT, () => {
  console.log(`SMTP server escuchando en http://localhost:${PORT}`);
});



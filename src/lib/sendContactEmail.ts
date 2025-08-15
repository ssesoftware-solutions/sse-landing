export type ContactFormPayload = {
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  subject: string;
  message: string;
};

/**
 * Env vars esperadas:
 * - VITE_EMAILJS_SERVICE_ID
 * - VITE_EMAILJS_TEMPLATE_ID
 * - VITE_EMAILJS_PUBLIC_KEY
 */
export async function sendContactEmail(payload: ContactFormPayload): Promise<void> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

  if (!serviceId || !templateId || !publicKey) {
    const missing: string[] = [];
    if (!serviceId) missing.push("VITE_EMAILJS_SERVICE_ID");
    if (!templateId) missing.push("VITE_EMAILJS_TEMPLATE_ID");
    if (!publicKey) missing.push("VITE_EMAILJS_PUBLIC_KEY");
    throw new Error(`Faltan variables de entorno: ${missing.join(", ")}`);
  }

  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        to_email: "ventas@ssesoftsolutions.com",
        from_name: payload.name,
        from_email: payload.email,
        phone: `${payload.countryCode} ${payload.phone}`,
        subject: payload.subject,
        message: payload.message,
      },
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Fallo al enviar el correo: ${response.status} ${text}`);
  }
}



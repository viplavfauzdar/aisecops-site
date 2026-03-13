import nodemailer from "nodemailer";

function parseBody(event) {
  const body = event.body || "";
  const contentType = event.headers["content-type"] || event.headers["Content-Type"] || "";

  if (contentType.includes("application/json")) {
    return JSON.parse(body || "{}");
  }

  const params = new URLSearchParams(body);
  return Object.fromEntries(params.entries());
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  try {
    const data = parseBody(event);
    const email = (data.email || "").trim();
    const company = (data.company || "").trim();

    if (!email) {
      return {
        statusCode: 400,
        body: "Email is required"
      };
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = String(process.env.SMTP_SECURE || "false").toLowerCase() === "true";
    const user = process.env.MAIL_AUTH_USER;
    const pass = process.env.SMTP_PASS;
    const fromEmail = process.env.FROM_EMAIL || user;
    const toEmail = process.env.TO_EMAIL || fromEmail;

    if (!host || !user || !pass || !fromEmail || !toEmail) {
      return {
        statusCode: 500,
        body: "SMTP configuration is incomplete"
      };
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass }
    });

    await transporter.sendMail({
      from: fromEmail,
      to: toEmail,
      subject: "AISecOps signup",
      text: `New footer signup\n\nEmail: ${email}\nCompany: ${company || "(not provided)"}`,
      html: `<p><strong>New footer signup</strong></p><p><strong>Email:</strong> ${email}</p><p><strong>Company:</strong> ${company || "(not provided)"}</p>`
    });

    return {
      statusCode: 303,
      headers: { Location: "/thank-you" },
      body: ""
    };
  } catch (error) {
    console.error("send-contact-email error", error);
    return {
      statusCode: 303,
      headers: { Location: "/thank-you?status=error" },
      body: ""
    };
  }
}

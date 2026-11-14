//importa o resend
import { Resend } from "resend";

import { fail } from "@sveltejs/kit";

//importa os dados do env
import { RESEND_API_KEY, CONTACT_TO } from "$app/env/private";
import type { Actions } from "./$types";

const resend = new Resend(RESEND_API_KEY);

export const actions: Actions = {
  default: async ({ request }) => {
    //pega os dados do form e cria constantes
    const form = await request.formData();

    //pega os campos
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    if (form.get("site")) return { ok: true };

    if (!name || !email || !message) {
      return fail(400, { error: "Preencha tudo" });
    }

    //const para erro
    const { error } = await resend.emails.send({
      from: "Site <onboarding@resend.dev>",
      to: CONTACT_TO,
      replyTo: email,
      subject: `Contato de ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\n\n${message}`,
    });

    if (error) return fail(500, { error: "Falha ao enviar" });
    return { ok: true };
  }, 
};
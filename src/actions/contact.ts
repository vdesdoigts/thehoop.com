"use server";

import { z } from "zod";
const contactNotFoundCode = "document_not_found";

const brevoContactApi = "https://api.brevo.com/v3/contacts";

// const defaultClient = Brevo.ApiClient.instance;
// const apiKey = defaultClient.authentications["api-key"];
// apiKey.apiKey = process.env.BREVO_API_KEY;

// const apiInstance = new Brevo.TransactionalEmailsApi();
// const createBrevoContact = new Brevo.CreateContact();

export async function createContact(prevState: any, formData: FormData) {
  const schema = z.object({
    email: z.string().min(1),
  });
  const data = schema.parse({
    email: formData.get("email"),
  });

  try {
    const res = await fetch(`${brevoContactApi}/${data.email}`, {
      method: "GET",
      // @ts-ignore
      headers: {
        "Content-Type": "application/json",
        "Api-Key": process.env.BREVO_API_KEY,
      },
    });
    const json = await res.json();

    if (json.code === contactNotFoundCode) {
      await fetch(brevoContactApi, {
        method: "POST",
        // @ts-ignore
        headers: {
          "Content-Type": "application/json",
          "Api-Key": process.env.BREVO_API_KEY,
        },
        body: JSON.stringify({
          email: data.email,
        }),
      });
      return { status: "success", message: "Inscription validée" };
    }
    return {
      status: "error",
      message: "Cette adresse email est déjà utilisée",
    };
  } catch (e) {
    console.error(e);
    return { status: "error", message: "Erreur serveur" };
  }
}

"use client";

import { type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function ContactLeadForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Consulta inmobiliaria de ${String(form.get("name") ?? "")}`;
    const body = [
      `Nombre: ${String(form.get("name") ?? "")}`,
      `Teléfono: ${String(form.get("phone") ?? "")}`,
      `Correo: ${String(form.get("email") ?? "")}`,
      `Proyecto: ${String(form.get("project") ?? "")}`,
      "",
      String(form.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${SITE_CONFIG.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const fieldClass =
    "min-h-11 w-full rounded border border-outline-variant bg-surface-container-lowest px-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";
  const whatsappMessage = encodeURIComponent("Hola, quiero agendar una visita para la casa en Chiclayo.");
  const whatsappHref = SITE_CONFIG.whatsappNumber
    ? `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${whatsappMessage}`
    : "/#contacto";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg bg-surface-container-lowest p-6 shadow-[0_4px_20px_rgba(10,37,64,0.08)] md:p-8"
    >
      <p className="text-sm font-semibold text-on-surface">Agenda una visita</p>
      <p className="mt-2 text-xs leading-relaxed text-on-surface-variant">
        Déjanos tus datos y te escribimos para coordinar.
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="text-xs font-semibold text-on-surface-variant">
          Nombre completo
          <input className={`${fieldClass} mt-2`} name="name" placeholder="Ej. Juan Pérez" required />
        </label>
        <label className="text-xs font-semibold text-on-surface-variant">
          Teléfono
          <input className={`${fieldClass} mt-2`} name="phone" inputMode="tel" placeholder="999 000 000" required />
        </label>
      </div>
      <label className="mt-4 block text-xs font-semibold text-on-surface-variant">
        Correo electrónico
        <input className={`${fieldClass} mt-2`} type="email" name="email" placeholder="email@ejemplo.com" required />
      </label>
      <label className="mt-4 block text-xs font-semibold text-on-surface-variant">
        Proyecto de interés
        <select className={`${fieldClass} mt-2`} name="project" defaultValue="Casa en Chiclayo">
          <option>Casa en Chiclayo</option>
        </select>
      </label>
      <label className="mt-4 block text-xs font-semibold text-on-surface-variant">
        Mensaje
        <textarea
          className={`${fieldClass} mt-2 min-h-24 resize-y py-3`}
          name="message"
          placeholder="Quiero conocer precio y horarios de visita..."
          required
        />
      </label>
      <p className="mt-4 text-xs leading-relaxed text-on-surface-variant">
        Te orientamos para evaluar crédito. La aprobación depende de la entidad financiera.
      </p>
      <button
        type="submit"
        className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded bg-accent px-5 text-sm font-bold text-primary shadow-sm transition hover:bg-accent-dark"
      >
        Quiero ver mi casa
        <Send aria-hidden="true" className="size-4" />
      </button>
      <a
        href={whatsappHref}
        className="mt-3 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded border border-primary px-5 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
      >
        Escribir por WhatsApp
        <MessageCircle aria-hidden="true" className="size-4" />
      </a>
    </form>
  );
}

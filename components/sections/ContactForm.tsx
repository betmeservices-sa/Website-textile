'use client'

import { useState } from 'react'
import { SITE } from '@/lib/site'
import Icon from '@/components/ui/Icon'

// Formulario sin backend: compone un correo a info@mpgsv.com.
// Para conectar a un CRM/webhook (GHL), reemplaza handleSubmit por un fetch POST.
const PROCESOS = ['Tintura', 'Preparación', 'Post-pintura', 'Acabados', 'Otro / varios']

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const f = new FormData(e.currentTarget)
    const nombre = String(f.get('nombre') || '')
    const empresa = String(f.get('empresa') || '')
    const email = String(f.get('email') || '')
    const telefono = String(f.get('telefono') || '')
    const proceso = String(f.get('proceso') || '')
    const mensaje = String(f.get('mensaje') || '')

    const subject = `Solicitud de asesoría · ${empresa || nombre}`
    const body = [
      `Nombre: ${nombre}`,
      `Empresa: ${empresa}`,
      `Email: ${email}`,
      `Teléfono: ${telefono}`,
      `Proceso: ${proceso}`,
      '',
      mensaje,
    ].join('\n')

    window.location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  const field =
    'w-full rounded-xl border border-line bg-paper-3 px-4 py-3.5 text-ink outline-none transition-all placeholder:text-muted-2 focus:border-teal focus:ring-2 focus:ring-teal/20'

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="spec text-muted">Nombre *</span>
          <input name="nombre" required placeholder="Tu nombre" className={field} />
        </label>
        <label className="grid gap-2">
          <span className="spec text-muted">Empresa</span>
          <input name="empresa" placeholder="Tu empresa" className={field} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="spec text-muted">Email *</span>
          <input name="email" type="email" required placeholder="correo@empresa.com" className={field} />
        </label>
        <label className="grid gap-2">
          <span className="spec text-muted">Teléfono</span>
          <input name="telefono" placeholder="+503 ..." className={field} />
        </label>
      </div>
      <label className="grid gap-2">
        <span className="spec text-muted">Proceso de interés</span>
        <select name="proceso" className={field} defaultValue="">
          <option value="" disabled>
            Selecciona un proceso
          </option>
          {PROCESOS.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2">
        <span className="spec text-muted">Mensaje *</span>
        <textarea
          name="mensaje"
          required
          rows={5}
          placeholder="Cuéntanos sobre tu proceso y qué necesitas resolver."
          className={`${field} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-900"
      >
        {sent ? 'Abriendo tu correo…' : 'Enviar solicitud'}
        <Icon name="arrow" size={18} className="transition-transform group-hover:translate-x-1" />
      </button>

      {sent && (
        <p className="text-sm text-muted">
          Se abrió tu cliente de correo con el mensaje listo. Si no, escríbenos directo a{' '}
          <a href={`mailto:${SITE.email}`} className="font-semibold text-teal-600">
            {SITE.email}
          </a>
          .
        </p>
      )}
    </form>
  )
}

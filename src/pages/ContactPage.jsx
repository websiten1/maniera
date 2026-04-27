import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import { FacebookIcon, InstagramIcon } from '../components/ui/SocialIcons'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import { FadeInUp } from '../components/ui/AnimatedSection'
import {
  siteName, sitePhone, sitePhoneRaw, siteFacebook,
  siteAddress, siteEmail, siteSchedule,
} from '../data/content'

const groupOptions = [
  { value: '', label: 'Selectează grupa de interes' },
  { value: 'toddler', label: 'Grupa Toddler (1.3 – 2.6 ani)' },
  { value: 'casa', label: 'Casa dei Bambini (2.6 – 6 ani)' },
  { value: 'vizita', label: 'Doresc o vizită generală' },
  { value: 'altceva', label: 'Altceva' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', group: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Numele este obligatoriu.'
    if (!form.email.trim()) errs.email = 'Email-ul este obligatoriu.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Adresa de email nu este validă.'
    if (!form.message.trim()) errs.message = 'Mesajul este obligatoriu.'
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSubmitting(true)
    await new Promise((r) => setTimeout(r, 1200))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #5A8F7B 0%, #A8D5BA 60%, #F5F3F0 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff25 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeInUp>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-white bg-white/20 backdrop-blur px-3 py-1 rounded-full mb-4">
              Hai să vorbim
            </span>
            <h1
              className="font-poppins font-bold text-white leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            >
              Contactează-ne
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed mb-6">
              Suntem bucuroși să răspundem la orice întrebare despre programele noastre.
              Scrie-ne sau sună-ne direct.
            </p>
            {/* Prominent phone in hero */}
            <a
              href={`tel:${sitePhoneRaw}`}
              className="inline-flex items-center gap-3 bg-white/20 backdrop-blur border border-white/40 text-white rounded-2xl px-6 py-3 hover:bg-white/30 transition-all duration-200 font-semibold text-lg"
            >
              <Phone className="w-5 h-5" />
              {sitePhone}
            </a>
          </FadeInUp>
        </div>
      </section>

      {/* Quick contact strip */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a href={`tel:${sitePhoneRaw}`} className="flex items-center gap-2 text-sage-dark font-medium hover:text-sage transition-colors">
              <Phone className="w-4 h-4" />
              {sitePhone}
            </a>
            <span className="text-gray-200 hidden sm:block">|</span>
            <a href={`mailto:${siteEmail}`} className="flex items-center gap-2 text-gray-600 hover:text-sage-dark transition-colors">
              <Mail className="w-4 h-4" />
              {siteEmail}
            </a>
            <span className="text-gray-200 hidden sm:block">|</span>
            <span className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              {siteSchedule}
            </span>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeInUp>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-sage-light/30 border border-sage/30 rounded-3xl p-10 text-center"
                  >
                    <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="font-poppins font-bold text-2xl text-gray-800 mb-3">
                      Mesaj trimis cu succes!
                    </h2>
                    <p className="text-warm-gray leading-relaxed mb-6">
                      Mulțumim că ai contactat {siteName}. Vom reveni cu un răspuns
                      în cel mult 24 de ore.
                    </p>
                    <Button variant="primary" onClick={() => setSubmitted(false)}>
                      Trimite un alt mesaj
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <h2 className="font-poppins font-bold text-2xl text-gray-800 mb-6">
                      Trimite-ne un mesaj
                    </h2>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="name">
                        Nume complet *
                      </label>
                      <input
                        type="text" id="name" name="name" value={form.name} onChange={handleChange}
                        placeholder="Maria Popescu"
                        className={`w-full rounded-xl border px-4 py-3 text-gray-800 placeholder-warm-gray/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage/40 ${errors.name ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white hover:border-sage/40'}`}
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="email">
                          Adresă email *
                        </label>
                        <input
                          type="email" id="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="maria@exemplu.ro"
                          className={`w-full rounded-xl border px-4 py-3 text-gray-800 placeholder-warm-gray/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage/40 ${errors.email ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white hover:border-sage/40'}`}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="phone">
                          Număr de telefon
                        </label>
                        <input
                          type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange}
                          placeholder="07XX XXX XXX"
                          className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-800 placeholder-warm-gray/60 bg-white hover:border-sage/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="group">
                        Mă interesează
                      </label>
                      <select
                        id="group" name="group" value={form.group} onChange={handleChange}
                        className="w-full rounded-xl border border-gray-200 px-4 py-3 text-gray-800 bg-white hover:border-sage/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage/40"
                      >
                        {groupOptions.map((o) => (
                          <option key={o.value} value={o.value} disabled={o.value === ''}>{o.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5" htmlFor="message">
                        Mesajul tău *
                      </label>
                      <textarea
                        id="message" name="message" value={form.message} onChange={handleChange}
                        rows={5} placeholder="Bună ziua! Aș dori să aflu mai multe despre..."
                        className={`w-full rounded-xl border px-4 py-3 text-gray-800 placeholder-warm-gray/60 resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sage/40 ${errors.message ? 'border-red-400 bg-red-50' : 'border-gray-200 bg-white hover:border-sage/40'}`}
                      />
                      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                    </div>

                    <motion.button
                      type="submit" disabled={submitting}
                      whileHover={{ scale: submitting ? 1 : 1.02 }}
                      whileTap={{ scale: submitting ? 1 : 0.98 }}
                      className="w-full flex items-center justify-center gap-2 bg-sage text-white rounded-xl py-3.5 font-semibold text-base hover:bg-sage-dark transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <><div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />Se trimite...</>
                      ) : (
                        <><Send className="w-4 h-4" />Trimite mesajul</>
                      )}
                    </motion.button>
                    <p className="text-xs text-warm-gray text-center">Vei primi un răspuns în cel mult 24 de ore.</p>
                  </form>
                )}
              </FadeInUp>
            </div>

            {/* Info panel */}
            <div className="lg:col-span-2">
              <FadeInUp delay={0.15}>
                <div className="bg-cream rounded-3xl p-8 sticky top-24">
                  <h2 className="font-poppins font-bold text-xl text-gray-800 mb-6">
                    Informații de contact
                  </h2>

                  <div className="space-y-5">
                    {/* Phone — most prominent */}
                    <a
                      href={`tel:${sitePhoneRaw}`}
                      className="flex items-center gap-4 group p-3 bg-sage-light/40 rounded-2xl hover:bg-sage-light/70 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-xl bg-sage flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-sage-dark text-sm">Sună acum</div>
                        <div className="font-poppins font-bold text-xl text-gray-800">{sitePhone}</div>
                      </div>
                    </a>

                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(siteAddress)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-sage-light flex items-center justify-center flex-shrink-0 group-hover:bg-sage transition-colors">
                        <MapPin className="w-5 h-5 text-sage-dark group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 group-hover:text-sage-dark transition-colors text-sm">Adresă</div>
                        <div className="text-sm text-warm-gray">{siteAddress}</div>
                      </div>
                    </a>

                    <a href={`mailto:${siteEmail}`} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl bg-sage-light flex items-center justify-center flex-shrink-0 group-hover:bg-sage transition-colors">
                        <Mail className="w-5 h-5 text-sage-dark group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 group-hover:text-sage-dark transition-colors text-sm">Email</div>
                        <div className="text-sm text-warm-gray">{siteEmail}</div>
                      </div>
                    </a>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-sage-light flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-sage-dark" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-800 text-sm">Program</div>
                        <div className="text-sm text-warm-gray">{siteSchedule}</div>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="mt-6 pt-6 border-t border-sage/15">
                    <p className="text-sm font-medium text-gray-700 mb-3">Urmărește-ne</p>
                    <div className="flex gap-3">
                      <a
                        href={siteFacebook} target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-sage/20 text-sm text-gray-600 hover:bg-sage hover:text-white hover:border-sage transition-all duration-200"
                      >
                        <FacebookIcon className="w-4 h-4" />
                        Facebook
                      </a>
                      <a
                        href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-sage/20 text-sm text-gray-600 hover:bg-sage hover:text-white hover:border-sage transition-all duration-200"
                      >
                        <InstagramIcon className="w-4 h-4" />
                        Instagram
                      </a>
                    </div>
                  </div>

                  {/* Name badge */}
                  <div className="mt-6 pt-6 border-t border-sage/15">
                    <p className="text-xs text-warm-gray leading-relaxed text-center">
                      {siteName}
                    </p>
                  </div>
                </div>
              </FadeInUp>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section
        className="h-72 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #EDE9E4 0%, #C8E6D5 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, #5A8F7B20 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-sage rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <p className="font-poppins font-semibold text-gray-700">{siteAddress}</p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(siteAddress)}`}
              target="_blank" rel="noopener noreferrer"
              className="text-sm text-sage-dark hover:underline mt-1 inline-block"
            >
              Deschide în Google Maps →
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  )
}

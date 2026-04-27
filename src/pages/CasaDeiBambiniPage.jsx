import { motion } from 'framer-motion'
import {
  Sunrise, Coffee, Circle, BookOpen, TreePine, UtensilsCrossed,
  Moon, Users, Apple, Palette, Star, Sunset, ArrowRight, CheckCircle2,
  Hand, Eye, MessageSquare, Calculator, Globe,
} from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import { FadeInUp, AnimatedContainer, AnimatedItem } from '../components/ui/AnimatedSection'
import { casaSchedule, curriculumAreas, groups } from '../data/content'

const scheduleIconMap = {
  Sunrise, Coffee, Circle, BookOpen, TreePine, UtensilsCrossed,
  Moon, Users, Apple, Palette, Star, Sunset,
}

const areaIconMap = {
  Hand, Eye, MessageSquare, Calculator, Globe,
}

export default function CasaDeiBambiniPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, #7FC4D920 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-sky/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sky bg-sky-light/50 px-3 py-1 rounded-full mb-4">
                2 ani 6 luni – 6 ani
              </span>
              <h1
                className="font-poppins font-bold text-gray-800 leading-tight mb-5"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
              >
                Casa dei{' '}
                <span className="bg-gradient-to-r from-sky to-sage-dark bg-clip-text text-transparent">
                  Bambini
                </span>
              </h1>
              <p className="text-lg text-warm-gray leading-relaxed mb-6">
                Casa copiilor — un univers al descoperirii. Inima experienței Montessori,
                unde copiii de 2.5 până la 6 ani explorează, creează și se dezvoltă
                în propriul lor ritm.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Grupele multi-vârstă, materialele Montessori originale și educatoarele
                certificate AMI creează un mediu unic în care fiecare copil are timp,
                spațiu și libertate să descopere cine este și ce poate face.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/contact" size="lg" className="bg-sky text-white hover:bg-sky/90 rounded-lg px-8 py-4 font-semibold text-lg">
                  Înscrie-te acum
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  Programează o vizită
                </Button>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="https://picsum.photos/seed/casabambini-hero/640/520"
                    alt="Casa dei Bambini"
                    className="w-full object-cover"
                    style={{ height: '420px' }}
                  />
                </div>
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ repeat: Infinity, duration: 3.5 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="font-poppins font-semibold text-gray-800 text-sm">Program after-school</div>
                  <div className="text-sky text-xs font-medium">08:00 – 18:00</div>
                </motion.div>
                <motion.div
                  animate={{ y: [3, -3, 3] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -top-6 -right-6 bg-sky-light rounded-2xl shadow-xl p-4"
                >
                  <div className="font-poppins font-bold text-2xl text-sage-dark">5</div>
                  <div className="text-warm-gray text-xs">arii curriculare</div>
                </motion.div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Curriculum Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Curriculum Montessori"
            title="5 Arii Curriculare"
            subtitle="Programul Casa dei Bambini acoperă 5 domenii fundamentale de dezvoltare, fiecare cu materiale și activități special concepute de Dr. Montessori."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {curriculumAreas.map((area, idx) => {
              const Icon = areaIconMap[area.icon] || Hand
              return (
                <FadeInUp key={area.title} delay={idx * 0.1}>
                  <motion.div
                    whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
                    className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden cursor-default"
                  >
                    <div className={`${area.color} p-6`}>
                      <div className="w-12 h-12 bg-white/60 rounded-xl flex items-center justify-center mb-4">
                        <Icon className={`w-6 h-6 ${area.accent}`} />
                      </div>
                      <h3 className="font-poppins font-bold text-lg text-gray-800">
                        {area.title}
                      </h3>
                    </div>
                    <div className="p-6">
                      <p className="text-warm-gray text-sm leading-relaxed mb-4">
                        {area.desc}
                      </p>
                      <div>
                        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                          Activități incluse
                        </p>
                        <ul className="space-y-1">
                          {area.activities.map((act) => (
                            <li key={act} className="flex items-center gap-2 text-sm text-gray-600">
                              <span className="w-1 h-1 rounded-full bg-sage-dark flex-shrink-0" />
                              {act}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </FadeInUp>
              )
            })}

            {/* 5th area spans 2 cols on lg */}
          </div>
        </div>
      </section>

      {/* Mediul Pregătit */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sage-dark bg-sage-light/60 px-3 py-1 rounded-full mb-4">
                Mediul Pregătit
              </span>
              <h2 className="font-poppins font-bold text-gray-800 text-3xl mb-5 leading-tight">
                Un spațiu creat special pentru{' '}
                <span className="gradient-text">copilul de 3-6 ani</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Sala Casa dei Bambini este amenajată cu materiale Montessori originale
                așezate pe rafturi deschise, la înălțimea copilului. Ordinea și
                estetica nu sunt decorative — ele comunică respect față de copil.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                Grupele multi-vârstă (2.5-6 ani) creează o dinamică naturală: copiii
                mai mari devin modele pentru cei mici, iar cei mici stimulează curiozitatea
                celor mari. Această structură reflectă viața reală.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Blocul de lucru de 3 ore neîntrerupt în dimineața fiecărei zile este
                inima programului. Copiii aleg singuri activitatea, lucrează în ritmul
                lor și au libertatea de a repeta ori de câte ori doresc.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: '3 ore', sublabel: 'bloc de lucru neîntrerupt' },
                  { label: 'Multi-vârstă', sublabel: 'grupe 2.5 - 6 ani' },
                  { label: 'AMI', sublabel: 'materiale certificate' },
                  { label: '10:1', sublabel: 'raport copii/educator' },
                ].map((s) => (
                  <div key={s.label} className="bg-white rounded-xl p-4 shadow-sm">
                    <div className="font-poppins font-bold text-xl text-sage-dark">{s.label}</div>
                    <div className="text-sm text-warm-gray">{s.sublabel}</div>
                  </div>
                ))}
              </div>
            </FadeInUp>

            <FadeInUp delay={0.2}>
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src="https://picsum.photos/seed/mediu-pregătit/640/360"
                    alt="Mediul pregătit Montessori"
                    className="w-full object-cover"
                    style={{ height: '260px' }}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl overflow-hidden shadow-sm">
                    <img
                      src="https://picsum.photos/seed/materiale1/400/300"
                      alt="Materiale Montessori"
                      className="w-full object-cover"
                      style={{ height: '150px' }}
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-sm">
                    <img
                      src="https://picsum.photos/seed/materiale2/400/300"
                      alt="Activitate Casa"
                      className="w-full object-cover"
                      style={{ height: '150px' }}
                    />
                  </div>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Programul Zilei"
            title="O zi în Casa dei Bambini"
            subtitle="Ritmul zilei este constant, predictibil și echilibrat — copilul știe ce urmează și se simte în siguranță."
          />

          <div className="mt-12 relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky via-sage to-sky" />

            <div className="space-y-2">
              {casaSchedule.map((item, idx) => {
                const Icon = scheduleIconMap[item.icon] || BookOpen
                return (
                  <FadeInUp key={idx} delay={idx * 0.04}>
                    <div className="flex gap-4 pl-14 relative">
                      <div className="absolute left-0 w-12 h-12 rounded-full bg-white border-2 border-sky/20 flex items-center justify-center shadow-sm">
                        <Icon className="w-5 h-5 text-sky" />
                      </div>
                      <div className={`flex-1 rounded-2xl p-4 mb-2 ${idx % 2 === 0 ? 'bg-cream' : 'bg-white border border-gray-100'}`}>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-bold text-sky bg-sky-light/60 px-2 py-0.5 rounded-full">
                            {item.time}
                          </span>
                          <span className="font-poppins font-semibold text-gray-800 text-sm">
                            {item.activity}
                          </span>
                          {item.time === '09:30' && (
                            <span className="text-xs bg-sage text-white px-2 py-0.5 rounded-full">
                              Principal
                            </span>
                          )}
                        </div>
                        <p className="text-warm-gray text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </FadeInUp>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeInUp>
            <div className="bg-white rounded-3xl p-10 shadow-sm">
              <div className="text-5xl mb-6">"</div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6 italic">
                Radu a trecut prin Toddler și acum este în Casa dei Bambini. Progresul
                în matematică și limbaj este uimitor, dar cel mai important — este fericit
                că vine în fiecare dimineață.
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center font-bold text-rose-500">
                  CI
                </div>
                <div>
                  <div className="font-semibold text-gray-800">Cristina Ionescu</div>
                  <div className="text-sm text-warm-gray">Mama lui Radu, 5 ani</div>
                </div>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-sage-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff15 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="font-poppins font-bold text-white text-3xl mb-5">
              Înscrie copilul tău în Casa dei Bambini
            </h2>
            <p className="text-white/75 leading-relaxed mb-8">
              Locurile sunt limitate pentru a menține calitatea grupelor. Contactează-ne
              pentru detalii și disponibilitate.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to="/contact" variant="white" size="lg">
                Contactează-ne
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button to="/galerie" size="lg" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10">
                Vezi Galeria
              </Button>
            </div>
          </FadeInUp>
        </div>
      </section>
    </motion.div>
  )
}

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

function GradientVisual({ gradient, icon: Icon, label, sublabel, height = 360 }) {
  return (
    <div
      className="rounded-3xl flex items-center justify-center shadow-lg w-full"
      style={{ height, background: gradient }}
    >
      <div className="text-center px-6">
        <div className="w-16 h-16 rounded-2xl bg-white/30 backdrop-blur flex items-center justify-center mx-auto mb-3">
          <Icon className="w-8 h-8 text-white" />
        </div>
        <p className="font-poppins font-semibold text-white text-lg">{label}</p>
        {sublabel && <p className="text-white/70 text-sm mt-1">{sublabel}</p>}
      </div>
    </div>
  )
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
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #7FC4D9 0%, #A8D5BA 60%, #F5F3F0 100%)' }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #5A8F7B20 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sage-dark bg-white/60 backdrop-blur px-3 py-1 rounded-full mb-4">
                2 ani 6 luni – 6 ani
              </span>
              <h1
                className="font-poppins font-bold text-gray-800 leading-tight mb-5"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
              >
                Casa dei{' '}
                <span className="text-sage-dark">Bambini</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
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
                <Button to="/contact" variant="primary" size="lg">
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
                <GradientVisual
                  gradient="linear-gradient(135deg, #5A8F7B 0%, #7FC4D9 60%, #B3DDE9 100%)"
                  icon={Star}
                  label="Casa dei Bambini"
                  sublabel="Un univers al descoperirii"
                  height={420}
                />
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ repeat: Infinity, duration: 3.5 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="font-poppins font-semibold text-gray-800 text-sm">Program after-school</div>
                  <div className="text-sage-dark text-xs font-medium">08:00 – 18:00</div>
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
                <GradientVisual
                  gradient="linear-gradient(135deg, #7FC4D9 0%, #A8D5BA 50%, #5A8F7B 100%)"
                  icon={BookOpen}
                  label="Mediu pregătit Montessori"
                  height={260}
                />
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="rounded-2xl flex items-center justify-center"
                    style={{ height: 150, background: 'linear-gradient(135deg, #C8E6D5 0%, #A8D5BA 100%)' }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center">
                      <Hand className="w-5 h-5 text-sage-dark" />
                    </div>
                  </div>
                  <div
                    className="rounded-2xl flex items-center justify-center"
                    style={{ height: 150, background: 'linear-gradient(135deg, #B3DDE9 0%, #7FC4D9 100%)' }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/40 flex items-center justify-center">
                      <Calculator className="w-5 h-5 text-sage-dark" />
                    </div>
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
                        <Icon className="w-5 h-5 text-sky" style={{ color: '#5A8F7B' }} />
                      </div>
                      <div className={`flex-1 rounded-2xl p-4 mb-2 ${idx % 2 === 0 ? 'bg-cream' : 'bg-white border border-gray-100'}`}>
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-bold text-sage-dark bg-sky-light/60 px-2 py-0.5 rounded-full">
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
              <div className="text-5xl text-sage/40 mb-4 font-poppins">"</div>
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

import { motion } from 'framer-motion'
import {
  Sunrise, Coffee, Play, TreePine, UtensilsCrossed, Moon,
  Apple, Palette, Smile, Sunset, ArrowRight, CheckCircle2,
} from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import { FadeInUp, AnimatedContainer, AnimatedItem } from '../components/ui/AnimatedSection'
import { toddlerSchedule, groups } from '../data/content'

const scheduleIconMap = {
  Sunrise, Coffee, Play, TreePine, UtensilsCrossed, Moon,
  Apple, Palette, Smile, Sunset,
}

const benefits = [
  {
    title: 'Independență timpurie',
    desc: 'Copiii dobândesc abilități de autoîngrijire și autonomie la o vârstă la care mintea este cel mai receptivă.',
    color: 'bg-sage-light',
    accent: 'text-sage-dark',
  },
  {
    title: 'Dezvoltare emoțională',
    desc: 'Printr-un mediu sigur și relații autentice, copiii învață să își înțeleagă și să își exprime emoțiile sănătos.',
    color: 'bg-sky-light',
    accent: 'text-sky',
  },
  {
    title: 'Limbaj și comunicare',
    desc: 'Stimulăm achiziția limbajului prin cântece, povești, conversații reale și un vocabular bogat în fiecare moment.',
    color: 'bg-amber-100',
    accent: 'text-amber-600',
  },
  {
    title: 'Coordonare motorie',
    desc: 'Activitățile senzoriale și de viață practică dezvoltă motricitatea fină și grosieră în mod natural.',
    color: 'bg-rose-100',
    accent: 'text-rose-500',
  },
]

export default function ToddlerPage() {
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
            backgroundImage: 'radial-gradient(circle, #A8D5BA20 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-sage/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeInUp>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sage-dark bg-sage-light/60 px-3 py-1 rounded-full mb-4">
                1 an 3 luni – 2 ani 6 luni
              </span>
              <h1
                className="font-poppins font-bold text-gray-800 leading-tight mb-5"
                style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
              >
                Grupa{' '}
                <span className="gradient-text">Toddler</span>
              </h1>
              <p className="text-lg text-warm-gray leading-relaxed mb-6">
                Primii pași spre independență. Programa Toddler este concepută special
                pentru cel mai sensibil stadiu al vieții copilului, când mintea absoarbe
                totul din jur cu o ușurință extraordinară.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Într-un mediu sigur, cald și stimulant, cei mici descoperă lumea prin
                simțuri, mișcare și relații autentice cu educatoare dedicate și cu
                ceilalți copii. Activitățile de viață practică, senzoriale și creative
                formează fundația pentru tot ce urmează.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/contact" variant="primary" size="lg">
                  Înscrie-te la Toddler
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
                    src="https://picsum.photos/seed/toddler-hero/640/520"
                    alt="Copii la grupa Toddler"
                    className="w-full object-cover"
                    style={{ height: '420px' }}
                  />
                </div>
                {/* Info badge */}
                <motion.div
                  animate={{ y: [-3, 3, -3] }}
                  transition={{ repeat: Infinity, duration: 3.5 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4"
                >
                  <div className="font-poppins font-semibold text-gray-800 text-sm">Program zilnic</div>
                  <div className="text-sage-dark text-xs font-medium">08:00 – 16:30</div>
                </motion.div>
                <motion.div
                  animate={{ y: [3, -3, 3] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -top-6 -right-6 bg-sage rounded-2xl shadow-xl p-4 text-white"
                >
                  <div className="font-poppins font-bold text-2xl">8:1</div>
                  <div className="text-white/80 text-xs">raport copii/educator</div>
                </motion.div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Ce se întâmplă în Toddler?"
            title="Un mediu gândit pentru copilul mic"
            subtitle="Fiecare detaliu al programei Toddler este ales cu grijă pentru a răspunde nevoilor specifice ale copilului de 1-2.5 ani."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-14">
            <FadeInUp>
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://picsum.photos/seed/toddler-activity/640/480"
                  alt="Activitate Toddler"
                  className="w-full object-cover"
                  style={{ height: '360px' }}
                />
              </div>
            </FadeInUp>

            <FadeInUp delay={0.15}>
              <div className="space-y-4">
                {groups.toddler.features.map((f, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-sage mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">{f}</p>
                  </motion.div>
                ))}
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Programul Zilei"
            title="O zi tipică în Toddler"
            subtitle="Programul este structurat dar flexibil, respectând ritmul natural al copilului mic."
          />

          <div className="mt-12 relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sage via-sky to-sage-light" />

            <div className="space-y-2">
              {toddlerSchedule.map((item, idx) => {
                const Icon = scheduleIconMap[item.icon] || Play
                return (
                  <FadeInUp key={idx} delay={idx * 0.05}>
                    <div className="flex gap-4 pl-14 relative">
                      {/* Icon bubble */}
                      <div
                        className="absolute left-0 w-12 h-12 rounded-full bg-white border-2 border-sage/20 flex items-center justify-center shadow-sm"
                      >
                        <Icon className="w-5 h-5 text-sage-dark" />
                      </div>

                      <div
                        className={`flex-1 rounded-2xl p-4 mb-2 ${
                          idx % 2 === 0 ? 'bg-white' : 'bg-cream-dark/60'
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-1">
                          <span className="text-xs font-bold text-sage-dark bg-sage-light/60 px-2 py-0.5 rounded-full">
                            {item.time}
                          </span>
                          <span className="font-poppins font-semibold text-gray-800 text-sm">
                            {item.activity}
                          </span>
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

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Beneficii"
            title="Ce câștigă copilul tău"
            subtitle="Programa Toddler Montessori oferă beneficii profunde și durabile pentru dezvoltarea copilului."
          />

          <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((b) => (
              <AnimatedItem key={b.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl p-6 cursor-default"
                  style={{ backgroundColor: '#ffffff', border: '1px solid #EDE9E4' }}
                >
                  <div className={`w-12 h-12 rounded-xl ${b.color} flex items-center justify-center mb-5`}>
                    <CheckCircle2 className={`w-6 h-6 ${b.accent}`} />
                  </div>
                  <h3 className="font-poppins font-semibold text-gray-800 mb-3">{b.title}</h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              </AnimatedItem>
            ))}
          </AnimatedContainer>
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
              Înscrie copilul tău la Toddler
            </h2>
            <p className="text-white/75 leading-relaxed mb-8">
              Locurile sunt limitate. Contactează-ne pentru a afla disponibilitatea
              și pentru a programa o vizită la grădinița noastră.
            </p>
            <Button to="/contact" variant="white" size="lg">
              Contactează-ne acum
              <ArrowRight className="w-5 h-5" />
            </Button>
          </FadeInUp>
        </div>
      </section>
    </motion.div>
  )
}

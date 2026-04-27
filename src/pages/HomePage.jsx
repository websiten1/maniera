import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Hand, Lightbulb, Heart, Sprout, Star, ArrowRight, Quote,
  ChevronLeft, ChevronRight, Leaf, Users, Clock, Award
} from 'lucide-react'
import { useState } from 'react'
import Button from '../components/ui/Button'
import SectionHeader from '../components/ui/SectionHeader'
import { AnimatedContainer, AnimatedItem, FadeInUp } from '../components/ui/AnimatedSection'
import { principles, testimonials, groups, stats } from '../data/content'

// Icons map for principles
const iconMap = {
  Child: Hand,
  Home: Leaf,
  Clock: Clock,
  Brain: Lightbulb,
  Layers: Award,
  GraduationCap: Users,
  Sprout: Sprout,
  Heart: Heart,
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-cream">
      {/* Geometric background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-sage/20" />
        <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-sky/15" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-sage-light/40" />
        <div className="absolute bottom-0 -left-10 w-80 h-80 rounded-full bg-cream-dark" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, #A8D5BA22 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-sage/30 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse" />
              <span className="text-sm font-medium text-sage-dark">
                Înregistrări deschise pentru 2025–2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-poppins font-bold text-gray-800 leading-tight mb-6"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
            >
              Educație pentru{' '}
              <span className="gradient-text">Viață</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg text-warm-dark leading-relaxed mb-8 max-w-xl"
            >
              O grădiniță Montessori autentică în inima Iașului. Respectăm ritmul
              unic al fiecărui copil și îl ghidăm spre independență, curiozitate
              și bucurie în descoperire.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button to="/contact" size="lg" variant="primary">
                Programează o vizită
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button to="/principii" size="lg" variant="secondary">
                Descoperă Montessori
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-10 border-t border-sage/20"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-poppins font-bold text-2xl text-sage-dark mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-warm-gray">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main card */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img
                  src="https://picsum.photos/seed/montessori-hero/640/480"
                  alt="Copii în activitate Montessori"
                  className="w-full object-cover"
                  style={{ height: '380px' }}
                  loading="eager"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-sage-light flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-sage-dark" />
                    </div>
                    <div>
                      <div className="font-poppins font-semibold text-gray-800">Mediu pregătit</div>
                      <div className="text-sm text-warm-gray">Spațiu creat pentru copil</div>
                    </div>
                  </div>
                  <p className="text-sm text-warm-gray leading-relaxed">
                    Fiecare element este la înălțimea și la dispoziția copilului,
                    invitând la explorare liberă și autonomă.
                  </p>
                </div>
              </div>

              {/* Floating card 1 */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4 flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-sky-light flex items-center justify-center">
                  <Users className="w-5 h-5 text-sky" style={{ color: '#5A8F7B' }} />
                </div>
                <div>
                  <div className="font-semibold text-sm text-gray-800">Educatoare certificate</div>
                  <div className="text-xs text-warm-gray">AMI / AMS</div>
                </div>
              </motion.div>

              {/* Floating card 2 */}
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4"
              >
                <div className="flex items-center gap-2 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="font-semibold text-sm text-gray-800">98% părinți mulțumiți</div>
                <div className="text-xs text-warm-gray">din 50+ familii</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-warm-gray tracking-widest uppercase">Descoperă</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-0.5 h-8 bg-gradient-to-b from-sage to-transparent rounded-full"
        />
      </motion.div>
    </section>
  )
}

function WhyMontessoriSection() {
  const cards = [
    {
      icon: Hand,
      title: 'Urmăm Copilul',
      desc: 'Fiecare copil este unic. Educația Montessori se adaptează ritmului natural și intereselor proprii ale fiecăruia.',
      color: 'bg-sage-light',
      iconColor: 'text-sage-dark',
    },
    {
      icon: Leaf,
      title: 'Mediu Pregătit',
      desc: 'Un spațiu special amenajat stimulează independența, curiozitatea și bucuria de a descoperi în mod natural.',
      color: 'bg-sky-light',
      iconColor: 'text-sky',
    },
    {
      icon: Users,
      title: 'Educatoare Certificate',
      desc: 'Educatoarele noastre sunt certificate AMI/AMS și dedicate autenticității metodei Montessori.',
      color: 'bg-amber-100',
      iconColor: 'text-amber-600',
    },
    {
      icon: Heart,
      title: 'Dezvoltare Holistică',
      desc: 'Îngrijim dezvoltarea intelectuală, emoțională, socială și fizică a fiecărui copil în mod integrat.',
      color: 'bg-rose-100',
      iconColor: 'text-rose-500',
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="De ce Montessori?"
          title="O educație care durează toată viața"
          subtitle="Metoda Montessori nu este un curriculum, ci o filosofie a respectului față de copil și a credinței în potențialul lui natural de a crește."
        />

        <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <AnimatedItem key={card.title}>
                <motion.div
                  whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.10)' }}
                  transition={{ duration: 0.25 }}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-default"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center mb-5`}
                  >
                    <Icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>
                  <h3 className="font-poppins font-semibold text-gray-800 mb-3 text-lg">
                    {card.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{card.desc}</p>
                </motion.div>
              </AnimatedItem>
            )
          })}
        </AnimatedContainer>
      </div>
    </section>
  )
}

function GroupsSection() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Grupele Noastre"
          title="Un program pentru fiecare vârstă"
          subtitle="De la primii pași spre independență până la pregătirea pentru școală — avem programa potrivită pentru copilul tău."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">
          {/* Toddler */}
          <FadeInUp delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sage/10 group"
            >
              <div className="relative overflow-hidden" style={{ height: '240px' }}>
                <img
                  src="https://picsum.photos/seed/toddlergroup/800/480"
                  alt="Grupa Toddler"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-sage text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    1 an 3 luni – 2 ani 6 luni
                  </span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-poppins font-bold text-2xl text-gray-800 mb-2">
                  Grupa Toddler
                </h3>
                <p className="text-sage-dark font-medium text-sm mb-4">
                  Primii pași spre independență
                </p>
                <p className="text-warm-gray leading-relaxed mb-6">
                  Într-un mediu sigur și cald, cei mici descoperă lumea prin simțuri,
                  mișcare și relații autentice. Programul Toddler respectă profund
                  nevoile specifice ale copilului mic.
                </p>
                <Button to="/grupa-toddler" variant="secondary">
                  Descoperă programul
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </FadeInUp>

          {/* Casa dei Bambini */}
          <FadeInUp delay={0.2}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-sky/10 group"
            >
              <div className="relative overflow-hidden" style={{ height: '240px' }}>
                <img
                  src="https://picsum.photos/seed/casabambini/800/480"
                  alt="Casa dei Bambini"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-sky text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    2 ani 6 luni – 6 ani
                  </span>
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-poppins font-bold text-2xl text-gray-800 mb-2">
                  Casa dei Bambini
                </h3>
                <p className="text-sky font-medium text-sm mb-4">
                  Casa copiilor — un univers al descoperirii
                </p>
                <p className="text-warm-gray leading-relaxed mb-6">
                  Copiii explorează cele 5 arii curriculare Montessori, lucrând
                  individual sau în grupuri mici cu materiale special concepute pentru
                  această vârstă fascinantă.
                </p>
                <Button to="/grupa-casa-dei-bambini" variant="secondary">
                  Descoperă programul
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}

function PrinciplesSection() {
  const featured = principles.slice(0, 6)

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #A8D5BA20 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Principiile Montessori"
          title="8 principii care schimbă totul"
          subtitle="Filosofia Montessori se sprijină pe observații științifice profunde despre natura copilului și modul în care el învață cu adevărat."
        />

        <AnimatedContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {featured.map((p) => {
            const Icon = iconMap[p.icon] || Heart
            return (
              <AnimatedItem key={p.id}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(0,0,0,0.08)' }}
                  className="bg-cream rounded-2xl p-6 cursor-default border border-cream-dark"
                >
                  <div className="w-11 h-11 rounded-xl bg-sage-light flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-sage-dark" />
                  </div>
                  <h3 className="font-poppins font-semibold text-gray-800 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-warm-gray text-sm leading-relaxed">{p.short}</p>
                </motion.div>
              </AnimatedItem>
            )
          })}
        </AnimatedContainer>

        <FadeInUp delay={0.2} className="text-center mt-10">
          <Button to="/principii" variant="primary" size="lg">
            Explorează toate principiile
            <ArrowRight className="w-5 h-5" />
          </Button>
        </FadeInUp>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const t = testimonials[current]

  return (
    <section className="py-24 bg-cream relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-sage/10 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-sky/10 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          eyebrow="Mărturii"
          title="Ce spun părinții noștri"
          subtitle="Fiecare familie este unică. Ascultăm, respectăm și construim împreună comunitatea noastră."
        />

        <div className="mt-12">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-sage/10 relative"
          >
            <Quote className="w-10 h-10 text-sage-light absolute top-6 left-6" />
            <p className="text-lg text-gray-700 leading-relaxed mb-8 relative z-10">
              "{t.text}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div
                className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center font-poppins font-bold text-sage-dark text-sm`}
              >
                {t.avatar}
              </div>
              <div className="text-left">
                <div className="font-poppins font-semibold text-gray-800">{t.name}</div>
                <div className="text-sm text-warm-gray">{t.role}</div>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full bg-white border border-sage/20 flex items-center justify-center hover:bg-sage hover:text-white hover:border-sage transition-all duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-sage w-6' : 'bg-sage/30 w-2'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full bg-white border border-sage/20 flex items-center justify-center hover:bg-sage hover:text-white hover:border-sage transition-all duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-20 bg-sage-dark relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/5" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5" />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, #ffffff08 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeInUp>
          <span className="inline-block text-sm font-semibold text-white/70 uppercase tracking-widest mb-4">
            Alătură-te comunității noastre
          </span>
          <h2
            className="font-poppins font-bold text-white leading-tight mb-6"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)' }}
          >
            Gata să descoperiți Montessori împreună?
          </h2>
          <p className="text-white/75 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Programează o vizită gratuită la grădinița noastră. Vom fi bucuroși să îți
            răspundem la toate întrebările și să îți arătăm ce înseamnă educația
            Montessori autentică.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button to="/contact" variant="white" size="lg">
              Programează o vizită
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button to="/principii" size="lg" className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60">
              Află mai multe
            </Button>
          </div>
        </FadeInUp>
      </div>
    </section>
  )
}

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <HeroSection />
      <WhyMontessoriSection />
      <GroupsSection />
      <PrinciplesSection />
      <TestimonialsSection />
      <CTASection />
    </motion.div>
  )
}

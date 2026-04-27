import { motion } from 'framer-motion'
import { Hand, Home, Clock, Lightbulb, Layers, Users, Sprout, Heart, Sun, Leaf, Wind, Star } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import Button from '../components/ui/Button'
import { FadeInUp, AnimatedContainer, AnimatedItem } from '../components/ui/AnimatedSection'
import { principles, values, siteNameShort } from '../data/content'

const iconMap = {
  Child: Hand,
  Home: Leaf,
  Clock: Clock,
  Brain: Lightbulb,
  Layers: Layers,
  GraduationCap: Users,
  Sprout: Sprout,
  Heart: Heart,
}

const valueIconMap = {
  Heart, Sun, Lightbulb, Users, Leaf, Wind, Star,
}

const principleColors = [
  'from-sage-light to-sage/30',
  'from-sky-light to-sky/30',
  'from-amber-100 to-amber-200',
  'from-rose-100 to-rose-200',
  'from-purple-100 to-purple-200',
  'from-sage-light to-sage/30',
  'from-sky-light to-sky/30',
  'from-amber-100 to-amber-200',
]

const principleAccents = [
  'text-sage-dark',
  'text-sky',
  'text-amber-600',
  'text-rose-500',
  'text-purple-600',
  'text-sage-dark',
  'text-sky',
  'text-amber-600',
]

export default function PrincipiiPage() {
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
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sage/10 -translate-y-1/3 translate-x-1/3" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeInUp>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sage-dark bg-sage-light/60 px-3 py-1 rounded-full mb-4">
              Filosofia noastră
            </span>
            <h1
              className="font-poppins font-bold text-gray-800 leading-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
            >
              Principiile{' '}
              <span className="gradient-text">Montessori</span>
            </h1>
            <p className="text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto">
              Dr. Maria Montessori a observat că copiii au o dorință naturală de a
              învăța. Metoda sa se bazează pe 8 principii fundamentale care respectă
              această natură profundă a copilului.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {principles.map((p, idx) => {
              const Icon = iconMap[p.icon] || Heart
              const isEven = idx % 2 === 0
              return (
                <FadeInUp key={p.id} delay={0.05}>
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ${
                      isEven ? '' : 'lg:grid-flow-col-dense'
                    }`}
                  >
                    {/* Icon + number */}
                    <div className={`lg:col-span-3 ${!isEven ? 'lg:col-start-10' : ''}`}>
                      <div
                        className={`bg-gradient-to-br ${principleColors[idx]} rounded-3xl p-8 flex flex-col items-center text-center`}
                      >
                        <div className="text-4xl font-poppins font-bold text-white/60 mb-4">
                          0{p.id}
                        </div>
                        <div className="w-14 h-14 rounded-2xl bg-white/60 backdrop-blur flex items-center justify-center mb-4">
                          <Icon className={`w-7 h-7 ${principleAccents[idx]}`} />
                        </div>
                        <h3 className={`font-poppins font-bold text-base text-gray-800`}>
                          {p.title}
                        </h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`lg:col-span-9 ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                      <h2 className="font-poppins font-bold text-2xl text-gray-800 mb-4">
                        {p.title}
                      </h2>
                      <div className="space-y-4">
                        {p.full.split('\n\n').map((para, i) => (
                          <p key={i} className="text-gray-600 leading-relaxed">
                            {para.trim()}
                          </p>
                        ))}
                      </div>
                      {/* Highlight quote */}
                      <div className={`mt-6 border-l-4 ${idx % 2 === 0 ? 'border-sage' : 'border-sky'} pl-5 py-2`}>
                        <p className={`text-sm font-medium italic ${principleAccents[idx]}`}>
                          {p.short}
                        </p>
                      </div>
                    </div>
                  </div>

                  {idx < principles.length - 1 && (
                    <div className="h-px bg-gradient-to-r from-transparent via-sage/20 to-transparent mt-16" />
                  )}
                </FadeInUp>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Valorile Noastre"
            title="7 valori care ne ghidează"
            subtitle="Dincolo de metodă, există o cultură internă a grădiniței noastre — valorile care fac ca fiecare zi să fie specială."
          />

          <AnimatedContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mt-12">
            {values.map((v) => {
              const Icon = valueIconMap[v.icon] || Heart
              return (
                <AnimatedItem key={v.title}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-2xl p-5 text-center shadow-sm border border-sage/10 cursor-default"
                  >
                    <div className="w-10 h-10 rounded-xl bg-sage-light mx-auto flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-sage-dark" />
                    </div>
                    <div className="font-poppins font-semibold text-sm text-gray-800 mb-1">
                      {v.title}
                    </div>
                    <p className="text-xs text-warm-gray leading-snug">{v.desc}</p>
                  </motion.div>
                </AnimatedItem>
              )
            })}
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
              Vrei să experimentezi Montessori?
            </h2>
            <p className="text-white/75 leading-relaxed mb-8">
              Cel mai bun mod de a înțelege pedagogia Montessori este să vii să o
              trăiești la {siteNameShort}. Programează o vizită și descoperă magia.
            </p>
            <Button to="/contact" variant="white" size="lg">
              Programează o vizită gratuită
            </Button>
          </FadeInUp>
        </div>
      </section>
    </motion.div>
  )
}

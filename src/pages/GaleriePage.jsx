import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import { FadeInUp, AnimatedContainer, AnimatedItem } from '../components/ui/AnimatedSection'
import { galleryCards, siteNameShort } from '../data/content'

const categories = [
  { id: 'all', label: 'Toate' },
  { id: 'toddler', label: 'Toddler' },
  { id: 'casa', label: 'Casa dei Bambini' },
  { id: 'events', label: 'Evenimente' },
]

const gradientMap = {
  'from-sage to-sage-light': 'linear-gradient(135deg, #A8D5BA 0%, #C8E6D5 100%)',
  'from-sky to-sky-light': 'linear-gradient(135deg, #7FC4D9 0%, #B3DDE9 100%)',
  'from-sage-dark to-sage': 'linear-gradient(135deg, #5A8F7B 0%, #A8D5BA 100%)',
  'from-cream-dark to-sage-light': 'linear-gradient(135deg, #EDE9E4 0%, #C8E6D5 100%)',
  'from-sky-light to-sage-light': 'linear-gradient(135deg, #B3DDE9 0%, #C8E6D5 100%)',
  'from-sage to-sky': 'linear-gradient(135deg, #A8D5BA 0%, #7FC4D9 100%)',
  'from-sage-dark to-sky': 'linear-gradient(135deg, #5A8F7B 0%, #7FC4D9 100%)',
  'from-sage-light to-cream': 'linear-gradient(135deg, #C8E6D5 0%, #F5F3F0 100%)',
  'from-sage-dark to-sage-light': 'linear-gradient(135deg, #5A8F7B 0%, #C8E6D5 100%)',
  'from-sky to-sage': 'linear-gradient(135deg, #7FC4D9 0%, #A8D5BA 100%)',
  'from-sky-light to-cream-dark': 'linear-gradient(135deg, #B3DDE9 0%, #EDE9E4 100%)',
}

const cardHeights = [280, 340, 260, 320, 300, 280, 340, 260, 300, 320, 280, 340]

const categoryIcons = {
  toddler: '🌱',
  casa: '📚',
  events: '🎉',
}

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered =
    activeCategory === 'all'
      ? galleryCards
      : galleryCards.filter((card) => card.category === activeCategory)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero */}
      <section className="pt-32 pb-16 bg-cream relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'radial-gradient(circle, #A8D5BA20 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-sage/10 -translate-y-1/3 translate-x-1/3" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <FadeInUp>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-sage-dark bg-sage-light/60 px-3 py-1 rounded-full mb-4">
              Galerie
            </span>
            <h1
              className="font-poppins font-bold text-gray-800 leading-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            >
              Viața la{' '}
              <span className="gradient-text">{siteNameShort}</span>
            </h1>
            <p className="text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto">
              Momente din viața cotidiană a copiilor noștri — activitate, bucurie,
              descoperire și comunitate autentică.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-6 bg-white sticky top-[72px] z-30 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-sage text-white shadow-sm'
                    : 'bg-cream text-gray-600 hover:bg-sage-light/50 hover:text-sage-dark'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
            >
              {filtered.map((card, idx) => {
                const bg = gradientMap[card.gradient] || 'linear-gradient(135deg, #A8D5BA 0%, #5A8F7B 100%)'
                const h = cardHeights[card.id - 1] || 280
                return (
                  <motion.div
                    key={card.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className="break-inside-avoid mb-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="relative rounded-2xl overflow-hidden shadow-sm border border-white/60 cursor-pointer group"
                      style={{ height: h, background: bg }}
                    >
                      {/* Content overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                        <div className="w-12 h-12 rounded-xl bg-white/30 backdrop-blur flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          <Camera className="w-6 h-6 text-white" />
                        </div>
                        <p className="font-poppins font-semibold text-white text-base leading-tight">
                          {card.label}
                        </p>
                        <p className="text-white/70 text-xs mt-1">{card.sub}</p>
                      </div>

                      {/* Bottom gradient overlay */}
                      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />

                      {/* Category tag */}
                      <div className="absolute top-3 left-3">
                        <span className="text-xs bg-white/30 backdrop-blur text-white font-semibold px-2.5 py-1 rounded-full">
                          {categoryIcons[card.category]}{' '}
                          {categories.find((c) => c.id === card.category)?.label}
                        </span>
                      </div>

                      {/* Shimmer on hover */}
                      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                    </motion.div>
                  </motion.div>
                )
              })}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-warm-gray">
              <p className="text-lg">Nu există conținut în această categorie.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <FadeInUp>
            <h2 className="font-poppins font-bold text-gray-800 text-2xl mb-4">
              Vino să vezi cu ochii tăi
            </h2>
            <p className="text-warm-gray leading-relaxed mb-6">
              Programează o vizită și trăiește experiența {siteNameShort} în mod direct.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-sage text-white rounded-lg font-semibold hover:bg-sage-dark transition-colors duration-200"
            >
              Programează o vizită
            </a>
          </FadeInUp>
        </div>
      </section>
    </motion.div>
  )
}

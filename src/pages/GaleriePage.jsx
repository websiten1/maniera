import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import SectionHeader from '../components/ui/SectionHeader'
import { FadeInUp } from '../components/ui/AnimatedSection'
import { galleryImages } from '../data/content'

const categories = [
  { id: 'all', label: 'Toate' },
  { id: 'toddler', label: 'Toddler' },
  { id: 'casa', label: 'Casa dei Bambini' },
  { id: 'events', label: 'Evenimente' },
]

function Lightbox({ image, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: 'spring', damping: 25 }}
        className="relative max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
        >
          <X className="w-8 h-8" />
        </button>
        <img
          src={image.src.replace('/600/', '/1200/')}
          alt={image.alt}
          className="w-full rounded-2xl shadow-2xl"
        />
        <p className="text-white/60 text-sm text-center mt-3">{image.alt}</p>
      </motion.div>
    </motion.div>
  )
}

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxImage, setLightboxImage] = useState(null)

  const filtered =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

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
              <span className="gradient-text">Grădinița Montessori</span>
            </h1>
            <p className="text-lg text-warm-gray leading-relaxed max-w-2xl mx-auto">
              O privire în spatele ușilor noastre — momente autentice din viața
              cotidiană a copiilor noștri.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="py-8 bg-white sticky top-[72px] z-30 border-b border-gray-100 shadow-sm">
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
          <motion.div
            layout
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4"
          >
            <AnimatePresence>
              {filtered.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="break-inside-avoid"
                >
                  <div
                    className="relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 cursor-pointer group"
                    onClick={() => setLightboxImage(image)}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-sage-dark/0 group-hover:bg-sage-dark/30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white rounded-full p-3 shadow-lg">
                        <ZoomIn className="w-5 h-5 text-sage-dark" />
                      </div>
                    </div>
                    {/* Category tag */}
                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <span className="text-xs bg-white/90 text-sage-dark font-semibold px-2 py-1 rounded-full">
                        {categories.find((c) => c.id === image.category)?.label}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-warm-gray">
              <p className="text-lg">Nu există fotografii în această categorie.</p>
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
              Fotografiile nu pot captura toată magia. Programează o vizită și
              trăiește experiența Montessori în mod direct.
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox image={lightboxImage} onClose={() => setLightboxImage(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  )
}

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

function Bullet({ children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-1 w-1.5 h-1.5 rounded-full bg-sage-dark flex-shrink-0" />
      <span className="text-sm text-gray-700 leading-snug">{children}</span>
    </li>
  )
}

const pages = [
  {
    title: 'Bun venit!',
    subtitle: 'Acesta este website-ul tău demo',
    content: (
      <div className="space-y-3 text-center">
        <p className="text-warm-gray leading-relaxed text-sm">
          Acesta este un website complet și funcțional creat pentru:
        </p>
        <div className="bg-sage-light/30 rounded-2xl px-6 py-4 border border-sage/20">
          <p className="font-poppins font-semibold text-gray-800 leading-snug">
            Grădinița și Școala Primară<br />
            <span className="text-sage-dark">„Maniera Montessori"</span>
          </p>
        </div>
        <p className="text-warm-gray text-sm leading-relaxed">
          Explorează toate paginile și secțiunile disponibile, apoi spune-ne ce schimbări dorești.
        </p>
      </div>
    ),
  },
  {
    title: 'Ce conține acest site?',
    subtitle: 'Website-ul include următoarele secțiuni',
    content: (
      <ul className="space-y-2.5 text-left">
        {[
          ['Pagina principală', 'hero section, beneficii, testimoniale'],
          ['Principii Montessori', 'filozofia metodei în detaliu'],
          ['Grupa Toddler', '1 an 3 luni – 2 ani 6 luni, program zilnic'],
          ['Casa dei Bambini', '2 ani 6 luni – 6 ani, 5 arii curriculare'],
          ['Galerie', 'momente din viața grădiniței'],
          ['Contact', 'formular, hartă, date de contact'],
          ['Despre Noi', 'echipă, misiune, certificări'],
          ['Design responsive', 'funcționează pe telefon, tabletă și desktop'],
        ].map(([title, desc]) => (
          <Bullet key={title}>
            <strong className="text-gray-800">{title}</strong> — {desc}
          </Bullet>
        ))}
      </ul>
    ),
  },
  {
    title: 'Versiune Demo — Complet Personalizabilă',
    subtitle: 'Totul poate fi schimbat după preferințele tale',
    content: (
      <div className="space-y-3">
        <div className="bg-sage-light/20 border border-sage/20 rounded-xl px-4 py-3">
          <p className="text-sage-dark font-semibold text-sm text-center">
            Acesta este un site demo — 100% personalizabil
          </p>
        </div>
        <p className="text-warm-gray text-xs font-medium uppercase tracking-wider">Ce poate fi modificat:</p>
        <div className="grid grid-cols-2 gap-2">
          {[
            'Culori și design',
            'Imagini și fotografii',
            'Text și conținut',
            'Ordinea paginilor',
            'Logo și branding',
            'Pagini noi',
            'Tipografie și fonturi',
            'Layout-uri și forme',
          ].map((item) => (
            <div key={item} className="bg-cream rounded-lg px-3 py-2 text-xs text-gray-700 border border-gray-100">
              {item}
            </div>
          ))}
        </div>
        <p className="text-sage-dark font-semibold text-sm text-center pt-1">
          Doar spune-ne cum vrei și noi vom adapta totul.
        </p>
      </div>
    ),
  },
  {
    title: 'Gata pentru explorare',
    subtitle: 'Website-ul este complet și funcțional',
    content: (
      <div className="space-y-3">
        <p className="text-warm-gray text-sm leading-relaxed">
          Explorează site-ul și descoperă:
        </p>
        <ul className="space-y-2">
          {[
            'Design modern și elegant',
            'Navigație intuitivă și fluidă',
            'Responsiv pe toate dispozitivele',
            'Performanță optimizată',
            'Ușor de actualizat',
          ].map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
        <p className="text-warm-gray text-sm leading-relaxed pt-1">
          După explorare, spune-ne ce schimbări dorești și suntem gata să personalizăm orice aspect.
        </p>
      </div>
    ),
  },
]

export default function DemoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    if (!localStorage.getItem('demoModalShown')) {
      setIsOpen(true)
    }
  }, [])

  const goTo = useCallback((next) => {
    setDirection(next > page ? 1 : -1)
    setPage(next)
  }, [page])

  const handleClose = () => {
    localStorage.setItem('demoModalShown', 'true')
    setIsOpen(false)
  }

  const handleXClose = () => setIsOpen(false)

  const slideVariants = {
    enter: (d) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.50)' }}
        >
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-white rounded-2xl shadow-2xl w-full overflow-hidden"
            style={{ maxWidth: 520, maxHeight: '90vh' }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 pt-5 pb-2">
              <div className="flex gap-1.5">
                {pages.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    className="rounded-full transition-all duration-200"
                    style={{
                      width: i === page ? 20 : 8,
                      height: 8,
                      background: i === page ? '#5A8F7B' : '#A8D5BA',
                    }}
                  />
                ))}
              </div>
              <span className="text-xs text-warm-gray font-medium">{page + 1}/{pages.length}</span>
              <button
                onClick={handleXClose}
                className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-all"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Page content */}
            <div className="overflow-hidden px-6 pb-2" style={{ minHeight: 340 }}>
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="pt-3 pb-2"
                >
                  <h2 className="font-poppins font-bold text-gray-800 text-center mb-1 leading-snug"
                    style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}>
                    {pages[page].title}
                  </h2>
                  {pages[page].subtitle && (
                    <p className="text-warm-gray text-xs text-center mb-4">{pages[page].subtitle}</p>
                  )}
                  {pages[page].content}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-3 px-6 py-5 border-t border-gray-100 mt-1">
              {page > 0 ? (
                <button
                  onClick={() => goTo(page - 1)}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-sage-dark text-sage-dark font-semibold text-sm hover:bg-sage-light/20 transition-all"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Înapoi
                </button>
              ) : (
                <div />
              )}

              <div className="flex-1" />

              {page < pages.length - 1 ? (
                <button
                  onClick={() => goTo(page + 1)}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90"
                  style={{ background: '#5A8F7B' }}
                >
                  Înainte
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={handleClose}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-white font-semibold text-sm transition-all hover:opacity-90 shadow-md"
                  style={{ background: 'linear-gradient(135deg, #5A8F7B 0%, #A8D5BA 100%)' }}
                >
                  <span>Vezi website-ul</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
